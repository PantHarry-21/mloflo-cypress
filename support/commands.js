Cypress.Commands.add("login", (email, password) => {
  cy.get("input[name='email']").clear().type(email);
  cy.get("input[placeholder='Password']").clear().type(password);
  cy.get("#submit").click();
});
