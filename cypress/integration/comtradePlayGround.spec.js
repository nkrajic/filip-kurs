/// <reference types="cypress"/>

const { selected } = require("wd/lib/element-commands")

beforeEach(() => {
    
    cy.visit('https://www.ctshop.rs/customer/account/create')
    //cy.viewport('ipad-mini')
    cy.get('button:nth-child(4)').click()
  })

describe('Comtrade registracija novog korisnika',() => {
    it('Testiranje upisivanja novog korisnika',() =>{
        //cy.get('.ub-emb-visible > .ub-emb-iframe').click()
        cy.get('#firstname').clear().type('Test')
        cy.get('#lastname').clear().type('Test')
        cy.get('#email_address').clear().type('tesssdettest56@test.com')
        //cy.get('#is_subscribed').uncheck().should('not.be.checked')
        cy.get('#is_subscribed').uncheck().should('not.be.selected')
        cy.get('#pravnolice').select('1').should('have.value','1')
        cy.get('#firma').clear().type('123456789')
        cy.get('#pib').clear().type('123456789')
        cy.get('#password').clear().type('12345678')
        cy.get('#confirmation').clear().type('12345678')
        cy.get('p.back-link > .button').click()
        //cy.get('.soundest-form-background-image-close',{timeout:60000}).click()
        cy.get('.alert.alert-warning')
        .should('exist')
        //.should('have.text','Već postoji nalog sa')
        cy.get('.alert.alert-success')
        .should('not.exist')
        //.should('have.text','Hvala na registraciji. Molimo proverite email i aktivirajte Vaš nalog.')
       //.should('have.text', 'Hvala na registraciji. Molimo proverite email i aktivirajte Vaš nalog.')

    })

    describe('Comtrade registracija novog korisnika pravno lice',() => {
      it.only('Testiranje upisivanja novog korisnika',() =>{
          cy.get('#firstname').clear().type('Test')
          cy.get('#lastname').clear().type('Test')
          cy.get('#email_address').clear().type('tesssdettest56@test.com')
          cy.get('#is_subscribed').uncheck().should('not.be.selected')
          cy.get('#pravnolice').select('1').should('have.value','1')
          cy.get('#firma').clear().type('123456789')
          cy.get('#pib').clear().type('123456789')
          cy.get('#password').clear().type('12345678')
          cy.get('#confirmation').clear().type('12345678')
          cy.get('p.back-link > .button').click()
          cy.get('.alert.alert-warning')
          .should('exist')
          //.should('have.text','\n Već postoji nalog sa unetom email adresom! Molimo ulogujte se!\n')
          cy.get('.alert.alert-success')
          .should('not.exist')
      })

  })

})