import { Page } from '@playwright/test';

export class Home_Page {
  readonly page: Page;
  readonly url: string = 'https://demoqa.com/';
  constructor(page: Page) {
      this.page = page;
      
  }

  async navigateTo() {
    await this.page.goto(this.url); 
  }

  
  async goToMenuElements() {
    const menu_elements = await this.page.locator('path').first();
    await menu_elements.click()
  }

  async goToMenuForms() {
    const menu_forms = await this.page.locator('div').filter({ hasText: /^Forms$/ }).first();
    await menu_forms.click()
  }

  async goToMenuWidgets() {
    const menu_widgets = await this.page.locator('div').filter({ hasText: /^Widgets$/ }).nth(1)
    await menu_widgets.click()
  }

  async goToBookStoreApplication() {
    const book_store_application = await this.page.locator('div').filter({ hasText: /^Book Store Application$/ }).nth(1)
    await book_store_application.click()
  }
 

     
}