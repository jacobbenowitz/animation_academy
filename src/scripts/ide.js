export default class IdeCreator {
  constructor(currentLevel, interfaceContainer) {
    this.interfaceContainer = interfaceContainer;
    this.currentLevel = currentLevel;
    this.ideContainer = this.createIdeContainer();
    this.addIdeContent(this.ideContainer);
  }
  // create ide box and add content
  createIdeContainer() {
    const container = document.createElement('div');
    container.classList.add('ide');
    container.classList.add('grid-2-col-ide');

    const leftCol = document.createElement('div');
    const rightCol = document.createElement('div');

    container.appendChild(leftCol)
      .classList.add('left-col');
    container.appendChild(rightCol)
      .classList.add('right-col');

    return container;
  }

  buildNumsArray(numLines) {
    const nums = [];
    for (let i = 0; i < numLines.length; i++) {
      nums.push(numLines[i])
    }
    return nums;
  }

  addLineNums(leftCol) {
    const levelLines = this.currentLevel.lines;
    const lineNums = this.buildNumsArray(levelLines).join('\n');
    const lineNumsText = document.createElement('pre');
    lineNumsText.innerHTML = lineNums;
    lineNumsText.classList.add('code');
    leftCol.appendChild(lineNumsText);
  }

  addBoilerCode(rightCol) {

    const boilerCodeText = this.currentLevel.boilerCode.join('\n');
    const innerCode = document.createElement('pre');
    innerCode.innerHTML = boilerCodeText;
    innerCode.classList.add('code');
    rightCol.append(innerCode)
  }

  buildInput(rightCol) {
    const codeInput = document.createElement("input");
    codeInput.type = "text";
    codeInput.className = "code-input";
    rightCol.append(codeInput);
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
    button.classList.add('button');
    rightCol.append(button);
  }

  addIdeContent(ide) {
    const leftCol = ide.childNodes[0];
    const rightCol = ide.childNodes[1];

    this.addLineNums(leftCol);
    this.addBoilerCode(rightCol);
    this.buildInput(rightCol);
    this.addEndingBracket(rightCol);
    this.buildButton(rightCol);

    this.attachIde(ide);
  }

  attachIde(ide) {
    this.interfaceContainer.append(ide);
  }
}