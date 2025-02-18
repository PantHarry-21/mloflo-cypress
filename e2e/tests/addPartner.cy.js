const { faker } = require("@faker-js/faker");

Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

describe("Add partner", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
    });

    it("Add Partner", () => {
    cy.login("himanshupant.qa@gmail.com", "Harry@123");
    cy.url().should("include", "/dashboard");
    
    for (let i = 0; i < 5; i++) { // Change 5 to the desired number of iterations
    cy.log(`Adding Partner #${i + 1}`);
    cy.get('div > .dropdown-custom > .dropdown-toggle > .bg-transparent > .uil-plus').click()
    cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(1) > span').click()
    cy.get('#modalBody > .form-row > .form-group:nth-child(1) > .selectDiv > .champ-form__cm-input').select('RT')
    cy.get('#modalBody > .form-row > .form-group:nth-child(2) > .selectDiv > .champ-form__cm-input').select('PC')
    cy.get('#modalBody > .form-row > .cstm-light-text:nth-child(3) > .selectDiv > .champ-form__cm-input').select('selfgen')
    cy.get('form > #modalBody > .form-row > .cstm-light-text:nth-child(5) > .champ-form__cm-input').type(faker.person.firstName())
    cy.get('form > #modalBody > .form-row > .form-group:nth-child(6) > .champ-form__cm-input').type(faker.person.lastName())
    cy.get('form > #modalBody > .form-row > .form-group:nth-child(7) > .champ-form__cm-input').type(faker.internet.email())
    cy.get('form > #modalBody > .form-row > .form-group:nth-child(8) > .champ-form__cm-input').type(faker.phone.number())
    cy.get('form > #modalBody > .form-row > .form-group:nth-child(9) > .champ-form__cm-input').click()
    cy.get('form > #modalBody > .form-row > .form-group:nth-child(12) > .champ-form__cm-input').type(faker.company.name())
    // cy.get('form > #modalBody > .form-row > .form-group > #auto--select\ undefined').type(faker.location.streetAddress())
    cy.get('#modalBody > .form-row > .col-sm-6:nth-child(3) > .selectDiv > .champ-form__cm-input').select('NY')
    cy.get('form > #modalBody > .form-row > .col-lg-6:nth-child(4) > .champ-form__cm-input').type(faker.location.zipCode())
    cy.get('form > #modalBody > .form-row > .col-lg-6:nth-child(5) > .champ-form__cm-input').type(faker.location.city())
    cy.get('.modal-box--dialog__container > .page-loader > form > #modalBody > .form-row:nth-child(2)').click()
    cy.get('.modal-box--dialog__container-footer > .w-100 > .position-relative:nth-child(3) > .button > span').click()
    // cy.get('.Snackbar_snackbar__text__1Hx2a').should('contain', 'Partner Added successfully')

    }
    })
})