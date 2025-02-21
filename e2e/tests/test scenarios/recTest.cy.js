describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1280, 631)
   
      cy.visit('https://uat.mloflo.com/loan-officer/dashboard')

      cy.get('div > .dropdown-custom > .dropdown-toggle > .bg-transparent > .uil-plus').click()
      cy.get('div > .dropdown-custom > .dropdown-custom-menu > .dropdown-custom-item:nth-child(1) > span').click()
      cy.get('#modalBody > .form-row > .form-group:nth-child(1) > .selectDiv > .champ-form__cm-input').select('RT')
      cy.get('#modalBody > .form-row > .form-group:nth-child(2) > .selectDiv > .champ-form__cm-input').select('PC')
      cy.get('#modalBody > .form-row > .cstm-light-text:nth-child(3) > .selectDiv > .champ-form__cm-input').select('selfgen')
      cy.get('form > #modalBody > .form-row > .cstm-light-text:nth-child(5) > .champ-form__cm-input').type('P')
      cy.get('form > #modalBody > .form-row > .form-group:nth-child(6) > .champ-form__cm-input').type('One')
      cy.get('form > #modalBody > .form-row > .form-group:nth-child(7) > .champ-form__cm-input').type('p1@mailinator.com')
      cy.get('form > #modalBody > .form-row > .form-group:nth-child(8) > .champ-form__cm-input').type('(888) 888-8888')
      cy.get('form > #modalBody > .form-row > .form-group:nth-child(12) > .champ-form__cm-input').type('AAA')
      cy.get('.modal-box--dialog__container-footer > .w-100 > .position-relative:nth-child(3) > .button > span').click()
   
   })
  
  })
  