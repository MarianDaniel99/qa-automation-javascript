describe('Bank functionallity', () => {
    let users;

    before(() => {
      cy.fixture('users').then(data => {
        users = data;
      });
    });
  
    beforeEach(() => {
      cy.loginRequest(users.testuser.username, users.testuser.password);
    });

    it('Should get list of bank account', () => {
        cy.request({
        method: 'GET',
        url: '/bankAccounts',
      }).then(response => {
        expect(response.status).to.eq(200);
      });
    });

    it('Should delete a bank account', () => {
        cy.request({
        method: 'DELETE',
        url: '/bankAccounts/FYU_zgEUk',
      }).then(response => {
        expect(response.status).to.eq(200);
      });
    });

});
