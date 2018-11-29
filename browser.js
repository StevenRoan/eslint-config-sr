module.exports = {
  env: {
    browser: true
  },
  rules: {
  },
  extends: [
    'eslint:recommended',
    'airbnb-base', // only the package can use in this rul
    './node_modules/eslint-config-airbnb/rules/react.js',
    './node_modules/eslint-config-airbnb/rules/react-a11y.js',
    './rules/babel.js',
    './rules/es2018.js',
    './rules/style.js',
  ]
}
