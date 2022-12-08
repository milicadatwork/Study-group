
class Homepage {
    navigate(){
        cy.visit('https://work.co/')
    }
    headline(){
        cy.get('[data-test-id="header-title-text"]')
    }
    globalMenu(){
        return  cy.get('[data-test-id="global-menu-btn"]')
    }
    clientsLink(){
        return cy.get('[data-test-id="grid-select-clients-link"]')

    }
    companyLink(){
        return cy.get('[data-test-id="grid-practice-areas-link"]')
    }
}
export default new Homepage();