const { faker } = require("@faker-js/faker");

Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

describe("Reset password", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
    });
it('Reset password',  () => {
    
    cy.login("himanshupant.qa@gmail.com", "Harry@1234");
    cy.url().should("include", "/dashboard");
    cy.get('.page-loader > .dashboard-processor__right > .verticle-middle > .form-row > .col-md-5').click()
    cy.get('div > .dropdown-custom > .dropdown-toggle > .user-profile-box > .d-flex').click()
    cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(1) > .dropdown-item').click()
    cy.get('.mileStone > .d-flex > .mileStone-tab > .nav-item:nth-child(3) > .nav-link').click()
    cy.get('.w-100 > .form-row > .col-lg-4:nth-child(1) > .input-group > .champ-form__cm-input').type('Harry@1234')
    cy.get('.w-100 > .form-row > .col-lg-4:nth-child(2) > .input-group > .champ-form__cm-input').type('Harry@123')
    cy.get('.w-100 > .form-row > .col-lg-4:nth-child(3) > .input-group > .champ-form__cm-input').type('Harry@123')
    cy.get('.form-row > .form-row > .position-relative > .button > .text__size12').click()
    cy.get('.Snackbar_snackbar__text__1Hx2a').should('contain', 'Password reset successfully')
})
})