const { faker } = require("@faker-js/faker");

// Custom command to handle login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Partner - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a new partner", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login
        
        cy.get('.menu-item[href="/partners"]')
        .click(); // Navigate to Partners page
        
        cy.get('.add-partner-button')
          .should('be.visible').click(); // Click on Add Partner button
        
        // Fill partner details
        cy.get('#partner-name')
          .should('be.visible').type(faker.company.name()); // Enter partner name
        
        cy.get('#partner-email')
          .should('be.visible').type(faker.internet.email()); // Enter email
        
        cy.get('#partner-phone')
          .should('be.visible').type(faker.phone.number()); // Enter phone number
        
        cy.get('#partner-address')
          .should('be.visible').type(faker.address.streetAddress()); // Enter address
        
        cy.get('.submit-button')
          .should('be.enabled').click(); // Click submit button
        
        // cy.get('.Snackbar_snackbar__text__1Hx2a')
        //   .should('contain', "Partner added successfully"); // Validate success message
    });
});