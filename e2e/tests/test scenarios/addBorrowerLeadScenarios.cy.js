const { faker } = require('@faker-js/faker');

describe('Login and Navigation Tests', () => {
     beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
        cy.wait(2000)

        cy.get("input[name='email']").type("himanshupant.qa@gmail.com")
        cy.wait(1000)
    
        cy.get("input[placeholder='Password']").type("Harry@123")
        cy.wait(1000)
    
        cy.get("#submit").click()
        cy.wait(1000)
     })
    
     it('Click submit button without adding borrower details', () => {
        
        cy.url().should('include', '/dashboard')
        cy.get('.dropdown-toggle > .bg-transparent').click()
        
        cy.get('[eventkey="2"] > span').click()
        cy.get('.position-relative > .button') .click()

        cy.get(':nth-child(2) > :nth-child(2) > .cstm-red').should('contain', "Please Select a source")
        cy.get(':nth-child(3) > :nth-child(2) > .cstm-red').should('contain', "First name is required")

     })

     it('Click Add button only with source', () => {
        cy.url().should('include', '/dashboard')
        cy.get('.dropdown-toggle > .bg-transparent').click()
        cy.get('//*[@id="modalBody"]/div[1]/div[2]/div/select/option[2]').click();

        cy.get('[eventkey="2"] > span').click()


        // cy.get('.position-relative > .button') .click()

     })
})