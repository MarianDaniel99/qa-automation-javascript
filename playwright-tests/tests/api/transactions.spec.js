const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { loggedInUserApiContext } = require('../../utilities/apiUtilities');

test.beforeAll(async ({ playwright, request }) => {
  await loggedInUserApiContext(playwright, request, testUser);
});

test('should create transaction payment', async ({ request }) => {
  const paymentResponse = await request.post('/transactions', {
    data: {
      amount: '100',
      description: 'paymentApi',
      receiverId: 'qywYp6hS0U',
      senderId: testUser.id,
      transactionType: 'payment',
    },
  });

  expect(paymentResponse.ok()).toBeTruthy();
});

test('should create transaction request', async ({ request }) => {
  const requestResponse = await request.post('/transactions', {
    data: {
      amount: '100',
      description: 'requestApi',
      receiverId: 'qywYp6hS0U',
      senderId: testUser.id,
      transactionType: 'request',
    },
  });
  expect(requestResponse.ok()).toBeTruthy();
});

test('Should add comment to transaction', async ({ request }) => {
  const commentResponse = await request.post('/comments/h4kW1TxHXI', {
    data: {
      content: 'apiTest',
      userId: testUser.id,
    },
  });
  expect(commentResponse.ok()).toBeTruthy();
});
