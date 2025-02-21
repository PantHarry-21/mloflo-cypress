const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Partner Lead from Pipeline - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a partner lead from pipeline", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('div > .menu-logout > li:nth-child(2) > a > .uil-chart')
          .should('be.visible')
          .click(); // Navigate to Pipeline page
        
        cy.url().should("include", "/pipeline"); // Verify navigation to pipeline
        
        cy.get('.layout-grid-height-1 > .mileStone > .mileStone-tab > .nav-item:nth-child(3) > .nav-link')
          .should('be.visible')
          .click(); // Navigate to Partner Leads tab
        
        cy.get('.form-row > .d-flex > .position-relative > .d-flex > .button')
          .should('be.visible')
          .click(); // Click on Add Partner Lead button
        
        // Fill partner lead details
        cy.get('#modalBody > .form-row > .form-group:nth-child(1) > .selectDiv > .champ-form__cm-input')
          .should('be.visible')
          .select('RT'); // Select Role Type
        
        cy.get('#modalBody > .form-row > .form-group:nth-child(2) > .selectDiv > .champ-form__cm-input')
          .should('be.visible')
          .select('PC'); // Select Partner Category
        
        cy.get('#modalBody > .form-row > .cstm-light-text:nth-child(3) > .selectDiv > .champ-form__cm-input')
          .should('be.visible')
          .select('selfgen'); // Select Source
        
        cy.get('form > #modalBody > .form-row > .cstm-light-text:nth-child(5) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.person.firstName()); // Enter First Name
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(6) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.person.lastName()); // Enter Last Name
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(7) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.internet.email()); // Enter Email
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(8) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.phone.number()); // Enter Phone Number
        
        cy.get('form > #modalBody > .form-row > .form-group:nth-child(12) > .champ-form__cm-input')
          .should('be.visible')
          .type(faker.company.name()); // Enter Company Name
        
        cy.get('.modal-box--dialog__container-footer > .w-100 > .position-relative:nth-child(3) > .button > span')
          .click(); // Click Submit Button
        
        // cy.get('.Snackbar_snackbar__text__1Hx2a')
        //   .should("contain", "Partner Created successfully"); // Verify success message
    });
});
