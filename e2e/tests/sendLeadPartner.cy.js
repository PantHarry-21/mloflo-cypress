const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Send Lead to Partner - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Sends a lead to a partner", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('div > .menu-logout > li > a > .uil-briefcase-alt')
          .click(); // Navigate to Partners section
        
        cy.url().should("include", "/partners"); // Verify navigation to Partners page
        
        cy.get(':nth-child(1) > .pl-4 > .cstm-blue-brand-text')
          .should('be.visible')
          .click(); // Select first partner from the list
        
        cy.get('.content-box > .form-row > .d-flex-410 > .d-flex > .button')
          .should('be.visible')
          .click(); // Click on Send Lead button
        
        // Fill lead details
        cy.get('form > #modalBody > .form-row > .form-group > .text_light')
          .should('be.visible')
          .type(faker.person.firstName()); // Enter First Name
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(2) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.person.lastName()); // Enter Last Name
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(3) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.phone.number()); // Enter Phone Number
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(4) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.internet.email()); // Enter Email
        
        cy.get('form > .modal-box--dialog__container-footer > .w-100 > .position-relative > .button')
          .should('be.enabled')
          .click(); // Click Submit Button
        
        // Uncomment to validate success message if applicable
        // cy.get('.Snackbar_snackbar__text__1Hx2a')
        //   .should('contain', "Lead sent successfully"); // Validate success message
    });
});
