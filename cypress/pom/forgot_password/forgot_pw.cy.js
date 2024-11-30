export default class FotgotpwPage{
    static GetElementForgotPW(){
        return cy.get('.orangehrm-login-forgot');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static buttonReset(){
        return cy.get('[type="submit"]');
    }
    static emptyUsername(){
        return cy.get('span').contains('Required');
    }
    static buttonCancel(){
        return cy.get('[type="button"]');
    }
}
