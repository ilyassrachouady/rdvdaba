import { test, expect } from '@playwright/test';

test('AgendaMedicalPage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/agenda-medical-intelligent-cloud');
  await expect(page.locator('h1')).toContainText('Agenda médical intelligent cloud');
});
