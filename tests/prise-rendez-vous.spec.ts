import { test, expect } from '@playwright/test';

test('PriseRendezVousPage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/prise-rendez-vous-medical-en-ligne');
  await expect(page.locator('h1')).toContainText('Prise de rendez-vous en ligne au Maroc');
});
