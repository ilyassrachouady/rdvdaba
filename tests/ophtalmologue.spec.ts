import { test, expect } from '@playwright/test';

test('OphtalmologuePage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/ophtalmologue-maroc');
  await expect(page.locator('h1')).toContainText('Logiciel pour ophtalmologue au Maroc');
});
