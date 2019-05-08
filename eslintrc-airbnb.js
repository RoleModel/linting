module.exports = {
  root: true,
  env: {
    commonjs: true, // ConD-specific
    es6: true
  },
  extends: ['airbnb'],
  // Support language features that are provided by Babel (not required for JSX)
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2019
  },
  rules: {
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_", // Allow unused arguments starting with an underscore
        "varsIgnorePattern": "^_" // Allow unused variables starting with an underscore
      }
    ],

    // No semicolons
    "semi": ["error", "never"],
    "no-unexpected-multiline": "error",

    // 1. We follow the convention of naming "private" properties with a leading underscore
    // 2. This conflicts with the no-unused-vars config
    "no-underscore-dangle": "off",

    // Could go either way on this one. Personally prefer without.
    "comma-dangle": ["error", "never"],

    // Maybe we want to enforce JSX files having the .jsx extension, but ConD hasn't so far
    "react/jsx-filename-extension": "off",

    // I generally consider extra parens as extra clutter
    "react/jsx-wrap-multilines": "off",

    // Don't require naming all non-arrow functions
    "func-names": "off",

    // Breaks in a Rails/Webpacker environment (might be able to get it to use the correct require paths)
    "import/no-unresolved": "off",

    "class-methods-use-this": "off",

    "no-console": "off",

    // There are valid places to do this (but they may not be the majority)
    "no-await-in-loop": "off",

    // Generally safe when using let/const
    "no-loop-func": "off",

    // Would prefer this not being enforced
    "prefer-destructuring": "off",

    // How do we feel about directly requiring sub-dependencies?
    "import/no-extraneous-dependencies": "off",

    // One-liner methods can be readable without the extra spacing
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],

    // Allow assigning to properties of arguments (might consider completely disabling this rule)
    "no-param-reassign": ["error", { "props": false }],

    // This rule complains about use of things like PropTypes.object. We could
    // use more-specific types, but that could be a pain with smart objects.
    "react/forbid-prop-types": "off",

    // This rule enforces either always or never destructuring state and props.
    // There is no "sometimes" option.
    "react/destructuring-assignment": "off",

    // This one's usually just annoying
    "max-len": "off",

    // Disabled to allow interpolating text and components
    "react/jsx-one-expression-per-line": "off",

    // Complains if you mix `return` with `return <value>` in a function
    "consistent-return": "off",

    "react/prefer-stateless-function": "off",

    "implicit-arrow-linebreak": "off",

    "function-paren-newline": ["error", "consistent"],

    // Doesn't work well if react/jsx-wrap-multilines is off
    "react/jsx-closing-tag-location": "off",

    // This rule is deprecated
    "jsx-a11y/label-has-for": "off",

    // Default requires the label to both wrap the input and have htmlFor set
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "assert": "either",
        "controlComponents": ['TextInput'], // Put custom input components here
        "depth": 25,
        "labelAttributes": [],
        "labelComponents": []
      }
    ],

    // Whether a prop is required or optional isn't really related to if it has a default value
    "react/require-default-props": "off",

    "no-cond-assign": ["error", "except-parens"],

    // Default disallows mixing exponentiation with other arithmetic operators
    "no-mixed-operators": [
      "error",
      {
        "allowSamePrecedence": false, // Could also make this true
        "groups": [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ]
      }
    ]
  }
}
