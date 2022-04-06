export default class LevelFunctionality {
  constructor() {
    this.bindHandlers();
    // this.eventListeners();
  }
  
  bindHandlers() {
    this.animation = this.animation.bind(this);
    this.removeOverlay = this.removeOverlay.bind(this);
  }

  eventListeners() {
    // levelSuccessAnimation()
  }

  levelSuccessAnimation() {
    // use current level to check animation sequence
    // let animation = currentLevel.animation; < call programatically
    // setTimeout(this.animation, 5000)
    this.animation();
  }

  animation() {
    this.addButtonTransitions()
    this.toogleOverlay();
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

  toogleOverlay() {
    const body = document.querySelector('body');
    const overlay = this.createOverlay();
    // pull from levels object
    const successMessage = "Try it out, now the buttons transition smoothly!"
    const message = document.createElement('h3')
    message.innerHTML = successMessage;
    message.classList.add('success-message');
    overlay.append(message);
    // debugger
    document.body.append(overlay)
    // let overlay = body.querySelector('#overlay')
    // if (overlay) {
    //   overlay.remove();
    // } else {
    //   overlay = this.createOverlay();
    //   body.append(overlay)
    // }
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
    foregroundBox.classList.add('center-simple', 'foreground-box');
    container.append(backgroundBox, foregroundBox);
  }

  addButtonTransitions() {
    document.querySelectorAll('.button').forEach(button => {
      button.classList.add('levels-button-hover');
    });
  }

  // focusFieldTranstion() {
    // texaarea and inputs
  // }

}