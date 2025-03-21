import { Page, expect } from '@playwright/test';


export class Form_Page {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
      
  }

  async enter_first_name(firstname){
    const name_field = this.page.getByRole('textbox', { name: 'First Name' });
    await name_field.fill(firstname);
  }
 
  async enter_last_name(lastname){
    const last_name_field = this.page.getByRole('textbox', { name: 'Last Name' });
    await last_name_field.fill(lastname);
  }
  
  async enter_email(email){
    const email_field = this.page.getByRole('textbox', { name: 'name@example.com' });
    await email_field.fill(email);
  }

  async select_gender(gender){
    if (gender === 'male') {
        await this.page.getByText('Male', { exact: true }).click();
      } 
      else if (gender === 'female') {
        await this.page.getByText('Female', { exact: true }).click();
      } 
      else if (gender === 'other') {
        await this.page.getByText('Other', { exact: true }).click();
        
      }
  }

  async enter_mobile(mobile){
    const mobile_field = this.page.getByRole('textbox', { name: 'Mobile Number' });
    await mobile_field.fill(mobile);
  }

  async enter_date(){
    const date_field = this.page.locator('#dateOfBirthInput');
    
    //await date_field.fill(date);
    await date_field.click();
    await this.page.getByRole('option', { name: 'Choose Monday, March 31st,' }).click();
    await this.page.locator('.subjects-auto-complete__value-container').click();

  }

  async enter_subjects(subjects){
    const subjects_field = this.page.locator('.subjects-auto-complete__value-container');
    await subjects_field.click()
    // await this.page.locator('#subjectsInput').fill(subjects);
    await this.page.locator('#subjectsInput').click();
    await this.page.locator('#subjectsInput').fill(subjects);
    await this.page.getByText('Maths', { exact: true }).click();
  }

  async select_hobbies(hobbies) {
    if (hobbies === 'sports') {
      await this.page.getByText('Sports').click(); 
        }
        else if (hobbies === 'reading') {
            await this.page.getByText('Reading').click(); 
        }
        else if (hobbies === 'music') {
            await this.page.getByText('Music').click(); 
        }
  }

  async enter_current_address(address){
    const current_address = this.page.getByRole('textbox', { name: 'Current Address' });
    await current_address.fill(address);
  }

  async enter_city_state(){
    const state_field = this.page.locator('#state');
    const city_field = this.page.locator('#city');

    await state_field.click();
    await this.page.locator('text=Haryana').click(); 
    await city_field.click();
    await this.page.getByText('Karnal', { exact: true }).click(); 

  }

  async submit(){
    const submit_button = this.page.locator('#submit');
    await submit_button.click()
  }

  


  


     
}