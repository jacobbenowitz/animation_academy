// entry point, bundler will take required files here for use in main.js
import NavLinkCreator from "./scripts/nav_bar";
import Hero from "./scripts/hero";
import TodoCreator from "./scripts/todo_creator";
import TodoFunctionality from "./scripts/todo";
import ProductsCreator from "./scripts/products";
import Game from "./scripts/game";
import { LEVELS } from "./scripts/levels"
import LevelFunctionality from "./scripts/level_functionality";

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
    const interfaceContainer = document.querySelector('.interface');
    const game = new Game(interfaceContainer);

    // TODO: Load without ide, wait for play button click
    const playButton = document.querySelectorAll('.play-now')
    // const endGameButton = document.querySelector('.end-game')
    playButton.forEach(button => button.addEventListener('click', startGame))
    // TODO add endGame buttons!
    // endGameButton.addEventListener('click', endGame)

    function startGame() {
        // playButton.classList.add('end-game')
        // playButton.classList.remove('start-game')
        // playButton.innerHTML = "End game"
        game.currentLevel = LEVELS[0];
        game.gameSetup();
        game.levelNavListeners();
        game.userSubmitListener();
        playButton.forEach(button => button.style.display = 'none');
    }
    // function endGame() {
    //     localStorage.clear();
    //     game.resetLevel();
    // }

    function lessonNavButtons() {
        const back = document.querySelector('prev-lesson');
        const next = document.querySelector('next-lesson');
    }

})