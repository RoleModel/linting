module.exports = {
  root: true,
  env: {
    commonjs: true, // ConD-specific
    es6: true
  },
  extends: ['standard'],
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
    "space-before-function-paren": ["error", {
      "anonymous": "never", // function() [}
      "named": "never", // function foo() {} (also applies in class bodies)
      "asyncArrow": "always" // async () => {}
    }],

    // Easier to scan a multiline expression if the operators are at the start
    // of each line. Similar to putting dots at the start of the line for
    // multiline method calls
    "operator-linebreak": ["error", "before"]
  }
}
