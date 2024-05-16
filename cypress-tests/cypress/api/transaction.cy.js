describe('Transactions', () => {
    let users;

    before(() => {
      cy.fixture('users').then(data => {
        users = data;
      });
    });
  
    beforeEach(() => {
      cy.loginRequest(users.testuser.username, users.testuser.password);
    });


    it('Should submit payment transaction', () => {
    cy.request({
      method: 'POST',
      url: '/transactions',
      body: {
        amount: '20',
        description: 'paymentApiCypress',
        receiverId: 'qywYp6hS0U',
        senderId: users.testuser.id,
        transactionType: 'payment',
      },
    }).then(response => {
      expect(response.status).to.eq(200);
    });
    })

    it('Should submit request transaction', () => {
        cy.request({
          method: 'POST',
          url: '/transactions',
          body: {
            amount: '100',
            description: 'requestApiCypress',
            receiverId: 'qywYp6hS0U',
            senderId: users.testuser.id,
            transactionType: 'request',
          },
        }).then(response => {
          expect(response.status).to.eq(200);
        });
        })
    
        it('should add comment to transaction', () => {
            cy.request({
              method: 'POST',
              url: '/comments/vYWpMCHEcK',
              body: {
                content: 'apiTestCypress',
                userId: users.testuser.id,
              },
            }).then(response => {
              expect(response.status).to.eq(200);
            });
            })
});
