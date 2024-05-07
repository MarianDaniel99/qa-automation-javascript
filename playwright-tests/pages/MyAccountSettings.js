const { expect } = require('@playwright/test');

exports.MyAccountSettings = class MyAccountSettings {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.myAccount = page.locator('[data-test="sidenav-user-settings"]');
    this.userFirstName = page.locator('#user-settings-firstName-input');
    this.userLastName = page.locator('#user-settings-lastName-input');
    this.userEmail = page.locator('#user-settings-email-input');
    this.phoneNumber = page.locator('#user-settings-phoneNumber-input');
    this.saveButton = page.locator('[data-test="user-settings-submit"]');
  }
};