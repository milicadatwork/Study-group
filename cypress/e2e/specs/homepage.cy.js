/// <reference types="cypress" />

import Homepage from "../../support/pageObjects/home.page"
describe('chelling3-> check homepage links', () => {
    
    beforeEach(()=> {
        Homepage.navigate();
    })
    
    it('has appropriate headline', () => {
        Homepage.headline()
        cy.should('have.text', 'We design and ship digital products that transform companies.')
    })

    it('has clicked on logo', () => {
        Homepage.globalMenu().click();
        cy.url().should('eq','https://work.co/grid/');
    })

    it('has checked clients link', () => {
        Homepage.globalMenu().click();
        Homepage.clientsLink().click();
        cy.url().should('eq','https://work.co/clients/')
    })

    it('has checked company link', () => {
        Homepage.globalMenu().click();
        Homepage.companyLink().click();
        cy.url().should('eq','https://work.co/company/')
    })

})