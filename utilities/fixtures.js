import { test as base } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export const test = base.extend({

  loggedInPage: async ({ page }, use) => {

    await page.goto(process.env.BASE_URL);
    await page.fill('#username', process.env.USERNAME);
    await page.fill('#password', process.env.PASSWORD);
    await page.click('#login');

    // Wait for successful login (important, otherwise chaos)
    await page.waitForLoadState('networkidle');

    await use(page);
  }

});