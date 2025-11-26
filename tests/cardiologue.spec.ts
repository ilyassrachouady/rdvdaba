import { test, expect } from '@playwright/test';

test('CardiologuePage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/cardiologue-maroc');
  await expect(page.locator('h1')).toContainText('Logiciel pour cardiologue au Maroc');
});
