const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Tag in Settings - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a new tag in settings", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('div > .menu-logout > li > a > .uil-wrench')
          .click(); // Navigate to Settings
        
        cy.url().should("include", "/settings/status"); // Verify navigation to Settings page
        
        cy.get('.mileStone > .mileStone-tab > a:nth-child(12) > .nav-item > .nav-link')
          .click(); // Navigate to Tags tab
        
        cy.url().should("include", "/settings/tags"); // Verify navigation to Tags section
        
        cy.get('div > .content-box > .d-flex > .d-flex > .button:nth-child(1)')
          .should('be.visible')
          .click(); // Click on Add Tag button
        
        cy.get('form > #modalBody > .form-row > .form-group > .champ-form__cm-input')
          .type(faker.person.firstName()); // Enter Tag Name
        
        cy.get('form > .modal-box--dialog__container-footer > .border__top-grey > .position-relative > .button')
          .should('be.enabled')
          .click(); // Click Submit Button
        
        // Uncomment to validate success message if applicable
        // cy.get('.Snackbar_snackbar__text__1Hx2a')
        //   .should("contain", "Tag Added successfully"); // Verify success message
    });
});
