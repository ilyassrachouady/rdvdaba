import { test, expect } from '@playwright/test';

test('KinesitherapeutePage should have the correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/kinesitherapeute-maroc');
  await expect(page.locator('h1')).toContainText('Logiciel pour kinésithérapeute au Maroc');
});
