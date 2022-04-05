// TODO: import from CSV and programatically create obj
export const LEVELS = [
  {
    lessonNumber: 0,
    promptTitle:
      "Add a hover transition to buttons",
    promptInstructions:
      "Use the 'transition-property' and 'transition-duration' to smoothly transition the background color over 1 second.",
    boilerCode:
      [".hero-button-hover {", "  background-color: none;"],
    inputTemplateCode:
      [" transition-property: ", " transition-duration: "],
    endingBoilerCode:
      [" ",".hero-button-hover:hover {", "  background-color: $primary;", "}"],
    numInputLines: 2,
    totalLines: 8,
    solution: "transition: background-color 1s",
    syntaxHints: "transition-property: background-color; transition-duration: 1s;"
  },
  {
    lessonNumber: 1,
    promptTitle:
      "Add multiple transition properties to buttons on hover",
    promptInstructions:
      "Use the 'transition-property' and 'transition-duration' to smoothly transition the background color.",
    boilerCode:
      [".hero-button-hover {", "  color: $white;", "  background-color: none;"],
    endingBoilerCode:
      [" ",".hero-button-hover:hover {", "  background-color: $primary;", "}"],
    numInputLines: 3,
    totalLines: 10,
    solution: "transition: background-color 1s",
    syntaxHints: "transition-property: background-color; transition-duration: 1s;"
  }
  ]