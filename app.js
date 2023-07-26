import { components } from "./components.js"

Module.onRuntimeInitialized = function () {
  //Main containers
  const projectContainer = document.getElementById("projectContainer")
  const canvas = document.getElementById("game-canvas")
  const nextPieceCanvas = document.getElementById("nextPiece")
  const scoreBoard = document.getElementById("scoreBoard")
  //Canvas contexts
  var c = canvas.getContext("2d")
  var cn = nextPieceCanvas.getContext("2d")
  var cs = scoreBoard.getContext("2d")
  //Music
  const tetrisMusic = document.getElementById("startMusic")
  const gameOverMusic = document.getElementById("endMusic")

  let blockSize = 30 //px
  const nFieldWidth = 12
  const nFieldHeight = 23
  const offsetX = 2
  const offsetY = 2
  //colors
  const tetrominoColors = ["#fbbf24", "#22c55e", "#0ea5e9", "#67e8f9", "#e11d48", "#d946ef", "#f8fafc"]

  let HIGH_SCORE = localStorage.getItem("highScore")
  if (HIGH_SCORE === null) HIGH_SCORE = "0"

  canvas.width = blockSize * nFieldWidth + offsetX * 2
  canvas.height = blockSize * nFieldHeight + offsetY * 2
  nextPieceCanvas.width = blockSize * 4
  nextPieceCanvas.height = blockSize * 4
  scoreBoard.width = blockSize * 5
  scoreBoard.height = blockSize * 8

  let game = new Module.Game()

  const Cell = {
    EMPTY: 10,
    BORDER: 9,
    TETROMINO: 8,
  }

  const draw = () => {
    let gameBoard = game.getGameBoard()
    c.clearRect(0, 0, canvas.width, canvas.height)
    cn.clearRect(0, 0, nextPieceCanvas.width, nextPieceCanvas.height)
    cs.clearRect(0, 0, scoreBoard.width, scoreBoard.height)

    //Draw Field
    for (let x = 0; x < nFieldWidth; x++) {
      for (let y = 0; y < nFieldHeight; y++) {
        const index = y * nFieldWidth + x
        const value = gameBoard.get(index)

        if (value === Cell.EMPTY) {
          //Empty space
          c.fillStyle = "black"
        } else if (value === Cell.BORDER) {
          //Border cells
          c.strokeStyle = "black"
          c.fillStyle = "black"
          c.fillRect(x * blockSize + offsetX, y * blockSize + offsetY, blockSize, blockSize)
        } else {
          //Dropped tetrominos
          game.getGameOver() ? (c.strokeStyle = "aquamarine") : (c.strokeStyle = "white")
          c.lineWidth = 2
          c.strokeRect(x * blockSize + offsetX, y * blockSize + offsetY, blockSize, blockSize)
        }

        // Draw diagonals
        if (value !== Cell.EMPTY && value !== Cell.BORDER) {
          //Placed tetrominos
          c.lineWidth = 1
          //c.shadowBlur = 10
          //c.shadowColor = "aquamarine"
          drawLine(
            x * blockSize + offsetX,
            y * blockSize + offsetY,
            (x + 1) * blockSize + offsetX,
            (y + 1) * blockSize + offsetY
          )
          drawLine(
            x * blockSize + blockSize + offsetX,
            y * blockSize + offsetY,
            x * blockSize + offsetX,
            y * blockSize + blockSize + offsetY
          )
        }

        //kill shadows
        c.shadowBlur = 0
        c.shadowColor = "black"
      }
    }
    let nCurrentX = game.getCurrentX()
    let nCurrentY = game.getCurrentY()
    let nShadowY = game.changeShadowY()
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

          //Find shadowY limit, then draw.
          if (!game.getGamePaused() && !game.getGameOver()) {
            // Check neighboring cells
            const top = py > 0 ? tetromino.get(Module.Rotate(px, py - 1, nCurrentRotation)) : 0
            const right = px < 3 ? tetromino.get(Module.Rotate(px + 1, py, nCurrentRotation)) : 0
            const bottom = py < 3 ? tetromino.get(Module.Rotate(px, py + 1, nCurrentRotation)) : 0
            const left = px > 0 ? tetromino.get(Module.Rotate(px - 1, py, nCurrentRotation)) : 0

            // Draw top line
            if (top === 0) {
              drawLine(
                (nCurrentX + px) * blockSize + offsetX,
                (nShadowY + py) * blockSize + offsetY,
                (nCurrentX + px + 1) * blockSize + offsetX,
                (nShadowY + py) * blockSize + offsetY
              )
            }

            // Draw right line
            if (right === 0) {
              drawLine(
                (nCurrentX + px + 1) * blockSize + offsetX,
                (nShadowY + py) * blockSize + offsetY,
                (nCurrentX + px + 1) * blockSize + offsetX,
                (nShadowY + py + 1) * blockSize + offsetY
              )
            }

            // Draw bottom line
            if (bottom === 0) {
              drawLine(
                (nCurrentX + px + 1) * blockSize + offsetX,
                (nShadowY + py + 1) * blockSize + offsetY,
                (nCurrentX + px) * blockSize + offsetX,
                (nShadowY + py + 1) * blockSize + offsetY
              )
            }

            // Draw left line
            if (left === 0) {
              drawLine(
                (nCurrentX + px) * blockSize + offsetX,
                (nShadowY + py + 1) * blockSize + offsetY,
                (nCurrentX + px) * blockSize + offsetX,
                (nShadowY + py) * blockSize + offsetY
              )
            }
          }
          c.shadowBlur = 0
          c.shadowColor = "black"
        }
        //Define offset for next tetromino display in order to center it inside the canvas
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

        //Draw scoreBoard in seperate canvas (cs)
        cs.font = '22px "Press Start 2P"'
        cs.fillStyle = "aquamarine"
        cs.fillText(`TOP`, 16, scoreBoard.height / 2 - 40)
        cs.fillText(`${HIGH_SCORE}`, 16, scoreBoard.height / 2 - 14)
        cs.fillText(`SCORE`, 16, scoreBoard.height / 2 + 20)
        cs.fillText(`${game.getScore()}`, 16, scoreBoard.height / 2 + 46)
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
  }

  //Handle User Input and events
  const initEvents = () => {
    document.addEventListener("keypress", function (event) {
      if (event.code === "KeyZ") {
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
            tetrisMusic.pause()
            components.displayPausePage()
          } else if (document.getElementById("pauseGameContainer")) {
            game.resumeGame()
            tetrisMusic.play()
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
        document.getElementById("helpBox").remove()
        //Play game audio:
        tetrisMusic.oncanplaythrough = function () {
          tetrisMusic.play().catch(function (error) {
            console.error("Failed to play audio:", error)
          })
        }
        tetrisMusic.currentTime = 0
      }
      if (e.target.id == "playAgainButton") {
        game.restartGame()
        document.getElementById("gameOverContainer").remove()
        tetrisMusic.currentTime = 0
        tetrisMusic.play()
        gameLoop()
      }
      if (e.target.id === "quitButton") {
        document.getElementById("gameOverContainer").remove()
        components.displayStartPage()
        components.displayHelpBox()
        game.restartGame()
        game.pauseGame()
        draw()
      }
      if (e.target.id == "resumeButton") {
        game.resumeGame()
        document.getElementById("pauseGameContainer").remove()
        tetrisMusic.play()
      }
    })

    const muteButton = document.getElementById("muteButton")
    muteButton.addEventListener("click", e => {
      if (e.target.id === "muteButton" || e.target.classList.contains("muteClickable")) {
        components.toggleMuteButton()
        muteButton.blur()
      }
    })
  }

  //Game tick start variables
  let lastTick = Date.now()

  const gameLoop = () => {
    let now = Date.now()
    let delta = now - lastTick

    if (delta >= game.getDropInterval() && !game.getGamePaused()) {
      game.update() // update game state
      lastTick = now // update the last tick time
    }

    draw() // render game state

    if (!game.getGameOver()) {
      requestAnimationFrame(gameLoop) // repeat next frame
    } else {
      saveHighScore()
      tetrisMusic.pause()
      gameOverMusic.play()
      components.displayGameOverPage(game)
    }
  }
  initEvents()
  draw() //Draw Board just as a background before game starts
  displayStartComponents()

  //COMPONENTS BELOW:
  function displayStartComponents() {
    components.displayStartPage()
    components.displayHelpBox()
  }

  //LOCAL STORAGE STUFF:
  function saveHighScore() {
    if (game.getScore() > HIGH_SCORE) {
      HIGH_SCORE = game.getScore()
      localStorage.setItem("highScore", HIGH_SCORE)
    }
  }

  //Util function
  function drawLine(sx, sy, ex, ey) {
    c.beginPath()
    c.moveTo(sx, sy)
    c.lineTo(ex, ey)
    c.stroke()
  }
}
