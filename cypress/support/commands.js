// import 'cypress-wait-until';
// import 'cypress-iframe';
// require('cypress-iframe');
import loc from './locators'

Cypress.Commands.add('clickAlert', (locator, message) => {
    cy.get(locator).click()
    cy.on('window:alert', msg => {//on() pega eventos que ocorrem na nossa tela
        expect(msg).to.be.equal(message)
    })
})

Cypress.Commands.add('login', (user, passwd) =>{
    cy.visit('https://barrigareact.wcaquino.me/')
        cy.get(loc.LOGIN.USER).type('fabricio_luis@outlook.com')
        cy.get(loc.LOGIN.PASSWORD).type('jaguatirica0901', { log: false})
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
})
