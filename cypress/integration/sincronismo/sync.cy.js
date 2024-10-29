/// <reference types="cypress"/>

describe('Esperas...', () => {
    // Hooks
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    });
    beforeEach(() => {
        cy.reload()
    })
    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona')
    })
    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            //.should('not.exist')
            .should('exist')
            .type('Funciona')
    })
    it('Uso do Find', () => {
        cy.get('#buttonList').click()
        cy.get('#Lista li')
            .find('span')
            .should('contain', 'Item 1')

        // cy.get('#buttonList').click()
        // cy.get('#Lista li')
        //     .find('span')
        //     .should('contain','Item 2') deve ser evitado

        cy.get('#Lista li span')
            .should('contain', 'Item 2')
    })
    it('Uso do Timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo').should('exist')

        cy.get('#buttonListDOM').click()
        // cy.wait(5000) evitar
        // cy.get('#Lista li span', {timeout:30000})
        //     .should('contain', 'Item 2')

        // cy.get('#Lista li span', {timeout:30000})
        cy.get('#Lista li span')
            .should('have.length', '1')

        cy.get('#Lista li span')
            .should('have.length', '2')
    })
    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })
    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => {
        // cy.get('#Lista li span')
            // .should('have.length', '2')
            // console.log($el)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
    })
})