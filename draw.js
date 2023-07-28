const canvas = document.getElementById("game-canvas")
const nextPieceCanvas = document.getElementById("nextPiece")
const scoreBoard = document.getElementById("scoreBoard")
//Canvas contexts
var c = canvas.getContext("2d")
var cn = nextPieceCanvas.getContext("2d")
var cs = scoreBoard.getContext("2d")

let blockSize = 30 //px
const nFieldWidth = 12
const nFieldHeight = 23
const offsetX = 2
const offsetY = 2
//colors
const tetrominoColors = ["#fbbf24", "#22c55e", "#0ea5e9", "#67e8f9", "#e11d48", "#d946ef", "#f8fafc"]

canvas.width = blockSize * nFieldWidth + offsetX * 2
canvas.height = blockSize * nFieldHeight + offsetY * 2
nextPieceCanvas.width = blockSize * 4
nextPieceCanvas.height = blockSize * 4
scoreBoard.width = blockSize * 5
scoreBoard.height = blockSize * 8

let HIGH_SCORE = localStorage.getItem("highScore")
if (HIGH_SCORE === null) HIGH_SCORE = "0"

const Cell = {
  EMPTY: 10,
  BORDER: 9,
  TETROMINO: 8,
}

export function draw(game) {
  refreshPage()

  //Get game variables
  let nCurrentX = game.getCurrentX()
  let nCurrentY = game.getCurrentY()
  let nShadowY = game.changeShadowY()
  let nCurrentPiece = game.getCurrentPiece()
  let nNextPiece = game.getNextPiece()
  let nCurrentRotation = game.getCurrentRotation()
  let tetromino = game.getTetromino(nCurrentPiece)
  let nextTetromino = game.getTetromino(nNextPiece)

  drawGameField(game)

  //Draw Tetromino, shadow, next tetromino and scoreBoard
  for (let px = 0; px < 4; px++)
    for (let py = 0; py < 4; py++) {
      let rotatedIndex = game.Rotate(px, py, nCurrentRotation)
      if (tetromino.get(rotatedIndex) === 1) {
        drawTetromino(px, py, nCurrentX, nCurrentY, nCurrentPiece)
        drawTetrominoShadow(game, px, py, nCurrentX, nShadowY, tetromino, nCurrentPiece, nCurrentRotation)
      }
      drawNextPiece(px, py, nNextPiece, nextTetromino)
    }
  drawScoreBoard(game)
  drawGameFieldBorders()
}

//Util functions
const refreshPage = () => {
  c.clearRect(0, 0, canvas.width, canvas.height)
  cn.clearRect(0, 0, nextPieceCanvas.width, nextPieceCanvas.height)
  cs.clearRect(0, 0, scoreBoard.width, scoreBoard.height)
}
function drawLine(sx, sy, ex, ey) {
  c.beginPath()
  c.moveTo(sx, sy)
  c.lineTo(ex, ey)
  c.stroke()
}

//Draw functions
const drawGameField = game => {
  let gameBoard = game.getGameBoard()
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
}

const drawTetromino = (px, py, nCurrentX, nCurrentY, nCurrentPiece) => {
  // Set glow effect
  c.shadowBlur = 12
  c.shadowColor = tetrominoColors[nCurrentPiece]
  // Draw border
  c.strokeStyle = tetrominoColors[nCurrentPiece]
  c.lineWidth = 3
  c.strokeRect((nCurrentX + px) * blockSize + offsetX, (nCurrentY + py) * blockSize + offsetY, blockSize, blockSize)
  c.shadowBlur = 0
  c.shadowColor = "black"
}

