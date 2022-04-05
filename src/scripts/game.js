import PromptCreator from "./prompt";
import IdeCreator from "./ide";
import { LEVELS } from './levels'

export default class Game {
  constructor(interfaceContainer) {
    this.hero = document.querySelector('.hero')
    this.interfaceContainer = interfaceContainer;
    this.currentLevel = this.currentLevel() || LEVELS[0]; // lessonNumber = idx
    this.promptContainer = new PromptCreator();
    this.ide = new IdeCreator(this);
    this.bindHandlers();
    this.gameSetup();
    this.levelNavListeners();
    this.userSubmitListener();
  }

  // get level from localStorage, return undefined if none
  currentLevel() {
    const lessonNumber = localStorage.getItem('lessonNumber');
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
    if (this.currentLevel.lessonNumber + 1 === LEVELS.length) {
      console.log('END OF GAME')
      return;
    }
    const nextLevel = this.currentLevel.lessonNumber + 1;
    this.currentLevel = LEVELS[nextLevel];
    this.renderNewLevel();
  }
  
  prevLevel(e) {
    e.stopPropagation();
    // go to prev unless this is level 0
    if (this.currentLevel === 0) return;
    const prevLevel = this.currentLevel.lessonNumber - 1;
    this.currentLevel = LEVELS[prevLevel];
    // load prev level
    this.renderNewLevel();
  }

  userSubmitListener() {
    const ideContainer = document.querySelector('#ide')
    ideContainer.addEventListener(
      'click', this.checkUserInput
    );
  }

  checkUserInput(e) {
    e.stopPropagation();
    const button = document.querySelector('.ide-button');
    const userInput = document.querySelector('.code-input');
    const inputTextArr = userInput.value.split(' ');
    const solution = this.currentLevel.solution;
    if (e.target === button &&
        this.regexCheck(inputTextArr, solution)) {
      console.log('SUCCESS: Render new level pls')
      this.levelSuccess();
    } else console.log('Input does not match solution')
  }

  regexCheck(inputTextArr, solution) {
    const regexMatchers = [];
    for (let i = 0; i < solution.length; i++) {
      const regex = new RegExp(solution[i]);
      regexMatchers.push(regex);
    }
    let numMatches = 0;
    // match every input with regexMatchers
    for (let i = 0; i < inputTextArr.length; i++) {
      const input = inputTextArr[i];
      for (let j = 0; j < regexMatchers.length; j++) {
        if (input.match(regexMatchers[j]) !== null) {
          console.log(input.match(regexMatchers[j]));
          numMatches += 1;
        }
      }
    }
    // check if all solutions are matched
    if (numMatches >= solution.length) return true;
    return false;
  }

  levelSuccess() {
    if (this.currentLevel.lessonNumber + 1 === LEVELS.length) {
      console.log('END OF GAME')
      return;
    }
    const nextLevel = this.currentLevel.lessonNumber + 1;
    this.currentLevel = LEVELS[nextLevel];
    this.renderNewLevel();
  }

  renderNewLevel() {
    console.log('in renderNewLevel');
    localStorage.setItem("lessonNumber",
      JSON.stringify(this.currentLevel.lessonNumber));
    this.gameUpdate();
  }
  // update prompt and ide content
  gameUpdate() {
    this.promptContainer.updatePromptContent(this.currentLevel);
    this.ide.updateIdeContent(this.currentLevel);
  }

}