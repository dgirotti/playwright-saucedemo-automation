const playwright = require('eslint-plugin-playwright');

module.exports = [
  {
    files: ['**/*.js'],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,

      // QA / Playwright
      'playwright/no-focused-test': 'error',
      'playwright/no-skipped-test': 'warn',
    },
  },
];
