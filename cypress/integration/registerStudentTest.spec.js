describe('Registration of Student', () =>{

    context("Try to register student with first tier visa", () => {
    it('Register student with first tier visa - Positive test', () => {
    cy.visit("https://stag-cms.udrafter.link/register")
    cy.get('.card > .card-footer > .row:nth-child(3) > .col-sm-12 > a').click()
    cy.get('.col-md-offset-1 > .card > .card-content > a > .fa').click()  
    cy.get('.form--auth > .card > .card-body > .form-group > .form-control').click()    
    cy.get('.form--auth > .card > .card-body > .form-group > .form-control').type('test1@gmail.com')   
    cy.get('.form--auth > .card > .card-body > .form-group > .btn').click() 
    cy.get('.card-body > .row > .col-md-6 > .form-group > #first_name').click()
    cy.get('.card-body > .row > .col-md-6 > .form-group > #first_name').type('Kevin')
    cy.get('.card-body > .row > .col-md-6 > .form-group > #last_name').click()
    cy.get('.card-body > .row > .col-md-6 > .form-group > #last_name').type('Ventura')
    cy.get('.form--auth > .card > .card-body > .form-group > #phone_number').click()
    cy.get('.form--auth > .card > .card-body > .form-group > #phone_number').type('Test')
    cy.get('.form--auth > .card > .card-body > .form-group > #address').click()
    cy.get('.form--auth > .card > .card-body > .form-group > #address').type('Test')
    cy.get('.card-body > .form-group > .row > .col-md-6 > #password').click()
    cy.get('.card-body > .form-group > .row > .col-md-6 > #password').type('Secret_1')
    cy.get('.card-body > .form-group > .row > .col-md-6 > #password_confirmation').click()
    cy.get('.card-body > .form-group > .row > .col-md-6 > #password_confirmation').type('Secret_1')
    cy.get('.row > .col-md-12 > .form-check:nth-child(2) > .form-check-label > .form-check-input').click()
    cy.get('.row > .col-md-12 > .form-check:nth-child(2) > .form-check-label > .form-check-input').check('true')
    cy.get('.row > .col-md-12 > .form-check:nth-child(3) > .form-check-label > .form-check-input').click()
    cy.get('.row > .col-md-12 > .form-check:nth-child(3) > .form-check-label > .form-check-input').check('true')
    cy.get('.form--auth > .card > .card-body > .form-group > #token').click()
       
       });
    });

        it('Register student user with Leave to Remain Visa', function() {
            cy.visit("https://stag-cms.udrafter.link/register")
           cy.get('.card > .card-footer > .row:nth-child(3) > .col-sm-12 > a').click()
           cy.get('.col-md-offset-1 > .card > .card-content > a > h3').click()
           cy.get('.form--auth > .card > .card-body > .form-group > .form-control').click()
           cy.get('.form--auth > .card > .card-body > .form-group > .form-control').type('terestfg@gmail.com')
           cy.get('.form--auth > .card > .card-body > .form-group > .btn').click()
           cy.get('.card-body > .row > .col-md-6 > .form-group > #first_name').click()
           cy.get('.card-body > .row > .col-md-6 > .form-group > #first_name').type('Kevin')
           cy.get('.card-body > .row > .col-md-6 > .form-group > #last_name').click()
           cy.get('.card-body > .row > .col-md-6 > .form-group > #last_name').type('Ventura')
           cy.get('.form--auth > .card > .card-body > .form-group > #phone_number').click()
           cy.get('.form--auth > .card > .card-body > .form-group > #phone_number').type('+444405065')
           cy.get('.form--auth > .card > .card-body > .form-group > #address').click()
           cy.get('.form--auth > .card > .card-body > .form-group > #address').type('12 Millbank, London SW1P 4QE, United Kingdom')
           cy.get('.card-body > .form-group > .btn-group > .btn > .filter-option').click()
           cy.get('.dropdown-menu > .dropdown-menu > li:nth-child(2) > a > .text').click()
         //  cy.get('.card > .card-body > .form-group > .btn-group > .selectpicker').select('2')
           cy.get('.card-body > .form-group > .row > .col-md-6 > #password').click()
           cy.get('.card-body > .form-group > .row > .col-md-6 > #password').type('Secret_1')
           cy.get('.card-body > .form-group > .row > .col-md-6 > #password_confirmation').click()
           cy.get('.card-body > .form-group > .row > .col-md-6 > #password_confirmation').type('Secret_1')
           cy.get('.row > .col-md-12 > .form-check:nth-child(2) > .form-check-label > .form-check-input').click()
           cy.get('.row > .col-md-12 > .form-check:nth-child(2) > .form-check-label > .form-check-input').check('true')
           cy.get('.row > .col-md-12 > .form-check:nth-child(3) > .form-check-label > .form-check-input').click()
           cy.get('.row > .col-md-12 > .form-check:nth-child(3) > .form-check-label > .form-check-input').check('true')
           cy.get('.form--auth > .card > .card-body > .form-group > #token').click()
           cy.url({ timeout: 20000 }).should('contain', '/register/student');
        })

        it('Register student user with Leave to Remain Visa', function() {
            cy.get('.card > .card-footer > .row:nth-child(3) > .col-sm-12 > a').click()
            cy.get('.col-md-offset-1 > .card > .card-content > a > h3').click()
            cy.get('.form--auth > .card > .card-body > .form-group > .form-control').click()
            cy.get('.form--auth > .card > .card-body > .form-group > .form-control').type('terestfg@gmail.com')
            cy.get('.form--auth > .card > .card-body > .form-group > .btn').click()
            cy.get('.card-body > .row > .col-md-6 > .form-group > #first_name').click()
            cy.get('.card-body > .row > .col-md-6 > .form-group > #first_name').type('Kevin')
            cy.get('.card-body > .row > .col-md-6 > .form-group > #last_name').click()
            cy.get('.card-body > .row > .col-md-6 > .form-group > #last_name').type('Ventura')
            cy.get('.form--auth > .card > .card-body > .form-group > #phone_number').click()
            cy.get('.form--auth > .card > .card-body > .form-group > #phone_number').type('+444405065')
            cy.get('.form--auth > .card > .card-body > .form-group > #address').click()
            cy.get('.form--auth > .card > .card-body > .form-group > #address').type('12 Millbank, London SW1P 4QE, United Kingdom')
            cy.get('.card-body > .form-group > .btn-group > .btn > .filter-option').click()
            cy.get('.btn-group > .dropdown-menu > .dropdown-menu > li:nth-child(3) > a').click()
          //  cy.get('.card > .card-body > .form-group > .btn-group > .selectpicker').select('3')

        })


           
       
});