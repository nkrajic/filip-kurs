/// <reference types="cypress" />

import RegistrationPage from "./POM/RegistrationPage"


describe("Proba testa",  () => {
    const registration = new RegistrationPage();
    it("Registracija", () => {
        registration.navigate();
        registration.enterFirstName('proba123');
        registration.enterLastName('Proba12345');
        registration.enterEmail('testtest123456@gmail.com');
        registration.selectNewsLetter();
        registration.selectPravnoLice();
        registration.enterImeFirme('12345567');
        registration.enterPib('123456789');
        registration.enterPassword('1234567890');
        registration.enterComfirmPassword('1234567890');
        registration.clikRegisterBtn();
        registration.errorMessage();
        registration.positiveMessage();

    });
    

});