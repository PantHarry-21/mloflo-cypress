const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add partner from header", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Add partner from header", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('div > .dropdown-custom > .dropdown-toggle > .bg-transparent > .uil-plus')
          .should('be.visible')
          .click(); // Open dropdown menu
        
        cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(1) > span')
          .should('be.visible')
          .click(); // Select "Add partner" option
        
        // Fill tag details
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
        
        cy.get('.w-100 > :nth-child(3) > .button')
          .should('be.enabled')
          .click(); // Click Submit Button

        // cy.get('.Snackbar_snackbar__text__1Hx2a')
        // .should('contain', "Partner Created Successfully")
    });
});
