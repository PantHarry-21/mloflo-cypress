/// <reference types="cypress" />

describe('Login and Navigation Scenarios', () => {
    
    // Test case for Login with Non-Registered Email
    it('Login with Non-Registered Email', () => {
        cy.visit("https://uat.mloflo.com/");
        cy.wait(2000)

        cy.get("input[name='email']").type("himanshupant.qa1@gmail.com")
        cy.wait(1000)
    
        cy.get("input[placeholder='Password']").type("Harry@123")
        cy.wait(1000)
    
        cy.get("#submit").click()
        cy.wait(1000)

        cy.get('.cstm-red').should('contain', 'No account found on this e-mail')
    })
    // Test case for Login with invalid Email
    it('Login with invalid Email', () => {
        cy.visit("https://uat.mloflo.com/");
        cy.wait(2000)

        cy.get("input[name='email']").type("himanshupant.gmail.com")
        cy.wait(1000)
    
        cy.get("input[placeholder='Password']").type("Harry@123")
        cy.wait(1000)
    
        cy.get("#submit").click()
        cy.wait(1000)

        cy.get('.cstm-red').should('contain', "Invalid email address.")
        
    })
  // Test case for Login with invalid password
    it('Login with invalid password', () => {
        cy.visit("https://uat.mloflo.com/");
        cy.wait(2000)

        cy.get("input[name='email']").type("himanshupant.qa@gmail.com")
        cy.wait(1000)
    
        cy.get("input[placeholder='Password']").type("Harry@12345")
        cy.wait(1000)
    
        cy.get("#submit").click()
        cy.wait(1000)

        cy.get('.cstm-red').should('contain', "Email or Password is not correct")
    })
  
    // Test case for Login without password
    it('Login without password', () => {
        cy.visit("https://uat.mloflo.com/");
        cy.wait(2000)

        cy.get("input[name='email']").type("himanshupant.qa@gmail.com")
        cy.wait(1000)
    
        cy.get("#submit").click()
        cy.wait(1000)

        cy.get('.cstm-red').should('contain', "Password is required")
    })
  // Test case for Login without email address
    it('Login without email address', () => {
        cy.visit("https://uat.mloflo.com/");
        cy.wait(2000)

        cy.get("input[name='email']").type(" ")
        cy.wait(1000)
    
        cy.get("input[placeholder='Password']").type("Harry@123")
        cy.wait(1000)
    
        cy.get("#submit").click()
        cy.wait(1000)

        cy.get('.cstm-red').should('contain', "Email is required")
    })

    // Test case for Login with valid creds
    it('Login with valid creds', () => {
        cy.visit("https://uat.mloflo.com/");
        cy.wait(2000)

        cy.get("input[name='email']").type("himanshupant.qa@gmail.com")
        cy.wait(1000)
    
        cy.get("input[placeholder='Password']").type("Harry@123")
        cy.wait(1000)
    
        cy.get("#submit").click()
        cy.wait(1000)

        cy.url().should('include', '/dashboard')

        console.log('Tests passed successfully')
    })
})
  