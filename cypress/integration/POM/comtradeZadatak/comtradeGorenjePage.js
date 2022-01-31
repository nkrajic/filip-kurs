class comtradeGorenjePage{

    gorenjeSporet511sg = '.col-xs-12:nth-child(2) .product-name > a'
    gorenjeBezPopustaCena511sg = '.price-cont > .strikethrough'
    gorenjeSaPopustomCena511sg = '.price-cont > .price'
    gorenjeOcene = '.active > a'
    gorenjeSimonaKomentar = '.review-item'


    gorenjeProduct511sg(){
        cy.get(this.gorenjeSporet511sg)
        .click()
    }

    gorenjeNoSalePrice511sg(){
        cy.get(this.gorenjeBezPopustaCena511sg)
        .should('have.text', '34.433 RSD')
    }

    gorenjeSalePrice511sg(){
        cy.get(this.gorenjeSaPopustomCena511sg)
        .should('have.text', '30.990 RSD')
    }

    gorenjeReview(){
        cy.get(this.gorenjeOcene)
        .click()
    }

    gorenjeSimonaComment(){
        cy.get(this.gorenjeSimonaKomentar)
        .should('have.text', '\n            Gorenje šporet \n            \n                (30.04.2021)\n            \n            \n                \n                                        \n                \n            \n            Savršen za moju letnju kuhinju i prava stvar sto je pola pola. Na plinu se jako brzo sprema, a kad nestane plin tu je ringla na električnu energiju. Rerna ima opciju vodenog čišćenja što lako uklanja zagorene fleke \n            \n                Simona \n            \n            \n        ')
    }







}
export default comtradeGorenjePage