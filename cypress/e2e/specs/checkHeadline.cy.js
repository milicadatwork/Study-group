/// <reference types="cypress" />

import Homepage from "/Users/milicadanicic/studyGroup/Study-group/cypress/support/pageObjects/homepage.js"
describe('chelling2 check headline', () => {
    const homepage = new Homepage();
    it('has appropriate headline', () => {
        homepage.navigate()
        homepage.headline()
        cy.should('have.text', 'We design and ship digital products that transform companies.')
    })
})