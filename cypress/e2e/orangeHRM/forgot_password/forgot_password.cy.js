/// <reference types="cypress" />
import APIpage from "../../../pom/API/hitAPI.cy";
import elementPage from "../../../pom/Element/getElement.cy";
import FotgotpwPage from "../../../pom/forgot_password/forgot_pw.cy";
import loginPage from "../../../pom/login/login.cy";

describe('Forgot Password Feature', () => {
    beforeEach(()=>{
        loginPage.visitLoginPage();
        loginPage.loginText().should('have.text','Login');
    })
    it('Users can access the Forgot Password page', () => {
        APIpage.hitAPImessages().as('forgot_password');
        FotgotpwPage.GetElementForgotPW().click();
        cy.wait('@forgot_password');

        elementPage.geth6Text().contains('Reset Password');
    })
    it('Users can request a reset password ', () => {
        APIpage.hitAPImessages().as('forgot_password');
        FotgotpwPage.GetElementForgotPW().click();

        elementPage.geth6Text().contains('Reset Password');
        FotgotpwPage.inputUsername().type('Admin');

        APIpage.hitAPImessages().as('message'); 
        FotgotpwPage.buttonReset().click();
        cy.wait('@message');

        elementPage.geth6Text().contains('Reset Password link sent successfully');
    })
    it('should show error message for empty username', () => {
        APIpage.hitAPImessages().as('forgot_password');
        FotgotpwPage.GetElementForgotPW().click();

        elementPage.geth6Text().contains('Reset Password');
        FotgotpwPage.inputUsername().clear();
        FotgotpwPage.buttonReset().contains('Reset Password').click();
        
        FotgotpwPage.emptyUsername().should('have.text', 'Required');
      });
      it('Cancel button', () => {
        APIpage.hitAPImessages().as('forgot_password');
        FotgotpwPage.GetElementForgotPW().click();
        cy.wait('@forgot_password');

        elementPage.geth6Text().contains('Reset Password');

        FotgotpwPage.inputUsername().clear();
        FotgotpwPage.buttonCancel().click()
        loginPage.loginText().should('have.text','Login');
       });
  });