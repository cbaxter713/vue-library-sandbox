const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // {
    //   name: "@storybook/preset-scss",
    //   options: {
    //     sassLoaderOptions: {
    //       data: `@import "./src/styles/imports.scss";`,
    //     },
    //   },
    // },
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
  framework: "@storybook/vue3",
};
