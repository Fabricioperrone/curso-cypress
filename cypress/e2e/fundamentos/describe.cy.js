/// <reference types="cypress"/>

it('A external test...', () => {

})

describe.skip('Should group test...', () => {
    describe('Should group more specific tests...', () => [
        it('A especific test...', () => {

        })
    ])
    describe('Should group more specific tests...', () => [
        it('A especific test 2...', () => {

        })
    ])
    it('A external test...', () => {
    })
})