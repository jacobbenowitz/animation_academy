![AnimationAcademy](imgs/animation-academy-logo@1x.png)

# **Background**
Welcome to Animation Academy! Learn about how to make a webpage interactive using the transition and animation CSS properties. CSS Animations make a web experiences engaging by selecting static HTML elements and changing their properties over a time, often in response to user input or actions. Your goal is to make this webpage interactive, just follow the prompts to polish this site up!

This demo is divided into 3 sections where each level will prompt you to type CSS code in order to progress to the bext level. The 3 sections are:

2. **transitions**
2. **animations**
3. **@keyframes**

The game will start nice and easy with `transitions`, assuming the user has no knowledge of CSS animation properties. It will start by teaching users how to transition an element’s state based on events like hover. The advanced section, `animations`, will teach users how to animate elements with percentage states, `@keyframes`, and further polish animations by smoothing them out.

This game will use Node.js, vanilla DOM manipulation, and webpack as the module bundler for the project. 

# **Functionality & MVPs**

**In the Animation Academy demo, users will be able to:**

- type CSS into an IDE that is applied to the DOM
- progress to the next level if the level prompt was completed successfully
- get a visual indicator that the prompt was not met
- click a button to get a hint if they are stuck
- code up animations to be used directly on the web page
    - **[transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)**
        - [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)
        - [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
        - [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
        - [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)
    - **[animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)**
        - `color`, `scale`, `background-color`, `border`
        - `[animation-name](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)`
        - `[animation-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)`
        - `[animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)`
        - `[animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)`
    - **[@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)**
        - `from`
        - `to`
        - `<percentage>`

**In addition, this project will include:**

- a splash page that provides:
    - context about CSS animations
    - resources to learn more from the documentation
    - information about the developer
- a production README.md file

# **Wireframes**

[CSS Animation Game Wireframe - Figma](https://www.figma.com/file/bje4NnMpHhoA5q3TrHcK4v/CSS-Animation-Game?node-id=0%3A1)

![Wireframe](imgs/desktopLayout.png)

# **Technologies, Libraries, APIs**

- Node.js
- webpack

# **Implementation Timeline**
### **Thursday**
- Project scope, features, wireframes, tech stack
### **Fri - Sun**
- Solidify the levels for each section
- Design style, color themes
- List of all game assets needed, start creating
- Fonts
- HTML/CSS skeleton of all elements needed for MVP
- CSS Reset
- CSS grid system
### **Mon**
- Complete UI for base game
- Finalize all game assets
- Splash page
- Section #1: transforms
### **Tue**
- Section #2: transitions
- Section #3: @keyframes
### **Wed**
- Section #3: @keyframes
- Game polish: refine instructions, prompts, and hints
- Splash page, dev links, documentation links
- Bug testing
### **Thu**
- Deployment to Heroku / GitHub

# **Bonus Features**
- CSS Animation showcase of interesting animations along with the code for those interested
- Refine game for all screen types and inputs (mobile, tablet, laptop, desktop)

# **Fonts**
- Source Code Pro - IDE
    - https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap
- Prompt - Headings and Body
    - https://fonts.googleapis.com/css2?family=Prompt:wght@100;400;500;700