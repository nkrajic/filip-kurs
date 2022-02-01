import { type } from "wd/lib/commands"

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
        .type(userName)
    }

    emailInputField(email){
        cy.get(this.emailField)
        .type(email)
    }

    passwordInputField(password){
        cy.get(this.passwordField)
        .type(password)
    }

    confirmPasswordInputField(confirmPassword){
        cy.get(this.confirmPasswordField)
        .type(confirmPassword)
    }

    clickRegistrationBtn(){
        cy.get(this.registrationBtn)
        .click()
    }
}
export default halloOglasiRegistrationPage