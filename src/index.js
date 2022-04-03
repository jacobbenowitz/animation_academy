// entry point, bundler will take required files here for use in main.js
import NavLinkCreator from "./scripts/nav_bar"
import Hero from "./scripts/hero"
import PromptCreator from "./scripts/prompt"
import IdeCreator from "./scripts/ide"
import TodoCreator from "./scripts/todo"

document.addEventListener("DOMContentLoaded", () => {

    // create the nav bar links
    const headerList = document.querySelector('.header-list')
    new NavLinkCreator(headerList)

    // create the hero section
    const hero = document.querySelector('.hero')
    new Hero(hero)
    
    const interfaceContainer = document.querySelector('.interface')
    new PromptCreator(interfaceContainer)

    new IdeCreator(interfaceContainer)

    const todoSection = document.querySelector('.todo')
    new TodoCreator(todoSection)

})