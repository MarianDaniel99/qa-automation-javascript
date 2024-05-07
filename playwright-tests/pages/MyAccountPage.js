const { expect } = require('@playwright/test');

exports.MyAccountPage = class MyAccountPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userName = page.locator('[data-test=sidenav-username]');
    this.userFullName = page.locator('.MuiTypography-subtitle1');
    this.logOutLink = page.locator('[data-test=sidenav-signout]');
    this.balance = page.locator('[data-test="sidenav-user-balance"]');
  }

  async userLogout() {
    await this.logOutLink.click();
  }
};
