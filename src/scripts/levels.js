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
    animationClass: "buttonHover",
    successMessage: "Try it out, now the buttons transition smoothly!"
  },

  { lessonNumber: 1,
    promptTitle:
    "Shrink & grow all buttons on hover using a transition",
    promptInstructions:
    "Below you'll see the :hover state has a larger padding than the default.  Using the transition shorthand syntax, add a 250ms transtion for the padding property to achieve this effect, and use ease-in for the timing function.",
    cssProperties: ['transition'],
    syntaxHints:
      ["Transition shorthand syntax is nice and simple:",
        "transition: (property) (time) (timing function)",
        "ex: transition: font-size 500ms linear"
      ],
    boilerCode:
      [
        ".button {",
        "  padding: 5px 10px 5px 10px;",
        "  height: 100%;"
      ],
    inputTemplateCode: [" transition: "],
    endingBoilerCode:
      [
        ".levels-button-grow:hover {",
        "  padding: 8px 13px 8px 13px;"
      ],
    numInputLines: 1,
    totalLines: 8,
    solution:
    ["(transition)", "(padding)", "(250ms)", "(ease-in)"],
    animationClass: "levels-button-grow",
    successMessage: "Nice! Test the buttons out and watch them grow!"
  },

  { lessonNumber: 2,
    promptTitle:
    "Catch the user's attention when they hover over input fields",
    promptInstructions:
    "Add a 0.5s transition to the background color and the border color, this time using the shorthand transition syntax. Use the ease-in-out timing function.",
    cssProperties: ["transition"],
    syntaxHints:
      ["Use these properties again:",
        "transition-property: (property)",
        "transition-duration: (time)",
        "Example of time: 250ms",
        "Example of property: margin"],
    boilerCode:
      [ ".input {",
        "  background-color: #dadada54;",
        "  border: 2px solid $transparent;",
        "  border-radius: 4px;",
        "  padding-left: 10px;"
      ],
    inputTemplateCode: ["transition: "],
    endingBoilerCode:
      [
        "}", ".input:hover {", 
        "  background-color: #dadadaad;", 
        "  border: 2px solid $primary;",
        "  transition: border 0.5s ease-in;",
        ],
    numInputLines: 1,
    totalLines: 13,
    solution:
      ["(transition:)",
        "(background-color)",
        "(.5s)",
        "(ease-in-out)"
      ],
    animationClass: "input-level",
    successMessage: "Hover over the input fields to test it out!"
  },

  { lessonNumber: 3,
    promptTitle:
    "Animate the product elements so they move up when hovering",
    promptInstructions:
    "Transition the transform property, which will translate the Y cordinates of the element up 10px. The transition should be quick, let's use 125ms.",
    cssProperties: ["transition", "transform", "translateY"],
    syntaxHints:
      [ "Hints and syntax:",
        "translate sytanx: translateX or translateY(amount)", 
        "ex. transform: translateX(5em)", 
        "Negative values move upwards on the Y asis"
      ],
    boilerCode:
      [ ".rise-up-level:hover {" ],
    inputTemplateCode: [
      "  transition: ",
      "  transform: "
    ],
    endingBoilerCode:
    [ ".rise-up-level {",
      "  will-change: transform;",
      "  transition: transform 450ms;"
    ],
    numInputLines: 2,
    totalLines: 8,
    solution:
      [ "(transition)",
        "(transform 125ms)",
        "(transform: translateY(-10px))"
      ],
    animationClass: "rise-up-level",
    successMessage: "Sweet! Hover over the products now to see the animation."
  },

  { lessonNumber: 4,
    promptTitle:
    "Animation time! Animate the header to fade-in when the page is loaded",
    promptInstructions:
    "The boiler code already includes an animation called slideIn. Apply the slideIn animation, use 1.2s for your interval, and ease-out for your timing function.",
    cssProperties: ["animation", "ease-out", "@keyframes"],
    syntaxHints:
    [ "Hints and syntax:",
      "animation: @keyframes name | duration | easing-function", 
      "ex. animation: slideIn 5s linear", 
      "use a duration of 1.2s, and ease-out"],
    boilerCode:
    ["header {"],
    inputTemplateCode: [" animation:"],
    endingBoilerCode:
    [ "@keyframes slideIn {",
      "0% {",
      "  margin-left: -50rem;",
      "  opacity: 0%;",
      "  filter: blur(1.5rem);",
      "}",
      "100% { ",
      "  margin-left: 0rem;",
      "  opacity: 100%;",
      "  filter: blur(0);"
    ],
    numInputLines: 1,
    totalLines: 13,
    solution:
      ["(animation)", "(slideIn)", "(2s)", "(ease-in)"],
    animationClass: "slideIn",
    successMessage: "Reload the page to see your new header animation."
  },
]
// LEVEL TEMPLATE: 
  // { lessonNumber: 4,
  //   promptTitle:
  //   "",
  //   promptInstructions:
  //   "",
  //   cssProperties: [],
  //   syntaxHints:
  //   [],
  //   boilerCode:
  //   [],
  //   inputTemplateCode: [],
  //   endingBoilerCode:
  //   [],
  //   numInputLines: 0,
  //   totalLines: 0,
  //   solution:
  //   [REGEX...],
    // animationClass: "",
    // successMessage: ""
  // },