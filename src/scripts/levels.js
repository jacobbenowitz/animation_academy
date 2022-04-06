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
  {
    lessonNumber: 1,
    promptTitle:
      "1 testin one property on the button",
    promptInstructions:
      "Use the 'transition-property' and 'transition-duration' to smoothly transition the background color over 1 second.",
    syntaxHints: ["Hint! Use these properties:", "transition-property: background-color;", "transition-duration: 1s;"],
    boilerCode:
      [".level1 test {", "  background-color: none;"],
    inputTemplateCode:
      [" transition-property: ", " transition-duration: "],
    endingBoilerCode:
      [" ",".hero-button-hover:hover {", "  background-color: $primary;", "}"],
    numInputLines: 4,
    totalLines: 10,
    solution: ["(background-color)", "(1s)"]
  },
  {
    lessonNumber: 2,
    promptTitle:
      "2 test! to buttons",
    promptInstructions:
      "Use the 'transition-property' and 'transition-duration' to smoothly transition the background color over 1 second.",
    syntaxHints: ["Hint! Use these properties:", "transition-property: background-color;", "transition-duration: 1s;"],
    boilerCode:
      [".level 2 test {", "  background-color: none;"],
    inputTemplateCode:
      [" transition-property: ", " transition-duration: "],
    endingBoilerCode:
      [" ",".hero-button-hover:hover {", "  background-color: $primary;", "}"],
    numInputLines: 6,
    totalLines: 12,
    solution: ["(background-color)", "(1s)"]
  }
  ]