// utils/utils.js
require('dotenv').config();
async function registration(page, username, email, password) {
  await page.goto(process.env.REGISTRATION_URL);

  const usernameInput = page.locator('input[name="username"]');
  const emailInput = page.locator('input[name="email"]');
  const passwordInput = page.locator('input[name="password"]');
  const confirmPasswordInput = page.locator('input[name="confirmPassword"]');
  const submitButton = page.getByRole('button', { name: /Register/i });

  // Wait for each field and fill
  await usernameInput.waitFor();
  await usernameInput.fill(username);

  await emailInput.fill(email);
  await passwordInput.fill(password);
  await confirmPasswordInput.fill(password);

  await submitButton.click();
}

module.exports = { registration };