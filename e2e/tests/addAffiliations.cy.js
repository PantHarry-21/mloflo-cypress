const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Affiliation", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Add Affiliation", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('div > .menu-logout > li > a > .uil-wrench')
          .click(); // Navigate to Settings
        
        cy.url().should("include", "/settings/status"); // Verify navigation to Settings page
        
        cy.get('.mileStone > .mileStone-tab > a:nth-child(13) > .nav-item > .nav-link')
          .click(); // Navigate to Affiliations tab
        
        cy.url().should("include", "/settings/affiliations"); // Verify navigation to Affiliations section
        
        cy.get('.page-loader > .content-box > .d-flex > .d-flex > .cstm-dark-text')
        .click(); // Click on Add Affiliation button
        cy.wait(1500)
        cy.get('form > #modalBody > .form-row > .form-group > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.person.firstName()); // Enter Affiliation Name
        
        cy.get('form > .modal-box--dialog__container-footer > .border__top-grey > .position-relative > .button')
          .should('be.enabled')
          .click(); // Click Submit Button
        
        // Uncomment to validate success message if applicable
        // cy.get('.Snackbar_snackbar__text__1Hx2a')
        //   .should('contain', "Disposition added successfully"); // Validate success message
    });
});