/// <reference types="cypress" />
import loginPage from "../../../pom/login/login.cy";
import APIpage from "../../../pom/API/hitAPI.cy";

describe('Login feature',() =>{
    it('User login with valid credentials', () => {
        loginPage.visitLoginPage();

        loginPage.logo().should('be.visible');
        loginPage.loginText().should('have.text','Login');

        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');

        APIpage.hitAPIlogin().as('succesLogin');

        loginPage.buttonLogin().click();
        cy.wait('@succesLogin');
        
        loginPage.dashboard().should('have.text','Dashboard');
    });
    it('should display an "Invalid credentials" error when an invalid username is entered', () => {
        loginPage.visitLoginPage(); 

        loginPage.inputUsername().type('invalidUser'); 
        loginPage.inputPassword().type('admin123');  

        loginPage.buttonLogin().click();

        //error message
        loginPage.alert().should('be.visible').and('contain.text', 'Invalid credentials');
    });
    it('should display an "Invalid credentials" error when an invalid password is entered', () => {
        loginPage.visitLoginPage();

        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('wrongPassword123');  

        loginPage.buttonLogin().click();

        //error message
        loginPage.alert().should('be.visible').and('contain.text', 'Invalid credentials');
    });
    it('should displays the error message "Required" if the username field is empty', () => {
        loginPage.visitLoginPage();

        loginPage.inputUsername().clear();
        loginPage.inputPassword().type('admin123');

        loginPage.buttonLogin().click();

        //error message
        loginPage.EmptyColomn().should('have.text', 'Required');
    });
    it('should displays error message "Required" if password field is empty', () => {
        loginPage.visitLoginPage();

        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().clear();
        loginPage.buttonLogin().click();

        //error message
        loginPage.EmptyColomn().should('have.text', 'Required'); 
    });
})