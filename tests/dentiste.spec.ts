import { test, expect } from '@playwright/test';

test('Dentiste page has correct content', async ({ page }) => {
  // Listen for any console errors and fail the test if they occur
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`Error text: "${msg.text()}"`);
    }
  });

  await page.goto('http://localhost:5173/dentiste-maroc');

  // Wait for the main heading to be visible
  await page.waitForSelector('h1:has-text("Logiciel pour cabinet dentaire au Maroc")', { timeout: 10000 });

  await page.screenshot({ path: 'dentiste-page-final.png', fullPage: true });
});
