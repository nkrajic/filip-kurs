class comtradeHomePage{

    sviProizvodi = '.am-opener';
    belaTehnika = '.level0:nth-child(10) > #akcija'
    sporeti = '.pos-9 > .level1:nth-child(3) > .level1:nth-child(5)'

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
        .realMouseDown()
    }
    categorySporeti(){
        cy.get(this.sporeti)
        .click()
    }
    
    

}

export default comtradeHomePage