Module.onRuntimeInitialized = async function () {
  const projectContainer = document.getElementById("projectContainer")
  const scoreBoard = document.getElementById("scoreBoard")
  const canvas = document.getElementById("game-canvas")

  var c = canvas.getContext("2d")

  const blockSize = innerHeight / 22 //px
  const nFieldWidth = 12
  const nFieldHeight = 18
  const tetrominoColors = ["#fbbf24", "#22c55e", "#0ea5e9", "#67e8f9", "#6d28d9", "#d946ef", "#f8fafc"]

  canvas.width = blockSize * nFieldWidth
  canvas.height = blockSize * nFieldHeight

  let game = new Module.Game(false, false, false, randomIntFromRange(0, 6), 0, 4, -4, 0, 0, 80)

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
          game.pauseGame()
          break
        case "KeyP":
          game.resumeGame()
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
    })
  }

  const gameLoop = () => {
    game.update() // update game state
    draw() // render game state
    if (!game.getGameOver()) {
      requestAnimationFrame(gameLoop) // repeat next frame
    } else {
      displayGameOverPage()
    }
  }
  initEvents()
  draw() //Draw Board just as a background before game starts
  displayStartPage()

  function displayGameOverPage() {
    const gameOverContainer = document.createElement("div")
    const spanTitle = document.createElement("span")
    const spanScore = document.createElement("span")
    const playAgainButton = document.createElement("button")
    gameOverContainer.id = "gameOverContainer"
    playAgainButton.id = "playAgainButton"
    spanTitle.textContent = "Game Over!"
    spanScore.textContent = `Score: ${game.getScore().toString()}`
    playAgainButton.textContent = "PLAY AGAIN"
    gameOverContainer.appendChild(spanTitle)
    gameOverContainer.appendChild(spanScore)
    gameOverContainer.appendChild(playAgainButton)
    projectContainer.appendChild(gameOverContainer)
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
    projectContainer.appendChild(startGameContainer)
  }

  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
