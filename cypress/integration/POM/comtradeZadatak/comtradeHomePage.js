class comtradeHomePage{

    sviProizvodi = '.am-opener';
    belaTehnika = '.level0:nth-child(10) > #akcija'

    navigate(){
        cy.visit('/')
    }
    allProducts(){
        cy.get(this.sviProizvodi)
        .realHover()
    }
    whiteTechinck(){
        cy.get(this.belaTehnika)
        .realHover()
    }
    
    

}

export default comtradeHomePage