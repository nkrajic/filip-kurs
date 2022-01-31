class comtradeBekoPage{

    bekoSporetFss = '[title="FSS54010DW kombinovani šporet"]'
    bekoSporetFssBoja = '[data-specid="4649"] > td'


    bekoProductFss(){
        cy.get(this.bekoSporetFss)
        .click()
    }

    bekoProductFssColor(collor){
        cy.get(this.bekoSporetFssBoja)
        .contains(collor)
        .should('contain.text', collor)
    }
    
}
export default comtradeBekoPage