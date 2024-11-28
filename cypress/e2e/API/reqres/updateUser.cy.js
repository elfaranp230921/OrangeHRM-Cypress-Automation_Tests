/// <reference types="cypress" />

describe('API Test for Updating User', () => {
    it('Test API Update User', () => {
        cy.request('PUT', 'https://reqres.in/api/users/2', {
            name: 'elfara',
            job: 'qa'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'elfara');
            expect(response.body).to.have.property('job', 'qa'); 
            expect(response.body).to.have.property('updatedAt').and.be.a('string'); 
            expect(response.duration).to.be.lessThan(500);
            expect(response.headers).to.have.property('content-type').and.include('application/json'); 
        })
    })
});