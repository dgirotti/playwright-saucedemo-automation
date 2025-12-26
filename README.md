<<<<<<< HEAD
# playwright-saucedemo-automation
QA Automation framework using Playwright (UI + API tests)
=======
# QA Automation Challenge – Playwright

## 📌 Overview

This project contains end-to-end automated tests developed as part of a QA Automation technical challenge, using Playwright with JavaScript.
The main goal is to validate key functionalities of the application under test, ensuring stability, maintainability, and automation best practices.

## 🛠️ Tech Stack

| Item | Detail |
|------|--------|
| Browser | Google Chrome (latest stable version) |
| Framework | Playwright |
| Language | JavaScript |
| Test Runner | Playwright Test |
| Reporter | HTML Reporter |
| Environment variables | dotenv (.env) |


## 🌐 Application Under Test

Base URL: https://www.saucedemo.com

## 📂 Project Structure

```
.
playwright-saucedemo/
│
├── allure-results/
│   
├── api/
│   └── mercadolibre.api.js  
│
├── config/
│   ├── users.js
│   └── api.config.js       
│
├── pages/
│   ├── LoginPage.js
│   └── ProductsPage.js
│
├── tests/
│   ├── api/
│   │   └── mercadolibre.spec.js
│   │
│   ├── cart.spec.js
│   └── login.spec.js
│
├── .env
├── .env.example
├── package.json
├── playwright.config.js
└── README.md
```


## 📄 Folder Description

tests/ → Automated test cases

pages/ → Page Object Model (POM) for reusability and maintainability

playwright.config.js → Global framework configuration

.env → Sensitive data (credentials, URLs)

.env.example → Required environment variables template

## 🔐 Environment Variables

.env.example

STANDARD_USER=standard_user

PASSWORD=secret_sauce

BASE_URL=https://www.saucedemo.com

The .env file is not versioned and must be created locally based on this template. Ensure that you have the .env file at the root of the project. 

STANDARD_USER=standard_user

STANDARD_PASSWORD=secret_sauce

LOCKED_USER=locked_out_user

LOCKED_PASSWORD=secret_sauce

### (I'm sharing this information with you in order to be able to run the tests, but in a real project the users and password for .env should not be displayed in this doc.) 

## 🌍 Browser Configuration (Challenge Requirement)

All automated tests are configured to run exclusively on Google Chrome (latest stable version).
Configuration applied in playwright.config.js:
browserName: 'chromium'
channel: 'chrome'
This ensures:
- Execution on real Google Chrome
- Tests always run on the most recent installed Chrome version

## ▶️  Installation & Execution

  
1. Clone the Repository

2. Install dependencies
    npm install
3. Install Playwright browsers
    npx playwright install
    npx playwright install chrome
4. Run all tests
    npx playwright test
5. Run tests in headed mode
    npx playwright test --headed

## 📊 Reports

After execution, an HTML report is automatically generated.

To open the report:
    
    npx playwright show-report

To open Allure Report
    
    npx allure generate allure-results --clean -o allure-report
    
    npx allure open allure-report

## The report includes:
- Test execution status

- Screenshots on failures

- Trace files for debugging

