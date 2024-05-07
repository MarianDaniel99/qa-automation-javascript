// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { LoginPage } = require('../../pages/LoginPage');
const { TransactionPage } = require('../../pages/TransactionPage');
const { MyAccountSettings } = require('../../pages/MyAccountSettings');
const { BankAccount } = require('../../pages/BankAccount');

test.afterAll(async ({page}) => {
  const myAccountPage = new MyAccountPage(page);
  await myAccountPage.userLogout();
  console.log("Test Completed !");
})

test('Should see account details', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);
  await expect(myAccountPage.userFullName).toHaveText(`${testUser.userFullName}`);
  });

test('should see account balance', async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);
  await expect(myAccountPage.balance).toBeVisible();
});
  
test('should see account transactions history', async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);
  const transactionPage = new TransactionPage(page);
  await expect(transactionPage.transactionList).toBeVisible();
});

test('should see account transactions details', async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);
  const transactionPage = new TransactionPage(page);
  await expect(transactionPage.transactionDetails).toBeVisible();
});

test('should be able to like and comment on transaction', async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const transactionPage = new TransactionPage(page);
  await transactionPage.transactionDetails.click();
//  await transactionPage.likeButton.click();
await transactionPage.likeButton.isVisible();
 await transactionPage.commentField.fill("Test");
 await page.keyboard.press("Enter");
});

test('should update account user settings', async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountSettings = new MyAccountSettings(page);
  await myAccountSettings.myAccount.click();
  await myAccountSettings.userFirstName.fill('Edgar');
  await myAccountSettings.userLastName.fill('Jones');
  await myAccountSettings.userEmail.fill("edgar@yahoo.com");
  await myAccountSettings.phoneNumber.fill("222-222-3312");
  await myAccountSettings.saveButton.click();
});

test('should add new bank account', async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const bankAccount = new BankAccount(page);
  await bankAccount.displayBankAccounts.click();
  await bankAccount.createBankAccount.click();
  await bankAccount.bankName.fill("Test1");
  await bankAccount.routingNumber.fill("222222222");
  await bankAccount.accountNumber.fill("123123123");
  await bankAccount.saveBankAccount.click();
});

test('should delete bank account', async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const bankAccount = new BankAccount(page);
  await bankAccount.displayBankAccounts.click();
  await expect(bankAccount.displayPage).toBeVisible();
  await bankAccount.deleteBankAccount.click();
});

test('should submit payment transaction', async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const transactionPage = new TransactionPage(page);
  await transactionPage.newTransactionButton.click();
  await expect(transactionPage.transactionUsers).toBeVisible();
  await transactionPage.userList.click();
  await transactionPage.amount.fill('10');
  await transactionPage.note.fill('testRequest');
  await transactionPage.requestButton.click();
});

test('should submit payment request transaction', async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const transactionPage = new TransactionPage(page);
  await transactionPage.newTransactionButton.click();
  await expect(transactionPage.transactionUsers).toBeVisible();
  await transactionPage.userList.click();
  await transactionPage.amount.fill('5');
  await transactionPage.note.fill('testPay');
  await transactionPage.payButton.click();
});