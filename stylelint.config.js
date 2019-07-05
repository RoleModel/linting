module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,

    // Figma and InVision both use upper case
    'color-hex-case': 'upper',

     // It's ok to have an @include with no return after it
    'declaration-empty-line-before': null,

    // Disabling because it gets confused by SCSS's nested classes feature.
    // Needs further investigation on how to make it work with SCSS
    'no-descending-specificity': null,

    'rule-empty-line-before': null,
    'scss/at-rule-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [
          'trix-editor',
          'trix-toolbar',
          // add any custom elements (like web components here)
        ]
      }
    ]
  }
}
