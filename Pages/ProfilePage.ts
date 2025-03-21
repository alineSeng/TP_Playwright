import { Page, expect } from '@playwright/test';


export class Profile_Page {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
      
  }

 
  async clickToLogin() {
    const login = await this.page.getByRole('link', { name: 'login' })
    await login.click()
  }


  async clickToRegister() {
    const register = await this.page.getByRole('link', { name: 'register' })
    await register.click()
  }


     
}