const { faker, Faker } = require("@faker-js/faker");

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Borrower Contact - Optimized", () => {
    beforeEach(() => {
    cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
    });

    it("Adds a borrower contact", () => {
    cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login with valid credentials
    cy.url().should("include", "/dashboard"); // Verify successful logincy.get('.position-relative > .w-100 > .two > .text-center > .cstm-grey-brand:nth-child(1)').click()
    cy.get('.sidebar__verticle-align > div > .menu-logout > li:nth-child(9) > a').click()
    cy.url().should("include", "/marketing");
    cy.get('.w-100 > .two').click()              
    const folderName = faker.person.firstName()
    cy.get('.modal-box--dialog__container > form > #modalBody > .mb-2 > .input-header').type(folderName)
    cy.get('#modalBody > .mb-2 > .d-flex > .select-color-border:nth-child(8) > .cursor-pointer').click()
    cy.get('form > .modal-box--dialog__container-footer > .d-flex > .position-relative > .button').click()

    cy.get('.drip-campaign').should('contain', folderName)
    })
})