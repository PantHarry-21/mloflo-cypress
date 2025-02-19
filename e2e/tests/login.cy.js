
// Custom command to handle login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Login Functionality - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to login page
    });

    it("Logs in with valid credentials", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Perform login
        cy.url().should("include", "/dashboard"); // Verify successful login
    });
})