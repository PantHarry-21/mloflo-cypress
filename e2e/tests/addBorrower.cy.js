const { faker } = require("@faker-js/faker");

Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

describe("Add borrower", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
    });
it('Adds a borrower by clicking + icon in header',  () => {
    
    cy.login("himanshupant.qa@gmail.com", "Harry@123");
    cy.url().should("include", "/dashboard");
    cy.get('.dropdown-toggle > .bg-transparent').click()
    cy.get('[eventkey="2"] > span').click()
    cy.get('#modalBody > .form-row > .form-group:nth-child(2) > .selectDiv > .champ-form__cm-input').select('selfgen')
    cy.get('#modalBody > :nth-child(3) > :nth-child(2) > .champ-form__cm-input').type(faker.person.firstName())
    cy.get(':nth-child(3) > .champ-form__cm-input').type(faker.person.lastName())
    cy.get(':nth-child(4) > .champ-form__cm-input').type(faker.phone.number())
    cy.get(':nth-child(5) > .champ-form__cm-input').type(faker.internet.email())
    cy.get('.position-relative > .button').click();
    cy.get('.Snackbar_snackbar__text__1Hx2a').should('contain', "Lead Created successfully");
})
})

