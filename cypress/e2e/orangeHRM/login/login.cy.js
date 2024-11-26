/// <reference types="cypress" />

describe('Login feature',() =>{
    it('User login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
    });
    it('should display an "Invalid credentials" error when an invalid username is entered', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
        cy.get('[name="username"]').type('invalidUser'); 
        cy.get('[name="password"]').type('admin123');  
        cy.get('[type="submit"]').click();
        cy.get('[role="alert"]', { timeout: 5000 })
            .should('be.visible')
            .and('contain.text', 'Invalid credentials');
    });
    it('should display an "Invalid credentials" error when an invalid password is entered', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('wrongPassword123');  
        cy.get('[type="submit"]').click();
        cy.get('div.oxd-alert.oxd-alert--error[role="alert"]', { timeout: 5000 })
            .should('be.visible')
            .and('contain.text', 'Invalid credentials');
    });
    it('should displays the error message "Required" if the username field is empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').clear();
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('span').contains('Required').should('have.text', 'Required');
    });
    it('should displays error message "Required" if password field is empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('span').contains('Required').should('have.text', 'Required'); 
    });
    it('displays the error message "Required" if the username and password fields are empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').clear();
        cy.get('[name="password"]').clear();
        cy.get('[type="submit"]').click(); 
        cy.get('span').contains('Required').should('have.text', 'Required');
        cy.get('span').contains('Required').should('have.text', 'Required');
    });
})