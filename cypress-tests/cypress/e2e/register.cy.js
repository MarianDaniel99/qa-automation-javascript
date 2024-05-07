describe('Register spec', () => {
    let users;
  
    before(() => {
      cy.fixture('users').then(data => {
        users = data;
      });
    });
  
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should register',function () {
      // cy.clickRegiter();
      cy.visit('/signup');
      cy.register(users.registerUser.firstName,users.registerUser.lastName,users.registerUser.username,users.registerUser.password, users.registerUser.confirmPassword);
      cy.get('.makeStyles-root-1').should('exist');
    });

});