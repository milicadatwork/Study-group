
class Homepage {
    navigate(){
        cy.visit('https://work.co/')
    }
    headline(){
        cy.get('[data-test-id="header-title-text"]')
    }
    globalMenu(){
        cy.get('[data-test-id="global-menu-btn"]').click()
    }
    clientsLink(){
        cy.get('[data-test-id="grid-select-clients-link"]').click()

    }
    companyLink(){
        cy.get('[data-test-id="grid-practice-areas-link"]').click()
    }
}
export default Homepage