// TODO: import from CSV and programatically create obj
export const LEVELS = [
  {
    lessonNumber: 0,
    promptTitle:
      "Warm-up with the basics",
    promptInstructions:
      "Let's get our bearings by chaging the <code>background-color</code> of the box. New to CSS? Every level will have hints for you below these instructions.",
    syntaxHints: [
      "Syntax hints:",
      "General CSS pattern: <strong>property-name: {value to change};</strong>",
      "For this level use: <strong>background-color:</strong>",
      "And for the color use: <strong>$blue</strong>"
      ],
    boilerCode:
      [
        ".box {"
      ],
    inputTemplateCode: "",
    endingBoilerCode:
      [
        "}"
      ],
    numInputLines: 1,
    totalLines: 2,
    solution: ["(background-color)", "(blue)"],
    animationClass: "buttonHover",
    successMessage: "Light work 🥇 Nice job!"
  },
  { lessonNumber: 1,
    promptTitle:
    "Now let's add a 1 second transition the <code>background-color</code> on <code>hover</code>",
    promptInstructions:
      "Transitions in CSS allow you to change properties of an element smoothly over time. A transition requires two CSS selectors, one defining the initial state, and the other defining the new state. The initial state will specify the <code>transition-property</code>, which in this case is <code>background-color</code>, and the <code>transition-duration</code> which in our case is <strong>1 second<strong>. Let's transition this box from <code>$blue</code> to <code>$pink</code>.",
    syntaxHints:
      [
        "Use the properties below in your CSS transition:",
        "<strong>transition-property:</strong> {property to change};",
        "Example: <strong>transition-property: font-size</strong>",
        "<strong>transition-duration:</strong> {amount of seconds/milliseconds}", "Example: <strong>transition-duration: 2s</strong>"
      ],
    boilerCode:
      [
        ".box {",
          "background-color: $blue"
      ],
    inputTemplateCode: [
    ],
    endingBoilerCode:
      [
        "}",
        ".box:hover {",
        "  background-color: $purple",
        "}"
      ],
    numInputLines: 2,
    totalLines: 8,
    solution:
      [
        "(background-color)",
        "(1s)"
      ],
    successMessage: "That's it! Hover over the box to experience your transition."
  },

  { lessonNumber: 2,
    promptTitle:
    "Use shorthand transition syntax to also grow the shape on hover",
    promptInstructions:
    "Let's use the shorthand transition syntax to transition the <code>scale()</code> of the box to 110% over <strong>1 second</strong> when we hover. Pro-tip: you can transition <code>all</code> as a property, which will transition any properties that change.",
    syntaxHints:
      [
        "Use the properties below in your CSS transition:",
        "Shorthand: <strong>transition: (property) (time)</strong>",
        "Property to use: <strong>all</strong>",
        "Example: <strong>transition: font-size 0.5s</strong>",
      ],
    boilerCode:
      [ ".box {",
        "  transform: scale(100%);",
        "  background-color: $blue;", 
      ],
    endingBoilerCode:
      [
        "}",
        ".box:hover {", 
        "  transform: scale(110%);", 
        "  background-color: $purple;", 
        "}"
        ],
    numInputLines: 1,
    totalLines: 9,
    solution:
      ["(transition:)",
        "(all)",
        "(1s)"
      ],
    successMessage: "Hover over the box again to see the new transition!"
  },

  { lessonNumber: 3,
    promptTitle:
    "Animate the product elements so they move up when hovering",
    promptInstructions:
    "Transition the transform property, which will translate the Y cordinates of the element up 10px. The transition should be quick, let's use 125ms.",
    syntaxHints:
      [ "Hints and syntax:",
        "translate sytanx: translateX or translateY(amount)", 
        "ex. transform: translateX(5px)", 
        "Negative values move upwards on the Y asis"
      ],
    boilerCode:
      [ ".rise-up-level:hover {" ],
    inputTemplateCode: [
      "  transition: ",
      "  transform: "
    ],
    endingBoilerCode:
    [ "}", " ", ".rise-up-level {",
      "  will-change: transform;",
      "  transition: transform 450ms;", "}"
    ],
    numInputLines: 2,
    totalLines: 8,
    solution:
      [ "(transition)", "(transform)", "(125ms)",
        "(transform)", "(translateY)", "(-10px)"
      ],
    animationClass: "rise-up-level",
    successMessage: "Sweet! Hover over the products now to see the animation."
  },

  { lessonNumber: 4,
    promptTitle:
    "Animation time! Animate the header to fade-in when the page is loaded",
    promptInstructions:
    "The boiler code already includes an animation called slideIn. Apply the slideIn animation, use 1.2s for your interval, and ease-out for your timing function.",
    syntaxHints:
    [ "Hints and syntax:",
      "animation: @keyframes name | duration | easing-function", 
      "ex. animation: slideIn 5s linear", 
      "use a duration of 1.2s, and ease-out"],
    boilerCode:
    ["header {"],
    inputTemplateCode: [" animation:"],
    endingBoilerCode:
      [ "}",
        "@keyframes slideIn {",
        "0% {",
        "  margin-left: -50rem;",
        "  opacity: 0%;",
        "  filter: blur(1.5rem);",
        "}",
        "100% { ",
        "  margin-left: 0rem;",
        "  opacity: 100%;",
        "  filter: blur(0);",
        "}"
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