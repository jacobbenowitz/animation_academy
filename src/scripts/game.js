import PromptCreator from "./prompt";
import IdeCreator from "./ide";
import { LEVELS } from './levels';
import LevelFunctionality from "./level_functionality";

export default class Game {

  constructor() {
    localStorage.setItem('gameState', 'idle')
    this.hero = document.querySelector('.hero')
    this.interfaceContainer = document.getElementById('interface');
    this.currentLevel = this.currentLevel() || LEVELS[0]; // lessonNumber = idx
    this.promptContainer = new PromptCreator();
    this.ide = new IdeCreator(this);
    this.bindHandlers();
    this.levelFunctionality = new LevelFunctionality();
    this.animationKey = [
      this.levelFunctionality.addButtonTransitions,
      this.levelFunctionality.addButtonGrow,
      this.levelFunctionality.addFieldTranstions,
      this.levelFunctionality.addProductsHover,
      this.levelFunctionality.addHeaderAnimation
    ]
  }

  // get level from localStorage, return undefined if none
  currentLevel() {
    const lessonNumber = localStorage.getItem('lessonNumber');
    if (lessonNumber >= 0) {
      // const currentLevel = JSON.parse(LEVELS[this.lessonIndex]);
      return LEVELS[lessonNumber];
    }
    return undefined;
  }
  
  // TODO: debounce & throttle method to check if correct solution

  bindHandlers() {
    this.gameSetup = this.gameSetup.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.prevLevel = this.prevLevel.bind(this);
    this.resetLevel = this.resetLevel.bind(this);
    this.checkUserInput = this.checkUserInput.bind(this);
    this.levelNavListeners = this.levelNavListeners.bind(this);
    this.userSubmitListener = this.userSubmitListener.bind(this);
    this.renderLevel = this.renderLevel.bind(this);
    this.gameUpdate = this.gameUpdate.bind(this);
    this.hideGame = this.hideGame.bind(this);
    this.showGame = this.showGame.bind(this)
  }

  gameSetup() {
    localStorage.setItem('gameState', 'active')
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
    // const reset = document.querySelector('.reset')
    const hide = document.querySelector('.hide-interface')
    // TODO querySelect dropdown
    back.addEventListener('click', this.prevLevel)
    next.addEventListener('click', this.nextLevel)
    // reset.addEventListener('click', this.resetLevel)
    hide.addEventListener('click', this.hideGame)
  }

  nextLevel(e) {
    e.stopPropagation();
    if (this.currentLevel.lessonNumber + 1 === LEVELS.length) {
      // console.log('END OF GAME')
      this.levelFunctionality.overlayAnimation("CONGRATS! That's all we have for now, check back soon!")
      return;
    }
    const nextLevel = this.currentLevel.lessonNumber + 1;
    this.currentLevel = LEVELS[nextLevel];
    this.renderLevel();
  }

  prevLevel(e) {
    e.stopPropagation();
    // go to prev unless this is level 0
    try {
      if (this.currentLevel.lessonNumber < 1) {
        return;
        // throw new Error("already at 0");
      } else {
        const prevLevel = this.currentLevel.lessonNumber - 1;
        this.currentLevel = LEVELS[prevLevel];
        // load prev level
        this.renderLevel();
      }
    }
    catch { return }
    // catch { e => console.log(e) } 
  }

  resetLevel(e) {
    e.stopPropagation();
    // console.log('need to truly reset by creating new instances of game and interface, currently transitions elements on DOM do not reset')
    localStorage.setItem('gameState', 'active');
    this.currentLevel = LEVELS[0];
    this.renderLevel();
  }

  hideGame(e) {
    e.stopPropagation();
    // remove prompt and ide from DOM
    const interfaceContainer = document.getElementById('interface');
    interfaceContainer.classList.remove('slideIn')
    interfaceContainer.classList.add('slideOut')
    localStorage.setItem('gameState', 'paused')
    const playButtons = document.querySelectorAll('.play-now')
    playButtons.forEach(button => {
      button.removeEventListener('click', this.hideGame)
      button.addEventListener('click', this.showGame)
      button.innerHTML = 'Resume'
    })
  }

  showGame(e) {
    e.stopPropagation()
    const interfaceContainer = document.getElementById('interface');
    interfaceContainer.classList.remove('slideOut');
    interfaceContainer.classList.add('slideIn');
    localStorage.setItem('gameState', 'active');
    const playButtons = document.querySelectorAll('.play-now')
    playButtons.forEach(button => {
      button.removeEventListener('click', this.showGame)
      button.addEventListener('click', this.hideGame)
      button.innerHTML = 'Pause'
    });
  }

  userSubmitListener() {
    const ideContainer = document.querySelector('#ide')
    ideContainer.addEventListener(
      'click', this.checkUserInput
    );
  }

  checkUserInput(e) {
    e.stopPropagation();
    // try {
    const button = document.querySelector('.ide-button');
    const userInput = document.querySelector('.code-input');
    const inputTextArr = userInput.value.split(' ');
    const solution = this.currentLevel.solution;
    if (e.target === button &&
      this.regexCheck(inputTextArr, solution)) {
      this.levelSuccess();
    }
    else if (e.target === button) {
      //   userInput.classList.add('error')
      // throw new Error ('Input does not match solution')
      // console.log('Input does not match solution')
      return;
    }
    // }
    // catch {error => {
    //   console.log(error)
    //   } 
    // }
  }

  regexCheck(inputTextArr, solution) {
    const regexMatchers = [];
    // build regex array containing solutions
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
          // increment numMatches if match found
          numMatches += 1;
        }
      }
    }
    // check if all solutions are matched
    if (numMatches >= solution.length) return true;
    return false; // if input not matched, it was wrong
  }

  levelSuccess() {
    if (this.currentLevel.lessonNumber + 1 === LEVELS.length) {
      return;
    } else {
      this.levelAnimation(this.currentLevel);
    }
  }

  levelAnimation() {
    // dynamically grab this level's animations to apply to DOM
    const animation =
      this.animationKey[this.currentLevel.lessonNumber]
    animation(); // invoke the animations
    // pull the correct success message for this level
    const successMessage = this.currentLevel.successMessage;
    // invoke the level success overlay with the message
    this.levelFunctionality.levelSuccessAnimation(successMessage)
    this.renderNextLevel() // render next level (update prompt & ide)
  }

  renderNextLevel() {
    const nextLevel = this.currentLevel.lessonNumber + 1;
    this.currentLevel = LEVELS[nextLevel];
    this.renderLevel();
  }

  renderLevel() {
    localStorage.setItem("lessonNumber",
      JSON.stringify(this.currentLevel.lessonNumber));
    this.gameUpdate();
  }

  // update prompt and ide content
  gameUpdate() {
    this.promptContainer.updatePromptContent(this.currentLevel);
    this.ide.updateIdeContent(this.currentLevel);
  }

  // testing only, add to animationKey
  levelTest() {
    // on levelSuccess invoke appropriate function to enable that level's transitions/animations site wide
    const body = document.querySelector('body');
    this.levelFunctionality.createSampleSection(body);
    const section = document.querySelector('.level-section');
    this.levelFunctionality.createRainbowBox(section)
  }

}