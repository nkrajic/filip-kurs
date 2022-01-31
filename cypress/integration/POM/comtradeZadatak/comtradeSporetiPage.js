class comtradeSporetiPage{

    klikKombinovaniSporeti = '[title="Kombinovani šporeti"] > span'
    fltGorenje = '[for="filter_data_brend_142"]'
    fltBeko = '[for="filter_data_brend_42"]'


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