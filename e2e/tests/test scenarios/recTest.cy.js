describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1280, 631)
   
      cy.visit('https://stage.mloflo.com/loan-officer/marketing/personal/drip-campaign/67bc8be1afd64faa17377e5f')
   
      
      cy.get('div > .from-row > .form-group:nth-child(1) > .datepicker-time > input').type('00:01')
      cy.get('div > .from-row > .form-group > .datepicker-time > #appt-time').click()
      cy.get('div > .from-row > .form-group > .datepicker-time > #appt-time').type('23:59')
      cy.get('#modalBody > div > div > .from-row > .form-group:nth-child(2)').click()
      cy.get('.page-loader > .modal-box--dialog__container-footer > .d-flex > .position-relative > .button').click()
      cy.get('#mloflo_body > #root > .Snackbar_snackbar-wrapper__ocbPJ > .Snackbar_snackbar__GsYZl > .Snackbar_snackbar__close__NCHgT').click()
      cy.get('div > .dropdown-custom > .dropdown-toggle > .button > .text__size18').click()
      cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(1) > span').click()
      cy.get('.box-shadow > .position-relative > .p-3 > .d-flex:nth-child(2) > .champ-form__cm-input').click()
      cy.get('.box-shadow > .position-relative > .p-3 > .d-flex:nth-child(2) > .champ-form__cm-input').select('PERSONAL')
      cy.get('.box-shadow > .position-relative > .p-3 > .d-flex:nth-child(2) > .champ-form__cm-input').click()
      cy.get('.box-shadow > .position-relative > .p-3 > .d-flex:nth-child(3) > .champ-form__cm-input').click()
      cy.get('.box-shadow > .position-relative > .p-3 > .d-flex:nth-child(3) > .champ-form__cm-input').click()
      cy.get('.p-3 > .form-row > .form-group:nth-child(2) > .radio > input').click()
      cy.get('.p-3 > .form-row > .form-group:nth-child(2) > .radio > input').type('new')
      cy.get('.modal-box--dialog__container > form > .modal-box--dialog__container-footer > .border__top-grey > .button:nth-child(2)').click()
      cy.get('.page-loader > form > .p-3 > .input-group1 > .champ-form__cm-input').click()
      cy.get('.page-loader > form > .p-3 > .input-group1 > .champ-form__cm-input').type('Title')
      cy.get('.position-relative > .input-group1 > .champ-form__cm-input > .css-0 > .css-1hwfws3').click()
      cy.get('.input-group1 > .champ-form__cm-input > .css-11pz0ie-menu > .css-1pclr8s > #react-select-6-option-3').click()
      cy.get('.p-3 > .temp-textarea > .w-100 > .position-relative > #ph_mention').click()
      cy.get('#froala-editor > .position-relative > .fr-box > .fr-wrapper > .fr-element').click()
      cy.get('form > .p-3 > .d-flex > .position-relative > .button').click()
      cy.get('#mloflo_body > #root > .Snackbar_snackbar-wrapper__ocbPJ > .Snackbar_snackbar__GsYZl > .Snackbar_snackbar__text__1Hx2a').click()
   
   })
  
  })
  