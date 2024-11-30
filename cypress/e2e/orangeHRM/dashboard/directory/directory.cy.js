/// <reference types="cypress" />
import loginPage from "../../../../pom/login/login.cy";
import directoryPage from "../../../../pom/Dashboard/directory.cy";
import APIpage from "../../../../pom/API/hitAPI.cy";
import elementPage from "../../../../pom/Element/getElement.cy";

describe('Directory Page Tests', () => {
    it('Pengguna dapat mengakses Directory Page dan Detail Employee', () => {
        loginPage.visitLoginPage();

        loginPage.logo().should('be.visible');
        loginPage.loginText().should('have.text','Login');

        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');

        APIpage.hitAPIlogin().as('succesLogin');

        loginPage.buttonLogin().click();
        cy.wait('@succesLogin');
        
        loginPage.dashboard().should('have.text','Dashboard');
        
        APIpage.hitAPIdirectory().as('directoryPage');

        directoryPage.getDirectory().click();
        cy.wait('@directoryPage');

        directoryPage.getEmployeeName().type('Peter');
        directoryPage.listBox().contains('Peter Mac Anderson').click();

        directoryPage.selectBox().eq(0).click();
        directoryPage.listBox().contains('Chief Financial Officer').click();
        
        directoryPage.selectBox().eq(1).click();
        directoryPage.listBox().contains('New York Sales Office').click();

        APIpage.hitAPIemployee().as("SearchEmployee");

        directoryPage.buttonSearch().click();
        cy.wait('@SearchEmployee');

        elementPage.getParagraph().contains('Peter Mac Anderson');
        elementPage.getParagraph().contains('Chief Financial Officer');
        elementPage.getParagraph().contains('New York Sales Office');

        elementPage.getParagraph().contains('Peter Mac Anderson').click();
        
        elementPage.getParagraph().should('contain', 'Peter Mac Anderson');
        elementPage.getParagraph().should('contain', 'Chief Financial Officer');
        elementPage.getParagraph().should('contain', 'New York Sales Office');
        elementPage.getParagraph().should('contain', '112-342-0005');
        elementPage.getParagraph().should('contain', 'peter@osohrm.com');
    })
});
