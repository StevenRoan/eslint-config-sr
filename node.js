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
    './rules/es2018.js',
    './rules/style.js',
  ]
}
