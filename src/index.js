// entry point, bundler will take required files here for use in main.js
import NavLinkCreator from "./scripts/nav_bar"
import Hero from "./scripts/hero"
import PromptCreator from "./scripts/prompt"
import IdeCreator from "./scripts/ide"
import TodoCreator from "./scripts/todoCreator"
import TodoFunctionality from "./scripts/todo"
import ProductsCreator from "./scripts/products"

document.addEventListener("DOMContentLoaded", () => {

    // create the nav bar links
    const headerList = document.querySelector('.header-list')
    new NavLinkCreator(headerList)

    // create the hero section
    const hero = document.querySelector('.hero')
    new Hero(hero)
    // create game interface
    const interfaceContainer = document.querySelector('.interface');
    new PromptCreator(interfaceContainer);
    // create ide for user input
    new IdeCreator(interfaceContainer);
    // create todo section and form
    const todoSection = document.querySelector('.todo');
    new TodoCreator(todoSection);
    // add todo functionality
    const todoForm = document.querySelector('.todo-form');
    const todoListContainer = document.querySelector('.todo-list');
    const todoStorage = JSON.parse(localStorage.getItem('todo-items')) || [];
    new TodoFunctionality(todoListContainer, todoForm, todoStorage);
    // create products 
    const productsContainer = document.querySelector('.products-grid')
    new ProductsCreator(productsContainer);
})