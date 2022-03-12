module.exports = {
  env: {
    node: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  plugins: ["jest"],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
