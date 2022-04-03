class Hero {
  constructor(hero) {
    this.hero = hero
    this.addOuterSection()
    this.addInnerSections()
    this.styleHeroSection()
    this.addContent()
  }

  addOuterSection() {
    const heroContent = document.createElement('div')
    this.hero.appendChild(heroContent).classList.add('hero-content')
  }
  
  // create col structure
  addInnerSections() {
    const heroContent = document.querySelector('.hero-content')
    const leftCol = document.createElement('div')
    const rightCol = document.createElement('div')
    heroContent.classList.add("grid-2-col")
    heroContent.appendChild(leftCol).classList.add('left-col')
    heroContent.appendChild(rightCol).classList.add('right-col')
  }
  // add styling
  styleHeroSection() {
    this.hero.style.backgroundImage = "url('imgs/homeHero_optimized.jpg')"
  }

  addContent() {
    const rightCol = document.querySelector('.hero-content > .right-col')
    const h1 = document.createElement('h1')
      h1.innerHTML = "Learn CSS Animations"
    const heroText = document.createElement('p')
    heroText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor urna, commodo penatibus porta a dolor. Sed mi consectetur morbi elit senectus egestas ut sed. Id pretium ultricies volutpat massa. Duis eu commodo malesuada enim, viverra in."
    rightCol.append(h1, heroText)
  }
}
export default Hero;