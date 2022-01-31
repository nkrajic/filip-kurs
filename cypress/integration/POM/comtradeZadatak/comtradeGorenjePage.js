class comtradeGorenjePage{

    gorenjeSporet511sg = '[title="K5111SG kombinovani šporet"]'
    gorenjeBezPopustaCena511sg = '.price-cont > .strikethrough'
    gorenjeSaPopustomCena511sg = '.price-cont > .price'
    gorenjeOcene = '[href="#ocene"]'
    gorenjeSimonaKomentar = '.review-item'


    gorenjeProduct511sg(){
        cy.get(this.gorenjeSporet511sg)
        .click()
    }

    gorenjeNoSalePrice511sg(noSalePrice){
        cy.get(this.gorenjeBezPopustaCena511sg)
        .should('have.text', noSalePrice)
    }

    gorenjeSalePrice511sg(salePrice){
        cy.get(this.gorenjeSaPopustomCena511sg)
        .should('have.text', salePrice)
    }

    gorenjeReview(){
        cy.get(this.gorenjeOcene)
        .click()
    }

    gorenjeSimonaComment(commetnSimona){
        cy.get(this.gorenjeSimonaKomentar)
        .contains(commetnSimona)
        .should('contain.text', commetnSimona)
    }


}
export default comtradeGorenjePage