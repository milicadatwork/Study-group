
import Login from "../../support/pageObjects/login.page"
describe('Login challange', () => {

    beforeEach(()=>{
        Login.navigate();
    })

    it('has chacked Page Title', () => {
        cy.title().should('eq','Swag Labs')
    })

    it('wrong login', () => {
        Login.userName.type('test@gmail.com')
        Login.password.type('secret_sauce')
        Login.loginButton.click()
        cy.url().should('eq','https://www.saucedemo.com/')
        Login.errorMessage.should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('correct login', () => {
        Login.userName.type('standard_user')
        Login.password.type('secret_sauce')
        Login.loginButton.click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })

})