import { components } from "./components.js"
import { draw } from "./draw.js"

export const initEvents = (game, gameLoop) => {
  //Main containers
  const projectContainer = document.getElementById("projectContainer")

  //Music
  const tetrisMusic = document.getElementById("startMusic")

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
      draw(game)
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
