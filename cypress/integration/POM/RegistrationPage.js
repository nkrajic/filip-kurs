class RegistrationPage{
    
    imeInputField = '#firstname';
    prezimeInputField = '#lastname';
    emailInputField = '#email_address';
    newsletterChBox = '#is_subscribed';
    pravnoLiceDropDown = '#pravnolice';
    imeFirmeInputField = '#firma';
    pibInputField = '#pib';
    passwordInputField = '#password';
    confirmPasswordInputField = '#confirmation';
    registratioBtn = 'p.back-link > .button';
    negativnaPoruka = '.alert.alert-warning';


    navigate(){
        cy.visit('/')

    }
    enterFirstName(firstName){
        cy.get(this.imeInputField)
        .clear()
        .type(firstName)
    }
    enterLastName(lastName){
        cy.get(this.prezimeInputField)
        .clear()
        .type(lastName)
    }
    enterEmail(email){
        cy.get(this.emailInputField)
        .clear()
        .type(email)
    }
    selectNewsLetter(){
        cy.get(this.newsletterChBox)
        .uncheck()
        .should('not.be.selected')
    }
    selectPravnoLice(){
        cy.get(this.pravnoLiceDropDown)
        .select('1')
        .should('have.value','1')
    }
    enterImeFirme(imeFirme){
        cy.get(this.imeFirmeInputField)
        .clear()
        .type(imeFirme)
    }
    enterPib(PIB){
        cy.get(this.pibInputField)
        .clear()
        .type(PIB)
    }
    enterPassword(password){
        cy.get(this.passwordInputField)
        .clear()
        .type(password)
    }
    enterComfirmPassword(confirmPassword){
        cy.get(this.confirmPasswordInputField)
        .clear()
        .type(confirmPassword)
    }
    clikRegisterBtn(){
        cy.get(this.registratioBtn)
        .click()
    }
    errorMessage(){
        cy.get(this.negativnaPoruka)
        .should('exist')
        .contains('Već postoji nalog sa unetom')
    }
    

}

export default RegistrationPage