const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wqw6u6",
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
      [
        "e2e/tests/login.cy.js",
        "e2e/tests/addBorrower.cy.js",
        "e2e/tests/logout.cy.js",
        "e2e/tests/resetPassword.cy.js",
        "e2e/tests/addBorrowerContact.cy.js",
        "e2e/tests/addBorrowerLead.cy.js",
        "e2e/tests/addPartnerContact.cy.js",
        "e2e/tests/addPartnerLead.cy.js",
        "e2e/tests/addVipPartner.cy.js",
        "e2e/tests/sendleadPartner.cy.js",
        "e2e/tests/addSource.cy.js",
        "e2e/tests/addDisposition.cy.js",
        "e2e/tests/addTags.cy.js",
        "e2e/tests/addCustomLink.cy.js",
        "e2e/tests/addAffiliations.cy.js"
        // "e2e/test scenarios/loginScenarios.cy.js",
        //  "e2e/test scenarios/addBorrowerLeadScenarios.cy.js"
      ],
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 20000,
    env: {
      allure: true,
    },
    video: false, // Set true if you want Cypress to record videos
    screenshotsFolder: "cypress/screenshots",
    trashAssetsBeforeRuns: true,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
