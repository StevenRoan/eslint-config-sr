module.exports = {
  env: {
    node: true,
  },
  rules: {
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    './rules/babel.js',
    './rules/es2015.js',
    './rules/style.js',
  ]
}
