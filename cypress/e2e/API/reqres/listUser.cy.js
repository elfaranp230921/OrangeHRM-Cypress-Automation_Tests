/// <reference types="cypress" />

describe('Login feature',() =>{
    it('Test API List User', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('page', 2);
            expect(response.duration).to.be.lessThan(200);
            expect(response.headers).to.have.property('content-type').and.include('application/json'); 
        })
    })
});