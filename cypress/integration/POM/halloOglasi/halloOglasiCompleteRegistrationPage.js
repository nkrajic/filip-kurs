class halloOglasiCompleteRegistrationPage{

    successfullRegistrationText = '.regsitration-success'
    

    successfullRegistrationTextVerify(successText){
        cy.get(this.successfullRegistrationText, {timeout:6000})
        .should('contain.text',successText)
    }
   
}
export default halloOglasiCompleteRegistrationPage