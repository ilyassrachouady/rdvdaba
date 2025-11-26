import { test, expect } from '@playwright/test';

test('TangerPage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/logiciel-medical-tanger');
  await expect(page.locator('h1')).toContainText('Logiciel médical cloud Tanger');
});
