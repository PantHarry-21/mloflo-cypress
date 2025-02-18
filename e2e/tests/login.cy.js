
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

describe("Login and Navigation Scenarios", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
    });

    it("Login with valid credentials", () => {
    cy.login("himanshupant.qa@gmail.com", "Harry@123");
    cy.url().should("include", "/dashboard");
});

})