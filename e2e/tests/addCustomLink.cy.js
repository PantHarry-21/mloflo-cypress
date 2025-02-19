const { faker } = require("@faker-js/faker");

Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

describe("Add Custom Link - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a custom link", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('.user > div > .dropdown-custom > .dropdown-toggle > .user-profile-box')
          .should('be.visible').click(); // Open user profile dropdown
        
        cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(4) > .dropdown-item')
          .should('be.visible').click(); // Click on custom links
        
        cy.get('#content > .page-loader > .content-box > .d-flex > .button')
          .should('be.visible').click(); // Click add link button
        
        // Fill custom link form
        cy.get('#modalBody > .page-loader > .form-row > .col-lg-6:nth-child(1) > .champ-form__cm-input')
          .should('be.visible').type(faker.company.name()); // Enter Link name
        
        cy.get('#modalBody > .page-loader > .form-row > .col-lg-6:nth-child(2) > .champ-form__cm-input')
          .should('be.visible').type(faker.lorem.word()); // Enter short Id
        
        cy.get('#modalBody > .page-loader > .form-row > .col-lg-6:nth-child(1) > .champ-form__cm-input')
          .should('be.visible').click(); // Click input field (simulate user action)
        
        cy.get('#modalBody > .page-loader > .form-row > .col-lg-6 > .d-flex')
          .should('be.visible').click(); // Click save button
        
        cy.visit('https://uat.mloflo.com/loan-officer/links'); // Verify redirect to links page
    });
});