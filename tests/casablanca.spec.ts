import { test, expect } from '@playwright/test';

test('CasablancaPage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/logiciel-medical-casablanca');
  await expect(page.locator('h1')).toContainText('Logiciel médical N°1 à Casablanca');
});
