/// <reference types="cypress" />

import halloOglasiCompleteRegistrationPage from "../halloOglasi/halloOglasiCompleteRegistrationPage";
import halloOglasiHomePage from "../halloOglasi/halloOglasiHomePage";
import halloOglasiLoginPage from "../halloOglasi/halloOglasiLoginPage";
import halloOglasiRegistrationPage from "../halloOglasi/halloOglasiRegistrationPage";
import mailinatorHomePage from "../halloOglasi/mailinatorHomePage";
import mailinatorMessagePage from "../halloOglasi/mailinatorMessagePage";

// beforeEach(() => {
//     cy.visit('https://www.halooglasi.com/')
// });

describe('E2E Testiranje Hallo Oglasi', () => {
    const HalloOglasiHomePage = new halloOglasiHomePage();
    const HalloOglasiLoginPage = new halloOglasiLoginPage();
    const HalloOglasiRegistrationPage = new halloOglasiRegistrationPage();
    const HalloOglasiCompleteRegistration = new halloOglasiCompleteRegistrationPage();
    const MailinatorHomePage = new mailinatorHomePage();
    const MailinatorMessagePage = new mailinatorMessagePage();
    const x = Math.trunc(Math.random()*9999) + 1;
    const ime = "testiranje" + x;
    const mailDomen = "@mailinator.com"
    const passwd = "12345678"
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Testing that can register new user', () => {
        cy.visit('https://www.halooglasi.com/')
        HalloOglasiHomePage.clickLoginBtn();
        HalloOglasiLoginPage.clickRegistrationLink();
        HalloOglasiRegistrationPage.ratioBtnPrivatePerson();
        HalloOglasiRegistrationPage.userNameInputField(ime);
        HalloOglasiRegistrationPage.emailInputField(ime + mailDomen);
        HalloOglasiRegistrationPage.passwordInputField(passwd);
        HalloOglasiRegistrationPage.confirmPasswordInputField(passwd);
        HalloOglasiRegistrationPage.clickRegistrationBtn();
        HalloOglasiCompleteRegistration.successfullRegistrationTextVerify('\n\tRegistracija je uspela!\n\t\n\t\tKako bi Vaš nalog postao aktivan, ' +
        'neophodno je da kliknite na link\n\t\tu mejlu koji Vam je poslat na : ' + ime + mailDomen + ' !\n\t\n');
       
        cy.task('save', ime)
    });

        it('Mailinator accept page', () => {
            cy.visit('https://www.mailinator.com/')
            cy.task('load').then((ime)=>
            {
                MailinatorHomePage.searchBoxInputField(ime);
            }) 
            MailinatorMessagePage.mailinatorMessageBody();
        });
});