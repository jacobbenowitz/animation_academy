export default class LevelFunctionality {
  constructor() {
    this.bindHandlers();
  }

  bindHandlers() {
    this.levelSuccessAnimation =
      this.levelSuccessAnimation.bind(this);
  }

  levelSuccessAnimation(successMessage, renderNextLevel) {
    const overlay = this.createOverlay();
    const messageDiv = document.createElement('div');
    const nextDiv = document.createElement('div');
    const nextButton = document.createElement('span');
    const gameZone = document.getElementsByClassName('game-zone')[0]
    nextButton.classList.add('next', 'button')
    nextButton.innerText = "Next Level"
    nextButton.addEventListener('click', () => renderNextLevel())
    nextDiv.append(nextButton)
    const message = document.createElement('h4')
    message.innerHTML = successMessage;
    message.classList.add('overlay-text');
    messageDiv.classList.add('overlay-inner');
    messageDiv.append(message);
    overlay.append(message, nextDiv);
    gameZone.append(overlay);
    localStorage.setItem("overlay", "active")
  }

  createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    return overlay;
  }

  removeOverlay() {
    const overlay = document.querySelector('#overlay');
    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
      localStorage.setItem("overlay", "inactive")
    }
  }

  gameSuccess() {
    const overlay = this.createOverlay();
    const messageDiv = document.createElement('div');
    const nextDiv = document.createElement('div');
    const nextButton = document.createElement('span');
    const gameZone = document.getElementsByClassName('game-zone')[0]
    nextButton.classList.add('next', 'button')
    nextButton.innerText = "Thank's for playing!"
    nextButton.addEventListener('click', () => this.removeOverlay())
    nextDiv.append(nextButton)
    const message = document.createElement('h4')
    message.innerHTML = "Great job, friend ✌️ That's it for now, check back soon for new levels!";
    message.classList.add('overlay-text');
    messageDiv.classList.add('overlay-inner');
    messageDiv.append(message);
    overlay.append(message, nextDiv);
    gameZone.append(overlay);
    localStorage.setItem("overlay", "active")
  }

  createSampleSection(body) {
    const section = document.createElement('section');
    section.classList.add('level-section', 'center-simple');
    const h2 = document.createElement('h2')
    h2.innerHTML = "Level Assets";
    // h2.classList.add('');

    section.append(h2);
    body.append(section);
  }

  warm_up_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const boxStart = document.createElement('div')
    boxStart.id = 'game-box-start'
    levelGameAssets.append(boxStart)
  }
  warm_up_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    levelGameAssets.firstChild.classList.add('level-1')
  }

  level_one_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    const box2 = document.createElement('div');
    const box3 = document.createElement('div');
    box2.id = "box-start-2";
    box3.id = "box-start-3";
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    levelGameAssets.append(box2, box3)
  }

  level_one_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    const levelOneBox = document.createElement('div')
    levelOneBox.id = ('game-box-level-1')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    levelGameAssets.append(levelOneBox)
  }

  level_two_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const box4 = document.createElement('div')
    const box5 = document.createElement('div')
    box4.id = "box-start-4"
    box5.id = "box-start-5"
    levelGameAssets.append(box4, box5)
  }
  level_two_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const level2Box = document.createElement('div')
    level2Box.id = "game-box-level-2"
    levelGameAssets.append(level2Box)
  }

  level_three_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const box6 = document.createElement('div')
    const box7 = document.createElement('div')
    const box8 = document.createElement('div')
    const box9 = document.createElement('div')
    box6.id = "box-start-6"
    box7.id = "box-start-7"
    box8.id = "box-start-8"
    box9.id = "box-start-9"
    levelGameAssets.append(box6, box7, box8, box9)
  }

  level_three_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const level3Box = document.createElement('div')
    level3Box.id = "game-box-level-3"
    levelGameAssets.append(level3Box)
  }
  level_four_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const box10 = document.createElement('div')
    const box11 = document.createElement('div')
    const box12 = document.createElement('div')
    const box13 = document.createElement('div')
    box10.id = "box-start-10"
    box11.id = "box-start-11"
    box12.id = "box-start-12"
    box13.id = "box-start-13"
    levelGameAssets.append(box10, box11, box12, box13)
  }

  level_four_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const level4Box = document.createElement('div')
    level4Box.id = "game-box-level-4"
    levelGameAssets.append(level4Box)
  }

  level_five_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const box10 = document.createElement('div')
    const box11 = document.createElement('div')
    const box12 = document.createElement('div')
    const box13 = document.createElement('div')
    box10.id = "box-start-10"
    box11.id = "box-start-11"
    box12.id = "box-start-12"
    box13.id = "box-start-13"
    levelGameAssets.append(box10, box11, box12, box13)
  }

  level_five_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const level4Box = document.createElement('div')
    level4Box.id = "game-box-level-4"
    levelGameAssets.append(level4Box)
  }

  level_six_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const box10 = document.createElement('div')
    const box11 = document.createElement('div')
    const box12 = document.createElement('div')
    const box13 = document.createElement('div')
    box10.id = "box-start-10"
    box11.id = "box-start-11"
    box12.id = "box-start-12"
    box13.id = "box-start-13"
    levelGameAssets.append(box10, box11, box12, box13)
  }

  level_six_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const level4Box = document.createElement('div')
    level4Box.id = "game-box-level-4"
    levelGameAssets.append(level4Box)
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