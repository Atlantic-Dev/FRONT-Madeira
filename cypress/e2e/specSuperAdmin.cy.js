const env = require('../cypress.env.json')

// Function to generate a random number so each time we run the test, the nickname and email (which are meant to be unique) don`t repeat
const randomNumber = (Math.floor(Math.random() * 999)).toString()


describe('Super Admin logs in', () => {
    it('visits the site', () => {
      cy.visit(env.CLIENT_URL)
    })
    it('should display the log in modal', () => {
        cy.get(':nth-child(5) > .HeaderButton').click()
    })
    it('should log in successfully, access dashboard, create an user, see it and log out', () => {
        cy.get('.LoginInputEmail').type(`${env.superAdminEmail}`)
        cy.get('.LoginInputPassword').type(`${env.superAdminPassword}`) 
        cy.get('.LoginSubmit').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .HeaderButton').click()
        cy.wait(1000)
        cy.get('.DashboardButtonCreate').click()
        cy.wait(1000)
        cy.get('[name="email"]').type(`Test_admin_${randomNumber}@email.com`)
        cy.get('[name="name"]').type('UserName')
        cy.get('[name="surname"]').type('UserSurname')
        cy.get('[name="password"]').type('Hola1234')
        cy.get('[name="passwordCheck"]').type('Hola1234')
        cy.get('.DashboardFormSubmitCreate').click()
        cy.get('.swal2-confirm').click()
        cy.wait(1000)
        cy.get('.DashboardButtonDelete').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > .HeaderButton').click()
        cy.get('.swal2-confirm').click()
    })
})