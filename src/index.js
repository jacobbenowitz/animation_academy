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
    const headerList = document.querySelector('.header-list');
    new NavLinkCreator(headerList);
    // create the hero section
    const hero = document.querySelector('.hero');
    new Hero(hero);
    // create todo section and form
    const todoSection = document.querySelector('.todo');
    new TodoCreator(todoSection);
    // add todo functionality
    const todoForm = document.querySelector('.todo-form');
    const todoList = document.querySelector('.todo-list');
    const todoStorage = JSON.parse(localStorage.getItem('todo-items')) || [];
    new TodoFunctionality(todoList, todoForm, todoStorage);
    // create products 
    const productsContainer = document.querySelector('.products-grid')
    new ProductsCreator(productsContainer);

    // create new game
    const game = new Game();

    const playButtons = document.querySelectorAll('.play-now')
    playButtons.forEach(button => button.addEventListener('click', startGame))
    // TODO add endGame buttons!
    // const endGameButton = document.querySelector('.end-game')
    // endGameButton.addEventListener('click', endGame)

    function startGame() {
        const interfaceContainer = document.getElementById('interface');
        if (localStorage.getItem('gameState') === 'idle') {
            game.currentLevel = LEVELS[0];
            togglePlayButtons()
            game.gameSetup();
            game.levelNavListeners();
            game.userInputListener();
        } else {
            interfaceContainer.classList.remove('slideOut')
            interfaceContainer.classList.add('slideIn')
        }
        // addResetButtons(); // review
    }

    function togglePlayButtons() {
        const playButtons = document.querySelectorAll('.play-now')
        playButtons.forEach(button => {
            button.removeEventListener('click', startGame)
            button.addEventListener('click', game.hideGame)
            button.innerHTML = 'Pause'
        })
    }

})