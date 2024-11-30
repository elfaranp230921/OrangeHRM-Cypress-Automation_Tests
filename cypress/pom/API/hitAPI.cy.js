export default class APIpage{
    static hitAPIdirectory(){
        return cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0');
    }
    static hitAPIemployee(){
        return cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0&locationId=2&empNumber=3&jobTitleId=2');
    }
    static hitAPIlogin(){
        return cy.intercept('GET','**/shortcuts');
    }
    static hitAPImessages(){
        return cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages');
    }
}
