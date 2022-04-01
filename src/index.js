// entry point, bundler will take required files here for use in main.js

import Example from "./scripts/functionality.js"

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main")
    new Example(main)
})