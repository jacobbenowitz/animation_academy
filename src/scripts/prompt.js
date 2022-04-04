
// CSS code text list, add appropriate styling
const codePropertiesCSS = [
  "transition-property",
  "transition - duration"
]

// lessons object containing all titles and instructions
const lessonContent = {
  1: {
    title: "Add a hover effect to buttons",
    instruction: "Use the 'transition-property' and 'transition-duration' properties to make the buttons change color on hover"
  }
  // TODO: import from CSV and programatically create obj
}


export default class PromptCreator {
  constructor(hero) {
    this.hero = hero
    this.lessonContent = lessonContent
    this.promptContainer = this.createPromptContainer()
    this.addPromptContent(this.promptContainer)
    this.attachPrompt(this.promptContainer)
  }
  // create Prompt box and add content
  createPromptContainer() {
    const container = document.createElement('div')
    container.classList.add('prompt')
    return container
  }
  
  // TODO create dropdown lesson nav with forward/back buttons
  createPromptNav() {
    const lessonNav = document.createElement('p')
    const lessonText = Object.keys(lessonContent)[0]
    lessonNav.innerHTML = "Lesson: " + lessonText
    container.appendChild(lessonNav)
  }

  createPromptTitle(titleText, container) {
    const title = document.createElement('h4');
    title.innerHTML = titleText
    title.classList.add('prompt-title')
    container.appendChild(title)
  }

  createPromptInstructions(instructions, container) {
    const instruction = document.createElement('p')
    instruction.innerHTML = instructions
    instruction.classList.add('prompt-instruction')
    container.appendChild(instruction)
  }

  // TODO: refactor to programatically add content
  addPromptContent(currentLevel) {
    this.createPromptNav(currentLevel[lessonNumber])
    this.createPromptTitle()
    this.createPromptInstructions()
  }
  
  attachPrompt(container) {
    this.hero.append(container)
  }

}