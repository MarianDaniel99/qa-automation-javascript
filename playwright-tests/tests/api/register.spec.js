import { registerUser } from "../../data/users";
const { test, expect } = require('@playwright/test');

test('Should register a new account', async ({ request }) => {
    const registerResponse = await request.post('/users', {
      data: {
        firstname: registerUser.firstname,
        lastname : registerUser.lastname,
        username: registerUser.username,
        password: registerUser.password,
        confirmPassword: registerUser.confirmPassword,
        type: 'REGISTER',
      },
    });
    expect(registerResponse.ok()).toBeTruthy();
  });
