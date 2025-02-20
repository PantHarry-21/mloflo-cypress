const { faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Tag in Settings - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a new tag in settings", () => {
    cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
    cy.url().should("include", "/dashboard"); // Verify successful login

    cy.get('div > .dropdown-custom > .dropdown-toggle > .bg-transparent > .uil-plus').click()
    cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(1) > span').click()
    cy.get('#modalBody > .form-row > .form-group:nth-child(1) > .selectDiv > .champ-form__cm-input').select('RT')
    cy.get('#modalBody > .form-row > .form-group:nth-child(2) > .selectDiv > .champ-form__cm-input').select('PC')
    cy.get('#modalBody > .form-row > .cstm-light-text:nth-child(3) > .selectDiv > .champ-form__cm-input').select('selfgen')
    cy.get('form > #modalBody > .form-row > .cstm-light-text:nth-child(5) > .champ-form__cm-input').type(faker.person.firstName())
    cy.get('form > #modalBody > .form-row > .form-group:nth-child(6) > .champ-form__cm-input').type(faker.person.lastName())
    cy.get('form > #modalBody > .form-row > .form-group:nth-child(7) > .champ-form__cm-input').type(faker.internet.email())
    cy.get('form > #modalBody > .form-row > .form-group:nth-child(8) > .champ-form__cm-input').type(faker.phone.number())
    cy.get('form > #modalBody > .form-row > .form-group:nth-child(12) > .champ-form__cm-input').type(faker.company.name())
    cy.get('.modal-box--dialog__container-footer > .w-100 > .position-relative:nth-child(3) > .button > span').click()
    })
})