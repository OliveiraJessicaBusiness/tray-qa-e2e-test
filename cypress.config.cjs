const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://seubarriga.wcaquino.me',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 8000,
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // configurações adicionais aqui, se necessário
      return config;
    }
  }
});
