import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Chrome (latest)',
      use: { ...devices['Desktop Chrome'], 
      browserName: 'chromium',
      channel: 'chrome',
    },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});

