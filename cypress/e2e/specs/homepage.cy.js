/// <reference types="cypress" />

import Homepage from "/Users/milicadanicic/studyGroup/Study-group/cypress/support/pageObjects/homepage.js"
describe('chelling3-> check homepage links', () => {
    const homepage = new Homepage();

    beforeEach(()=> {
        homepage.navigate();
        homepage.globalMenu();
    })

    it('has clicked on logo', () => {
        cy.url().should('eq','https://work.co/grid/');
    })

    it('has checked clients link', () => {
        homepage.clientsLink()
        cy.url().should('eq','https://work.co/clients/')
    })

    it('has checked company link', () => {
        homepage.companyLink()
        cy.url().should('eq','https://work.co/company/')
    })

})