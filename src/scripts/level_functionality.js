export default class LevelFunctionality {
  constructor() {
    this.bindHandlers();
  }
  
  bindHandlers() {
    this.levelSuccessAnimation =
      this.levelSuccessAnimation.bind(this);
  }

  levelSuccessAnimation(successMessage) {
    this.overlayAnimation(successMessage);
  }

  overlayAnimation(successMessage) {
    this.renderOverlay(successMessage);
    setTimeout(this.removeOverlay, 5000)
  }

  createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    return overlay;
  }

  removeOverlay() {
    const overlay = document.querySelector('#overlay');
    overlay.remove();
  }

  renderOverlay(successMessage) {
    const overlay = this.createOverlay();
    const messageDiv = document.createElement('div');
    const message = document.createElement('h4')
    message.innerHTML = successMessage;
    message.classList.add('overlay-text');
    messageDiv.classList.add('overlay-inner');
    messageDiv.append(message);
    overlay.append(messageDiv);
    document.body.append(overlay);
    debugger
  }

  createSampleSection(body) {
    const section = document.createElement('section');
    section.classList.add('level-section','center-simple');
    const h2 = document.createElement('h2')
    h2.innerHTML = "Level Assets";
    // h2.classList.add('');

    section.append(h2);
    body.append(section);
  }

  createRainbowBox(container) {
    const backgroundBox = document.createElement('div');
    const foregroundBox = document.createElement('div');
    backgroundBox.classList.add('center-simple', 'background-box');
    foregroundBox.classList.add('center-simple', 'foreground-box', 'rise-up-level');
    container.append(backgroundBox, foregroundBox);
  }

  // 00 smooth fill
  addButtonTransitions() {
    document.querySelectorAll('.button').forEach(button => {
      button.classList.add('levels-button-hover');
    });
  }
  // 01 grow/shrink
  addButtonGrow() {
    document.querySelectorAll('.button').forEach(button => {
      button.classList.add('levels-button-grow');
    });
  }
  // 02 inputs
    addFieldTranstions() {
      const codeInput = document.querySelector('.code-input');
      const todoInput = document.querySelector('#todo-input');
      codeInput.classList.add('input-level');
      todoInput.classList.add('input-level');
    }

  // 03 rise up
  addProductsHover() {
    const products = document.querySelectorAll('.product-box');
    products.forEach(product => {
      product.classList.add('rise-up-level');
    });
  }

  // 04 header animation
  addHeaderAnimation() {
    const header = document.querySelector('header');
    header.classList.add('slide-in-level');
  }

  // add event listener on .create-todo button mouseOver, then call this fnc
  addTodoInputAnimationIn() {
    const todoInput = document.querySelector('#todo-input');
    todoInput.classList.add('animateIn')
  }

}