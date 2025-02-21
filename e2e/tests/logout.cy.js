// Custom command to handle logout
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

Cypress.Commands.add("logout", () => {

    cy.get('div > .dropdown-custom > .dropdown-toggle > .user-profile-box > .d-flex').click() // Open user menu
    cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(5) > .dropdown-item').click() // Click logout button
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