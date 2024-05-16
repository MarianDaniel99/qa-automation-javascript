describe('Users', () => {
    let users;

    before(() => {
      cy.fixture('users').then(data => {
        users = data;
      });
    });
  
    beforeEach(() => {
      cy.loginRequest(users.testuser.username, users.testuser.password);
    });

    it('should get list of users', () => {
      cy.request({
      method: 'GET',
      url: '/users',
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('results');
    });
  });

  it('Should get user profile by user name', () => {
    cy.request({
    method: 'GET',
    url: `/users/profile/${users.testuser.username}`,
  }).then(response => {
    expect(response.status).to.eq(200);
  });
});

it('Should get notifications list', () => {
    cy.request({
    method: 'GET',
    url: '/notifications',
  }).then(response => {
    expect(response.status).to.eq(200);
  });
});

});
