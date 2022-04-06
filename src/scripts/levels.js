// TODO: import from CSV and programatically create obj
export const LEVELS = [
  {
    lessonNumber: 0,
    promptTitle:
      "Smooth out the hover effect on all buttons",
    promptInstructions:
      "Currently the buttons on this site have a clunky hover effect. Enter CSS below to smoothly transition the background color over 1 second.",
    syntaxHints: ["Use these properties:", "transition-property: (property)", "transition-duration: (time)"],
    boilerCode:
      [".button {", "  background-color: none;"],
    inputTemplateCode:
      [" transition-property: ", " transition-duration: "],
    endingBoilerCode:
      [" ",".button:hover {", "  background-color: $primary;", "}"],
    numInputLines: 2,
    totalLines: 8,
    solution: ["(background-color)", "(1s)"],
    animation: "buttonHover"
  },
  { lessonNumber: 1,
    promptTitle:
    'Catch the user\'s attention when they hover over input fields',
    promptInstructions:
    'Add a 0.5s transition to the background color using the shorthand transition syntax. Use the ease-in-out timing function.',
    cssProperties: ["transition-property", "transition-duration"],
    syntaxHints:
    ["Transition shorthand syntax is nice and simple:", "transition: (property) (time) (timing function)", ""],
    boilerCode:
    [".code-input {","background-color: #dadada54;","border: 2px solid $transparent;","border-radius: 4px;","padding-left: 10px;"],
    inputTemplateCode: ['transition:'],
    endingBoilerCode:
    ["}", ".code-input:hover {", "background-color: #dadadaad;", "border: 2px solid $primary;", "transition: border 0.5s ease-in;","}"],
    numInputLines: 1,
    totalLines: 13,
    solution:
    ["(transition:)", "(background-color)", "(.5s)", "(ease-in-out)"],
    animationClass: 'input-hover' }
  ]