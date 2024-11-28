/// <reference types="cypress" />

describe('API Test for Deleting User', () => {
    it('Test API Delete User', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(204);
            expect(response.body).to.be.empty; 
            expect(response.duration).to.be.lessThan(500);
        })
    })
});
