describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1280, 678)
   
      cy.visit('https://uat.mloflo.com/loan-officer/settings/status')
   
      cy.get('.mileStone > .mileStone-tab > a:nth-child(13) > .nav-item > .nav-link').click()
   
      cy.get('.page-loader > .content-box > .d-flex > .d-flex > .cstm-dark-text').click()
      cy.get('form > #modalBody > .form-row > .form-group > .champ-form__cm-input').click()
      cy.get('form > #modalBody > .form-row > .form-group > .champ-form__cm-input').type('Aff')
      cy.get('form > .modal-box--dialog__container-footer > .border__top-grey > .position-relative > .button').click()
      cy.get('#mloflo_body > #root > .Snackbar_snackbar-wrapper__ocbPJ > .Snackbar_snackbar__GsYZl > .Snackbar_snackbar__text__1Hx2a').click()
   
   })
  
  })
  