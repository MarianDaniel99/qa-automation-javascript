const { expect } = require('@playwright/test');

exports.TransactionPage = class TransactionPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.transactionList = page.locator('[data-test="transaction-list"]');
    this.transactionUsers = page.locator('[data-test="users-list"]');
    this.transactionDetails = page.locator('[data-test^="transaction-item"]').first();
    this.likeButton = page.locator ('[data-test^="transaction-like-button"]').nth(1);    
    this.commentField = page.locator('[data-test^="transaction-comment-input"]').first(); 
    this.userList = page.locator('[data-test^="user-list-item"]').first();
    this.newTransactionButton = page.locator('[data-test="nav-top-new-transaction"]');
    this.amount = page.locator('#amount');
    this.note = page.locator('#transaction-create-description-input');
    this.requestButton = page.locator('[data-test="transaction-create-submit-request"]');
    this.payButton = page.locator('[data-test="transaction-create-submit-payment"]');
    this.returnToTransactionButton = page.locator('[data-test="new-transaction-return-to-transactions"]');

  }
};
