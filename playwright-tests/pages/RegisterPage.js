const { expect } = require('@playwright/test');

exports.RegisterPage = class RegisterPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('#firstName');
    this.lastNameField = page.locator('#lastName');
    this.userNameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.passwordConfirmField = page.locator('#confirmPassword');
    this.signUpButton = page.locator('[data-test=signup-submit]');
  }

  async goto() {
    await this.page.goto('/signup');
  }

  async userRegister(firstName,lastName,username,password,passwordConfirm) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.passwordConfirmField.fill(passwordConfirm);
    await this.signUpButton.click();
  }
};

