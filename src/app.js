import "./style.css"
import { components } from "./components.js"
import { draw } from "./draw.js"
import { saveHighScore } from "./draw.js"
import { initEvents } from "./events.js"
import { Module } from "./tetris.js"
import startMusic from "../assets/Tetris.mp3"
import endMusic from "../assets/18. Game Over.mp3"

//Music
export const tetrisMusic = new Audio(startMusic)
export const gameOverMusic = new Audio(endMusic)
tetrisMusic.preload = "auto"
gameOverMusic.preload = "auto"
tetrisMusic.loop = true
tetrisMusic.volume = 0.1 // 50% volume
gameOverMusic.volume = 0.1 // 50% volume

Module.onRuntimeInitialized = async function () {
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
