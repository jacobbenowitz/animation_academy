// obj format = { 
//   lesson #: {
//     code: boiler code,
//     lines: num of lines for ide
//   }
// }

const ideBoilerCode = {
  1: {
    code: [
    "#boiler {",
    "  position: absolute;",
    "  color: green;",
    "}",
    "#button {"
    ],
    lines: 10
  }
}

const tempLineNums = [1,2,3,4,5,6,7,8]

export default class IdeCreator {
  constructor(interfaceContainer) {
    this.interfaceContainer = interfaceContainer
    this.ideBoilerCode = ideBoilerCode

    // refactor me!! 
    this.tempLineNums = tempLineNums

    this.ideContainer = this.createIdeContainer()
    this.addIdeContent(this.ideContainer)
    this.attachIde()
  }
  // create ide box and add content
  createIdeContainer() {
    const container = document.createElement('div')
    container.classList.add('ide')
    container.classList.add("grid-2-col-ide")

    const leftCol = document.createElement('div')
    const rightCol = document.createElement('div')

    container.appendChild(leftCol).classList.add('left-col')
    container.appendChild(rightCol).classList.add('right-col')

    return container
  }

  addIdeContent(ide) {
    const leftCol = ide.childNodes[0]
    const rightCol = ide.childNodes[1]

    const lineNums = this.tempLineNums.join('\n')
    const lineNumsText = document.createElement('pre')
    lineNumsText.innerHTML = lineNums
    lineNumsText.classList.add('code')
    leftCol.appendChild(lineNumsText)

    
    // REFACTOR with 'pre' tag
    const boilerCodeText = this.ideBoilerCode[1].code.join('\n')
    const innerCode = document.createElement('pre')
    innerCode.innerHTML = boilerCodeText
    innerCode.classList.add('code')
    
    const codeInput = document.createElement("input");
    codeInput.type = "text";
    codeInput.className = "code-input"
    
    const endingEle = document.createElement('pre')
    endingEle.innerHTML = "}"
    endingEle.classList.add('code')
    
    const button = document.createElement('a')
    button.innerHTML = "Next"
    button.href = "#"
    button.classList.add('button')
    
    rightCol.append(innerCode, codeInput, endingEle, button)

  }

  attachIde(ide) {
    this.interfaceContainer.append(this.ideContainer)
  }
}