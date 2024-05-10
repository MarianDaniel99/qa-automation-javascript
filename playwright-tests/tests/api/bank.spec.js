const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { loggedInUserApiContext } = require('../../utilities/apiUtilities');

test.beforeAll(async ({ playwright, request }) => {
  await loggedInUserApiContext(playwright, request, testUser);
});

test('Should get list of bank account', async ({ request }) => {
    const bankResponse = await request.get('/bankAccounts');
    let bankData = await bankResponse.json();
    expect(bankResponse.ok()).toBeTruthy();
    expect(bankData.results).toBeDefined();
    // console.log(bankData.results);
  });

  test('Should delete bank account', async ({ request }) => {
    const bankResponse = await request.delete(`/bankAccounts/tZTjO2gIz`);
    expect(bankResponse.ok()).toBeTruthy();
  });