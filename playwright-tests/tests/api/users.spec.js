const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { loggedInUserApiContext } = require('../../utilities/apiUtilities');

test.beforeAll(async ({ playwright, request }) => {
  await loggedInUserApiContext(playwright, request, testUser);
});

test('should get list of users', async ({ request }) => {
    const usersResponse = await request.get('/users')
    let users = await usersResponse.json();
    expect(usersResponse.ok()).toBeTruthy();
    expect(users.results).toBeDefined();
    console.log(users.results);
  });

  test('Should get user profile by user name', async ({ request }) => {
    const userProfileResponse = await request.get(`/users/profile/${testUser.username}`);
    let userProfile = await userProfileResponse.json();
    expect(userProfileResponse.ok()).toBeTruthy();
    expect(userProfile).toBeDefined();
    console.log(userProfile);
  });

  test('Should get notifications list', async ({ request }) => {
    const notificationsResponse = await request.get('/notifications');
    let data = await notificationsResponse.json();
    expect(notificationsResponse.ok()).toBeTruthy();
    expect(data.results).toBeDefined();
    console.log(data.results);
  });