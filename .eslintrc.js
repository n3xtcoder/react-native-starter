module.exports = {
  extends: "airbnb",
  plugins: [
    "react-native",
  ],
  env: {
    browser: true,
  },
  rules: {
    "prefer-const": 0,
    "react/wrap-multilines": 0,
    "react/prefer-stateless-function": 1,
  },
  globals: {
  },
  parser: "babel-eslint",
};
