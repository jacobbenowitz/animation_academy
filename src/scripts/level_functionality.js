export default class LevelFunctionality {

  createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    return overlay;
  }

  toogleOverlay() {
    const body = document.querySelector('body');
    const overlay = this.createOverlay();
    // pull from levels object
    const successMessage = "Try it out, now the buttons transition smoothly!"
    const message = document.createElement('h2')
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
    section.classList.add('levelSection','grid-12-col');
    const h2 = document.createElement('h2')
    h2.innerHTML = "Level Assets";
    h2.classList.add('span-2-5-col');

    section.append(h2);
    body.append(section);
  }

  createRainbowBox(container) {
    const backgroundBox = document.createElement('div');
    const foregroundBox = document.createElement('div');
    backgroundBox.classList.add('center-span-5', 'backgroundBox');
    foregroundBox.classList.add('center-span-5', 'foregroundBox');
    backgroundBox.append(foregroundBox);
    container.append(backgroundBox);
  }

  addButtonTransitions() {
    document.querySelectorAll('.button').forEach(button => {
      button.classList.add('levels-button-hover');
    });
  }

  // focusFieldTranstion() {
    // texaarea and inputs
  // }

  levelSuccessAnimation(currentLevel) {
    // use current level to check animation sequence
    let animation = currentLevel.animation;
    this.animation();
  }

  animation() {
    this.addButtonTransitions()
    this.toogleOverlay();
  }

}