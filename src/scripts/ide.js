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
    const lineNums = leftCol.childNodes[0];
    this.updateLineNums(currentLevel, lineNums);
    this.updateBoilerCode(currentLevel);
    this.updateInput(currentLevel);
    }
    
  updateLineNums(currentLevel, lineNums) {
    const nums = this.buildNumsArray(
      currentLevel.totalLines).join('\n');
    lineNums.innerHTML = nums;
  }

  updateBoilerCode(currentLevel) {
    const boiler = document.querySelector('#boiler')
    const boilerCodeText =
      currentLevel.boilerCode.join('\n');
    boiler.rows = currentLevel.boilerCode.length;
    boiler.innerHTML = boilerCodeText;
  }

  updateInput(currentLevel) {
    const input = document.querySelector('.code-input');
    input.innerHTML = "";
    input.rows = currentLevel.numInputLines;
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
    const lineNumsText = document.createElement('textarea');
    lineNumsText.innerHTML = lineNums;
    lineNumsText.classList.add('code');
    lineNumsText.rows = levelLines;
    lineNumsText.cols = 1;
    leftCol.appendChild(lineNumsText);
  }

  addBoilerCode(rightCol, currentLevel) {
    const boilerCodeText =
      currentLevel.boilerCode.join('\n');
    const boilerCode = document.createElement('textarea');
    boilerCode.innerHTML = boilerCodeText;
    boilerCode.classList.add('code', 'boiler');
    boilerCode.id = 'boiler';
    boilerCode.rows = currentLevel.totalLines - currentLevel.numInputLines;
    rightCol.append(boilerCode)
  }

  buildInput(rightCol, currentLevel) {
    const rows = currentLevel.numInputLines;
    const input = document.createElement('textarea')
    input.name = "user[code]"
    input.classList.add('code-input')
    input.rows = rows;
    rightCol.append(input)
  }

  addEndingBracket(rightCol) {
    const endingEle = document.createElement('textarea');
    endingEle.innerHTML = "}";
    endingEle.classList.add('code', 'boiler');
    endingEle.rows = 1;
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