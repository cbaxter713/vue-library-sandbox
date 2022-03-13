module.exports = {
  root: true,
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
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
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
