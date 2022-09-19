
const env = require('../cypress.env.json')

// Function to generate a random number so each time we run the test, the nickname and email (which are meant to be unique) don`t repeat
const randomNumber = (Math.floor(Math.random() * 999)).toString()

describe('Tests sign up', () => {
  it('visits the site', () => {
    cy.visit(env.CLIENT_URL)
  })
  it('should not allow the guest to enter a customer`s profile and redirect it to register', () => {
    cy.contains('Luciano_Aufderhar').click({force:true})
  })
  it('should be every input validated', () => {
    // form validation
    cy.get('[name="nickname"]').type(`Test_player_${randomNumber}`) 
    // the name is too short
    cy.get('[name="name"]').type('Ju')
    cy.get('[name="name"]').type('lia')
    // surname cannot include numbers
    cy.get('[name="surname"]').type('4520')
    cy.get('[name="surname"]').type('{selectall}{backspace}')
    cy.get('[name="surname"]').type('Bech')
    // email without @ and .
    cy.get('[name="email"]').type(`Test_email_${randomNumber}`)
    // email without .
    cy.get('[name="email"]').type('@email')
    cy.get('[name="email"]').type('.com')
    // password without number
    cy.get('[name="password"]').type('hola')
    // password without uppercase
    cy.get('[name="password"]').type('1234')
    // password without enough characters
    cy.get('[name="password"]').type('{selectall}{backspace}')
    cy.get('[name="password"]').type('Hola123')
    cy.get('[name="password"]').type('4')
    // confirm password does not match
    cy.get('[name="passwordCheck"]').type('Hola123')
    cy.get('[name="passwordCheck"]').type('4')
    cy.get('.RegisterButtonSubmit').click()
    cy.get('.swal2-confirm').click()
  })
})

 describe('Tests log in', () => {
  it('should display the log in modal', () => {
    cy.get(':nth-child(5) > .HeaderButton').click()
  })
  it('tries to log in with wrong password', () => {
    cy.get('.LoginInputEmail').type(`Test_email_${randomNumber}`)
    cy.get('.LoginInputEmail').type('@email.com')
    cy.get('.LoginInputPassword').type('Hola123') 
    cy.get('.LoginSubmit').click()
    cy.get('.swal2-confirm').click()
  })
  it('should clear password input and type the right one', () => {
    // logs in with correct password
    cy.get('.LoginInputPassword').type('{selectall}{backspace}')
    cy.get('.LoginInputPassword').type('{selectall}{backspace}')
    cy.get('.LoginInputPassword').type('Hola1234')
    cy.get('.LoginSubmit').click()
    cy.wait(1000)
    // access players list
    cy.get('[data-testid="HeaderButtonList"]').click()
    // searching input
    cy.get('[data-testid="ListPageSearch"]').type('lu')
    cy.get('[data-testid="ListPageSearchSubmit"]').click()
    // sorting searching results
    cy.wait(1000)
    cy.contains('▼').click()
    cy.contains('▲').click()
    // filtering searching results by status
    cy.get('.ListPageFilterSelect').select('Silver')
    cy.get('.ListPageFilterSelect').select('Diamond')
    // access own profile and changes password
    cy.wait(1000)
    cy.get(':nth-child(4) > .HeaderButton').click()
    cy.get('.ProfileDataPasswordBtn').click()
    cy.get('[name="oldPassword"]').type('Hola1234')
    cy.get('[name="newPassword"]').type('Hola12345')
    cy.get('[name="newPasswordRepeat"]').type('Hola12345')
    cy.get('[name="submit change password"]').click()
    cy.get('.swal2-confirm').click()
    // session is closed automatically after changing password
  })
 })

  describe('Tests log in with changed password', () => {
    it('visits the site', () => {
      cy.visit(env.CLIENT_URL)
    }) 
    it('should display the log in modal', () => {
      cy.get(':nth-child(5) > .HeaderButton').click()
    })
    it('tries to log in with old password', () => {
      cy.get('.LoginInputEmail').type(`Test_email_${randomNumber}`)
      cy.get('.LoginInputEmail').type('@email.com')
      cy.get('.LoginInputPassword').type('Hola1234') 
      cy.get('.LoginSubmit').click()
      cy.get('.swal2-confirm').click()
    })
    it('should clear password input and type the right one, and log out', () => {
      cy.get('.LoginInputPassword').type('{selectall}{backspace}')
      cy.get('.LoginInputPassword').type('{selectall}{backspace}')
      cy.get('.LoginInputPassword').type('Hola12345')
      cy.get('.LoginSubmit').click()
      // logs out
      cy.wait(1000)
      cy.get(':nth-child(5) > .HeaderButton').click()
      cy.get('.swal2-confirm').click()
    })

  })  
  






