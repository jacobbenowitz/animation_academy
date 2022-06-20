export default class Hero {
  constructor() {
    this.hero = document.querySelector('.hero');
    // this.addOuterSection();
    this.addInnerSections();
    // this.styleHeroSection();
    this.addContent();
  }

  addOuterSection() {
    const heroContent = document.createElement('div')
    this.hero.appendChild(heroContent)
  }

  // create col structure
  addInnerSections() {
    const heroContent = document.querySelector('#hero-content')
    heroContent.classList.add("grid-12-col")

    const leftCol = document.createElement('div')
    const rightCol = document.createElement('div')

    heroContent.appendChild(leftCol).classList.add('left-col')
    heroContent.appendChild(rightCol).classList.add('right-col')
  }

  addContent() {
    const rightCol = document.querySelector('#hero-content > .right-col')
    const h1 = document.createElement('h1')
    h1.innerHTML = "Learn CSS Animations"

    const heroText = document.createElement('p')
    heroText.innerHTML = "Ready to start learning how to use transitions and animations in CSS? Click the button below to get started.";
    heroText.classList.add('subheading')

    const button = document.createElement('a')
    button.classList.add('button', 'play-now', 'primary')
    const lessonNumber = localStorage.getItem("lessonNumber")
    if (lessonNumber == "0") {
      button.innerHTML = "Play now"
    } else {
      button.innerHTML = "Resume level " + lessonNumber
    }
    button.href = "#"

    rightCol.append(h1, heroText, button)
  }

  toggleHero() {
    const heroBg = document.getElementById('hero-2')
    const heroContent = document.getElementById('hero-content')
    heroContent.classList.add('hide-hero')
    heroBg.classList.add('hide-hero')
  }
}