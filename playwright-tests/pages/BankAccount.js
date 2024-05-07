const { expect } = require('@playwright/test');

exports.BankAccount = class BankAccount {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.displayBankAccounts = page.locator('[data-test="sidenav-bankaccounts"]');
    this.displayPage = page.locator('[data-test="bankaccount-list"]');
    this.createBankAccount = page.locator('[data-test="bankaccount-new"]');
    this.bankName = page.locator('#bankaccount-bankName-input');
    this.routingNumber = page.locator('#bankaccount-routingNumber-input');
    this.accountNumber = page.locator('#bankaccount-accountNumber-input');
    this.saveBankAccount = page.locator('[data-test="bankaccount-submit"]');
    this.deleteBankAccount = page.locator('[data-test="bankaccount-delete"]').first();
  }
};
