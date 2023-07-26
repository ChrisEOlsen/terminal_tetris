import { components } from "./components.js"
import { draw } from "./draw.js"
import { saveHighScore } from "./draw.js"
import { initEvents } from "./events.js"

Module.onRuntimeInitialized = function () {
  let game = new Module.Game()

  //Music
  const tetrisMusic = document.getElementById("startMusic")
  const gameOverMusic = document.getElementById("endMusic")

  //Game tick start variable
  let lastTick = Date.now()
  const gameLoop = () => {
    let now = Date.now()
    let delta = now - lastTick

    if (delta >= game.getDropInterval() && !game.getGamePaused()) {
      game.update() // update game state (tetris.cpp)
      lastTick = now // update the last tick time
    }

    draw(game) // render game state

    if (!game.getGameOver()) {
      requestAnimationFrame(gameLoop) // repeat next frame
    } else {
      saveHighScore(game)
      tetrisMusic.pause()
      gameOverMusic.play()
      components.displayGameOverPage(game)
    }
  }

  initEvents(game, gameLoop)
  draw(game) //Draw Board just as a background before game starts
  components.displayStartComponents()
}
