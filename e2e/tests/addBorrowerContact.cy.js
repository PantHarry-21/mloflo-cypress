const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Borrower Contact - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a borrower contact", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('div > .menu-logout > li > a > .uil-user-square')
          .should('be.visible')
          .click(); // Navigate to Contacts page
        
        cy.url().should("include", "/contacts"); // Verify navigation to Contacts page
        
        cy.get('.content-box > .form-row > .d-flex > .d-flex > .button')
          .should('be.visible')
          .click(); // Click on Add Contact button
        
        // Fill borrower contact details
        cy.get('#modalBody > .form-row > .form-group:nth-child(1) > .selectDiv > .champ-form__cm-input')
          .should('be.visible')
          .select('selfgen'); // Select Source
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(2) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.person.firstName()); // Enter First Name
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(3) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.person.lastName()); // Enter Last Name
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(4) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.phone.number()); // Enter Phone Number
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(5) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.internet.email()); // Enter Email
        
        cy.get('form > .modal-box--dialog__container-footer > .w-100 > .position-relative > .button')
          .should('be.enabled')
          .click(); // Click Submit Button
        
        cy.get('.Snackbar_snackbar__text__1Hx2a')
          .should("contain", "Data Added successfully"); // Verify success message
    });
});
