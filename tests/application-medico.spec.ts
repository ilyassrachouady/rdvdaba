import { test, expect } from '@playwright/test';

test('ApplicationMedicoPage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/application-medico-administrative-maroc');
  await expect(page.locator('h1')).toContainText('Application médico-administrative Maroc');
});
