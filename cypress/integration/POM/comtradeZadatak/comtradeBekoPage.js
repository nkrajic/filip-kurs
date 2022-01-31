class comtradeBekoPage{

    bekoSporetFss = '.first .product-name > a'
    bekoSporetFssBoja = '[data-specid="4649"] > td'


    bekoProductFss(){
        cy.get(this.bekoSporetFss)
        .click()
    }

    bekoProductFssColor(){
        cy.get(this.bekoSporetFssBoja)
        .should('have.text', 'Bela')
    }
    
}
export default comtradeBekoPage