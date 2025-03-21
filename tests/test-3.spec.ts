import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div').filter({ hasText: /^Widgets$/ }).nth(1).click();
  await page.getByText('Select Menu').click();
  await page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1).click();
  await page.getByText('Another root option', { exact: true }).click();
  await page.locator('#withOptGroup svg').click();
  await page.locator('#react-select-2-option-3').click();
  await page.locator('#selectOne svg').click();
  await page.getByText('Other', { exact: true }).click();
  await page.locator('#oldSelectMenu').selectOption('10');
  await page.locator('#selectMenuContainer svg').nth(2).click();
  await page.locator('#react-select-4-option-0').click();
  await page.locator('#react-select-4-option-1').click();
  await page.locator('#react-select-4-option-2').click();
  await page.locator('#react-select-4-option-3').click();
  await page.locator('#selectMenuContainer div').filter({ hasText: 'Multiselect drop down option' }).first().click();
  await page.locator('#cars').selectOption('audi');
});