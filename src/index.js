// entry point, bundler will take required files here for use in main.js
import NavLinkCreator from "./scripts/nav_bar";
import Hero from "./scripts/hero";
// import PromptCreator from "./scripts/prompt";
// import IdeCreator from "./scripts/ide";
import TodoCreator from "./scripts/todoCreator";
import TodoFunctionality from "./scripts/todo";
import ProductsCreator from "./scripts/products";
import Game from "./scripts/game";

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
    new Game(interfaceContainer);
})