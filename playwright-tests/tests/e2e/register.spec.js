// @ts-check
const { test, expect } = require('@playwright/test');
const { registerUser } = require('../../data/users');
const { RegisterPage } = require('../../pages/RegisterPage');
const { LoginPage } = require('../../pages/LoginPage');

test('should register a new account', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.userRegister(registerUser.firstname, registerUser.lastname, registerUser.username, registerUser.password, registerUser.passwordConfirm);
    const loginPage = new LoginPage(page);
    await expect(loginPage.isDisplayed).toBeVisible();
  });
  
