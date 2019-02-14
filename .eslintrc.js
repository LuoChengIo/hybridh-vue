module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/prettier'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
    'vue/component-name-in-template-casing': false,
    'vue/require-valid-default-prop': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    "prettier/prettier": [
      "error",
      {
        "semi": false,  
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}