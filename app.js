Module.onRuntimeInitialized = async function () {
  const projectContainer = document.getElementById("projectContainer")
  const subContainer = document.getElementById("subContainer")
  const scoreBoard = document.getElementById("scoreBoard")
  const canvas = document.getElementById("game-canvas")
  var c = canvas.getContext("2d")

  const blockSize = 32 //px
  const nFieldWidth = 12
  const nFieldHeight = 18
  const tetrominoColors = ["#fbbf24", "#22c55e", "#0ea5e9", "#67e8f9", "#6d28d9", "#d946ef", "#f8fafc"]

  canvas.width = blockSize * nFieldWidth
  canvas.height = blockSize * nFieldHeight

  let game = new Module.Game(false, false, true, randomIntFromRange(0, 6), 0, 4, -4, 0, 0, 100)

  const draw = () => {
    let gameBoard = game.getGameBoard()
    c.clearRect(0, 0, canvas.width, canvas.height)

    //Draw Field
    for (let x = 0; x < nFieldWidth; x++) {
      for (let y = 0; y < nFieldHeight; y++) {
        const index = y * nFieldWidth + x
        const value = gameBoard.get(index)

        if (value === 10) {
          c.fillStyle = "black"
          c.strokeStyle = "white"
          c.lineWidth = 0.1
        } else if (value === 9) {
          c.shadowBlur = 5
          c.shadowColor = "aquamarine"
          c.strokeStyle = "aquamarine"
          c.lineWidth = 3
        } else {
          c.strokeStyle = tetrominoColors[value]
          c.lineWidth = 3
        }

        c.fillRect(x * blockSize, y * blockSize, blockSize, blockSize)
        // Draw border
        c.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize)
        // Draw diagonal
        if (value !== 9) {
          c.beginPath()
          c.moveTo(x * blockSize, y * blockSize)
          c.lineTo((x + 1) * blockSize, (y + 1) * blockSize)
          c.stroke()
        }
        //kill shadows
        c.shadowBlur = 0
        c.shadowColor = "black"
      }
    }
    let nCurrentX = game.getCurrentX()
    let nCurrentY = game.getCurrentY()
    let nCurrentPiece = game.getCurrentPiece()
    let nCurrentRotation = game.getCurrentRotation()
    let tetromino = Module.getTetromino(nCurrentPiece)

    //Draw Tetromino
    for (let px = 0; px < 4; px++)
      for (let py = 0; py < 4; py++) {
        let rotatedIndex = Module.Rotate(px, py, nCurrentRotation)
        if (tetromino.get(rotatedIndex) === 1) {
          //c.fillStyle = tetrominoColors[nCurrentPiece]
          //c.fillRect((nCurrentX + px) * blockSize, (nCurrentY + py) * blockSize, blockSize, blockSize)

          // Set glow effect
          c.shadowBlur = 12
          c.shadowColor = tetrominoColors[nCurrentPiece]
          // Draw border
          c.strokeStyle = tetrominoColors[nCurrentPiece]
          c.lineWidth = 3
          c.strokeRect((nCurrentX + px) * blockSize, (nCurrentY + py) * blockSize, blockSize, blockSize)
          c.shadowBlur = 0
          c.shadowColor = "black"
        }
      }

    //Draw Score Board
    scoreBoard.textContent = `Score:${game.getScore().toString()}`
  }

  //Handle User Input
  const initEvents = () => {
    document.addEventListener("keypress", function (event) {
      if (event.key === "z") {
        game.rotateTetromino(-1)
      }
    })
    //Left and right
    document.addEventListener("keydown", function (event) {
      switch (event.code) {
        case "ArrowLeft":
          game.moveTetromino(0)
          break

        case "ArrowRight":
          game.moveTetromino(1)
          break

        case "ArrowDown":
          game.moveTetromino(2)
          break

        case "Space":
          game.moveTetromino(3)
          break
        case "Escape":
          if (document.getElementById("startGameContainer") || document.getElementById("gameOverContainer")) return
          if (!document.getElementById("pauseGameContainer")) {
            game.pauseGame()
            displayPausePage()
          } else if (document.getElementById("pauseGameContainer")) {
            game.resumeGame()
            document.getElementById("pauseGameContainer").remove()
          }
          break
      }
    })

    projectContainer.addEventListener("click", e => {
      if (e.target.id == "playButton") {
        game.resumeGame() //Stop user input until game starts
        gameLoop()
        document.getElementById("startGameContainer").remove()
      }
      if (e.target.id == "playAgainButton") {
        game.restartGame()
        gameLoop()
        document.getElementById("gameOverContainer").remove()
      }
      if (e.target.id == "resumeButton") {
        game.resumeGame()
        document.getElementById("pauseGameContainer").remove()
      }
    })
  }

  const gameLoop = () => {
    game.update() // update game state
    draw() // render game state
    if (!game.getGameOver()) {
      requestAnimationFrame(gameLoop) // repeat next frame
    } else {
      saveHighScore()
      displayGameOverPage()
    }
  }
  initEvents()
  draw() //Draw Board just as a background before game starts
  displayStartComponents()

  //COMPONENTS BELOW:
  function displayStartComponents() {
    displayStartPage()
  }

  function displayGameOverPage() {
    const gameOverContainer = document.createElement("div")
    const spanTitle = document.createElement("span")
    const spanScore = document.createElement("span")
    const spanHighScore = document.createElement("span")
    const playAgainButton = document.createElement("button")
    gameOverContainer.id = "gameOverContainer"
    playAgainButton.id = "playAgainButton"
    spanTitle.textContent = "Game Over!"
    spanScore.textContent = `Score: ${game.getScore().toString()}`
    if (localStorage.getItem("highScore") !== null) {
      spanHighScore.textContent = `High score: ${localStorage.getItem("highScore")}`
    } else {
      spanHighScore.textContent = `High score: ${game.getScore().toString()}`
    }
    playAgainButton.textContent = "PLAY AGAIN"
    gameOverContainer.appendChild(spanTitle)
    gameOverContainer.appendChild(spanScore)
    gameOverContainer.appendChild(spanHighScore)
    gameOverContainer.appendChild(playAgainButton)
    subContainer.appendChild(gameOverContainer)
  }

  function displayStartPage() {
    const startGameContainer = document.createElement("div")
    const spanTitle = document.createElement("span")
    const playButton = document.createElement("button")
    playButton.id = "playButton"
    startGameContainer.id = "startGameContainer"
    spanTitle.textContent = "TETRIS"
    playButton.textContent = "PLAY"
    startGameContainer.appendChild(spanTitle)
    startGameContainer.appendChild(playButton)
    subContainer.appendChild(startGameContainer)
  }

  function displayPausePage() {
    const pauseGameContainer = document.createElement("div")
    const spanTitle = document.createElement("span")
    const resumeButton = document.createElement("resumeButton")
    pauseGameContainer.id = "pauseGameContainer"
    resumeButton.id = "resumeButton"
    spanTitle.textContent = "PAUSED"
    resumeButton.textContent = "resume"
    pauseGameContainer.appendChild(spanTitle)
    pauseGameContainer.appendChild(resumeButton)
    subContainer.appendChild(pauseGameContainer)
  }

  //LOCAL STORAGE STUFF:
  function saveHighScore() {
    let highScore = parseInt(localStorage.getItem("highScore"))
    if (isNaN(highScore)) {
      // High score doesn't exist yet, initialize it
      highScore = game.getScore()
      localStorage.setItem("highScore", highScore)
    } else {
      // High score exists
      if (game.getScore() > highScore) {
        highScore = game.getScore()
        localStorage.setItem("highScore", highScore)
      }
    }
  }

  //Utility function
  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
