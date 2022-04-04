// TODO: import from CSV and programatically create obj
export const LEVELS = [
  {
    lessonNumber: 1,
    promptTitle:
      "Add a hover effect to buttons",
    promptInstructions:
      "Use the 'transition-property' and 'transition-duration' properties to make the buttons change color on hover",
    cssProperties:
      ["transition-property", "transition-duration"],
    boilerCode:
      ["#boiler {", " position: absolute;", " color: green;", "}", "#button {"],
    lines: 8,
    solution: "transition: width 2s ease-in",
    syntaxHints: "transition-property: font-size; transition-duration: 4s; transition-delay: 2s;"
  }
  ]