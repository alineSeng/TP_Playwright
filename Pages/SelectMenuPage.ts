import { Page, expect } from '@playwright/test';



export class Select_Menu_Page {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
      
  }

  async click_select_value() {
    const select_value = this.page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1);
    const another_root_option = this.page.getByText('Another root option', { exact: true })

    await select_value.click();
    await another_root_option.click();

  }

  async click_select_one() {
    const select_one = this.page.locator('#withOptGroup svg')
    const other = this.page.locator('#react-select-2-option-3')

    await select_one.click();
    await other.click();

  }

  async click_old_style_select_menu() {
    const old_style_select_menu = this.page.locator('#oldSelectMenu')
    await old_style_select_menu.selectOption('10');

  }

  async multiselect_drop_down() {
    const multiselect_drop_down = this.page.locator('#selectMenuContainer svg').nth(2)
    await multiselect_drop_down.click();
    await this.page.locator('#react-select-4-option-0').click();
    await this.page.locator('#react-select-4-option-1').click();
    await this.page.locator('#react-select-4-option-2').click();
    await this.page.locator('#react-select-4-option-3').click();
    await this.page.locator('#selectMenuContainer div').filter({ hasText: 'Multiselect drop down option' }).first().click();

  }

  async standard_multi_select() {
    const standard_multi_select = this.page.locator('#cars')
    await standard_multi_select.selectOption('audi');

  }
 
  
}