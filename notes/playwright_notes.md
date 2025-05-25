# Playwright Notes

## What is Playwright?
Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API. It enables cross-browser web automation that is evergreen, capable, reliable, and fast.

## Key Features:
- **Cross-Browser:** Supports Chromium, Firefox, and WebKit.
- **Cross-Platform:** Runs on Windows, Linux, and macOS.
- **Language Bindings:** Available for JavaScript, TypeScript, Python, .NET, and Java.
- **Auto-wait:** Playwright waits for elements to be ready before performing actions.
- **Retries:** Built-in retry mechanism for flaky tests.
- **Tracing:** Capture execution trace, video, and screenshots to debug tests.
- **Parallelization:** Run tests in parallel to speed up execution.

## Basic Usage (JavaScript/TypeScript):

### Installation:
```bash
npm init playwright@latest
```

### Example Test:
```javascript
// example.spec.js
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

## Useful Playwright Commands:
- `npx playwright test`: Run all tests.
- `npx playwright test example.spec.js`: Run a specific test file.
- `npx playwright show-report`: Open the HTML test report.
- `npx playwright codegen`: Generate Playwright tests by recording user interactions.

## Web App Elements for Testing (React with Material UI):
The web app is now a React application with Material UI components.

### Login Page:
- Username input field (Material UI TextField)
- Password input field (Material UI TextField)
- Login button (Material UI Button)
- Error message paragraph (Material UI Typography)

### Dashboard Page:
- Welcome message (Material UI Typography)
- Logout button (Material UI Button)

### Running the React App:
1. Navigate to the `playwright-react-app` directory:
   `cd playwright-react-app`
2. Install dependencies (if not already done):
   `npm install`
3. Start the development server:
   `npm run dev`
   This will typically start the app on `http://localhost:5173` (or another available port).
