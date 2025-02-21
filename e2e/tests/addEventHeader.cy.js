const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add partner from header", () => {
    beforeEach(() => {
        cy.visit("https://stage.mloflo.com/"); // Navigate to application URL
    });

    it("Add partner from header", () => {
        cy.login("iyer@mailinator.com", "Iyer@1234"); // Login with valid credentials
        cy.url().should("include", "/dashboard"); // Verify successful login

        cy.get('div > .dropdown-custom > .dropdown-toggle > .bg-transparent > .uil-plus').click()
        cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(3) > span').click()
        cy.get('.form-row > .col-lg-7 > .position-relative > .form-group > .champ-form__cm-input').type(faker.lorem.word())
        cy.get('#froala-editor > .position-relative > .fr-box > .fr-wrapper > .fr-element').click()
        cy.get('.border__bottom-dark > .form-group > .froala-mail-editor > #froala-editor > .position-relative:nth-child(1)').click()
        cy.get('#froala-editor > .position-relative > .fr-box > .fr-wrapper > .fr-element').click().type(faker.lorem.paragraph())
        cy.get('.position-relative > .button').click()
   
    })

})