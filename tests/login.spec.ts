import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {
  test('should allow a user to log in successfully', async ({ page }) => {
    await page.goto('/'); // Base URL is configured in playwright.config.ts

    // Fill in the username and password
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'testpass');

    // Click the login button
    await page.click('button:has-text("Sign In")');

    // Expect to see the dashboard content and not the login form
    await expect(page.locator('h1')).toHaveText('Welcome to the Dashboard!');
    await expect(page.locator('input[name="username"]')).not.toBeVisible();
    await expect(page.locator('input[name="password"]')).not.toBeVisible();
    await expect(page.locator('button:has-text("Sign In")')).not.toBeVisible();
  });

  test('should display an error with invalid credentials', async ({ page }) => {
    await page.goto('/');

    // Fill in invalid username and password
    await page.fill('input[name="username"]', 'wronguser');
    await page.fill('input[name="password"]', 'wrongpass');

    // Click the login button
    await page.click('button:has-text("Sign In")');

    // Expect an error message to be visible
    await expect(page.locator('text=Invalid username or password.')).toBeVisible({ timeout: 5000 });
    // Expect to remain on the login page (login elements still visible)
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('button:has-text("Sign In")')).toBeVisible();
  });
});
