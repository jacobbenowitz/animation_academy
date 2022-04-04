// import { levels } from './levels'
// import prompt?
// import ide?

export default class Game {
  constructor(prompt, ide) {
    this.prompt = prompt;
    this.ide = ide;
    this.level = this.currentLevel() || levels[0];
  }

  currentLevel() {
    // get level from localStorage, return undefined if none
    const storedLevel = localStorage.getItem('level');
    if (storedLevel) {
      const currentLevel = JSON.parse(storedLevel);
      return levels[currentLevel];
    }
    return undefined;
  }

  // bind handlers??

  gameSetup() {
    // render prompt instructions 
    // render ide with boiler code and form
  }

  levelNavListeners() {
    // querySelect back button and forward buttons, dropdown
    // querySelect dropdown
    // querySelect reset button
    // add event listeners on all, add cb for each
  }

  nextLevel(e) {
    e.stopPropagation();
    // update this.level
    // load level
  }

  prevLevel(e) {
    e.stopPropagation();
    // go to prev unless this is level 0
    // update this.level
    // load level
  }


  
  levelSuccess() {
    // increment current level
    // update this.level
    // call this.loadLevel
  }

  userSubmitListener() {
    // listen for click on ide button
  }

  checkUserInput() {
    // get user input
    // compare to solution, if === then call levelSuccess
    // else, render errors to user
  }


}