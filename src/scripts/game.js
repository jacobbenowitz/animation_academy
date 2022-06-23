import Prompt from "./prompt";
import Ide from "./ide";
import { LEVELS } from './levels';
import LevelFunctionality from "./level_functionality";
// import { throttle } from './throttle_util'

export default class Game {

  constructor() {
    localStorage.setItem('gameState', 'idle')
    this.hero = document.querySelector('.hero')
    this.interfaceContainer = document.getElementById('interface');
    this.currentLevel = this.currentLevel() || LEVELS[0];
    this.levelFunctionality = new LevelFunctionality();
    this.promptContainer = new Prompt();
    this.ide = new Ide();
    this.bindHandlers();
    this.levelAnimations = {
      0: this.levelFunctionality.warm_up_animation,
      1: this.levelFunctionality.level_one_animation,
      2: this.levelFunctionality.level_two_animation,
      3: this.levelFunctionality.level_three_animation,
      4: this.levelFunctionality.level_four_animation,
      5: this.levelFunctionality.level_five_animation,
      6: this.levelFunctionality.level_six_animation,
      7: this.levelFunctionality.level_seven_animation,
      9: this.levelFunctionality.level_nine_animation,
      // 7: this.levelFunctionality.addButtonTransitions,
      // 8: this.levelFunctionality.addButtonGrow,
      // 9: this.levelFunctionality.addFieldTranstions,
      // 10: this.levelFunctionality.addProductsHover,
      // 11: this.levelFunctionality.addHeaderAnimation
    }
    this.levelAssets = {
      0: this.levelFunctionality.warm_up_assets,
      1: this.levelFunctionality.level_one_assets,
      2: this.levelFunctionality.level_two_assets,
      3: this.levelFunctionality.level_three_assets,
      4: this.levelFunctionality.level_four_assets,
      5: this.levelFunctionality.level_five_assets,
      6: this.levelFunctionality.level_six_assets,
      7: this.levelFunctionality.level_seven_assets,
      8: this.levelFunctionality.level_eight_assets,
      9: this.levelFunctionality.level_nine_assets,
    }
  }

  // get level from localStorage, return undefined if none
  currentLevel() {
    const lessonNumber = parseInt(localStorage.getItem('lessonNumber'));
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
    this.userInputListener = this.userInputListener.bind(this);
    this.renderLevel = this.renderLevel.bind(this);
    this.renderNextLevel = this.renderNextLevel.bind(this);
    this.gameUpdate = this.gameUpdate.bind(this);
    this.hideGame = this.hideGame.bind(this);
    this.showGame = this.showGame.bind(this)
  }

  gameSetup() {
    localStorage.setItem('gameState', 'active')
    this.promptContainer.addPromptContent(this.currentLevel);
    this.promptContainer.attachPrompt(this.interfaceContainer);
    this.ide.addIdeContent(this.currentLevel);
    this.ide.attachIde(this.interfaceContainer);
    this.updateGameAssets()
  }

  levelNavListeners() {
    // select lesson nav buttons, add listeners
    const back = document.querySelector('.prev-lesson')
    const next = document.querySelector('.next-lesson')
    const reset = document.querySelector('.reset')
    const hide = document.querySelector('.hide-interface')
    // TODO querySelect dropdown
    back.addEventListener('click', this.prevLevel)
    next.addEventListener('click', this.nextLevel)
    reset.addEventListener('click', this.resetLevel)
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
    const hero = document.getElementById('hero-2')
    const heroContent = document.getElementById('hero-content')
    hero.classList.remove('hide-hero')
    heroContent.classList.remove('hide-hero', 'height125vh')
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
    const hero = document.getElementById('hero-2')
    const heroContent = document.getElementById('hero-content')
    hero.classList.add('hide-hero')
    heroContent.classList.add('hide-hero', 'height125vh')
    interfaceContainer.classList.remove('slideOut');
    interfaceContainer.classList.add('slideIn');
    localStorage.setItem('gameState', 'active');
    this.gameUpdate()
    const playButtons = document.querySelectorAll('.play-now')
    playButtons.forEach(button => {
      button.removeEventListener('click', this.showGame)
      button.addEventListener('click', this.hideGame)
      button.innerHTML = 'Pause'
    });
  }

