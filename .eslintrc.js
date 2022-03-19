module.exports = {
  root: true,
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2022,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    "jest/globals": true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  plugins: ["jest"],
  rules: {
    "vue/script-setup-uses-vars": "error",
  },
};
