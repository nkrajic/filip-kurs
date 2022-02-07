class mailinatorMessagePage{
    activationTextHalloOglasi = '[ng-repeat="email in emails"] > td:nth-of-type(3)'
    messageBody = '#html_msg_body'

    mailinatorActivationTextHalloOgasi(){
        cy.get(this.activationTextHalloOglasi, {timeout: 60000})
        .click()
    }

    mailinatorMessageBody(){
        cy.get(this.messageBody,{timeout:10000})
        .should('exist')
        .then(cy.wrap)
        .find('[align="center"] strong')
        .should('be.visible')
        .click()
        // // .then( function($iframe){
        // // const iFrameContent = $iframe.contents().find('div')
        // // cy.wrap(iFrameContent)
        // .click()   
        // })
    }

}
export default mailinatorMessagePage