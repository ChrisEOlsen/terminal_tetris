import { utils } from "./utils.js"
import { components } from "./components.js"

Module.onRuntimeInitialized = async function () {
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
  const tetrominoColors = ["#fbbf24", "#22c55e", "#0ea5e9", "#67e8f9", "#e11d48", "#d946ef", "#f8fafc"]

  canvas.width = blockSize * nFieldWidth + offsetX * 2
  canvas.height = blockSize * nFieldHeight + offsetY * 2
  nextPieceCanvas.width = blockSize * 4
  nextPieceCanvas.height = blockSize * 4
  scoreBoard.width = blockSize * 5
  scoreBoard.height = blockSize * 8

  let game = new Module.Game(
    false,
    true,
    utils.randomIntFromRange(0, 6),
    utils.randomIntFromRange(1, 6),
    0,
    4,
    -4,
    0,
    0
  )

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

        if (value === 10) {
          //Empty space
          c.fillStyle = "black"
        } else if (value === 9) {
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
    let shadowY = nCurrentY
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
            while (game.checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, shadowY + 1)) {
              shadowY++
            }
            // Check neighboring cells
            const top = py > 0 ? tetromino.get(Module.Rotate(px, py - 1, nCurrentRotation)) : 0
            const right = px < 3 ? tetromino.get(Module.Rotate(px + 1, py, nCurrentRotation)) : 0
            const bottom = py < 3 ? tetromino.get(Module.Rotate(px, py + 1, nCurrentRotation)) : 0
            const left = px > 0 ? tetromino.get(Module.Rotate(px - 1, py, nCurrentRotation)) : 0

            // Draw top line
            if (top === 0) {
              drawLine(
                (nCurrentX + px) * blockSize + offsetX,
                (shadowY + py) * blockSize + offsetY,
                (nCurrentX + px + 1) * blockSize + offsetX,
                (shadowY + py) * blockSize + offsetY
              )
            }

            // Draw right line
            if (right === 0) {
              drawLine(
                (nCurrentX + px + 1) * blockSize + offsetX,
                (shadowY + py) * blockSize + offsetY,
                (nCurrentX + px + 1) * blockSize + offsetX,
                (shadowY + py + 1) * blockSize + offsetY
              )
            }

            // Draw bottom line
            if (bottom === 0) {
              drawLine(
                (nCurrentX + px + 1) * blockSize + offsetX,
                (shadowY + py + 1) * blockSize + offsetY,
                (nCurrentX + px) * blockSize + offsetX,
                (shadowY + py + 1) * blockSize + offsetY
              )
            }

            // Draw left line
            if (left === 0) {
              drawLine(
                (nCurrentX + px) * blockSize + offsetX,
                (shadowY + py + 1) * blockSize + offsetY,
                (nCurrentX + px) * blockSize + offsetX,
                (shadowY + py) * blockSize + offsetY
              )
            }
          }
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

        //Draw scoreBoard in seperate canvas (cs)
        cs.font = '22px "Press Start 2P"'
        cs.fillStyle = "aquamarine"
        cs.fillText(`TOP`, 20, scoreBoard.height / 2 - 40)
        cs.fillText(`${localStorage.getItem("highScore")}`, 20, scoreBoard.height / 2 - 14)
        cs.fillText(`SCORE`, 20, scoreBoard.height / 2 + 20)
        cs.fillText(`${game.getScore()}`, 20, scoreBoard.height / 2 + 46)
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
        tetrisMusic.play()
      }
      if (e.target.id == "playAgainButton") {
        game.restartGame()
        nDropInterval = startSpeed
        gameLoop()
        document.getElementById("gameOverContainer").remove()
        tetrisMusic.currentTime = 0
        tetrisMusic.play()
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

  let startSpeed = 900 //milliseconds
  //Game tick start variables
  let lastTick = Date.now()
  let nDropInterval = startSpeed

  const gameLoop = () => {
    let now = Date.now()
    let delta = now - lastTick

    if (delta >= nDropInterval && !game.getGamePaused()) {
      game.update() // update game state
      lastTick = now // update the last tick time
      if (game.getPieceCount() % 2 == 0 && nDropInterval > 150) nDropInterval -= 10 //Change gamespeed
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

  //Util function
  function drawLine(sx, sy, ex, ey) {
    c.beginPath()
    c.moveTo(sx, sy)
    c.lineTo(ex, ey)
    c.stroke()
  }
}
