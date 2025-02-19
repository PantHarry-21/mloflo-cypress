const { faker } = require("@faker-js/faker");

Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

describe("Add Borrower - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
    });

    it("Adds a borrower by clicking + icon in header", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123");
        cy.url().should("include", "/dashboard");
        
        // Ensure dropdown is visible and click
        cy.get('.dropdown-toggle > .bg-transparent').should('be.visible').click();
        
        // Click on "Add Borrower"
        cy.get('[eventkey="2"] > span').should('be.visible').click();
        
        // Fill out borrower form with dynamic waits
        cy.get('#modalBody > .form-row > .form-group:nth-child(2) > .selectDiv > .champ-form__cm-input')
          .should('be.visible').select('selfgen');
        
        cy.get('#modalBody > :nth-child(3) > :nth-child(2) > .champ-form__cm-input')
          .should('be.visible').type(faker.person.firstName());
        
        cy.get(':nth-child(3) > .champ-form__cm-input')
          .should('be.visible').type(faker.person.lastName());
        
        cy.get(':nth-child(4) > .champ-form__cm-input')
          .should('be.visible').type(faker.phone.number());
        
        cy.get(':nth-child(5) > .champ-form__cm-input')
          .should('be.visible').type(faker.internet.email());
        
        // Submit the form
        cy.get('.position-relative > .button').should('be.enabled').click();
        
        // Verify success message
        cy.get('.Snackbar_snackbar__text__1Hx2a').should('contain', "Lead Created successfully");
    });
});