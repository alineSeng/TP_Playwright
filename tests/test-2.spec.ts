import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.locator('#subjectsInput').click();
  await page.locator('#subjectsInput').fill('ma');
  await page.getByText('Maths', { exact: true }).click();
});