
class Login {
    navigate(){
        cy.visit('https://www.saucedemo.com/')
    }
    get userName(){
        return cy.get('[id="user-name"]')
    }
    get password(){
        return cy.get('[id="password"]')
    }
    get loginButton(){
        return cy.get('[id="login-button"]')
    }
    get logOutButton(){
        return cy.get('[id="logout_sidebar_link"]')
    }
    get hamburgerButton(){
        return cy.get('[id="react-burger-menu-btn"]')
    }
    get errorMessage(){
        return cy.get('[data-test="error"]')
    }
}
export default new Login();