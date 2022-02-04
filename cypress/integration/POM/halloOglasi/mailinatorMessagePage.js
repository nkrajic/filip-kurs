class mailinatorMessagePage{
    messageBody = 'html_msg_body'
    
    mailinatorMessageBody(){
        cy.get(this.messageBody,{timeout:10000})
        .then( function($iframe){
        const iFrameContent = $iframe.contents().find('div')
        cy.wrap(iFrameContent)
        .click()   
        })
    }

}
export default mailinatorMessagePage