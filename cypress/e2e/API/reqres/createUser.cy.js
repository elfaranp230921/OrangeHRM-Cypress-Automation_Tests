/// <reference types="cypress" />

describe('API Test for Creating User', () => {
    it('Test API Create User', () => {
        cy.request('POST', 'https://reqres.in/api/users', {
            name: 'elfara',
            job: 'qa'
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', 'elfara');
            expect(response.body).to.have.property('job', 'qa');
            expect(response.body).to.have.property('id').and.be.a('string');
            expect(response.duration).to.be.lessThan(500);
            expect(response.headers).to.have.property('content-type').and.include('application/json'); // Memastikan header 'content-type' mengandung 'application/json'
        })
    })
});
