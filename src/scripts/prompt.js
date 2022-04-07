import { LEVELS } from './levels';

export default class PromptCreator {
  constructor() {
    this.promptContainer = this.createPromptContainer();
    this.maxLevels = LEVELS.length - 1;
  }
  // create Prompt box and add content
  createPromptContainer() {
    const container = document.createElement('div');
    container.classList.add('prompt');
    return container
  }
  
  addPromptContent(currentLevel) {
    this.createPromptNav(currentLevel.lessonNumber);
    this.createPromptTitle(currentLevel.promptTitle);
    this.createPromptInstructions(currentLevel.promptInstructions);
    this.createPromptHints(currentLevel.syntaxHints);
  }

  updatePromptContent(currentLevel) {
    // lesson id
    const lessonId = document.querySelector('.lesson-id');
    lessonId.innerHTML = "Lesson: " + `${currentLevel.lessonNumber}`;
    // lesson title
    const title = document.querySelector('.prompt-title');
    title.innerHTML = `${currentLevel.promptTitle}`;
    // lesson instructions
    const instructions = document.querySelector('.prompt-instruction');
    instructions.innerHTML = `${currentLevel.promptInstructions}`;

    const hintsList = document.querySelector('#prompt-hint-list');
    this.updateHints(hintsList, currentLevel);
  }
  
  // TODO create dropdown lesson nav with forward/back buttons
  createPromptNav(lessonNumber) {
    const nav = document.createElement('div');
    nav.classList.add('lesson-nav');

    const lessonId = document.createElement('p');
    lessonId.innerHTML = "Lesson: " + `${lessonNumber}`;
    lessonId.classList.add('lesson-id');
    
    const forwardsButton = this.createNextButton(); 
    const backwardsButton = this.createBackButton();
    const resetButton = this.createResetButton();

    nav.append(backwardsButton, lessonId, forwardsButton, resetButton);
    this.promptContainer.appendChild(nav);
  }

  createBackButton() {
    const backwardsButton = document.createElement('a');
    backwardsButton.href = "#";
    backwardsButton.innerHTML = 'Back';
    backwardsButton.classList.add('prev-lesson');
    return backwardsButton;
  }
  createNextButton() {
    const forwardsButton = document.createElement('a');
    forwardsButton.href = "#";
    forwardsButton.innerHTML = 'Next';
    forwardsButton.classList.add('next-lesson');
    return forwardsButton;
  }
  createResetButton() {
    const resetButton = document.createElement('a');
    resetButton.href = "#";
    resetButton.innerHTML = 'Reset';
    resetButton.classList.add('reset');
    return resetButton;
  }

  createPromptTitle(titleText) {
    const title = document.createElement('h4');
    title.innerHTML = titleText;
    title.classList.add('prompt-title');
    this.promptContainer.appendChild(title);
  }

  createPromptInstructions(instructions) {
    const instruction = document.createElement('p');
    instruction.innerHTML = instructions;
    instruction.classList.add('prompt-instruction');
    this.promptContainer.appendChild(instruction);
  }

  createPromptHints(syntaxHints) {
    const hints = document.createElement('ul');
    hints.id = "prompt-hint-list"
    syntaxHints.forEach(hint => {
      let li = document.createElement('li');
      li.innerHTML = hint;
      li.classList.add('hint')
      hints.appendChild(li)
    })
    this.promptContainer.appendChild(hints)
  }

  updateHints(hintsList, currentLevel) {
    while (hintsList.firstChild) {
      hintsList.removeChild(hintsList.firstChild)
    }

    const newHints = currentLevel.syntaxHints;
    newHints.forEach(hint => {
      let li = document.createElement('li');
      li.innerHTML = hint;
      li.classList.add('hint')
      hintsList.appendChild(li)
    })
  }

  attachPrompt(interfaceContainer) {
    interfaceContainer.append(this.promptContainer);
  }

}