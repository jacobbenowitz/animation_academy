
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


class PromptCreator {
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

  // TODO: refactor to programatically add content
  addPromptContent(container) {
    // lesson nav **** TEMP ****
    // TODO create dropdown lesson nav with forward/back buttons
    const lessonNav = document.createElement('p')
    const lessonText = Object.keys(lessonContent)[0]
    lessonNav.innerHTML = "Lesson: " + lessonText
    container.appendChild(lessonNav)
    // title
    const title = document.createElement('h4')
    const titleText = this.lessonContent[1].title
    title.innerHTML = titleText
    title.classList.add('prompt-title')
    container.appendChild(title)
    // instructions
    const instruction = document.createElement('p')
    const instructionText = this.lessonContent[1].instruction
    instruction.innerHTML = instructionText
    instruction.classList.add('prompt-instruction')
    container.appendChild(instruction)
  }
  
  attachPrompt(container) {
    this.hero.append(container)
  }

}

export default PromptCreator