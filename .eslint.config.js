import playwright from 'eslint-plugin-playwright';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,

      // Reglas clave para QA
      'playwright/no-focused-test': 'error',
      'playwright/no-skipped-test': 'warn',
    },
  },
];
