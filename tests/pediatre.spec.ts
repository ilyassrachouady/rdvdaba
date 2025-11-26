import { test, expect } from '@playwright/test';

test('PediatrePage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/pediatre-maroc');
  await expect(page.locator('h1')).toContainText('Logiciel pour pédiatre au Maroc');
});
