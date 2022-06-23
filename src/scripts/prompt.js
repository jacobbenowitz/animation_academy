import { LEVELS } from './levels';

export default class prompt {
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
    this.createPromptInstructions(currentLevel.promptInstructions);
    this.createPromptHints(currentLevel.syntaxHints);
  }

  updatePromptContent(currentLevel) {
    // lesson id
    const lessonId = document.querySelector('.lesson-id');
    lessonId.innerHTML = "Lesson: " + `${currentLevel.lessonNumber}`;
    const instructions = document.querySelector('.prompt-instruction');
    instructions.innerHTML = `${currentLevel.promptInstructions}`;

    const hintsList = document.querySelector('#prompt-hint-list');
    this.updateHints(hintsList, currentLevel);
    this.updatePromptNav(currentLevel.lessonNumber)
  }

  createPromptNav(lessonNumber) {
    const nav = document.createElement('div');
    const levelRow = document.createElement('div')
    nav.classList.add('lesson-nav');
    levelRow.classList.add('level-control-wrapper')

    const lessonId = document.createElement('p');
    lessonId.innerHTML = "Lesson: " + `${lessonNumber}`;
    lessonId.classList.add('lesson-id');

    const forwardsButton = this.createNextButton();
    const backwardsButton = this.createBackButton();
    const resetButton = this.createResetButton();
    const hideButton = this.createHideButton();
    backwardsButton.classList.add('disabled')
    resetButton.classList.add('disabled')

    levelRow.append(backwardsButton, lessonId,
      forwardsButton)
    nav.append(resetButton, levelRow, hideButton);
    this.promptContainer.appendChild(nav);
  }

  updatePromptNav(lessonNumber) {
    const backwardsButton = document.querySelector('.icon-button.back-level')
    const forwardsButton = document.querySelector('.icon-button.next-level')
    const resetButton = document.querySelector('.reset')

    if (lessonNumber === 0) {
      backwardsButton.classList.add('disabled')
      resetButton.classList.add('disabled')
    } else if (lessonNumber === 10) {
      forwardsButton.classList.add('disabled')
    } else {
      backwardsButton.classList.remove('disabled')
      forwardsButton.classList.remove('disabled')
      resetButton.classList.remove('disabled')
    }
  }

  createBackButton() {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'icon-button back-level'
    const backwardsIcon = document.createElement('i');
    backwardsIcon.classList.add('fa-solid', 'fa-chevron-left', 'prev-lesson');
    buttonWrapper.append(backwardsIcon)
    return buttonWrapper;
  }

  createNextButton() {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'icon-button next-level'
    const forwardsIcon = document.createElement('i');
    forwardsIcon.classList.add('fa-solid', 'fa-chevron-right', 'next-lesson');
    buttonWrapper.append(forwardsIcon)
    return buttonWrapper;
  }
  createResetButton() {
    const resetButton = document.createElement('a');
    resetButton.href = "#";
    resetButton.innerHTML = 'Reset';
    resetButton.classList.add('reset');
    return resetButton;
  }
  createHideButton() {
    const hideButton = document.createElement('a');
    hideButton.href = "#";
    hideButton.innerHTML = 'Hide';
    hideButton.classList.add('hide-interface');
    return hideButton;
  }

  createPromptInstructions(instructions) {
    const instruction = document.createElement('span');
    instruction.innerHTML = instructions;
    instruction.classList.add('prompt-instruction');
    this.promptContainer.appendChild(instruction);
  }

  createPromptHints(syntaxHints) {
    const hints = document.createElement('ul');
    hints.id = "prompt-hint-list"
    syntaxHints.forEach(hint => {
      let span = document.createElement('span');
      span.innerHTML = hint;
      span.classList.add('hint')
      hints.appendChild(span)
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