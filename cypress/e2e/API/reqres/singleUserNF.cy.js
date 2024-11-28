/// <reference types="cypress" />

describe('API Test for User 23', () => {
    it('Test API User 23', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false // Menghindari kegagalan otomatis pada status 404
        }).then((response) => {
            expect(response.status).to.eq(404); // Memastikan status code adalah 404
            expect(response.body).to.be.empty; // Memastikan body respons kosong
            expect(response.duration).to.be.lessThan(700); // Memastikan waktu respons kurang dari 200ms
            expect(response.headers).to.have.property('content-type').and.include('application/json'); // Memastikan header 'content-type' mengandung 'application/json'
        })
    })
});
