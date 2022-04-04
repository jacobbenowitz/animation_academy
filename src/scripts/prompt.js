export default class PromptCreator {
  constructor(currentLevel, interfaceContainer) {
    this.promptContainer = this.createPromptContainer()
    this.addPromptContent(currentLevel)
    this.attachPrompt(interfaceContainer)
  }
  // create Prompt box and add content
  createPromptContainer() {
    const container = document.createElement('div')
    container.classList.add('prompt')
    return container
  }

  addPromptContent(currentLevel) {
    this.createPromptNav(currentLevel.lessonNumber)
    this.createPromptTitle(currentLevel.promptTitle)
    this.createPromptInstructions(currentLevel.promptInstructions)
  }
  
  // TODO create dropdown lesson nav with forward/back buttons
  createPromptNav(lessonNumber) {
    const lessonNav = document.createElement('p')
    lessonNav.innerHTML = "Lesson: " + `${lessonNumber}`
    lessonNav.classList.add('prompt-nav')
    this.promptContainer.appendChild(lessonNav)
  }

  createPromptTitle(titleText) {
    const title = document.createElement('h4');
    title.innerHTML = titleText
    title.classList.add('prompt-title')
    this.promptContainer.appendChild(title)
  }

  createPromptInstructions(instructions) {
    const instruction = document.createElement('p')
    instruction.innerHTML = instructions
    instruction.classList.add('prompt-instruction')
    this.promptContainer.appendChild(instruction)
  }

  attachPrompt(interfaceContainer) {
    interfaceContainer.append(this.promptContainer)
  }

}