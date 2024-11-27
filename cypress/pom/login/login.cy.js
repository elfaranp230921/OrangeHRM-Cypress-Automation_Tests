export default class loginPage{
    static logo(){
        return cy.get('[alt="company-branding"]');
    }
    static loginText(){
        return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static buttonLogin(){
        return cy.get('[type="submit"]');
    }
    static dashboard(){
        return cy.get('h6').contains('Dashboard');
    }
    static alert(){
        return cy.get('[role="alert"]');
    }
    static required(){
        return cy.get('span').contains('Required', { timeout: 8000 });
    }
}
