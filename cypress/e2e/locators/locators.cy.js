/// <reference types="cypress"/>

describe('Work with basci elements', () => {
    // Hooks
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    });
    beforeEach(() => {
        cy.reload()
    })
    it('Jquery selector', () => {
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) >input')
        cy.get('[onclick*=\'Francisco\']')
        cy.get("[onclick*=\'Francisco\']")
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input')
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input')
    })
    it('Using xpath', () => {
        cy.xpath('//input[contains(@onclick, \'Francisco\')]')
        cy.xpath("//table[@id='tabelaUsuarios']//tbody[contains(.,'Francisco')]/..//input[@type='text']")
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']")
            .type('Funciona')
    })
})