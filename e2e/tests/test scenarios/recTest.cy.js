describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1280, 631)
   
      cy.visit('https://app.mloflo.com/loan-officer/dashboard')
      cy.get('div > .dropdown-custom > .dropdown-toggle > .bg-transparent > .uil-plus').click()
      cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(3) > span').click()
      cy.get('.form-row > .col-lg-7 > .position-relative > .form-group > .champ-form__cm-input').click()
      cy.get('.form-row > .col-lg-7 > .position-relative > .form-group > .champ-form__cm-input').type('Automated event')
      cy.get('#froala-editor > .position-relative > .fr-box > .fr-wrapper > .fr-element').click()
      cy.get('.border__bottom-dark > .form-group > .froala-mail-editor > #froala-editor > .position-relative:nth-child(1)').click()
      cy.get('.form-group > .froala-mail-editor > #froala-editor > .position-relative > .button').click()
      cy.get('.froala-mail-editor > #froala-editor > .champ-form__cm-input > #draft-mail-input > .w-90').type('AUTOMATED EVENT')
      cy.get('#froala-editor > .champ-form__cm-input > .d-flex > .position-relative > .button').click()
      cy.get('.position-relative > .draft-response-box > .draft-response-box-outer > .p-2 > .cursor-pointer:nth-child(5)').click()
      cy.get('#modalBody > form > .border__top-grey > .position-relative > .button').click()
   
   })
  
  })
  describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1280, 631)
   
      cy.visit('https://app.mloflo.com/loan-officer/dashboard')
   
      cy.get('#froala-editor > .position-relative > .fr-box > .fr-wrapper > .fr-element').click()
   
   })
  
  })
  