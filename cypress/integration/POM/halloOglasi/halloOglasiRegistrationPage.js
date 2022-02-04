class halloOglasiRegistrationPage{

    ratioBtnFizickaLica = '[value="person"]'
    userNameField = '#UserName'
    emailField = '#Email'
    passwordField = '#Password'
    confirmPasswordField = '#ConfirmPassword'
    registrationBtn = '.save-entity.button-reg'

    ratioBtnPrivatePerson(){
        cy.get(this.ratioBtnFizickaLica)
        .check()
        .should('be.checked')
    }

    userNameInputField(userName){
        cy.get(this.userNameField)
        .clear()
        .type(userName)
    }

    emailInputField(email){
        cy.get(this.emailField)
        .clear()
        .type(email)
    }

    passwordInputField(password){
        cy.get(this.passwordField)
        .clear()
        .type(password)
    }

    confirmPasswordInputField(confirmPassword){
        cy.get(this.confirmPasswordField)
        .clear()
        .type(confirmPassword)
    }

    clickRegistrationBtn(){
        cy.get(this.registrationBtn)
        .click()
    }
}
export default halloOglasiRegistrationPage