
class Homepage {
    navigate(){
        cy.visit('https://work.co/')
    }
    get headline(){
        return cy.get('[data-test-id="header-title-text"]')
    }
    get globalMenu(){
        return  cy.get('[data-test-id="global-menu-btn"]')
    }
    get clientsLink(){
        return cy.get('[data-test-id="grid-select-clients-link"]')

    }
    get companyLink(){
        return cy.get('[data-test-id="grid-practice-areas-link"]')
    }
}
export default new Homepage();