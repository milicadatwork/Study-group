/// <reference types="cypress" />

describe('chelling2 tests', () => {
    it('has appropriate headline', () => {
        cy.visit('https://work.co/').get('[data-test-id="header-title-text"]').should('have.text', 'We design and ship digital products that transform companies.')
    })

})