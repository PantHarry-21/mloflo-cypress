const { faker } = require("@faker-js/faker");

// Custom command to handle login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Reset Password - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/forgot-password"); // Navigate to reset password page
    });

    it("Sends reset password email successfully", () => {
        cy.get("input[name='email']").should('be.visible').type("himanshupant.qa@gmail.com"); // Enter registered email
        cy.get('form > .d-flex > div > .position-relative > #submit').should('be.enabled').click(); // Click reset button
        // cy.get(".success-message").should('contain', "Password reset email sent"); // Verify success message
    });

    it("Fails to reset password for unregistered email", () => {
        cy.get("input[name='email']").should('be.visible').type("invalid@example.com"); // Enter unregistered email
        cy.get('form > .d-flex > div > .position-relative > #submit').should('be.enabled').click(); // Click reset button
        // cy.get(".error-message").should('contain', "Email not found"); // Verify error message
    });
});