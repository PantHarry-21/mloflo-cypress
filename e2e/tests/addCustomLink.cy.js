const { faker } = require("@faker-js/faker");

Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

describe("Add custom link", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
    });

    it("Add custom link", () => {
    cy.login("himanshupant.qa@gmail.com", "Harry@123");
    cy.url().should("include", "/dashboard");

    cy.get('.user > div > .dropdown-custom > .dropdown-toggle > .user-profile-box').click()
    cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(4) > .dropdown-item').click()
    cy.get('#content > .page-loader > .content-box > .d-flex > .button').click()
    cy.get('#modalBody > .page-loader > .form-row > .col-lg-6:nth-child(1) > .champ-form__cm-input').click()
    cy.get('#modalBody > .page-loader > .form-row > .col-lg-6:nth-child(1) > .champ-form__cm-input').type(faker.company.name());
    cy.get('#modalBody > .page-loader > .form-row > .col-lg-6:nth-child(2) > .champ-form__cm-input').type(faker.lorem.word());
    cy.get('#modalBody > .page-loader > .form-row > .col-lg-6:nth-child(1) > .champ-form__cm-input').click()
    cy.get('#modalBody > .page-loader > .form-row > .col-lg-6 > .d-flex').click()
    cy.visit('https://uat.mloflo.com/loan-officer/links')
})
})