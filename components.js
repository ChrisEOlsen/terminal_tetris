export const components = (() => {
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

  function displayHelpBox() {
    const helpBox = document.createElement("div")
    const boxTitle = document.createElement("span")
    helpBox.id = "helpBox"

    let contentArr = ["Controls:", "Pause/Play: 'Esc'", "Move: Arrow Keys", "Rotate: 'z'"]
    for (let i = 0; i < contentArr.length; i++) {
      const innerContainer = document.createElement("div")
      const span = document.createElement("span")
      innerContainer.classList.add("helpRow")
      span.textContent = contentArr[i]
      innerContainer.appendChild(span)
      helpBox.appendChild(innerContainer)
    }
    document.getElementById("subContainer").appendChild(helpBox)
  }

  return {
    displayGameOverPage,
    displayPausePage,
    displayStartPage,
    displayHelpBox,
  }
})()
