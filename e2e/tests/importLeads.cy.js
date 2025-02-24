const { faker } = require("@faker-js/faker");
import "cypress-file-upload"; // Ensure file upload support

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Partner from Header - Optimized", () => {
    beforeEach(() => {
        cy.visit("https://stage.mloflo.com/"); // Visit application URL
        cy.login("iyer@mailinator.com", "Iyer@1234"); // Perform login
    });

    it("Should add a partner via header", () => {
        cy.get('.sidebar__verticle-align > div > .menu-logout > li:nth-child(2) > a')
            .should("be.visible")
            .click(); // Open partner add menu

        cy.get('.d-flex > .d-flex > .button > div > .cstm-light-text:nth-child(2)')
            .should("be.visible")
            .click(); // Click on "Add Partner"

        // Upload CSV file
        cy.get('.file-upload__label').attachFile("10Data.csv")
        .trigger("input")
        .trigger("change", { force: true })
        .trigger("blur");

        // Select CSV column mappings
        const fieldMappings = [
            { selector: "#header_first", value: "Borrower First Name" },
            { selector: "#header_last", value: "Borrower Last Name" },
            { selector: "#header_email", value: "Borrower Email" },
            { selector: "#header_street", value: "Borrower Address Street" },
            { selector: "#header_city", value: "Borrower Address City" },
            { selector: "#header_state", value: "Borrower Address State" },
            { selector: "#header_county", value: "DO_NOT_INCLUDE" },
            { selector: "#header_zip", value: "Borrower Address Zip" },
            { selector: "#header_date", value: "Borrower DOB" },
        ];

        fieldMappings.forEach(({ selector, value }) => {
            cy.get(`.page-loader > .form-row > .col-xl-3 > .selectDiv > ${selector}`)
            .select(value);
        });

        // Click on import and confirmation buttons
        cy.get('.modal-box--dialog__container-footer > .button > span')
            .should("be.visible")
            .click(); // Confirm column mappings

        cy.get('.modal-box--dialog__container-footer:nth-child(3) > .button > span')
            .should("be.visible")
            .click(); // Final import confirmation

        // Validate import success message
        cy.get('form > .modal-box--dialog__container-footer > .border__top-grey > .position-relative > .button')
            .should("be.enabled")
            .click();

        cy.get(".Snackbar_snackbar__text__1Hx2a")
            .should("contain", "Import successful"); // Verify success message
    });
});
