// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (userName, password) => {
  cy.get('#username').type(userName);
  cy.get('#password').type(password);
  cy.get('[data-test=signin-submit]').click();
});

Cypress.Commands.add('register', (firstName,lastName, userName, password, confirmPassword) => {
  cy.get('#firstName').type(firstName);
  cy.get('#lastName').type(lastName);
  cy.get('#username').type(userName);
  cy.get('#password').type(password);
  cy.get('#confirmPassword').type(confirmPassword);
  cy.get('[data-test=signup-submit]').click();
});

Cypress.Commands.add('loginRequest', (userName, password) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      username: userName,
      password: password,
      type: 'LOGIN',
    },
    failOnStatusCode: false,
  });
});
