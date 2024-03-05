/// <reference types="cypress"/>

describe('Work with alerts', () => {
    // Hooks
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    });
    beforeEach(() => {
        cy.reload()
    })
    it('Alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {//on() pega eventos que ocorrem na nossa tela
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })
    it.only('Alert com mock', () => {
        const stub = cy.stub().as('alerta')// dando um nome -Alias
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })
})
