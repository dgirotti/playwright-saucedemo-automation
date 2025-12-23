export class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async addProductToCart(productName) {
    const product = this.page
      .locator('.inventory_item')
      .filter({ hasText: productName });

    await product.locator('button').click();
  }

  async getCartCount() {
    return this.page.locator('.shopping_cart_badge');
  }
}

  