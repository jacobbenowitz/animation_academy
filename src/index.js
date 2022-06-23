// entry point, bundler will take required files here for use in main.js
import NavLinkCreator from "./scripts/nav_bar";
import Hero from "./scripts/hero";
import TodoCreator from "./scripts/todo_creator";
import TodoFunctionality from "./scripts/todo";
import ProductsCreator from "./scripts/products";
import Game from "./scripts/game";
import { LEVELS } from "./scripts/levels"

document.addEventListener("DOMContentLoaded", () => {

    // create the nav bar links
    new NavLinkCreator();
    // create the hero section
    const hero = new Hero();
    // create todo section and form
    // create products 
    new ProductsCreator();
    // create new game
    const game = new Game();

    const playButtons = document.querySelectorAll('.play-now')
    playButtons.forEach(button => button.addEventListener('click', startGame))

    function startGame() {
        const currentLevel = localStorage.getItem('lessonNumber')
        if (parseInt(currentLevel) > 0) {
            game.currentLevel = LEVELS[parseInt(currentLevel)]
        } else {
            game.currentLevel = LEVELS[0]
        }
        hero.toggleHero()
        togglePlayButtons()
        game.gameSetup();
        game.levelNavListeners();
        game.userInputListener();
    }

    function togglePlayButtons() {
        const playButtons = document.querySelectorAll('.play-now')
        playButtons.forEach(button => {
            button.removeEventListener('click', startGame)
            button.addEventListener('click', game.hideGame)
            button.innerHTML = 'Pause'
            if (button.parentElement.className == "main-nav-link") {
                let icon = button.parentElement.childNodes[0]
                icon.classList.remove('fa-play')
                icon.classList.add('fa-pause')
            }
        })
    }

})