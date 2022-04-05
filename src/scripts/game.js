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
    this.promptContainer =
      new PromptCreator(this.interfaceContainer);
    this.ide =
      new IdeCreator(this.interfaceContainer);
    this.bindHandlers();
    this.gameSetup();
    this.userSubmitListener()
  }

  // OK //
  currentLevel() {
    // get level from localStorage, return undefined if none
    const lessonNumber = localStorage.getItem('lessonNumber');
    if (lessonNumber) {
      const currentLevel = JSON.parse(lessonNumber);
      return LEVELS[currentLevel];
    }
    return undefined;
  }

  bindHandlers() {
    this.gameSetup = this.gameSetup.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.prevLevel = this.prevLevel.bind(this);
    // debounce & bind completionCheck
  }

  gameSetup() {
    // render prompt instructions 
    this.promptContainer.addPromptContent(this.currentLevel);
    this.promptContainer.attachPrompt(this.interfaceContainer);
    // render ide with boiler code and form
    this.ide.addIdeContent(this.currentLevel);
    this.ide.attachIde
  }

  levelNavListeners() {
    // select lesson nav buttons, add listeners
    const back = document.querySelector('prev-lesson')
    const next = document.querySelector('next-lesson')
    // querySelect dropdown
    // querySelect reset button
    // add event listeners on all, add cb for each
    back.on('click', this.nextLevel)
    next.on('click', this.prevLevel)
  }

  nextLevel(e) {
    e.stopPropagation();
    
    // update this.level
    // load level
  }

  prevLevel(e) {
    e.stopPropagation();
    if (this.currentLevel === 0) {
      return;
    }
    let prevLevel = this.currentLevel - 1
    this.level = LEVELS[prevLevel]
    // go to prev unless this is level 0
    // update this.level
    // load level
  }

  
  levelSuccess() {
    const newLevel = this.currentLevel.lessonNumber += 1;
    this.level = LEVELS[newLevel];
    this.renderNewLevel();
    localStorage.setItem("currentLevel", JSON.stringify(this.currentLevel.lessonNumber));
  }

  renderNewLevel() {

  }

  reset() {
    //
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