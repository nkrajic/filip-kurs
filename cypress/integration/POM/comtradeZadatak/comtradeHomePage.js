class comtradeHomePage{

    sviProizvodi = '.am-opener';
    belaTehnika = '#akcija[href="/bela-tehnika"]'
    sporeti = '[href="/sporeti"]'

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