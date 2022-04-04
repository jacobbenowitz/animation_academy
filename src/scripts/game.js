import PromptCreator from "./prompt";
import IdeCreator from "./ide";
import { LEVELS } from './levels'

// create game interface
    // const prompt = new PromptCreator(interfaceContainer);
    // create ide for user input
    // const ide = new IdeCreator(interfaceContainer);


export default class Game {
  constructor(interfaceContainer) {
    this.hero = document.querySelector('.hero')
    this.interfaceContainer = interfaceContainer;
    this.currentLevel = this.currentLevel() || LEVELS[0];
    this.promptContainer = new PromptCreator(this.currentLevel, this.interfaceContainer);
    // this.ide = new IdeCreator;
    // this.bind handlers
    this.gameSetup
    // this.addSubmissionListener
  }

  currentLevel() {
    // get level from localStorage, return undefined if none
    const lessonNumber = localStorage.getItem('lessonNumber');
    if (lessonNumber) {
      const currentLevel = JSON.parse(lessonNumber);
      return LEVELS[currentLevel];
    }
    return undefined;
  }

  // bind handlers??

  gameSetup() {
    // render prompt instructions 
    // render ide with boiler code and form
    // this.interface.appendChild(this.promptContainer)
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