/// <reference types="cypress" />
import loginPage from "../../../pom/login/login.cy";

describe('Login feature',() =>{
    it('Ensure the OrangeHRM logo is displayed on the login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.logo().should('be.visible');
    });
    it('Displaying the text "Login" is displayed on the login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.loginText().should('have.text','Login');
    });
    it('User login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        cy.intercept('GET','**/action-summary').as('actionSummarry');
        cy.intercept('GET','**/shortcuts').as('sorkat');
        cy.intercept('GET','**/subunit').as('subunit');
        cy.intercept('GET','**/locations').as('loc');
        loginPage.buttonLogin().click();
        cy.wait('@actionSummarry');
        cy.wait('@sorkat');
        cy.wait('@subunit');
        cy.wait('@loc');
        loginPage.dashboard().should('have.text','Dashboard');
    });
    it('should display an "Invalid credentials" error when an invalid username is entered', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
        loginPage.inputUsername().type('invalidUser'); 
        loginPage.inputPassword().type('admin123');  
        loginPage.buttonLogin().click();
        //error message
        loginPage.alert().should('be.visible').and('contain.text', 'Invalid credentials');
    });
    it('should display an "Invalid credentials" error when an invalid password is entered', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('wrongPassword123');  
        loginPage.buttonLogin().click();
        //error message
        loginPage.alert().should('be.visible').and('contain.text', 'Invalid credentials');
    });
    it('should displays the error message "Required" if the username field is empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.inputUsername().clear();
        loginPage.inputPassword().type('admin123');
        loginPage.buttonLogin().click();
        //error message
        loginPage.required().should('have.text', 'Required');
    });
    it('should displays error message "Required" if password field is empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().clear();
        loginPage.buttonLogin().click();
        //error message
        loginPage.required().should('have.text', 'Required'); 
    });
    it('displays the error message "Required" if the username and password fields are empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.inputUsername().clear();
        loginPage.inputPassword().clear();
        loginPage.buttonLogin().click();
        //error message
        loginPage.required().should('have.text', 'Required');
    });
})