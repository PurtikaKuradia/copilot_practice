
import { test, expect } from '@playwright/test';

// Runs only on Chromium
test.describe('Chromium Tests', () => {
  test.use({ browserName: 'chromium' });

  test('Test Case 1', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
  });
});

// Runs only on Firefox
test.describe('Firefox Tests', () => {
  test.use({ browserName: 'firefox' });

  test('Test Case 2', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
  });
});