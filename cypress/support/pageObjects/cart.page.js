
class Cart {
    get badge(){
        return cy.get('[class="shopping_cart_badge"]')
    }
    get shoppingCart(){
        return cy.get('[id="shopping_cart_container"]')
    }
    get checkoutButton(){
        return cy.get('[id="checkout"]')
    }
    get continueButton(){
        return cy.get('[id="continue"]')
    }
    get errorMessage(){
        return cy.get('[data-test="error"]')
    }
    get addToCartBag(){
        return cy.get('[id="add-to-cart-sauce-labs-backpack"]')
    }
    get bagName(){
        return cy.get('[id="item_4_title_link"]')
    }
    get cartQuantity(){
        return cy.get('[class="cart_quantity"]')
    }
    get bagPrice(){
        return cy.get('[class="inventory_item_price"]')
    }
    get removeButton(){
        return cy.get('[class="btn btn_secondary btn_small cart_button"]')
    }
    get continueButton(){
        return cy.get('[id="continue-shopping"]')
    }
    get checkoutButton(){
        return cy.get('[id="checkout"]')
    }
    get firstName(){
        return cy.get('[id="first-name"]')
    }
    get lastName(){
        return cy.get('[id="last-name"]')
    }
    get zipCode(){
        return cy.get('[id="postal-code"]')
    }
    get checkoutContinue(){
        return cy.get('[id="continue"]')
    }
    get paymentSummary(){
        return cy.get('[class="summary_info"]')
    }
    get finishButton(){
        return cy.get('[id="finish"]')
    }
    get completeText(){
        return cy.get('[class="complete-header"]')
    }
    get backHomeButton(){
        return cy.get('[id="back-to-products"]')
    }
    get addToCartBike(){
        return cy.get('[id="add-to-cart-sauce-labs-bike-light"]')
    }

}
export default new Cart();