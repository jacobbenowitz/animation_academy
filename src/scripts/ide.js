export default class IdeCreator {
  constructor(interfaceContainer) {
    this.interfaceContainer = interfaceContainer;
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
    const rightCol = document.createElement('div');

    container.appendChild(leftCol)
      .classList.add('left-col');
    container.appendChild(rightCol)
      .classList.add('right-col');

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

    this.attachIde(this.ideContainer);
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

  attachIde() {
    this.interfaceContainer.append(this.ideContainer);
  }
}