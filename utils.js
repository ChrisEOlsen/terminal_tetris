//Utility functions

export const utils = (() => {
  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return { randomIntFromRange }
})()
