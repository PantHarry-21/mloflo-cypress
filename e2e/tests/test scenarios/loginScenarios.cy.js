/// <reference types="cypress" />

// Custom command for login
Cypress.Commands.add("login", (email, password) => {
    cy.get("input[name='email']").clear().type(email);
    cy.get("input[placeholder='Password']").clear().type(password);
    cy.get("#submit").click();
});

describe("Login and Navigation Scenarios", () => {
    beforeEach(() => {
        cy.visit("https://uat.mloflo.com/");
    });

    it("Login with Non-Registered Email", () => {
        cy.login("himanshupant.qa1@gmail.com", "Harry@123");
        cy.get(".cstm-red").should("contain", "No account found on this e-mail");
    });

    it("Login with invalid Email", () => {
        cy.login("himanshupant.gmail.com", "Harry@123");
        cy.get(".cstm-red").should("contain", "Invalid email address.");
    });

    it("Login with invalid password", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@12345");
        cy.get(".cstm-red").should("contain", "Email or Password is not correct");
    });

    it("Login without password", () => {
        cy.get("input[name='email']").type("himanshupant.qa@gmail.com");
        cy.get("#submit").click();
        cy.get(".cstm-red").should("contain", "Password is required");
    });

    it("Login without email address", () => {
        cy.get("input[placeholder='Password']").type("Harry@123");
        cy.get("#submit").click();
        cy.get(".cstm-red").should("contain", "Email is required");
    });

    it("Login with valid credentials", () => {
        cy.login("himanshupant.qa@gmail.com", "Harry@123");
        cy.url().should("include", "/dashboard");
    });
});
