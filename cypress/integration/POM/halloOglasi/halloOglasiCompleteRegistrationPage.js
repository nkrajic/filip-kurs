class halloOglasiCompleteRegistrationPage{

    successfullRegistrationText = '.regsitration-success'
    

    successfullRegistrationTextVerify(successText){
        cy.get(this.successfullRegistrationText)
        .should('contain.text',successText)
    }
   
}
export default halloOglasiCompleteRegistrationPage