  throttle(callback, delay = 1000) {
    let isWaiting = false
    // save new args received while waiting so we can call callback once done waiting
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        isWaiting = false // start waiting again if no changes
      } else {
        // if there are changes, invoke callback with waiting args and restart timeout
        callback(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
    return (...args) => {
      if (isWaiting) {
        waitingArgs = args
        return
      }
      callback(...args)
      isWaiting = true
      setTimeout(timeoutFunc, delay)
    }
  }

  userInputListener() {
    const userInput = document.getElementById('user-code-input')
    userInput.addEventListener('input', e => {
      this.checkUserInput(e.target.value)
    })
  }

  checkUserInput = this.throttle(userInput => {
    const inputTextArr = userInput.split('\n');
    const solution = this.currentLevel.solution;
    if (this.regexCheck(inputTextArr, solution)) {
      this.levelSuccess();
    }
  })

  // todo: add multiple solutions for different syntax (1s & 1000ms)
  regexCheck(inputTextArr, solution) {
    // const regexMatchers = solution.map(matcher => 
    //   new RegExp(matcher)
    // )
    // build regex array containing solutions
    // for (let i = 0; i < solution.length; i++) {
    //   const regex = new RegExp(solution[i]);
    //   regexMatchers.push(regex);
    // }
    let numMatches = 0;
    // match every input with regexMatchers
    for (let i = 0; i < inputTextArr.length; i++) {
      const input = inputTextArr[i];
      for (let j = 0; j < solution.length; j++) {
        const regex = solution[j];
        if (input.match(regex) !== null) {
          // increment numMatches if match found
          // console.log(`Matched! Total: ${numMatches += 1}, match: ${regex}`)
          numMatches += 1;
        }
      }
    }
    // check if all solutions are matched
    if (numMatches >= solution.length) {
      return true
    } else return false
  }

  levelSuccess() {
    if (this.currentLevel.lessonNumber + 1 === LEVELS.length) {
      this.sectionFinalAnimation(this.currentLevel)
    } else {
      this.levelAnimation(this.currentLevel);
    }
    this.toggleInterface()
  }

  toggleInterface() {
    const interfaceContainer = document.getElementById('interface');
    if (interfaceContainer.classList.contains('slideIn')) {
      interfaceContainer.classList.remove('slideIn')
      interfaceContainer.classList.add('slideOut')
    } else {
      interfaceContainer.classList.remove('slideOut')
      interfaceContainer.classList.add('slideIn')
    }
  }

  levelAnimation() {
    // dynamically grab this level's animations to apply to DOM
    const levelUpdate =
      this.levelAnimations[this.currentLevel.lessonNumber]
    levelUpdate(); // invoke the animations
    // pull the correct success message for this level
    const successMessage = this.currentLevel.successMessage;
    // show level success overlay with the message
    this.levelFunctionality.levelSuccessAnimation(successMessage, this.renderNextLevel)
  }

  sectionFinalAnimation() {
    // dynamically grab this level's animations to apply to DOM
    const levelUpdate =
      this.levelAnimations[this.currentLevel.lessonNumber]
    levelUpdate(); // invoke the animations
    this.levelFunctionality.sectionSuccess(this.currentLevel, this.renderNextLevel)
  }
  
  renderNextLevel() {
    this.toggleInterface()
    const nextLevel = this.currentLevel.lessonNumber + 1;
    this.currentLevel = LEVELS[nextLevel];
    this.renderLevel();
    if (localStorage.getItem("overlay") == "active") {
      this.levelFunctionality.removeOverlay()
    }
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
    this.updateGameAssets();
  }

  updateGameAssets() {
    const levelNumber = document.getElementById('level-number')
    const levelTitle = document.getElementById('level-title')
    const sectionChip = document.getElementById('level-group')
    sectionChip.textContent = this.currentLevel.levelSection
    levelTitle.innerHTML = this.currentLevel.promptTitle;
    levelNumber.textContent = this.currentLevel.lessonNumber;
    const levelUpdate =
      this.levelAssets[this.currentLevel.lessonNumber];
    levelUpdate();
  }

  // testing only, add to levelAnimations
  levelTest() {
    // on levelSuccess invoke appropriate function to enable that level's transitions/animations site wide
    const body = document.querySelector('body');
    this.levelFunctionality.createSampleSection(body);
    const section = document.querySelector('.level-section');
    this.levelFunctionality.createRainbowBox(section)
  }

}