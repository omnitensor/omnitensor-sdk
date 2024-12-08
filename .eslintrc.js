
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "no-unused-vars": "warn",
    "semi": ["error", "always"],
    "quotes": ["error", "single"]
  }
};
