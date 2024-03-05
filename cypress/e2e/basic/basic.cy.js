/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it.only('Should visit page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')//.debug()

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contains', 'Campo')

        cy.title().then(title => {
            console.log(title)
        })
    })
    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})