describe('Register', () => {
    let users;
    before(() => {
        cy.fixture('users').then(data => {
          users = data;
        });
      });

    it('should register', () => {
    cy.registerRequest(
        users.registerUser.firstName,
        users.registerUser.lastName,
        users.registerUser.username,
        users.registerUser.password,
        users.registerUser.confirmPassword,
     ).then(response => {
        expect(response.status).to.eq(201);
})

})
});
