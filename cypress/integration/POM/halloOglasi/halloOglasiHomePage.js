class halloOglasiHomePage{

    loginbtn = '.login-btn-wrapper > a'


    clickLoginBtn(){
        cy.get(this.loginbtn)
        .click()
    }

}
export default halloOglasiHomePage