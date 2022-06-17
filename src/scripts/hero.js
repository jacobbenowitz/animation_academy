export default class Hero {
  constructor(hero) {
    this.hero = hero;
    this.addOuterSection();
    this.addInnerSections();
    // this.styleHeroSection();
    this.addContent();
  }

  addOuterSection() {
    const heroContent = document.createElement('div')
    this.hero.appendChild(heroContent).classList.add('hero-content')
  }
  
  // create col structure
  addInnerSections() {
    const heroContent = document.querySelector('.hero-content')
    heroContent.classList.add("grid-12-col")

    const leftCol = document.createElement('div')
    const rightCol = document.createElement('div')

    heroContent.appendChild(leftCol).classList.add('left-col')
    heroContent.appendChild(rightCol).classList.add('right-col')
  }
  // add styling
  // styleHeroSection() {
  //   this.hero.style.backgroundImage = "url('imgs/homeHero_optimized.jpg')"
  // }

  addContent() {
    const rightCol = document.querySelector('.hero-content > .right-col')
    const h1 = document.createElement('h1')
    h1.innerHTML = "Learn CSS Animations"
    
    const heroText = document.createElement('p')
    heroText.innerHTML = "Ready to start learning how to use transitions and animations in CSS? Click the button below to start. "

    const button = document.createElement('a')
    button.classList.add('button', 'play-now')
    button.innerHTML = "Play now"
    button.href = "#"

    rightCol.append(h1, heroText, button)
  }
}