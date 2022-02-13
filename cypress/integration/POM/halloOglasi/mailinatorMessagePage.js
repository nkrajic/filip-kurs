class mailinatorMessagePage{
    activationTextHalloOglasi = '[ng-repeat="email in emails"] > td:nth-of-type(3)'
    messageBody = '#html_msg_body'

    mailinatorActivationTextHalloOgasi(){
        cy.get(this.activationTextHalloOglasi, {timeout: 60000})
        .click()
    }

    mailinatorMessageBody(){
       
       
       
       
       
       
       
       
        // cy.get(this.proba,{timeout:10000})
        // .then(function($iframe){
        //     const iFrameContent = $iframe.contents().find('body')
        //     cy.wrap(iFrameContent)
        //     .click()
            // .find('')
            // .should('be.visible')
            //.click()
        //})
        // .its('0.contentDocument.body')
        // .then(cy.wrap)
        // .should('exist')
        // .find('[align="center"] strong')
        // .should('be.visible')
        // .click()
        // // .then( function($iframe){
        // // const iFrameContent = $iframe.contents().find('div')
        // // cy.wrap(iFrameContent)
        // .click()   
        // })
        // cy.get('#html_msg_body')
        // .its('0.contentDocument.body')
        // .then(cy.wrap)
        // .find('[align="center"] > [target="_other"]')
        // .should('be.visible');
    }

}
export default mailinatorMessagePage