const drawTetrominoShadow = (game, px, py, nCurrentX, nShadowY, tetromino, nCurrentPiece, nCurrentRotation) => {
  const EMPTY_SPACE = 0
  c.strokeStyle = tetrominoColors[nCurrentPiece]
  if (!game.getGamePaused() && !game.getGameOver()) {
    // Check neighboring cells
    const top = py > 0 ? tetromino.get(game.Rotate(px, py - 1, nCurrentRotation)) : EMPTY_SPACE
    const right = px < 3 ? tetromino.get(game.Rotate(px + 1, py, nCurrentRotation)) : EMPTY_SPACE
    const bottom = py < 3 ? tetromino.get(game.Rotate(px, py + 1, nCurrentRotation)) : EMPTY_SPACE
    const left = px > 0 ? tetromino.get(game.Rotate(px - 1, py, nCurrentRotation)) : EMPTY_SPACE

    // Draw top line
    if (top === EMPTY_SPACE) {
      drawLine(
        (nCurrentX + px) * blockSize + offsetX,
        (nShadowY + py) * blockSize + offsetY,
        (nCurrentX + px + 1) * blockSize + offsetX,
        (nShadowY + py) * blockSize + offsetY
      )
    }
    // Draw right line
    if (right === EMPTY_SPACE) {
      drawLine(
        (nCurrentX + px + 1) * blockSize + offsetX,
        (nShadowY + py) * blockSize + offsetY,
        (nCurrentX + px + 1) * blockSize + offsetX,
        (nShadowY + py + 1) * blockSize + offsetY
      )
    }
    // Draw bottom line
    if (bottom === EMPTY_SPACE) {
      drawLine(
        (nCurrentX + px + 1) * blockSize + offsetX,
        (nShadowY + py + 1) * blockSize + offsetY,
        (nCurrentX + px) * blockSize + offsetX,
        (nShadowY + py + 1) * blockSize + offsetY
      )
    }
    // Draw left line
    if (left === EMPTY_SPACE) {
      drawLine(
        (nCurrentX + px) * blockSize + offsetX,
        (nShadowY + py + 1) * blockSize + offsetY,
        (nCurrentX + px) * blockSize + offsetX,
        (nShadowY + py) * blockSize + offsetY
      )
    }
  }
}

const drawNextPiece = (px, py, nNextPiece, nextTetromino) => {
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
}

const drawScoreBoard = game => {
  //Draw scoreBoard in seperate canvas (cs)
  cs.font = '22px "Press Start 2P"'
  cs.fillStyle = "aquamarine"
  cs.fillText(`TOP`, 16, scoreBoard.height / 2 - 40)
  cs.fillText(`${HIGH_SCORE}`, 16, scoreBoard.height / 2 - 14)
  cs.fillText(`SCORE`, 16, scoreBoard.height / 2 + 20)
  cs.fillText(`${game.getScore()}`, 16, scoreBoard.height / 2 + 46)
}

const drawGameFieldBorders = () => {
  c.strokeStyle = "aquamarine"
  const lines = [
    // Top border
    [offsetX, offsetY, offsetX, nFieldHeight * blockSize + offsetY],

    // Top inner border
    [offsetX + blockSize, offsetY, offsetX + blockSize, nFieldHeight * blockSize + offsetY - blockSize],

    // Right border
    [nFieldWidth * blockSize + offsetX, offsetY, nFieldWidth * blockSize + offsetX, nFieldHeight * blockSize + offsetY],

    // Right inner border
    [
      nFieldWidth * blockSize + offsetX - blockSize,
      offsetY,
      nFieldWidth * blockSize + offsetX - blockSize,
      nFieldHeight * blockSize + offsetY - blockSize,
    ],

    // Bottom border
    [
      offsetX,
      nFieldHeight * blockSize + offsetY,
      nFieldWidth * blockSize + offsetX,
      nFieldHeight * blockSize + offsetY,
    ],

    // Bottom inner border
    [
      offsetX + blockSize,
      nFieldHeight * blockSize + offsetY - blockSize,
      nFieldWidth * blockSize + offsetX - blockSize,
      nFieldHeight * blockSize + offsetY - blockSize,
    ],
  ]
  lines.forEach(args => drawLine(...args))
}

//LOCAL STORAGE STUFF:
export function saveHighScore(game) {
  if (game.getScore() > HIGH_SCORE) {
    HIGH_SCORE = game.getScore()
    localStorage.setItem("highScore", HIGH_SCORE)
  }
}
