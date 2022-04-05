export default class PromptCreator {
  constructor() {
    this.promptContainer = this.createPromptContainer()
  }
  // create Prompt box and add content
  createPromptContainer() {
    const container = document.createElement('div')
    container.classList.add('prompt')
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
    const lessonId = document.querySelector('.lesson-id')
    lessonId.innerHTML = "Lesson: " + `${currentLevel.lessonNumber}`;
    // lesson title
    const title = document.querySelector('.prompt-title')
    title.innerHTML = `${currentLevel.promptTitle}`
    // lesson instructions
    const instructions = document.querySelector('.prompt-instruction')
    instructions.innerHTML = `${currentLevel.promptInstructions}`
  }
  
  // TODO create dropdown lesson nav with forward/back buttons
  createPromptNav(lessonNumber) {
    const nav = document.createElement('div');
    nav.classList.add('lesson-nav');

    const lessonId = document.createElement('p');
    lessonId.innerHTML = "Lesson: " + `${lessonNumber}`;
    lessonId.classList.add('lesson-id');

    // remove innerHTML replace with SVG icons
    const backwardsButton = document.createElement('a')
    backwardsButton.href = "#"
    backwardsButton.innerHTML = 'Back'
    backwardsButton.classList.add('prev-lesson')
    
    const forwardsButton = document.createElement('a');
    forwardsButton.href = "#";
    forwardsButton.innerHTML = 'Next';
    forwardsButton.classList.add('next-lesson');

    nav.append(backwardsButton, lessonId, forwardsButton);
    this.promptContainer.appendChild(nav);
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
    syntaxHints.forEach(hint => {
      let li = document.createElement('li');
      li.innerHTML = hint;
      li.classList.add('hint')
      hints.appendChild(li)
    })
    this.promptContainer.appendChild(hints)
  }

  attachPrompt(interfaceContainer) {
    interfaceContainer.append(this.promptContainer);
  }

}