class mailinatorHomePage{

    searchBoxField = '#search'


    searchBoxInputField(emailSearch){
        cy.get(this.searchBoxField)
        .type(emailSearch + '{enter}')
    }

}
export default mailinatorHomePage