import { components } from "./components.js"
import { draw } from "./draw.js"
import { saveHighScore } from "./draw.js"
import { initEvents } from "./events.js"

Module.onRuntimeInitialized = function () {
  //Music
  const tetrisMusic = document.getElementById("startMusic")
  const gameOverMusic = document.getElementById("endMusic")

  let game = new Module.Game()

  //Game tick start variable
  game.lastTick = Date.now()
  game.gameLoop = function () {
    let now = Date.now()
    let delta = now - this.lastTick

    if (delta >= this.getDropInterval() && !this.getGamePaused()) {
      this.update() // update game state (tetris.cpp)
      this.lastTick = now // update the last tick time
    }

    draw(this) // render game state

    if (!this.getGameOver()) {
      requestAnimationFrame(this.gameLoop.bind(this)) // repeat next frame
    } else {
      saveHighScore(this)
      tetrisMusic.pause()
      gameOverMusic.play()
      components.displayGameOverPage(this)
    }
  }.bind(game) // bind the game instance to the function context:
  //bind allows the gameLoop function to be called from events.js by ensuring that "this"
  //always refers to the "game" obj

  initEvents(game)
  draw(game) //Draw Board just as a background before game starts
  components.displayStartComponents()
}
