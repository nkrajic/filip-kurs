class halloOglasiCompleteRegistrationPage{

    successfullRegistrationText = '.regsitration-success'
    

    successfullRegistrationTextVerify(successText){
        cy.get(this.successfullRegistrationText)
        .contains(successText)
        .should('contain.text',successText)
    }
   
}
export default halloOglasiCompleteRegistrationPage