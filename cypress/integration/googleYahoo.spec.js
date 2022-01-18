/// <reference types="cypress"/>

const { back } = require("wd/lib/commands")

beforeEach(() => {
    
    cy.visit('https://www.google.com')
  
  })

it('should bavigate to the google and yahoo', () => {
    
})