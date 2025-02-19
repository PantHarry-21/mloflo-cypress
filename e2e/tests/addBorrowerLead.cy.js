const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Lead from Pipeline - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a borrower lead from pipeline", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('div > .menu-logout > li:nth-child(2) > a > .uil-chart')
          .should('be.visible')
          .click(); // Navigate to Pipeline page
        
        cy.url().should("include", "/pipeline"); // Verify navigation to pipeline
        
        cy.get('.layout-grid-height-1 > .content-box > .form-row > .d-flex:nth-child(3) > .button')
          .should('be.visible')
          .click(); // Click on Add Lead button
        
        // Fill borrower lead details
        cy.get('#modalBody > .form-row > .form-group:nth-child(2) > .selectDiv > .champ-form__cm-input')
          .should('be.visible')
          .select('selfgen');
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(2) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.person.firstName()); // Enter first name
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(3) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.person.lastName()); // Enter last name
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(4) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.phone.number()); // Enter phone number
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(5) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.internet.email()); // Enter email
        
        cy.get('form > .modal-box--dialog__container-footer > .w-100 > .position-relative > .button')
          .should('be.enabled')
          .click(); // Click submit button
        
        cy.get('.Snackbar_snackbar__text__1Hx2a')
          .should("contain", "Lead Created successfully"); // Verify success message
    });
});
