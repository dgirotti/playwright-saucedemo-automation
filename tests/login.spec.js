import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../config/users';

test.describe('Login functionality', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC-01 Login with valid credentials', async ({ page }) => {
    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await expect(page).toHaveURL(/inventory/);
  });

  test('TC-04 Login with locked out user', async ({ page }) => {
    await loginPage.login(
      users.locked.username,
      users.locked.password
    );

    await expect(
      page.locator(loginPage.errorMessage)
    ).toBeVisible();
  });
});
