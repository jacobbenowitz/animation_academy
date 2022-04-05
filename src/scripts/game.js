import PromptCreator from "./prompt";
import IdeCreator from "./ide";
import { LEVELS } from './levels'

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
    this.userSubmitListener();
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
    this.checkUserInput = this.checkUserInput.bind(this);
    // debounce & bind completionCheck
  }

  gameSetup() {
    // render prompt instructions 
    this.promptContainer.addPromptContent(this.currentLevel);
    this.promptContainer.attachPrompt(this.interfaceContainer);
    // render ide with boiler code and form
    this.ide.addIdeContent(this.currentLevel);
    this.ide.attachIde();
  }

  levelNavListeners() {
    // select lesson nav buttons, add listeners
    const back = document.querySelector('.prev-lesson')
    const next = document.querySelector('.next-lesson')
    // TODO querySelect dropdown
    // TODO querySelect reset button

    back.on('click', this.nextLevel)
    next.on('click', this.prevLevel)
  }

  nextLevel(e) {
    e.stopPropagation();
    console.log(e.target);
    if (this.currentLevel.lessonNumber + 1 === LEVELS.length) {
      return;
    }
    this.levelSuccess();
  }

  prevLevel(e) {
    e.stopPropagation();
    console.log(e.target);
    // go to prev unless this is level 0
    if (this.currentLevel === 0) {
      return;
    }
    let prevLevel = this.currentLevel - 1;
    this.currentLevel = LEVELS[prevLevel];
    // load prev level
    this.renderNewLevel()
  }

  
  levelSuccess() {
    const newLevel = this.currentLevel.lessonNumber + 1;
    if (LEVELS[newLevel]) {
      this.currentLevel = LEVELS[newLevel];
      this.renderNewLevel();
    }
  }

  renderNewLevel() {
    localStorage.setItem("lessonNumber",
      JSON.stringify(this.currentLevel.lessonNumber));
    this.gameSetup();
  }

  // reset() {
  //   this.gameSetup();
  //   localStorage.setItem("lessonNumber",
  //     JSON.stringify(this.currentLevel.lessonNumber))
  // }

  userSubmitListener() {
    const ideContainer = document.querySelector('#ide')
    ideContainer.addEventListener(
      'click', this.checkUserInput
    );
  }

  checkUserInput(e) {
    // console.log(e.target);
    const button = document.querySelector('.ide-button');
    const userInput = document.getElementsByClassName('code-input');
    const inputText = userInput[0].value;
    const solution = this.currentLevel.solution;
    // get user input
    if (e.target === button && inputText === solution) {
      this.levelSuccess();
    }
    undefined;
  }

}