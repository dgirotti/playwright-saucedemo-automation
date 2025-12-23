import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../config/users';

let productsPage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login(
    users.standard.username,
    users.standard.password
  );
});

test('TC11 - Add a single product to the cart', async ({ page }) => {
  await productsPage.addProductToCart('Sauce Labs Backpack');

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('TC13 - View Cart with added products (intentional fail)', async ({ page }) => {
  await productsPage.addProductToCart('Sauce Labs Backpack');

  // INCORRECT ASSERT TO MAKE THE TEST FAIL
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
});



  