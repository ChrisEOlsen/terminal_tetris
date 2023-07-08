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

  let game = new Module.Game(false, false, false, randomIntFromRange(0, 6), 0, 4, -4, 0, 0, 100)

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
        } else if (value === 9) {
          c.fillStyle = "gray"
        } else {
          c.fillStyle = tetrominoColors[value]
        }

        c.fillRect(x * blockSize, y * blockSize, blockSize, blockSize)

        // Draw border
        c.strokeStyle = "white"
        c.lineWidth = 0.1
        c.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize)
      }
    }
    let nCurrentX = game.getCurrentX()
    let nCurrentY = game.getCurrentY()
    let nCurrentPiece = game.getCurrentPiece()
    let nCurrentRotation = game.getCurrentRotation()
    let flatTetromino = Module.getFlattenedTetromino(nCurrentPiece) // Get current Tetromino in js friendly form
    let tetromino = []
    for (let i = 0; i < 4; i++) {
      tetromino[i] = []
      for (let j = 0; j < 4; j++) {
        tetromino[i][j] = flatTetromino.get(j * 4 + nCurrentX)
      }
    }
    //Draw Tetromino
    for (let px = 0; px < 4; px++)
      for (let py = 0; py < 4; py++) {
        let rotatedIndex = Module.Rotate(px, py, nCurrentRotation)
        if (flatTetromino.get(rotatedIndex) !== 0) {
          c.fillStyle = tetrominoColors[nCurrentPiece]
          c.fillRect((nCurrentX + px) * blockSize, (nCurrentY + py) * blockSize, blockSize, blockSize)
          // Draw border
          c.strokeStyle = "white"
          c.lineWidth = 1
          c.strokeRect((nCurrentX + px) * blockSize, (nCurrentY + py) * blockSize, blockSize, blockSize)
        }
      }
    //Draw Score Board
    scoreBoard.textContent = game.getScore().toString()
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
          if (!document.getElementById("pauseGameContainer") && !document.getElementById("startGameContainer")) {
            game.pauseGame()
            displayPausePage()
          }
          break
      }
    })

    projectContainer.addEventListener("click", e => {
      if (e.target.id == "playButton") {
        gameLoop()
        document.getElementById("startGameContainer").remove()
      }
      if (e.target.id == "playAgainButton") {
        game.restartGame()
        gameLoop()
        document.getElementById("gameOverContainer").remove()
      }
      if (e.target.id == "pauseButton") {
        // Not yet created
        game.pauseGame()
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
  displayStartPage()

  //COMPONENTS BELOW:

  function createPauseButton() {
    const pauseButton = document.createElement("button")
    pauseButton.id = "cornerPause"
    const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 19V5h4v14h-4Zm-8 0V5h4v14H6Z"/></svg>`
    pauseButton.innerHTML = pauseIcon
  }
  function createPlayButton() {
    const playButton = document.createElement("button")
    playButton.id = "cornerPlay"
    const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 19V5h4v14h-4Zm-8 0V5h4v14H6Z"/></svg>`
    playButton.innerHTML = playIcon
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
