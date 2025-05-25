import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {
  test('should allow a user to log in successfully', async ({ page }) => {
    await page.goto('http://localhost:5173'); // Assuming the React app is running on this port

    // Fill in the username and password
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'testpass');

    // Click the login button
    await page.click('button:has-text("Sign In")');

    // Expect to be redirected to the dashboard
    await expect(page).toHaveURL('http://localhost:5173/dashboard'); // Adjust if your dashboard URL is different
    await expect(page.locator('h1')).toHaveText('Welcome to the Dashboard!');
  });

  test('should display an error with invalid credentials', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Fill in invalid username and password
    await page.fill('input[name="username"]', 'wronguser');
    await page.fill('input[name="password"]', 'wrongpass');

    // Click the login button
    await page.click('button:has-text("Sign In")');

    // Expect an error message to be visible
    await expect(page.locator('text=Invalid username or password.')).toBeVisible();
    // Expect to remain on the login page
    await expect(page).toHaveURL('http://localhost:5173/');
  });
});
