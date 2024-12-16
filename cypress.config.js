const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 5000,
  e2e: {
    specPattern: 'cypress/e2e/tests',
    baseUrl: 'https://front.serverest.dev/'
  },
});