class mailinatorHomePage{

    searchBoxField = '#search'


    searchBoxInputField(emailSearch){
        cy.get(this.searchBoxField)
        .clear()
        .type(emailSearch + '{enter}')
    }

}
export default mailinatorHomePage