export class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = '#user-name';
      this.passwordInput = '#password';
      this.loginButton = '#login-button';
      this.errorMessage = '[data-test="error"]';
    } // Attributes for the elements
  
    async goto() {
      await this.page.goto('/');
    } // methodos Interact with the attributes of the elements
  
    async login(username, password) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    }
  } // Login action method 
  
  