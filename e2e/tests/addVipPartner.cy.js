const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add VIP Partner - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a VIP partner", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('div > .menu-logout > li > a > .uil-briefcase-alt')
        .click(); // Navigate to VIP Partners section
        
        cy.get('.col-lg-12 > div > .form-row > .col-lg-8 > .button')
          .click(); // Click on Add VIP Partner button
        
        // Fill VIP partner details
        cy.get('#modalBody > .form-row > .form-group:nth-child(1) > .selectDiv > .champ-form__cm-input')
          .should('be.visible')
          .select('RT'); // Select Role Type
        
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
          .should('be.enabled')
          .click(); // Click Submit Button
        
        // Uncomment to validate success message if applicable
        // cy.get('.Snackbar_snackbar__text__1Hx2a')
        //   .should("contain", "Partner Added successfully"); // Verify success message
    });
});
