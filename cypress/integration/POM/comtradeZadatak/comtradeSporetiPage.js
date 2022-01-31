class comtradeSporetiPage{

    klikKombinovaniSporeti = '.col-xs-4:nth-child(2) span'
    fltGorenje = 'li:nth-child(1) > label:nth-child(2)'
    fltBeko = 'li:nth-child(2) > label'


    clickKombinovaniSporeti(){
        cy.get(this.klikKombinovaniSporeti)
        .click()
    }

    clickFltGorenje(){
        cy.get(this.fltGorenje)
        .click()
    }

    clickFltBeko(){
        cy.get(this.fltBeko)
        .click()
    }




}
export default comtradeSporetiPage