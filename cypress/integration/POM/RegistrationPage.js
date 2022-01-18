class RegistrationPage{
    
    imeInputField = '#firstname';
    
    
    navigate(){
        cy.visit('/')

    }
    enterFirstName(firstName){
        cy.get(this.imeInputField)
        .clear()
        .type(firstName)
    }
    enterLastName(lastName){
        cy.get('#lastname')
        .clear()
        .type(lastName)
    }
    enterEmail(email){
        cy.get('#email_address')
        .clear()
        .type(email)
    }
    selectNewsLetter(){
        cy.get('#is_subscribed')
        .uncheck()
        .should('not.be.selected')
    }
    selectPravnoLice(){
        cy.get('#pravnolice')
        .select('1')
        .should('have.value','1')
    }
    enterImeFirme(imeFirme){
        cy.get('#firma')
        .clear()
        .type(imeFirme)
    }
    enterPib(PIB){
        cy.get('#pib')
        .clear()
        .type(PIB)
    }
    enterPassword(password){
        cy.get('#password')
        .clear()
        .type(password)
    }
    enterComfirmPassword(confirmPassword){
        cy.get('#confirmation')
        .clear()
        .type(confirmPassword)
    }
    clikRegisterBtn(){
        cy.get('p.back-link > .button')
        .click()
    }
    errorMessage(){
        cy.get('.alert.alert-warning')
        .should('exist')
        .contains('Već postoji nalog sa unetom')
    }
    

}

export default RegistrationPage