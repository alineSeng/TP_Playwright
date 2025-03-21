import { Page, expect } from '@playwright/test';


export class Login_Page {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
      
  }

  
  async enter_username(username) {
   const username_field = this.page.getByRole('textbox', { name: 'UserName' })
   await username_field.waitFor({ state: 'visible' })
   await username_field.fill(username)
  }

  async enter_password(password) {
    const password_field = this.page.getByRole('textbox', { name: 'Password' })
    await password_field.fill(password)
  }

  async click_login() {
    const login_button = this.page.getByRole('button', { name: 'Login' })
    await login_button.click()
  }

  async check_connexion(username) {
    const info_connexion = this.page.getByText('User Name : joLog out')
    const info_username_connexion = this.page.locator('#userName-value')
    await info_connexion.isVisible()
    await expect(info_username_connexion).toContainText(username)
  }
 
  async login_as(username, password) {
    this.enter_username(username)
    this.enter_password(password)
    this.click_login()
  }
  
  



     
}