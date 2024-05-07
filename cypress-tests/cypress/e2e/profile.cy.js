let users;
  
before(() => {
  cy.fixture('users').then(data => {
    users = data;
  });
});

beforeEach(() => {
  cy.visit('/');
});

describe('Should see account details', () => {
    it('should see details',function () {
        cy.login(users.testuser.username, users.testuser.password);
        cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);
        cy.get('.MuiTypography-subtitle1').should('exist').contains(users.testuser.userFullName);
    });
});

describe('Should see account balance', () => {
    it('should see balance', function () {
        cy.login(users.testuser.username, users.testuser.password);
        cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);
        cy.get('[data-test="sidenav-user-balance"]').contains("$");
    })
});

describe('Should see account transactions history', () => {
  it('Should see account transactions history', function () {
      cy.login(users.testuser.username, users.testuser.password);
      cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);
      cy.get('[data-test="transaction-list"]').should('exist');
  })
});

describe('should see account transactions details', () => {
  it('should see account transactions details', function () {
      cy.login(users.testuser.username, users.testuser.password);
      cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);
      cy.get('[data-test^="transaction-item"]').first().should('exist');
  })
});

describe('should be able to like and comment on transaction', () => {
  it('should be able to like and comment on transaction', function () {
      cy.login(users.testuser.username, users.testuser.password);
      cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);
      cy.get('[data-test^="transaction-item"]').eq(2).should('exist').click({force:true});
      // cy.get('[data-test^="transaction-like-button"]').first().click(); // The button is disabled after first click
      cy.get('[data-test^="transaction-like-button"]').first().should('exist');
      cy.get('[data-test^="transaction-comment-input"]').first().type('Test').type('{enter}');
  })
});
