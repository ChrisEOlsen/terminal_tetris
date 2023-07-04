Module.onRuntimeInitialized = async function () {
  const canvas = document.getElementById("game-canvas")
  var c = canvas.getContext("2d")

  const blockSize = 30 //px
  const nFieldWidth = 12
  const nFieldHeight = 18
  const tetrominoColors = ["#fcd34d", "#86efac", "#86efac", "#67e8f9", "#c4b5fd", "#fda4af", "#1d4ed8"]

  canvas.width = blockSize * nFieldWidth
  canvas.height = blockSize * nFieldHeight

  let game = new Module.Game(false, false, 3, 0, 4, 0, 0, 0)

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
        }
      }
  }

  //Handle User Input
  const initEvents = () => {
    document.addEventListener("keypress", function (event) {
      if (event.key === "z") {
        // rotate the tetromino when 'z' is pressed
        game.rotateTetromino(-1)
      }
      //For testing only
      if (event.key === "c") {
        let nCurrentPiece = game.getCurrentPiece()
        nCurrentPiece = (nCurrentPiece + 1) % 7
        game.setCurrentPiece(nCurrentPiece)
      }
    })
    //Left and right
    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        game.moveTetromino(0)
      }

      if (event.key === "ArrowRight") {
        game.moveTetromino(1)
      }

      if (event.key === "ArrowDown") {
        game.moveTetromino(2)
      }
    })
  }

  const gameLoop = () => {
    game.update() // update game state
    draw() // render game state
    requestAnimationFrame(gameLoop) // repeat next frame
  }
  initEvents()
  gameLoop() // start game loop
}
