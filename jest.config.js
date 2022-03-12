module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["vue", "js", "ts"],
};
