const { faker } = require("@faker-js/faker");
import "cypress-real-events/support";

describe("Add Borrower - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
    });

    it("Adds a borrower by clicking + icon in header", () => {
        cy.get("input[name='email']").clear().type("himanshupant.qa@gmail.com");
        cy.get("input[placeholder='Password']").clear().type("Harry@123");
        cy.get("#submit").click();

        cy.url().should("include", "/dashboard");

        // Navigate to Marketing Page
        cy.get('.sidebar__verticle-align > div > .menu-logout > li:nth-child(9) > a').click();
        cy.url().should("include", "/marketing");

        // Navigate to Campaigns Section
        cy.get('.pb-1 > .d-flex > .step > .step-item:nth-child(2) > .step-link').click();

        // Adding New Folder
        cy.get('.page-loader > .d-flex > .flex_1 > .mx-3 > .button').click();
        const folderTitle = faker.lorem.word();
        cy.get('.modal-box--dialog__container > form > #modalBody > .mb-2 > .champ-form__cm-input')
            .click()
            .type(folderTitle);
        cy.get('#modalBody > .mb-2 > .py-2 > .select-color-border:nth-child(7) > .flex-center').click();
        cy.get('.position-relative > .button').click()
        
        // Verify folder creation
        cy.get('.tbl-h-x-y-z-t').should('contain', folderTitle);
        // cy.get('form > .modal-box--dialog__container-footer > .d-flex > .position-relative > .button').click();

        // Add a Template
        cy.get('.d-flex > .d-flex > div > .mr-2 > .button').click();
        cy.get('.modal-box--dialog__container > form > .modal-box--dialog__container-footer > .border__top-grey > .button:nth-child(2)').click();

        // Enter Template Title
        const tempTitle = faker.lorem.word();
        cy.get('.page-loader > form > .p-3 > .input-group1 > .champ-form__cm-input')
            .click()
            .type(tempTitle);
        
        // Select Template Type
        cy.get('.position-relative > .input-group1 > .champ-form__cm-input > .css-0 > .css-1hwfws3').click();
        cy.get('.pt-4 > .input-group1 > .champ-form__cm-input > .css-0 > .css-1hwfws3').type('Loan');
        cy.realPress("Tab");

        // Add Content
        cy.get('#ph_mention').type(faker.lorem.word());
        cy.get('.fr-element').type(faker.lorem.paragraph());

        // Save Template
        cy.get('form > .p-3 > .d-flex > .position-relative > .button').click();

        // Verify Template Addition
        cy.get('.infinite-scroll-component__outerdiv').should('contain', tempTitle);
    });
});
