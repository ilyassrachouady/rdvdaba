import { test, expect } from '@playwright/test';

test('MarrakechPage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/logiciel-medical-marrakech');
  await expect(page.locator('h1')).toContainText('Logiciel médical moderne Marrakech');
});
