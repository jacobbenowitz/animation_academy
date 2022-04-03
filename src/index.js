// entry point, bundler will take required files here for use in main.js

import Example from "./scripts/functionality.js"
import NavLinkCreator from "./scripts/nav_bar"
import Hero from "./scripts/hero"
import PromptCreator from "./scripts/prompt"
import IdeCreator from "./scripts/ide"

document.addEventListener("DOMContentLoaded", () => {
    // sample
    const main = document.getElementById("main")
    new Example(main)

    // create the nav bar links
    const headerList = document.querySelector('.header-list')
    new NavLinkCreator(headerList)

    // create the hero section
    const hero = document.querySelector('.hero')
    new Hero(hero)

})