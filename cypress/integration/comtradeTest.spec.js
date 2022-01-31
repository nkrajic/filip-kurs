/// <reference types="cypress" />

import comtradeBekoPage from "./POM/comtradeZadatak/comtradeBekoPage";
import comtradeGorenjePage from "./POM/comtradeZadatak/comtradeGorenjePage";
import comtradeHomePage from "./POM/comtradeZadatak/comtradeHomePage"
import comtradeSporetiPage from "./POM/comtradeZadatak/comtradeSporetiPage";

describe('Hoverovanje na stranici', () => {
    const ComtradeHomePage = new comtradeHomePage();
    const ComtradeSporetiPage = new comtradeSporetiPage();
    const ComtradeGorenjePage = new comtradeGorenjePage();
    const ComtradeBekoPage = new comtradeBekoPage();
    it('Hoverovanje na stranici', () => {
        ComtradeHomePage.navigate();
        ComtradeHomePage.allProducts();
        ComtradeHomePage.whiteTechinck();
        ComtradeHomePage.categorySporeti();
        ComtradeSporetiPage.clickKombinovaniSporeti();
        ComtradeSporetiPage.clickFltGorenje();
        ComtradeGorenjePage.gorenjeProduct511sg();
        ComtradeGorenjePage.gorenjeNoSalePrice511sg('34.433 RSD');
        ComtradeGorenjePage.gorenjeSalePrice511sg('30.990 RSD');
        ComtradeGorenjePage.gorenjeReview();
        ComtradeGorenjePage.gorenjeSimonaComment('Savršen za moju letnju kuhinju i prava stvar sto je pola pola. ');
        cy.go('back');
        ComtradeSporetiPage.clickFltGorenje();
        ComtradeSporetiPage.clickFltBeko();
        ComtradeBekoPage.bekoProductFss();
        ComtradeBekoPage.bekoProductFssColor('Bela');
    
    
    });
    
});

