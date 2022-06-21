// TODO: import from CSV and programatically create obj
export const LEVELS = [
  {
    lessonNumber: 0,
    promptTitle:
      "Warm-up with the basics",
    promptInstructions:
      "Let's get our bearings by chaging the <code>background-color</code> of the box to <code>$blue</code>. New to CSS? Every level will have hints for you below these instructions. CSS syntax follows this pattern: <code>property-name: {value to change};</code>",
    syntaxHints: [
      "Use the below in your CSS transition:",
      "Property: <strong>background-color:</strong>",
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
    promptTitle:
      "Use shorthand transition syntax to also grow the shape on hover",
    promptInstructions:
      "The shorthand transition syntax saves us time by allowing us to write the transitino on one line. Write a shorthand transition to <code>scale()</code> the box to <code>110%</code> over <code>1s</code>. <strong>Pro-tip:</strong> you can transition <code>all</code> as a property, which will transition any properties that change.",
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
    promptTitle:
      "On click (or tap) transition the shape to a circle and shrink it down",
    promptInstructions:
      "Since we are transitioning all properties, we only need to update the <code>active</code> state of the box. Change the <code>border-radius</code> to a value of <code>50%</code> to smooth the corners into a circle and bring the <code>scale()</code> down to <code>85%</code>.",
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
    promptTitle:
      "Transition all properties on hover with a custom <strong>easing-function</strong>",
    promptInstructions:
      "Acording to MDN, smoothing easing functions allow you 'to smooth down the start and end of the interpolation', making a more fluid animation instead of a rigid linear animation from start to end. Use shorthand to <code>transition</code> all properties over <code>1s</code> using the <code>cubic-bezier</code> defined below.",
    syntaxHints:
      [
        "Use the below properties in your CSS transition:",
        "<strong>transition: (property) (time) (timing function)</strong>",
        "Property to use: <strong>all</strong>",
        "<strong>cubic-bezier(0.785, 0.135, 0.15, 0.86)</strong>",
        "Example: ",
      ],
    boilerCode:
      [ ".box {" ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
        "}",
        ".box:hover"
      ],
    numInputLines: 2,
    totalLines: 4,
    solution:
      [
        /transition: all 1s cubic\-bezier\(0\.785, 0\.135, 0\.15, 0\.86\);/
      ],
    successMessage:
      "Sweet! Hover over the products now to see the animation."
  },
  { lessonNumber: 5,
    promptTitle:
      "",
    promptInstructions:
      "",
    syntaxHints:
      [
        "Use the below properties in your CSS transition:",
        "<strong> </strong> {property to change};",
        "Example: ",
      ],
    boilerCode:
      [ ".box {" ],
    inputTemplateCode: [],
    endingBoilerCode:
      [
        "}",
        ".box:hover"
      ],
    numInputLines: 2,
    totalLines: 4,
    solution:
      [
        
      ],
    successMessage:
      "Sweet! Hover over the products now to see the animation."
  }
]
// TEMPLATE

// { 
//   lessonNumber: 3,
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