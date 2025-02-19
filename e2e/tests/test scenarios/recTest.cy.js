describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1280, 678)
   
      cy.visit('https://uat.mloflo.com/loan-officer/contacts')
   
      cy.get('.layout-grid-height-1 > .mileStone > .mileStone-tab > .nav-item:nth-child(2) > .nav-link').click()
   
      cy.get('.d-flex > .d-flex > .position-relative > .d-flex > .button').click()
      cy.get('#modalBody > .form-row > .form-group:nth-child(1) > .selectDiv > .champ-form__cm-input').select('RT')
      cy.get('#modalBody > .form-row > .cstm-light-text:nth-child(3) > .selectDiv > .champ-form__cm-input').select('selfgen')
      cy.get('form > #modalBody > .form-row > .cstm-light-text:nth-child(5) > .champ-form__cm-input').type('Automated')
      cy.get('form > #modalBody > .form-row > .form-group:nth-child(6) > .champ-form__cm-input').type('Partner')
      cy.get('form > #modalBody > .form-row > .form-group:nth-child(7) > .champ-form__cm-input').type('ap@mail.com')
      cy.get('form > #modalBody > .form-row > .form-group:nth-child(8) > .champ-form__cm-input').type('(222) 222-2222')
      cy.get('form > #modalBody > .form-row > .form-group:nth-child(12) > .champ-form__cm-input').type('BBB')
      cy.get('.modal-box--dialog__container-footer > .w-100 > .position-relative:nth-child(3) > .button > span').click()
      cy.get('#mloflo_body > #root > .Snackbar_snackbar-wrapper__ocbPJ > .Snackbar_snackbar__GsYZl > .Snackbar_snackbar__text__1Hx2a').click()
   
   })
  
  })
  