import { test, expect } from '@playwright/test';

test('DossiersSecurisesPage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/dossiers-patients-securises-cloud');
  await expect(page.locator('h1')).toContainText('Dossiers patients sécurisés au Maroc');
});
