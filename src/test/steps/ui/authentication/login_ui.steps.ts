import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';

Given('I launch the Facebook app', async function (this: MobileWorld) {
  await this.launchApp(); // Sử dụng capabilities mặc định bên trong world
});

Then('I should see username field', async function (this: MobileWorld) {
  const usernameField = await this.driver.$('~username');
  const isDisplayed = await usernameField.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I should see password field', async function (this: MobileWorld) {
  const passwordField = await this.driver.$('~password');
  const isDisplayed = await passwordField.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I should see login button', async function (this: MobileWorld) {
  const loginButton = await this.driver.$('~login');
  const isDisplayed = await loginButton.isDisplayed();
  expect(isDisplayed).to.be.true;
});
