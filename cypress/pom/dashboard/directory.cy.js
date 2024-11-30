export default class directoryPage{
    static getDirectory(){
        return cy.get('span').contains('Directory');
    }
    static getEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]');
    }
    static listBox(){
        return  cy.get('[role="listbox"]');
    }
    static selectBox(){
        return cy.get('.oxd-select-text-input');
    }
    static buttonSearch(){
        return cy.get('[type="submit"]')
    }
}
