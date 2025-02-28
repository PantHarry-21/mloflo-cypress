describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1280, 631)
   
      cy.visit('https://uat.mloflo.com/loan-officer/marketing/personal/template-library')
   
      cy.get('.champ-form__cm-bg > .ml-4 > .pr-4 > .d-flex:nth-child(2) > .d-flex').click()
      cy.get('.d-flex > .d-flex > div > .mr-2 > .button').click()
      cy.get('.page-loader > form > .px-2 > .input-group1:nth-child(1) > .champ-form__cm-input').click()
      cy.get('.page-loader > form > .px-2 > .input-group1:nth-child(1) > .champ-form__cm-input').type('Title')
      cy.get('.page-loader > form > .d-flex > .position-relative > .button').click()
   
   })
  
  })
  