
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
    // validacion de todo el form
    // usuario ya ocupado (el error salta al final)
    /* cy.get('[name="nickname"]').type('Julia.Bechtelar') */
    cy.get('[name="nickname"]').type(`Test_player_${randomNumber}`) 
    // nombre muy corto
    cy.get('[name="name"]').type('Ju')
    cy.get('[name="name"]').type('lia')
    // números en el apellido
    cy.get('[name="surname"]').type('4520')
    cy.get('[name="surname"]').type('{selectall}{backspace}')
    cy.get('[name="surname"]').type('Bech')
    // email sin @ ni .
    cy.get('[name="email"]').type(`Test_email_${randomNumber}`)
    // email sin .
    cy.get('[name="email"]').type('@email')
    cy.get('[name="email"]').type('.com')
    // password sin número
    cy.get('[name="password"]').type('hola')
    // password sin mayúscula
    cy.get('[name="password"]').type('1234')
    // password sin suficientes caracteres
    cy.get('[name="password"]').type('{selectall}{backspace}')
    cy.get('[name="password"]').type('Hola123')
    cy.get('[name="password"]').type('4')
    // confirm password que no matchea
    cy.get('[name="passwordCheck"]').type('Hola123')
    cy.get('[name="passwordCheck"]').type('4')
    cy.get('.RegisterButtonSubmit').click()
    // aca falla porque el nickname ya existe
    cy.get('.swal2-confirm').click()
    // cambiamos nickname por uno válido
    /* cy.get('[name="nickname"]').type('{selectall}{backspace}')
    cy.get('[name="nickname"]').type(`Prueba_test_${randomNumber}`) 
    
    cy.get('.ButtonSubmit').click()
    cy.get('.swal2-confirm').click() */
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
    cy.get('.LoginInputPassword').type('{selectall}{backspace}')
    cy.get('.LoginInputPassword').type('{selectall}{backspace}')
    cy.get('.LoginInputPassword').type('Hola1234')
    cy.get('.LoginSubmit').click()
    cy.wait(1000)
    cy.get('[data-testid="HeaderButtonList"]').click()
    cy.get('[data-testid="ListPageSearch"]').type('lu')
    cy.get('[data-testid="ListPageSearchSubmit"]').click()
    cy.wait(1000)
    cy.contains('▼').click()
    cy.contains('▲').click()
    cy.get('.ListPageFilterSelect').select('Silver')
    cy.get('.ListPageFilterSelect').select('Diamond')
    cy.wait(1000)
    cy.get(':nth-child(4) > .HeaderButton').click()
    cy.get('.ProfileDataPasswordBtn').click()
    cy.get('[name="oldPassword"]').type('Hola1234')
    cy.get('[name="newPassword"]').type('Hola12345')
    cy.get('[name="newPasswordRepeat"]').type('Hola12345')
    cy.get('[name="submit change password"]').click()
    cy.get('.swal2-confirm').click()
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
      cy.wait(1000)
      cy.get(':nth-child(5) > .HeaderButton').click()
      cy.get('.swal2-confirm').click()
    })

  })  
  






