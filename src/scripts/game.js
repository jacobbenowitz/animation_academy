import PromptCreator from "./prompt";
import IdeCreator from "./ide";
import { LEVELS } from './levels'

export default class Game {
  constructor(interfaceContainer) {
    this.hero = document.querySelector('.hero')
    this.interfaceContainer = interfaceContainer;
    this.currentLevel = this.currentLevel() || LEVELS[0]; // lessonNumber = idx
    this.promptContainer = new PromptCreator();
    this.ide = new IdeCreator();
    this.bindHandlers();
    this.gameSetup();
    this.levelNavListeners();
    this.userSubmitListener();
  }

  // get level from localStorage, return undefined if none
  currentLevel() {
    const lessonNumber = localStorage.getItem('lessonNumber');
    console.log(lessonNumber)
    if (lessonNumber) {
      // const currentLevel = JSON.parse(LEVELS[this.lessonIndex]);
      return LEVELS[lessonNumber];
    }
    return undefined;
  }

  bindHandlers() {
    this.gameSetup = this.gameSetup.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.prevLevel = this.prevLevel.bind(this);
    this.checkUserInput = this.checkUserInput.bind(this);
    // TODO: debounce & throttle bind method to check if solution?
  }

  gameSetup() {
    // render prompt instructions 
    this.promptContainer.addPromptContent(this.currentLevel);
    this.promptContainer.attachPrompt(this.interfaceContainer);
    // render ide with boiler code and form
    this.ide.addIdeContent(this.currentLevel);
    this.ide.attachIde(this.interfaceContainer);
  }

  levelNavListeners() {
    // select lesson nav buttons, add listeners
    const back = document.querySelector('.prev-lesson')
    const next = document.querySelector('.next-lesson')
    // TODO querySelect dropdown
    // TODO querySelect reset button
    back.addEventListener('click', this.prevLevel)
    next.addEventListener('click', this.nextLevel)
  }

  nextLevel(e) {
    e.stopPropagation();
    console.log(e.target); // NOT LOGGING
    if (this.currentLevel.lessonNumber + 1 === LEVELS.length) {
      console.log('END OF GAME')
      return;
    }
    this.levelSuccess();
  }
  
  prevLevel(e) {
    e.stopPropagation();
    console.log(e.target); // NOT LOGGING
    // go to prev unless this is level 0
    if (this.currentLevel === 0) return;
    const prevLevel = this.currentLevel.lessonNumber - 1;
    this.currentLevel = LEVELS[prevLevel];
    // load prev level
    this.renderNewLevel()
  }

  userSubmitListener() {
    const ideContainer = document.querySelector('#ide')
    ideContainer.addEventListener(
      'click', this.checkUserInput
    );
  }

  checkUserInput(e) {
    console.log(e.target);
    const button = document.querySelector('.ide-button');
    const userInput = document.getElementsByClassName('code-input');
    const inputText = userInput[0].value;
    const solution = this.currentLevel.solution;
    // get user input
    if (e.target === button && inputText === solution) {
      console.log('SUCCESS: Render new level pls')
      this.levelSuccess();
    }
    undefined;
  }

  levelSuccess() {
    const nextLevel = this.currentLevel.lessonNumber + 1;
    console.log(`next level: ${nextLevel}`)
    if (LEVELS[nextLevel]) {
      this.currentLevel = LEVELS[nextLevel];
      this.renderNewLevel();
    }
    undefined;
  }

  renderNewLevel() {
    console.log('in renderNewLevel');
    localStorage.setItem("lessonNumber",
      JSON.stringify(this.currentLevel.lessonNumber));
    this.gameSetup();
  }

}