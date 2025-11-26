import { test, expect } from '@playwright/test';

test('MedecinGeneralistePage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/medecin-generaliste-maroc');
  await expect(page.locator('h1')).toContainText('Logiciel pour médecin généraliste au Maroc');
});
