describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1280, 631)
   
      cy.visit('https://stage.mloflo.com/loan-officer/dashboard')
   
      cy.get('form > #modalBody > .form-row > .form-group > #auto--select\ undefined').click()
   
      cy.get('#modalBody > .form-row > .col-sm-6:nth-child(3) > .selectDiv > .champ-form__cm-input').click()
   
      cy.get('#modalBody > .form-row > .col-sm-6:nth-child(3) > .selectDiv > .champ-form__cm-input').select('HI')
   
      cy.get('#modalBody > .form-row > .col-sm-6:nth-child(3) > .selectDiv > .champ-form__cm-input').click()
   
      cy.get('form > #modalBody > .form-row > .col-lg-6:nth-child(4) > .champ-form__cm-input').click()
   
      cy.get('form > #modalBody > .form-row > .col-lg-6:nth-child(5) > .champ-form__cm-input').click()
   
      cy.get('#modalBody > .form-row > .px-1 > .selectDiv > .champ-form__cm-input').click()
   
      cy.get('#modalBody > .form-row > .px-1 > .selectDiv > .champ-form__cm-input').click()
   
   })
  
  })
  