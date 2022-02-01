import Chance from 'Chance';

const chance = new Chance();


describe('Registration of Business', () =>{
    const email = chance.email();
    const email2 = chance.email();
    it("Register business account with credit card", () => {
        cy.visit("https://stag-cms.udrafter.link/")
               cy.get('.card > .card-footer > .row:nth-child(3) > .col-sm-12 > a').click();
               cy.get(':nth-child(3) > .card > .card-content > a > h3').click();
               cy.get('.custom-wizard-skip-btn').click();
               cy.get('.swal2-shown > .swal2-container > .swal2-popup > .swal2-actions > .swal2-confirm').click();
               cy.get('#BasicInfo2 > div > .w-full > .InputText > #email').click();
               cy.get('#BasicInfo2 > div > .w-full > .InputText > #email').type(email);
               cy.get('div > .w-full > .InputRadio > .InputRadio_OptionWrapper:nth-child(3) > #company_type').click();
               cy.get('div > .w-full > .InputRadio > .InputRadio_OptionWrapper:nth-child(3) > #company_type').type('sole');
               cy.get('#BasicInfo2 > div > .w-full > .InputText > #company_url').click();
               cy.get('#BasicInfo2 > div > .w-full > .InputText > #company_url').type('https://stag-cms.udrafter.link/pre-register/organisation#/');
               cy.get('.wizard-footer-right > span > .wizard-btn').click();
               cy.get('.w-full > .row > .col-md-6 > .InputText > #first_name').click();
               cy.get('.w-full > .row > .col-md-6 > .InputText > #first_name').type("Kevin");
               cy.get('.w-full > .row > .col-md-6 > .InputText > #last_name').click();
               cy.get('.w-full > .row > .col-md-6 > .InputText > #last_name').type('Ventura');
               cy.get('div > div > .w-full > .InputText > #company_name').click();
               cy.get('div > div > .w-full > .InputText > #company_name').type('Test');
               cy.get('div > div > .w-full > .InputText > #phone_number').click();
               cy.get('div > div > .w-full > .InputText > #phone_number').type('Test');
               cy.get('div > div > .w-full > .InputText > #address').click();
               cy.get('div > div > .w-full > .InputText > #address').type('Test');
               cy.get('.form-group > .row > .col-md-6 > .InputText > #password').click();
               cy.get('.form-group > .row > .col-md-6 > .InputText > #password').type('Secret_1');
               cy.get('.form-group > .row > .col-md-6 > .InputText > #password_confirmation').click();
               cy.get('.form-group > .row > .col-md-6 > .InputText > #password_confirmation').type('Secret_1');
               cy.get('.row > .col-md-12 > .form-check > .form-check-label > #terms_checkbox').click();
               cy.get('.row > .col-md-12 > .form-check > .form-check-label > #terms_checkbox').check();
               cy.get('.row > .col-md-12 > .form-check > .form-check-label > #gdpr_checkbox').click();
               cy.get('.row > .col-md-12 > .form-check > .form-check-label > #gdpr_checkbox').check();
               cy.get('.wizard-footer-right > span > .wizard-btn').click();
               cy.wait(5000)
               cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242');
               cy.getWithinIframe('[name="exp-date"]').type('1232');
               cy.getWithinIframe('[name="cvc"]').type('987');
               cy.getWithinIframe('[name="postal"]').type('12345');
               cy.get('.custom-wizard-btn.mr-2.wizard-btn').click();
               cy.wait(10000);
               cy.get('.swal2-confirm').click();
               cy.url({ timeout: 20000 }).should('contain', '/pre-register/organisation/success');
    })

    it("Register business account without credit card", () => {
        cy.visit("https://stag-cms.udrafter.link/")
        cy.get('.card > .card-footer > .row:nth-child(3) > .col-sm-12 > a').click();
        cy.get(':nth-child(3) > .card > .card-content > a > h3').click();
        cy.get('.custom-wizard-skip-btn').click();
        cy.get('.swal2-shown > .swal2-container > .swal2-popup > .swal2-actions > .swal2-confirm').click();
        cy.get('#BasicInfo2 > div > .w-full > .InputText > #email').click();
        cy.get('#BasicInfo2 > div > .w-full > .InputText > #email').type(email2);
        cy.get('div > .w-full > .InputRadio > .InputRadio_OptionWrapper:nth-child(3) > #company_type').click();
        cy.get('div > .w-full > .InputRadio > .InputRadio_OptionWrapper:nth-child(3) > #company_type').type('sole');
        cy.get('#BasicInfo2 > div > .w-full > .InputText > #company_url').click();
        cy.get('#BasicInfo2 > div > .w-full > .InputText > #company_url').type('https://stag-cms.udrafter.link/pre-register/organisation#/');
        cy.get('.wizard-footer-right > span > .wizard-btn').click();
        cy.get('.w-full > .row > .col-md-6 > .InputText > #first_name').click();
        cy.get('.w-full > .row > .col-md-6 > .InputText > #first_name').type('Kevin');
        cy.get('.w-full > .row > .col-md-6 > .InputText > #last_name').click();
        cy.get('.w-full > .row > .col-md-6 > .InputText > #last_name').type('Ventura');
        cy.get('div > div > .w-full > .InputText > #company_name').click();
        cy.get('div > div > .w-full > .InputText > #company_name').type('Test');
        cy.get('div > div > .w-full > .InputText > #phone_number').click();
        cy.get('div > div > .w-full > .InputText > #phone_number').type('Test');
        cy.get('div > div > .w-full > .InputText > #address').click();
        cy.get('div > div > .w-full > .InputText > #address').type('Test');
        cy.get('.form-group > .row > .col-md-6 > .InputText > #password').click();
        cy.get('.form-group > .row > .col-md-6 > .InputText > #password').type('Secret_1');
        cy.get('.form-group > .row > .col-md-6 > .InputText > #password_confirmation').click();
        cy.get('.form-group > .row > .col-md-6 > .InputText > #password_confirmation').type('Secret_1');
        cy.get('.row > .col-md-12 > .form-check > .form-check-label > #terms_checkbox').click();
        cy.get('.row > .col-md-12 > .form-check > .form-check-label > #terms_checkbox').check();
        cy.get('.row > .col-md-12 > .form-check > .form-check-label > #gdpr_checkbox').click();
        cy.get('.row > .col-md-12 > .form-check > .form-check-label > #gdpr_checkbox').check();
// Доделать нажатие на скип
        cy.url({ timeout: 20000 }).should('contain', '/pre-register/organisation/success');
})
});