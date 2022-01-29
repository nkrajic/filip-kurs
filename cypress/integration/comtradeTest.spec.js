/// <reference types="cypress" />

import comtradeHomePage from "./POM/comtradeZadatak/comtradeHomePage"


describe('Hoverovanje na stranici', () => {
    const hovering = new comtradeHomePage();
    it('Hoverovanje na stranici', () => {
        hovering.navigate();
        hovering.allProducts();
        hovering.whiteTechinck();
    });
    
});

