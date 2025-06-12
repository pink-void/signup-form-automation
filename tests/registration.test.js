const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { registration } = require('../utils/utils');
require('dotenv').config();

const registrationUrl = process.env.REGISTRATION_URL;
const password = process.env.PASSWORD;
const successUrl = process.env.SUCCESS_URL;

function generateValidUsername() {
  let name = faker.internet.username();
  name = name.replace(/[^a-zA-Z0-9]/g, '');
  if (name.length > 20) {
    name = name.slice(0, 20);
  }
  while (name.length < 3) {
    name += faker.random.alpha({ count: 1, casing: 'lower' });
  }
  return name;
}

test.describe('Registration Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(registrationUrl);
  });

  test('should register with valid credentials and random valid email', async ({ page }) => {
    const validEmail = faker.internet.email();
    const validUsername = generateValidUsername();

    await registration(page, validUsername, validEmail, password);
    await expect(page).toHaveURL(successUrl);
    await expect(page.locator('h1')).toHaveText(/Welcome to the Home Page!/i);
  });
});