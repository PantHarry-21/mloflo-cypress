const { faker, Faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Loan Officer", () => {
    beforeEach(() => {
    cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a loan officer in the team", () => {

    cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
    cy.url().should("include", "/dashboard"); // Verify successful login

    cy.get(':nth-child(11) > a').click();
    cy.url().should("include", "/my-team#list");

    cy.get('.justify-content-end > .button').click()
    cy.get('.mb-sm > select').select('Super Admin')
    // cy.get('#modalBody > div.form-row.mb-3.align-items-start > div.col-md-6.col-12.mb-sm > select').select("Loan Officer")
   
    const superAdminName= faker.person.firstName()
    cy.get('#modalBody > :nth-child(2) > :nth-child(1) > .champ-form__cm-input').type(superAdminName)

    cy.get(':nth-child(2) > .champ-form__cm-input').type(faker.person.lastName())
    cy.get(':nth-child(3) > .champ-form__cm-input').type(faker.internet.email())
    cy.get(':nth-child(4) > .champ-form__cm-input').type(faker.phone.number())
    cy.get('.position-relative > .button').click()
    
    cy.get('.content-box').should('contain', superAdminName)

    })
})