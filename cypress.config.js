const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("@shelex/cypress-allure-plugin/writer")(on, config);
      return config;
    },
    supportFile: false, // Disables the support file
    baseUrl: "https://uat.mloflo.com/", // Update with your test URL
    specPattern: 
    ["e2e/firstTest.cy.js",
     "e2e/test scenarios/loginScenarios.cy.js"
    ],
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 20000,
    env: {
      allure: true,
    },
    video: false, // Set true if you want Cypress to record videos
    screenshotsFolder: "cypress/screenshots",
    trashAssetsBeforeRuns: true,
  },
});
