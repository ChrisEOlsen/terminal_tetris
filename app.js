Module.onRuntimeInitialized = async function () {
  const projectContainer = document.getElementById("projectContainer")
  const subContainer = document.getElementById("subContainer")
  const canvas = document.getElementById("game-canvas")
  const nextPieceCanvas = document.getElementById("nextPiece")
  const scoreBoard = document.getElementById("scoreBoard")
  var c = canvas.getContext("2d")
  var cn = nextPieceCanvas.getContext("2d")
  var cs = scoreBoard.getContext("2d")

  const blockSize = 32 //px
  const nFieldWidth = 12
  const nFieldHeight = 21
  const offsetX = 2
  const offsetY = 2
  const tetrominoColors = ["#fbbf24", "#22c55e", "#0ea5e9", "#67e8f9", "#e11d48", "#d946ef", "#f8fafc"]

  canvas.width = blockSize * nFieldWidth + offsetX * 2
  canvas.height = blockSize * nFieldHeight + offsetY * 2
  nextPieceCanvas.width = blockSize * 4
  nextPieceCanvas.height = blockSize * 4
  scoreBoard.width = blockSize * 5
  scoreBoard.height = blockSize * 8

  let game = new Module.Game(false, true, randomIntFromRange(0, 6), randomIntFromRange(1, 6), 0, 4, -4, 0, 0)

  const draw = () => {
    let gameBoard = game.getGameBoard()
    c.clearRect(0, 0, canvas.width, canvas.height)
    cn.clearRect(0, 0, nextPieceCanvas.width, nextPieceCanvas.height)

    //Draw Field
    for (let x = 0; x < nFieldWidth; x++) {
      for (let y = 0; y < nFieldHeight; y++) {
        const index = y * nFieldWidth + x
        const value = gameBoard.get(index)

        if (value === 10) {
          //Empty space
          c.fillStyle = "black"
          c.strokeStyle = "white"
          c.lineWidth = 0.15
          // Draw border
          c.strokeRect(x * blockSize + offsetX, y * blockSize + offsetY, blockSize, blockSize)
        } else if (value === 9) {
          c.fillStyle = "black"
          c.fillRect(x * blockSize + offsetX, y * blockSize + offsetY, blockSize, blockSize)
        } else {
          c.strokeStyle = "aquamarine" //tetrominoColors[value]
          c.lineWidth = 2
          // Draw border
          c.strokeRect(x * blockSize + offsetX, y * blockSize + offsetY, blockSize, blockSize)
        }

        // Draw diagonals
        if (value !== 10 && value !== 9) {
          //Placed tetrominos
          c.lineWidth = 1
          //c.shadowBlur = 10
          //c.shadowColor = "aquamarine"
          c.beginPath()
          c.moveTo(x * blockSize + offsetX, y * blockSize + offsetY)
          c.lineTo((x + 1) * blockSize + offsetX, (y + 1) * blockSize + offsetY)
          c.stroke()
          c.closePath()
          c.beginPath()
          c.moveTo(x * blockSize + blockSize + offsetX, y * blockSize + offsetY) // Top right corner
          c.lineTo(x * blockSize + offsetX, y * blockSize + blockSize + offsetY) // Bottom left corner
          c.stroke()
          c.closePath()
        }

        //kill shadows
        c.shadowBlur = 0
        c.shadowColor = "black"
      }
    }
    let nCurrentX = game.getCurrentX()
    let nCurrentY = game.getCurrentY()
    let nCurrentPiece = game.getCurrentPiece()
    let nNextPiece = game.getNextPiece()
    let nCurrentRotation = game.getCurrentRotation()
    let tetromino = Module.getTetromino(nCurrentPiece)
    let nextTetromino = Module.getTetromino(nNextPiece)

    //Draw Tetromino
    for (let px = 0; px < 4; px++)
      for (let py = 0; py < 4; py++) {
        let rotatedIndex = Module.Rotate(px, py, nCurrentRotation)
        if (tetromino.get(rotatedIndex) === 1) {
          // Set glow effect
          c.shadowBlur = 12
          c.shadowColor = tetrominoColors[nCurrentPiece]
          // Draw border
          c.strokeStyle = tetrominoColors[nCurrentPiece]
          c.lineWidth = 3
          c.strokeRect(
            (nCurrentX + px) * blockSize + offsetX,
            (nCurrentY + py) * blockSize + offsetY,
            blockSize,
            blockSize
          )
          c.shadowBlur = 0
          c.shadowColor = "black"
        }

        let nextOffsetX = 0
        let nextOffsetY = 0
        if (nNextPiece === 0) {
          nextOffsetX = 0
          nextOffsetY = 12
        } else if (nNextPiece === 1) {
          nextOffsetX = 25
          nextOffsetY = 10
        } else if (nNextPiece === 2) {
          nextOffsetX = 12
          nextOffsetY = 13
        } else if (nNextPiece === 3) {
          nextOffsetX = 10
          nextOffsetY = 23
        } else if (nNextPiece === 4) {
          nextOffsetX = 14
          nextOffsetY = 23
        } else if (nNextPiece === 5 || nNextPiece === 6) {
          nextOffsetX = 10
          nextOffsetY = 25
        }

        //Draw Next Piece in seperate canvas (cn)
        if (nextTetromino.get(py * 4 + px) == 1) {
          cn.shadowBlur = 12
          cn.shadowColor = tetrominoColors[nNextPiece]
          cn.strokeStyle = tetrominoColors[nNextPiece]
          cn.lineWidth = 2
          //change offsets based on piece
          cn.strokeRect(
            px * (blockSize / 1.25) + nextOffsetX,
            py * (blockSize / 1.25) + nextOffsetY,
            blockSize / 1.25,
            blockSize / 1.25
          )
        }
        cn.shadowBlur = 0
        cn.shadowColor = "black"
      }

    function drawLine(sx, sy, ex, ey) {
      c.beginPath()
      c.moveTo(sx, sy)
      c.lineTo(ex, ey)
      c.stroke()
    }
    //Draw Border Lines
    //Left border
    c.strokeStyle = "aquamarine"
    drawLine(offsetX, offsetY, offsetX, nFieldHeight * blockSize + offsetY)
    //Inner left border
    drawLine(offsetX + blockSize, offsetY, offsetX + blockSize, nFieldHeight * blockSize + offsetY - blockSize)
    //Right border
    drawLine(
      nFieldWidth * blockSize + offsetX,
      offsetY,
      nFieldWidth * blockSize + offsetX,
      nFieldHeight * blockSize + offsetY
    )
    //Inner right border
    drawLine(
      nFieldWidth * blockSize + offsetX - blockSize,
      offsetY,
      nFieldWidth * blockSize + offsetX - blockSize,
      nFieldHeight * blockSize + offsetY - blockSize
    )
    // Draw bottom border
    drawLine(
      offsetX,
      nFieldHeight * blockSize + offsetY,
      nFieldWidth * blockSize + offsetX,
      nFieldHeight * blockSize + offsetY
    )
    //Inner bottom border
    drawLine(
      offsetX + blockSize,
      nFieldHeight * blockSize + offsetY - blockSize,
      nFieldWidth * blockSize + offsetX - blockSize,
      nFieldHeight * blockSize + offsetY - blockSize
    )

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

  let lastTick = Date.now()
  let nDropInterval = 1000 //milliseconds

  const gameLoop = () => {
    let now = Date.now()
    let delta = now - lastTick

    if (delta >= nDropInterval && !game.getGamePaused()) {
      game.update() // update game state
      lastTick = now // update the last tick time
    }

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
