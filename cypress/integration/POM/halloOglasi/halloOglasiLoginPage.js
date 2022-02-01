class halloOglasiLoginPage{

    registationLink = '.no-account-reg-link'


    clickRegistrationLink(){
        cy.get(this.registationLink)
        .click()
    }
}
export default halloOglasiLoginPage