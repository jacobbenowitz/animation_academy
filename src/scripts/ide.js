export default class Ide {
  constructor() {
    this.ideContainer = this.createIdeContainer();
    this.bindHandlers();
    // this.addEventListeners();
  }

  bindHandlers() {
    this.preventEnter = this.preventEnter.bind(this);
  }

  addEventListeners() {
    const textarea = document.querySelector('textarea')
    textarea.addEventListener('keyup', this.preventEnter)
  }
  // not working, 
  preventEnter(e) {
    // console.log(e.keycode)
    if (e.keycode == 13) {
      e.preventDefault();
    }
  }

  // create ide box and add content
  createIdeContainer() {
    const container = document.createElement('div');
    container.id = "ide"
    container.classList.add('ide', 'grid-2-col-ide');

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
    this.addEndingBoiler(rightCol, currentLevel);
    // this.buildButton(rightCol);
  }

  updateIdeContent(currentLevel) {
    // generate correct amount of line numbers
    this.updateLineNums(currentLevel);
    // update textarea for size of solution
    this.updateInput(currentLevel);
    // update boiler code before & after user input
    this.updateBoilerCode(currentLevel);
  }


  updateLineNums(currentLevel) {
    const leftCol = this.ideContainer.childNodes[0];
    const lineNums = leftCol.childNodes[0];
    const levelLines = currentLevel.totalLines;
    const nums = this.buildNumsArray(
      currentLevel.totalLines).join('\n');
      lineNums.rows = levelLines;
    lineNums.innerHTML = nums;
  }

  updateBoilerCode(currentLevel) {
    const topBoiler = document.querySelector('#boiler');
    const botBoiler = document.querySelector('#boiler-bottom');

    const boilerTopText =
      currentLevel.boilerCode.join('\n');
    const boilerBotText =
      currentLevel.endingBoilerCode.join('\n');
      topBoiler.rows = currentLevel.boilerCode.length;
      topBoiler.innerHTML = boilerTopText;
      debugger
    if (currentLevel.endingBoilerCode.length > 0) {
      botBoiler.innerHTML = boilerBotText;
      botBoiler.rows = currentLevel.endingBoilerCode.length;
    } else {
      botBoiler.innerHTML = "";
      botBoiler.rows = 0;
    }
  }

  updateInput(currentLevel) {
    const input = document.getElementById('user-code-input')
    const rows = currentLevel.numInputLines;
    // const templateCode = currentLevel.inputTemplateCode;
    // let template = document.getElementById('template-code')
    // if (template === null) {
    //   let rightCol = document.querySelector('#ide > .right-col')
    //   template = this.buildTemplate(templateCode, rows)
    //   rightCol.append(template)
    // }
    input.value = ""
    // template.rows = rows;
    input.rows = rows;
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
    lineNumsText.cols = 2;
    lineNumsText.disabled = true;
    leftCol.appendChild(lineNumsText);
  }

  addBoilerCode(rightCol, currentLevel) {
    const rows = currentLevel.boilerCode.length
    const boilerCodeText =
      currentLevel.boilerCode.join('\n');
    const boilerCode = document.createElement('textarea');
    boilerCode.innerHTML = boilerCodeText;
    boilerCode.classList.add('code', 'boiler');
    boilerCode.id = 'boiler';
    boilerCode.disabled = true;
    boilerCode.rows = rows;
    rightCol.append(boilerCode)
  }

  buildInput(rightCol, currentLevel) {
    const rows = currentLevel.numInputLines;
    // const templateCode = currentLevel.inputTemplateCode;

    const inputContainer = document.createElement('div')
    inputContainer.id = 'input-container';
    inputContainer.classList.add('code-input')

    // if (templateCode.length > 0) {
    //   let template = this.buildTemplate(templateCode, rows)
    //   rightCol.append(template)
    // }

    const userInput = document.createElement('textarea')
    userInput.id = "user-code-input";
    userInput.name = "user[code]";
    userInput.rows = rows;
    inputContainer.append(userInput)
    rightCol.append(inputContainer);
  }

  // buildTemplate(templateCode, rows) {
  //   const template = document.createElement('textarea');
  //   template.innerHTML = templateCode.join('\n');
  //   template.id = "template-code";
  //   template.name = "template[code]";
  //   template.classList.add('template');
  //   template.value = templateCode.join('\n');
  //   template.readOnly = true;
  //   template.rows = rows;
  //   return template;
  // }

  addEndingBoiler(rightCol, currentLevel) {
    const rows = currentLevel.endingBoilerCode.length;
    const endingBoilerCodeText =
      currentLevel.endingBoilerCode.join('\n');
    const endingEle = document.createElement('textarea');
    endingEle.innerHTML = endingBoilerCodeText;
    endingEle.id = "boiler-bottom"
    endingEle.classList.add('code', 'boiler');
    endingEle.rows = rows;
    endingEle.disabled = true;
    rightCol.append(endingEle)
  }

  // buildButton(rightCol) {
  //   const button = document.createElement('a');
  //   button.innerHTML = "Next";
  //   button.href = "#";
  //   button.classList.add('ide-button', 'button');
  //   rightCol.append(button);
  // }

  attachIde(interfaceContainer) {
    interfaceContainer.classList.add('slideIn')
    interfaceContainer.append(this.ideContainer);
    const userInput = document.getElementById('user-code-input')
    userInput.focus()
  }
}