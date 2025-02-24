cy.get('div > .menu-logout > li:nth-child(9) > a > .text__size12').click()
 
    cy.get('.position-relative > .w-100 > .two > .text-center > .cstm-grey-brand:nth-child(1)').click()
    cy.get('.modal-box--dialog__container > form > #modalBody > .mb-2 > .input-header').type('folder')
    cy.get('#modalBody > .mb-2 > .d-flex > .select-color-border:nth-child(8) > .cursor-pointer').click()
    cy.get('form > .modal-box--dialog__container-footer > .d-flex > .position-relative > .button').click()
    cy.get('#mloflo_body > #root > .Snackbar_snackbar-wrapper__ocbPJ > .Snackbar_snackbar__GsYZl > .Snackbar_snackbar__text__1Hx2a').click()