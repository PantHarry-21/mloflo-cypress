const { faker } = require("@faker-js/faker");
import "cypress-real-events/support";

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email); // Enter email
    cy.get("input[placeholder='Password']").clear().type(password); // Enter password
    cy.get("#submit").click(); // Click submit button
});

describe("Add Campaign to Existing or New Folder", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/"); // Navigate to application URL
        cy.login("himanshupant.qa@gmail.com", "Harry@123"); // Login
        cy.url().should("include", "/dashboard"); // Verify login success
    });

    it("Adds a campaign inside an existing folder or creates a new one", () => {
        // const folderName = faker.person.firstName(); // Unique folder name
        const campaignName = faker.person.lastName(); // Unique campaign name

        // Navigate to Marketing Page
        cy.get('.sidebar__verticle-align > div > .menu-logout > li:nth-child(9) > a').click();
        cy.url().should("include", "/marketing");

        // ✅ Ensure folder list is visible
        cy.get('[data-id="0"] > .position-relative > .two > .w-100', { timeout: 10000 }).should('be.visible');

        // ✅ Step 1: Log All Folder Names for Debugging
        cy.get('[data-id="0"] > .position-relative > .two > .w-100').each(($el, index) => {
            cy.wrap($el).invoke('text').then((text) => {
                cy.log(`Folder ${index + 1}: ${text.trim()}`); // Cypress UI log
                console.log(`Folder ${index + 1}: ${text.trim()}`); // DevTools Console log
            });
        });

        // ✅ Check if the folder exists
        cy.get("body").then(($body) => {
    if ($body.find('[data-id="0"] > .position-relative > .two > .w-100').text().includes("Borrower status campaigns")) {
        cy.log("📁 Folder exists. Clicking on it.");
        cy.contains('.drip-campaign', "Borrower status campaigns").click();
    } else {
        cy.log("🚀 Folder does not exist. Creating a new one.");
        
        // ✅ Step 2: Click "Add Folder" button
        cy.get('.w-100 > .two').click()
        
        // ✅ Step 3: Type the folder name
        const folderName = (faker.person.firstName())
        cy.get('.modal-box--dialog__container > form > #modalBody > .mb-2 > .input-header').type(folderName)
        
        // ✅ Step 4: Select Folder Color (Assuming the 8th color is standard)
        cy.get('#modalBody > .mb-2 > .d-flex > .select-color-border:nth-child(8) > .cursor-pointer').click();
        
        // ✅ Step 5: Click "Create" button
        cy.get('form > .modal-box--dialog__container-footer > .d-flex > .position-relative > .button').click();
        
        // ✅ Step 6: Verify folder creation
        // const folder = folderName
        // cy.get(folder).click()
        cy.get('.drip-campaign').contains(folderName).click()
        // ✅ Step 7: Click on the newly created folder
        // cy.get(`.drip-campaign"= ${folderName}"]`).click();
            }
        });

        // ✅ Step 8: Click "Add Campaign" button
        cy.get('.row > .col-lg-6 > .d-flex > .mr-2 > .text__size12').click();
        
        // ✅ Step 9: Enter Campaign Name
        cy.get('.page-loader > #modalBody > .row > .form-group > .champ-form__cm-input').type(campaignName);
        
        // ✅ Step 10: Select Campaign Type
        cy.get('.d-flex > .flex7 > .form-group > .selectDiv > .champ-form__cm-input').select('Borrower');
        cy.get('.d-flex > .flex7 > .form-group:nth-child(2) > .selectDiv > .champ-form__cm-input').select('BN');
        
        cy.get(':nth-child(3) > :nth-child(2) > .selectDiv > .p-0 > .select__control > .select__value-container').type('All')
        cy.realPress("Tab");

        // ✅ Step 11: Set Campaign Frequency
        cy.get('#modalBody > div > .form-group > .selectDiv > .champ-form__cm-input').select('DAILY');
        cy.get(':nth-child(3) > .container-checkbox > input').click()

        // ✅ Step 12: Enable Campaign Toggle
        cy.get(':nth-child(7) > :nth-child(2) > label > .switch_1').click();
        
        // ✅ Step 13: Set Campaign Start & End Time
        cy.get('div > .from-row > .form-group:nth-child(1) > .datepicker-time > input').type('00:01');
        cy.get('div > .from-row > .form-group > .datepicker-time > #appt-time').type('23:59');
        
        // ✅ Step 14: Save Campaign
        cy.get('.page-loader > .modal-box--dialog__container-footer > .d-flex > .position-relative > .button').click();
        
        cy.get('#mloflo_body > #root > .Snackbar_snackbar-wrapper__ocbPJ > .Snackbar_snackbar__GsYZl > .Snackbar_snackbar__close__NCHgT').click()
        cy.get('div > .dropdown-custom > .dropdown-toggle > .button > .text__size18').click()
        cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(1) > span').click()
        cy.get('.p-3 > .form-row > .form-group:nth-child(2) > .radio > input').click()
        cy.get('.p-3 > .form-row > .form-group:nth-child(2) > .radio > input').type('new')
        cy.get('.modal-box--dialog__container > form > .modal-box--dialog__container-footer > .border__top-grey > .button:nth-child(2)').click()
        cy.get('.page-loader > form > .p-3 > .input-group1 > .champ-form__cm-input').click()
        cy.get('.page-loader > form > .p-3 > .input-group1 > .champ-form__cm-input').type('Title')
        cy.get('.position-relative > .input-group1 > .champ-form__cm-input > .css-0 > .css-1hwfws3').click()
        cy.get('.pt-4 > .input-group1 > .champ-form__cm-input > .css-0 > .css-1hwfws3').type('Loan')
        cy.realPress("Tab");
        cy.get('#ph_mention').type(faker.lorem.word())
        cy.get('.fr-element').type(faker.lorem.paragraph())
        cy.get('form > .p-3 > .d-flex > .position-relative > .button').click()

        cy.get('.col-lg-3 > .d-flex > .button').click()

        // ✅ Step 15: Verify Campaign Added
        cy.get('.tbl-content').should('contain', campaignName);
    });
});
