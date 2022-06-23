// TODO: import from CSV and programatically create obj
export const LEVELS = [
  {
    lessonNumber: 0,
    levelSection: "Introduction",
    promptTitle:
      "Warm-up with the basics",
    promptInstructions:
      "Let's get our bearings by chaging the <code>background-color</code> of the box to <code>$blue</code>. New to CSS? Every level will have hints for you below these instructions. CSS syntax follows this pattern: <code>property-name: {value to change};</code>",
    syntaxHints: [
      "Use the below in your CSS transition:",
      "Property: <strong>background-color:</strong> {color}",
      "And for the color use: <strong>$blue</strong>"
      ],
    boilerCode:
      [
        ".box {"
      ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
        "}"
      ],
    numInputLines: 1,
    totalLines: 2,
    solution:
      [
        /background\-color: \$blue;/
      ],
    animationClass: "buttonHover",
    successMessage: "Light work 🥇 Nice job!"
  },
  {
    lessonNumber: 1,
    levelSection: "Introduction",
    promptTitle:
      "Now let's add a 1 second transition the <code>background-color</code> on <code>hover</code>",
    promptInstructions:
      "Transitions in CSS allow you to change properties of an element smoothly over time. A transition requires two CSS selectors, one defining the initial state, and the other defining the new state. The initial state will specify the <code>transition-property</code>, which in this case is <code>background-color</code>, and the <code>transition-duration</code> which in our case is <code>1s</code>. Let's transition this box from <code>$blue</code> to <code>$pink</code>.",
    syntaxHints:
      [
        "Use the below properties in your CSS transition:",
        "<strong>transition-property:</strong> {property to change};",
        "Example: <strong>transition-property: font-size</strong>",
        "<strong>transition-duration:</strong> {seconds/milliseconds}", "Example: <strong>transition-duration: 2s</strong>"
      ],
    boilerCode:
      [
        ".box {",
        "  background-color: $blue"
      ],
    inputTemplateCode: [],
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
        /transition\-property: background\-color;/,
        /transition\-duration: 1s;/
      ],
    successMessage:
        "That's it! Hover over the box to experience your transition."
  },

  {
    lessonNumber: 2,
    levelSection: "Introduction",
    promptTitle:
      "Use shorthand transition syntax to also grow the shape on hover",
    promptInstructions:
      "The shorthand transition syntax saves us time by allowing us to write the transition on one line. Write a shorthand transition to <code>scale()</code> the box to <code>110%</code> over <code>1s</code>. <strong>Pro-tip:</strong> you can transition <code>all</code> as a property, which will transition any properties that change.",
    syntaxHints:
      [
        "Use the below properties in your CSS transition:",
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
      [
        /transition: all 1s;/
      ],
    successMessage:
      "Hover over the box again to see the new transition!"
  },
  {
    lessonNumber: 3,
    levelSection: "Introduction",
    promptTitle:
      "On click (or tap) transition the shape to a circle and shrink it down",
    promptInstructions:
      "Since we are transitioning all properties, we only need to update the <code>active</code> state of the box. Change the <code>border-radius</code> to a value of <code>50%</code> to smooth the corners into a circle. Also, bring the <code>scale()</code> down to <code>85%</code>.",
    syntaxHints:
      [
        "Use the below properties in your CSS transition:",
        "<strong>border-radius</strong> (value);",
        "Example: <strong>border-radius: 10%</strong> ",
        "<strong>transform:</strong> scale(value);",
        "Example: <strong>transform: scale(95%)</strong> ",
      ],
    boilerCode:
      [ ".box:active {" ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
        "}"
      ],
    numInputLines: 2,
    totalLines: 4,
    solution:
      [
        /border-radius: 50%;/,
        /transform: scale\(85%\);/
      ],
    successMessage:
      "Now we have a fun animation, give it a click!"
  },
  {
    lessonNumber: 4,
    levelSection: "Introduction",
    promptTitle:
      "Transition all properties on hover with a custom <strong>easing-function</strong>",
    promptInstructions:
      "Smoothing easing functions allow you to smooth down the start and end of the interpolation, making a more fluid animation instead of a rigid linear animation. Use shorthand to <code>transition</code> all properties over <code>1s</code> using the <code>cubic-bezier</code> defined below.",
    syntaxHints:
      [
        "Use the below properties in your CSS transition:",
        "<strong>transition: (property) (time) (timing function)</strong>",
        "Property to use: <strong>all</strong>",
        "Use the timing function below: ",
        "<strong>cubic-bezier(0.785, 0.135, 0.15, 0.86)</strong>",
      ],
    boilerCode:
      [ ".box {" ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
        "}",
        ".box:hover {",
        "  transform: rotate(180deg) scale(40%);",
        "}"
      ],
    numInputLines: 1,
    totalLines: 6,
    solution:
      [
        /transition: all 1s cubic\-bezier\(0\.785, 0\.135, 0\.15, 0\.86\);/
      ],
    successMessage:
      "Sweet! Hover over the products now to see the animation."
  },
  {
    lessonNumber: 5,
    levelSection: "Introduction",
    promptTitle:
      "Solo Challange: Transition the position on hover",
    promptInstructions:
      "First we'll need to write the transition inside the initial state like we have before. After that, we'll need to define the <code>:hover</code> state by using a CSS selector followed by the new position properties. Using <code>transform: translateY()</code> move the circle up by <code>-150px</code> over <code>1s</code> and use the built-in <code>ease-in</code> timing function. See the hints below if you're unsure!",
    syntaxHints:
      [
        "Tranition and CSS Selector syntax hints:",
        "<strong>transition: (property) (time) (timing function)</strong>",
        "Property to use: <strong>transform</strong>",
        "Selector: <strong>.circle</strong>, Hover state: <strong>:hover</strong>",
        "Example selector: <strong>.box:hover {</strong>",
        "Transform: <strong>transform: translateY(value)</strong>",
        "Don't forget your closing curly braces!",
      ],
    boilerCode:
      [
        ".circle {",
        "  width: 240px;",
        "  height: 240px;"
      ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
      ],
    numInputLines: 4,
    totalLines: 7,
    solution:
      [
        /transition: transform 1s ease\-in;/,
        /(transition: transform 1s ease\-in;)/,
        /(\})/,
        /\.circle:hover \{/,
        /transform: translateY\(\-150px\);/,
        /(\})/
      ],
    successMessage:
      "Sweet! Hover over the products now to see the animation."
  },
  { 
    lessonNumber: 6,
    levelSection: "Transitions",
    promptTitle:
      "Transition the <code>border</code> and <code>box-shadow</code> of the button on hover",
    promptInstructions:
      "Apply your CSS transition skills to make this button interactive. In the initial state, add a <code>0.5s</code> transition to <code>all</code> properties and use <code>ease-in-out</code> as your timing function. Then, define your <code>:hover</code> state with a <strong>solid 2px</strong> <code>border</code> and the <code>box-shadow</code> listed below.",
    syntaxHints:
      [
        "<strong>transition: (property) (time) (timing function)</strong>",
        "Selector: <strong>.button</strong>, Hover state: <strong>:hover</strong>",
        "Border syntax: <strong>border: (weight) (style) (color)</strong>",
        "Example: <strong>border: 2px solid $white</strong>",
        "Box shadow syntax:",
        "<strong> box-shadow: (offset-x) (offset-y) (blur-radius) (color)</strong> ",
        "Use this box-shadow:",
        "<strong>box-shadow: 0px 0px 14px $pink;</strong>"
      ],
    boilerCode:
      [
        ".button {",
        "  border: 2px solid $transparent"
      ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
      ],
    numInputLines: 6,
    totalLines: 8,
    solution:
      [
        /transition: all 0.5s ease\-in\-out;/,
        /\}/,
        /\.button:hover \{/,
        /border: solid 2px \$pink;/,
        /box\-shadow: 0px 0px 14px \$pink;/,
        /\}/
      ],
    successMessage:
      "Solid work, give that button a hover to see your transition!"
  },
  { 
    lessonNumber: 7,
    levelSection: "Transitions",
    promptTitle:
      "Transition the <code>background-color</code> and <code>scale</code> of the button on hover",
    promptInstructions:
      "Now let's make this button satisfying to click. In the <code>active</code> state, add a <code>background-color</code> of <code>$pink</code> and use <code>transform</code> to scale the button up to <code>110%</code>.",
    syntaxHints:
      [
        "<strong>transition: (property) (time) (timing function)</strong>",
        "Selector: <strong>.button</strong>, Hover state: <strong>:hover</strong>",
        "Border syntax: <strong>border: (weight) (style) (color)</strong>",
        "Example: <strong>border: 2px solid $white;</strong>",
        "Box shadow syntax:",
        "<strong> box-shadow: (offset-x) (offset-y) (blur-radius) (color)</strong> ",
        "Use this box-shadow:",
        "<strong>box-shadow: 0px 0px 14px $pink;</strong>"
      ],
    boilerCode:
      [
        ".button {",
        "  border: 2px solid $transparent"
      ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
      ],
    numInputLines: 6,
    totalLines: 8,
    solution:
      [
        /transition: all 1s ease\-in\-out;/,
        /\}/,
        /\.button:hover \{/,
        /border: solid 2px \$pink;/,
        /box\-shadow: 0px 0px 14px \$pink;/,
        /\}/
      ],
    successMessage:
      "There you go! 🎉"
  },
  { 
    lessonNumber: 8,
    levelSection: "Animations",
    promptTitle:
      "Animate the <code>background-color</code> of the shape infinately",
    promptInstructions:
      "Welcome to <code>@keyframes</code>! Keyframes animations are similar to transitions, but you can define many states by using percentages. To start off, we will only use 2 states with the simple <code>from</code> and <code>to</code> syntax. You're goal is to apply the animation using the syntax detailed below.",
    syntaxHints:
      [
        "@keyframes name: <strong>pinkToBlue</strong>",
        "Duration: <strong>2s</strong>",
        "Easing function: <strong>ease-in-out</strong>",
        "Iteration count: <strong>infinate alternate</strong>",
        "animation: (@keyframes name) (duration) (easing-function) (iteration count)",
        "Example: <strong>animation: fadeIn 1s ease-in 3;</strong>",
      ],
    boilerCode:
      [
        "@keyframes pinkToBlue {",
        "  from {",
        "    background-color: $blue",
        "  }",
        "  to {",
        "    background-color: $pink",
        "  }",
        "  .box {"
      ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
        "}"
      ],
    numInputLines: 1,
    totalLines: 10,
    solution:
      [
        /animation: pinkToBlue 2s ease\-in\-out infinite alternate;/
      ],
    successMessage:
      "✅ Your first animation! Good work 👍"
  },
  { 
    lessonNumber: 9,
    levelSection: "Animations",
    promptTitle:
      "Animate the circle in a 360 degree loop",
    promptInstructions:
      "For this fun animation we'll be looping the circle around <code>infinite</code> times over <code>6s</code> using the <code>linear</code> timing function.",
    syntaxHints:
      [
        "@keyframes name: <strong>circleLoop</strong>",
        "Duration: <strong>6s</strong>",
        "Easing function: <strong>linear</strong>",
        "Iteration count: <strong>infinate</strong>",
        "animation: (@keyframes name) (duration) (easing-function) (iteration count)",
        "Example: <strong>animation: fadeIn 1s ease-in 3;</strong>",
      ],
    boilerCode:
      [
        "@keyframes circleLoop {",
        "  from {",
        "    transform: rotate(0deg)",
        "               translate(-165px)",
        "               rotate(0deg); ",
        "  }",
        "  to {",
        "    transform: rotate(360deg)",
        "               translate(-165px)",
        "               rotate(360deg); ",
        "  }",
        "  .circle {"
      ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
        "}"
      ],
    numInputLines: 1,
    totalLines: 14,
    solution:
      [
        /animation: circleLoop 6s linear infinite;/
      ],
    successMessage:
      "Light work 👏"
  },
  { 
    lessonNumber: 10,
    levelSection: "Animations",
    promptTitle:
      "Animate a pulsing circle that scales larger as it fades away",
    promptInstructions:
      "For your final challange you'll be writing your own <code>@keyframes</code> animation to create a pulsing effect using the <code>to</code> <code>from</code> syntax. In the <code>from</code> state, start with a <strong>scale of 50%</strong> and an <strong>opacity of 50%</strong>. Then, in the <code>to</code> state change the <strong>scale to 250%</strong> and <strong>opacity to 0%</strong>.",
    syntaxHints:
      [
        "@keyframes syntax: <strong>@keyframes (animationName) {...}</strong>",
        "Use the animation name: <strong>circlePulse</strong>",
        "Inside @keyframes: define both <strong>from {...} and to {...}</strong>",
        "Scale syntax: <strong>transform: scale(percentage)</strong>",
        "Opacity syntax: <strong>opacity: (percentage)</strong>",
      ],
    boilerCode:
      [
        ".circle {",
        "  animation: circlePulse 4s infinate cubic-bezier(0.86, 0.12, 0.55, 0.96)",
        "}"
      ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
      ],
    numInputLines: 10,
    totalLines: 15,
    solution:
      [
        /@keyframes circlePulse \{/,
        /from \{/,
        /transform: scale\(50%\);/,
        /opacity: 50%;/,
        /\}/,
        /to \{/,
        /transform: scale\(250%\);/,
        /opacity: 0%;/,
        /\}/,
        /\}/,
      ],
    successMessage:
      ""
  }
]

// TEMPLATE
// { 
//   lessonNumber: 3,
//   levelSection: "Introduction",
//   promptTitle:
//     "",
//   promptInstructions:
//     "",
//   syntaxHints:
//     [
//       "Use the below properties in your CSS transition:",
//       "<strong> </strong> {property to change};",
//       "Example: ",
//     ],
//   boilerCode:
//     [ ".box {" ],
//   inputTemplateCode: [],
//   endingBoilerCode:
//     [
//       "}",
//       ".box:hover"
//     ],
//   numInputLines: 2,
//   totalLines: 4,
//   solution:
//     [
//       
//     ],
//   successMessage:
//     "Sweet! Hover over the products now to see the animation."
// }