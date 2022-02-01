/// <reference types="cypress" />

import halloOglasiCompleteRegistrationPage from "../halloOglasi/halloOglasiCompleteRegistrationPage";
import halloOglasiHomePage from "../halloOglasi/halloOglasiHomePage";
import halloOglasiLoginPage from "../halloOglasi/halloOglasiLoginPage";
import halloOglasiRegistrationPage from "../halloOglasi/halloOglasiRegistrationPage";

beforeEach(() => {
    cy.visit('https://www.halooglasi.com/')
});

describe('E2E Testiranje Hallo Oglasi', () => {
    const HalloOglasiHomePage = new halloOglasiHomePage();
    const HalloOglasiLoginPage = new halloOglasiLoginPage();
    const HalloOglasiRegistrationPage = new halloOglasiRegistrationPage();
    const HalloOglasiCompleteRegistration = new halloOglasiCompleteRegistrationPage();
    const x = Math.trunc(Math.random()*9999) + 1;
    const ime = "testiranje" + x;
    const mailDomen = "@mailinator.com"
    const passwd = "12345678"

    it('Testing that can register new user', () => {
        HalloOglasiHomePage.clickLoginBtn();
        HalloOglasiLoginPage.clickRegistrationLink();
        HalloOglasiRegistrationPage.ratioBtnPrivatePerson();
        HalloOglasiRegistrationPage.userNameInputField(ime);
        HalloOglasiRegistrationPage.emailInputField(ime + mailDomen);
        HalloOglasiRegistrationPage.passwordInputField(passwd);
        HalloOglasiRegistrationPage.confirmPasswordInputField(passwd);
        HalloOglasiRegistrationPage.clickRegistrationBtn();
        // HalloOglasiCompleteRegistration.successfullRegistrationTextVerify('Registracija je uspela!\n' +
        // 'Kako bi Vaš nalog postao aktivan, neophodno je da kliknite na' +
        // ' link u mejlu koji Vam je poslat na : ' +
        //  ime + mailDomen +' !');

        
        
        });
});