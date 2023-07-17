export const components = (() => {
  function displayGameOverPage(game) {
    const gameOverContainer = document.createElement("div")
    const spanTitle = document.createElement("span")
    const spanScore = document.createElement("span")
    const spanHighScore = document.createElement("span")
    const playAgainButton = document.createElement("button")
    const quitButton = document.createElement("button")
    gameOverContainer.id = "gameOverContainer"
    playAgainButton.id = "playAgainButton"
    quitButton.id = "quitButton"
    spanTitle.textContent = "Game Over!"
    spanScore.textContent = `Score: ${game.getScore().toString()}`
    if (localStorage.getItem("highScore") !== null) {
      spanHighScore.textContent = `High Score: ${localStorage.getItem("highScore")}`
    } else {
      spanHighScore.textContent = `High Score: ${game.getScore().toString()}`
    }
    playAgainButton.textContent = "PLAY AGAIN"
    quitButton.textContent = "QUIT"
    gameOverContainer.appendChild(spanTitle)
    gameOverContainer.appendChild(spanScore)
    gameOverContainer.appendChild(spanHighScore)
    gameOverContainer.appendChild(playAgainButton)
    gameOverContainer.appendChild(quitButton)
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
    helpBox.id = "helpBox"

    let contentArr = ["Move:", "Rotate:", "Quick Drop:", "Pause/Play:"]
    let keys = ["Arrows", "'z'", "'Space'", "'Esc'"]

    for (let i = 0; i < contentArr.length; i++) {
      const innerContainer = document.createElement("div")
      const span = document.createElement("span")
      const span2 = document.createElement("span")
      innerContainer.classList.add("helpRow")
      span.textContent = contentArr[i]
      span2.textContent = keys[i]
      innerContainer.appendChild(span)
      innerContainer.appendChild(span2)
      helpBox.appendChild(innerContainer)
    }
    document.getElementById("subContainer").appendChild(helpBox)
  }

  function toggleMuteButton() {
    const tetrisMusic = document.getElementById("startMusic")
    const soundOn = `<svg class="muteClickable" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path class="muteClickable" fill="aquamarine" d="M7.563 2.069A.75.75 0 0 1 8 2.75v10.5a.751.751 0 0 1-1.238.57L3.472 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.723l3.289-2.82a.75.75 0 0 1 .801-.111ZM6.5 4.38L4.238 6.319a.748.748 0 0 1-.488.181h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62Zm6.096-2.038a.75.75 0 0 1 1.06 0a8 8 0 0 1 0 11.314a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042a6.5 6.5 0 0 0 0-9.193a.75.75 0 0 1 0-1.06Zm-1.06 2.121l-.001.001a5 5 0 0 1 0 7.07a.749.749 0 0 1-1.275-.326a.749.749 0 0 1 .215-.734a3.5 3.5 0 0 0 0-4.95a.75.75 0 1 1 1.061-1.061Z"/></svg>`
    const soundOff = `<svg class="muteClickable" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="muteClickable" fill="aquamarine" d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.91.91 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9ZM11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08ZM19.91 12l1.8-1.79a1 1 0 0 0-1.42-1.42l-1.79 1.8l-1.79-1.8a1 1 0 0 0-1.42 1.42l1.8 1.79l-1.8 1.79a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l1.79-1.8l1.79 1.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"/></svg>`
    const muteButton = document.getElementById("muteButton")
    muteButton.classList.toggle("on")
    if (muteButton.classList.contains("on")) {
      muteButton.innerHTML = soundOn
      tetrisMusic.muted = false
    } else {
      muteButton.innerHTML = soundOff
      tetrisMusic.muted = true
    }
  }

  return {
    displayGameOverPage,
    displayPausePage,
    displayStartPage,
    displayHelpBox,
    toggleMuteButton,
  }
})()
