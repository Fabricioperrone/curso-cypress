// import 'cypress-wait-until';
// import 'cypress-iframe';
// require('cypress-iframe');

Cypress.Commands.add('clickAlert', (locator, message) => {
    cy.get(locator).click()
    cy.on('window:alert', msg => {//on() pega eventos que ocorrem na nossa tela
        expect(msg).to.be.equal(message)
    })
})