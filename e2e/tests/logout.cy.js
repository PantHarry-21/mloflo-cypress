// Custom command to handle logout
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

Cypress.Commands.add("logout", () => {
    cy.get('.user-profile-box').should('be.visible').click(); // Open user menu
    cy.wait(1500)
    cy.get('.dropdown-menu .logout').should('be.visible').click(); // Click logout button
    cy.url().should('include', '/login'); // Verify user is redirected to login page
});

describe("Logout Functionality - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to login page
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Perform login
    });

    it("Logs out successfully", () => {
        cy.logout(); // Perform logout
        cy.get('#submit').should('be.visible'); // Ensure login button is visible
    });
});