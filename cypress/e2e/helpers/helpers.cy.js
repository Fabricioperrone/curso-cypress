/// <reference types="cypress"/>

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = {nome: 'User', idade: '20'}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').type('funciona?', { delay:100})
        .clear()
        cy.get('#formNome').then($el => {
            cy.wrap($el).type('funciona via cypress')
        })

        // const promise = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(10)
        //     }, 500)
        // })

        // cy.get('#buttonSimple').then(() => console.log('Encintrei o primeiro botão!'))
        // cy.wrap(promise).then(ret => console.log(ret))
        // cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão!'))

        // cy.wrap(1).then(num => {
        //     return 2
        // }).should('be.equal', '2')
    })
    it.only('Its...', () => {
        const obj1 = {nome: 'User', idade: '20'}
        cy.wrap(obj1).should('have.property', 'nome', 'User')
        cy.wrap(obj1).its('nome').should('be.equal', 'User')

        const obj2 = { nome: 'User', idade: 20, endereco: { rua: 'dos bobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    })
})