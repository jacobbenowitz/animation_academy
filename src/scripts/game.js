import PromptCreator from "./prompt";
import IdeCreator from "./ide";
import { LEVELS } from './levels'
import LevelFunctionality from "./level_functionality";

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
    // testing levelProgression //
    this.levelFunctionality = new LevelFunctionality();
    this.levelTest();
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
    this.resetLevel = this.resetLevel.bind(this);
    this.checkUserInput = this.checkUserInput.bind(this);
    this.levelNavListeners = this.levelNavListeners.bind(this);
    this.userSubmitListener = this.userSubmitListener.bind(this);
    this.renderNewLevel = this.renderNewLevel.bind(this);
    this.gameUpdate = this.gameUpdate.bind(this);
    // TODO: debounce & throttle bind method to check if solution?
  }

  gameSetup() {
    // localStorage.clear(); // TEMP
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
    const reset = document.querySelector('.reset')
    // TODO querySelect dropdown
    // TODO querySelect reset button
    back.addEventListener('click', this.prevLevel)
    next.addEventListener('click', this.nextLevel)
    reset.addEventListener('click', this.resetLevel)
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
    if (this.currentLevel === 0) {
      throw error ("already at 0");
    } else {
        const prevLevel = this.currentLevel.lessonNumber - 1;
        this.currentLevel = LEVELS[prevLevel];
        // load prev level
        this.renderNewLevel();
    }
  }

  resetLevel(e) {
    console.log('need to truly reset by creating new instances of game and interface, currently transitions elements on DOM do not reset')
    localStorage.clear();
    this.currentLevel = LEVELS[0];
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
        console.log('SUCCESS: Overlay and show result of current level');
        this.levelFunctionality.levelSuccessAnimation(this.currentLevel);
        console.log('SUCCESS: Render new level pls')
        this.levelSuccess();
    } else {
      console.log('Input does not match solution')
    }
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
        const regex = regexMatchers[j];
        if (input.match(regex) !== null) {
          console.log(input.match(regex));
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
    } else {
      const nextLevel = this.currentLevel.lessonNumber + 1;
      this.currentLevel = LEVELS[nextLevel];
      this.renderNewLevel();
    }
  }

  renderNewLevel() {
    localStorage.setItem("lessonNumber",
      JSON.stringify(this.currentLevel.lessonNumber));
    this.gameUpdate();
  }
  // update prompt and ide content
  gameUpdate() {
    this.promptContainer.updatePromptContent(this.currentLevel);
    this.ide.updateIdeContent(this.currentLevel);
  }

  levelTest() {
    // on levelSuccess invoke appropriate function to enable that level's transitions/animations site wide
    this.levelFunctionality.addButtonTransitions();
    const body = document.querySelector('body');
    this.levelFunctionality.createSampleSection(body);
    const section = document.querySelector('.level-section');
    this.levelFunctionality.createRainbowBox(section)
  }

}