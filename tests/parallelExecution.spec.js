
import { test, expect } from '@playwright/test';

// Parallel Tests - Runs on configured browser in playwright.config.js
test.describe('Parallel Tests @regression', () => {
  test('Test Case 1 - Amazon', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
  });

  test('Test Case 2 - Flipkart', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
  });
});

// Note: To run tests on different browsers, configure multiple projects in playwright.config.js:
// Example:
// projects: [
//   { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
//   { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
//   { name: 'webkit', use: { ...devices['Desktop Safari'] } },
// ]