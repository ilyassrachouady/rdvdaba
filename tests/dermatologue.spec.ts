import { test, expect } from '@playwright/test';

test('DermatologuePage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/dermatologue-maroc');
  await expect(page.locator('h1')).toContainText('Logiciel pour dermatologue au Maroc');
});
