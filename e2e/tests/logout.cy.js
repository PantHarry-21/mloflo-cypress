Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

describe("Logout", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
    });

    it("Logout", () => {
    cy.login("himanshupant.qa@gmail.com", "Harry@123");
    cy.url().should("include", "/dashboard");
    
    cy.get('div > .dropdown-custom > .dropdown-toggle > .user-profile-box > .d-flex').click()
    cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(5) > .dropdown-item').click()

    cy.url().should("include", "/login");

});

})