Cypress.Commands.add('login', () => {
  cy.visit('/login')
  cy.get("input[name='email']").type('himanshupant.qa@gmail.com')
  cy.wait(2000)
  cy.get("input[placeholder='Enter Password']").type('Harry@123')
  cy.wait(2000)
  cy.get("button[type='submit']").click()
  cy.wait(2000)
  cy.get('button[type=submit]').click()
  cy.wait(2000)
  // Verify login was successful
  cy.url().should('include', '/dashboard')
})
