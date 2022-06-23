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

  sectionSuccess(currentLevel, hideGame) {
    const overlay = this.createOverlay();
    const messageDiv = document.createElement('div');
    const nextDiv = document.createElement('div');
    const exitButton = document.createElement('span');
    const gameZone = document.getElementsByClassName('game-zone')[0]
    exitButton.classList.add('next', 'button')
    exitButton.innerText = "Exit 👋"
    exitButton.addEventListener('click', (e) => {
      this.removeOverlay()
      hideGame(e)
    })
    nextDiv.append(exitButton)
    const message = document.createElement('h4')
    message.innerHTML = `Congrats 🎉 You've completed the ${currentLevel.levelSection} section like a pro. Thank you for playing!`;
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
    const circle1 = document.createElement('div')
    const circle2 = document.createElement('div')
    const circle3 = document.createElement('div')
    circle1.id = "circle-start-1"
    circle2.id = "circle-start-2"
    circle3.id = "circle-start-3"
    levelGameAssets.append(circle1, circle2, circle3)
  }
  level_five_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const level5Box = document.createElement('div')
    level5Box.id = "game-circle-level-5"
    levelGameAssets.append(level5Box)
  }

  level_six_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    button1.id = "button-start-1"
    button1.href = "#"
    button1.textContent = "Default"
    button2.id = "button-start-2"
    button2.href = "#"
    button2.textContent = "Hover"
    levelGameAssets.append(button1, button2)
  }
  level_six_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const buttonLevel6 = document.createElement('button')
    buttonLevel6.id = "button-level-6"
    buttonLevel6.href = "#"
    buttonLevel6.textContent = "Success!"
    levelGameAssets.append(buttonLevel6)
  }

  level_seven_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const button3 = document.createElement('button')
    const button4 = document.createElement('button')
    button3.id = "button-start-3"
    button3.href = "#"
    button3.textContent = "Hover"
    button4.id = "button-start-4"
    button4.href = "#"
    button4.textContent = "Active"
    levelGameAssets.append(button4, button3)
  }
  level_seven_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const buttonLevel7 = document.createElement('button')
    buttonLevel7.id = "button-level-7"
    buttonLevel7.href = "#"
    buttonLevel7.textContent = "Success!"
    levelGameAssets.append(buttonLevel7)
  }

  level_eight_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }

    const box15 = document.createElement('div')
    const box16 = document.createElement('div')
    const box17 = document.createElement('div')
    box15.id = "box-start-15"
    box16.id = "box-start-16"
    box17.id = "box-start-17"

    levelGameAssets.append(box15, box16, box17)
  }
  level_eight_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const boxLevel8 = document.createElement('div')
    boxLevel8.id = "game-box-level-8"

    levelGameAssets.append(boxLevel8)
  }

  level_nine_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const levelWrapper = document.createElement('div')
    const circle4 = document.createElement('div')
    const circle5 = document.createElement('div')
    const circle6 = document.createElement('div')
    const circle7 = document.createElement('div')
    const circle8 = document.createElement('div')
    levelWrapper.id = "level-9-wrapper"
    circle4.id = "circle-start-4"
    circle5.id = "circle-start-5"
    circle6.id = "circle-start-6"
    circle7.id = "circle-start-7"
    circle8.id = "circle-start-8"
    
    levelWrapper.append(circle4, circle5, circle6, circle7, circle8)
    levelGameAssets.append(levelWrapper)
  }

  level_nine_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const levelWrapper = document.createElement('div')
    const circle4 = document.createElement('div')
    const circleLevel9 = document.createElement('div')
    circle4.id = "circle-start-4"
    circleLevel9.id = "game-circle-level-9"
    levelWrapper.id = "level-9-wrapper"
    levelWrapper.append(circle4, circleLevel9)
    levelGameAssets.append(levelWrapper)
  }

  level_ten_assets() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const levelWrapper = document.createElement('div')
    const circle9 = document.createElement('div')
    const circle10 = document.createElement('div')
    const circle11 = document.createElement('div')
    const circle12 = document.createElement('div')

    levelWrapper.id = "level-10-wrapper"
    circle9.id = "circle-start-9"
    circle10.id = "circle-start-10"
    circle11.id = "circle-start-11"
    circle12.id = "circle-start-12"
    
    levelWrapper.append(circle9, circle10, circle11, circle12)
    levelGameAssets.append(levelWrapper)
  }

  level_ten_animation() {
    const levelGameAssets = document.getElementById('level-game-assets')
    while (levelGameAssets.firstChild) {
      levelGameAssets.removeChild(levelGameAssets.firstChild);
    }
    const levelWrapper = document.createElement('div')
    const circle9 = document.createElement('div')
    const circle13 = document.createElement('div')
    const circle14 = document.createElement('div')
    const circle15 = document.createElement('div')
    const circleLevel10 = document.createElement('div')
    circle9.id = "circle-start-9"
    circle13.id = "circle-start-13"
    circle14.id = "circle-start-14"
    circle15.id = "circle-start-15"
    circleLevel10.id = "game-circle-level-10"
    levelWrapper.id = "level-10-wrapper"
    levelWrapper.append(circle9, circle13, circle14, circle15, circleLevel10)
    levelGameAssets.append(levelWrapper)
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