import { Page, expect } from '@playwright/test';


export class Register_Page {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
      
  }

  
  async enter_firstname(firstname) {
    const firstname_field = await this.page.getByRole('textbox', { name: 'First Name' })
    await firstname_field.fill(firstname)

  }

  async enter_lastname(lastname) {
    const lastname_field = await this.page.getByRole('textbox', { name: 'Last Name' })
    await lastname_field.fill(lastname)

  }

  async enter_username(username) {
    const username_field = await this.page.getByRole('textbox', { name: 'UserName' })
    await username_field.fill(username)

  }

  async enter_password(password) {
    const password_field = await this.page.getByRole('textbox', { name: 'Password' })
    await password_field.fill(password)

  }

  async click_register() {
    const register_button = await this.page.getByRole('button', { name: 'Register' })
    await register_button.click()
  }


     
}