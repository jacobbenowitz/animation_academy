export default class IdeCreator {
  constructor() {
    this.ideContainer = this.createIdeContainer();
    this.ideContainer.addEventListener('click', this.checkInput)
  }

  checkInput(e) {
    const button = document.querySelector('ide-button')
    if (e.target === button) {
      const solution = this.currentLevel.solution;
      if (e === solution) return true;
      return false;
    }
    undefined;
  }

  // create ide box and add content
  createIdeContainer() {
    const container = document.createElement('div');
    container.id = "ide"
    container.classList.add('ide','grid-2-col-ide');

    const leftCol = document.createElement('div');
    leftCol.classList.add('left-col');
    const rightCol = document.createElement('div');
    rightCol.classList.add('right-col');

    container.append(leftCol, rightCol);

    return container;
  }

  addIdeContent(currentLevel) {
    const leftCol = this.ideContainer.childNodes[0];
    const rightCol = this.ideContainer.childNodes[1];
    this.addLineNums(leftCol, currentLevel);
    this.addBoilerCode(rightCol, currentLevel);
    this.buildInput(rightCol, currentLevel);
    this.addEndingBracket(rightCol);
    this.buildButton(rightCol);
    
  }
  
  updateIdeContent(currentLevel) {
    const leftCol = this.ideContainer.childNodes[0];
    const rightCol = this.ideContainer.childNodes[1];
    const lineNumsPre = leftCol.childNodes[0];
    this.updateLineNums(currentLevel, lineNumsPre);
    this.updateBoilerCode(currentLevel);
    this.updateInput(currentLevel, rightCol);
      
    }
    
  updateLineNums(currentLevel, lineNumsPre) {
    const lineNums = this.buildNumsArray(
      currentLevel.totalLines).join('\n');
    lineNumsPre.innerHTML = lineNums
  }

  updateBoilerCode(currentLevel) {
    const boiler = document.querySelector('#boiler')
    const boilerCodeText =
      currentLevel.boilerCode.join('\n');
    boiler.innerHTML = boilerCodeText;
  }

  updateInput(currentLevel, rightCol) {
    const currentInputs = rightCol.querySelectorAll('.code-input');
    currentInputs.forEach(input => rightCol.removeChild(input))
    
    const inputs = [];
    const numInputs = currentLevel.numInputLines;
    for (let i = 0; i < numInputs; i++) {
      let codeInput = document.createElement("input");
      codeInput.type = "text";
      codeInput.className = "code-input";
      inputs.push(codeInput);
    }
    rightCol.append(...inputs)
  }

  buildNumsArray(numLines) {
    const nums = [];
    for (let i = 0; i < numLines + 1; i++) {
      nums.push(i)
    }
    return nums;
  }

  addLineNums(leftCol, currentLevel) {
    const levelLines = currentLevel.totalLines;
    const lineNums =
        this.buildNumsArray(levelLines).join('\n');
    const lineNumsText = document.createElement('pre');
    lineNumsText.innerHTML = lineNums;
    lineNumsText.classList.add('code');
    leftCol.appendChild(lineNumsText);
  }

  addBoilerCode(rightCol, currentLevel) {
    const boilerCodeText =
        currentLevel.boilerCode.join('\n');
    const innerCode = document.createElement('pre');
    innerCode.innerHTML = boilerCodeText;
    innerCode.classList.add('code');
    innerCode.id = 'boiler';
    rightCol.append(innerCode)
  }

  buildInput(rightCol, currentLevel) {
    const inputs = [];
    const numInputs = currentLevel.numInputLines;
    for (let i = 0; i < numInputs; i++) {
      let codeInput = document.createElement("input");
      codeInput.type = "text";
      codeInput.className = "code-input";
      inputs.push(codeInput);
    }
    rightCol.append(...inputs)
  }

  addEndingBracket(rightCol) {
    const endingEle = document.createElement('pre');
    endingEle.innerHTML = "}";
    endingEle.classList.add('code');
    rightCol.append(endingEle)
  }

  buildButton(rightCol) {
    const button = document.createElement('a');
    button.innerHTML = "Next";
    button.href = "#";
    button.classList.add('ide-button');
    rightCol.append(button);
  }

  attachIde(interfaceContainer) {
    interfaceContainer.append(this.ideContainer);
  }
}