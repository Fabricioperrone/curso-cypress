/// <reference types="cypress"/>

describe('Should test at a funcional level', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('fabricio_luis@outlook.com')
        cy.get('[data-test="passwd"]').type('jaguatirica0901')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })
    it('...',() => {
        
    })
})