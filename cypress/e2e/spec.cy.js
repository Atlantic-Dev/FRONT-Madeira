const randomNumber = (Math.floor(Math.random() * 99)).toString()
console.log("console.log", randomNumber)
describe('Tests sign up', () => {
  it('visits the site', () => {
    cy.visit('http://react-alb-1195746012.us-east-1.elb.amazonaws.com/')
  })
  it('should not allow the guest to enter a customer`s profile and redirect it to register', () => {
    cy.contains('Luciano_Aufderhar').click()
  })
  it('should be validated every input', () => {
    cy.get('[name="nickname"]').type(`Prueba_test_${randomNumber}`) 
    /* cy.get('[name="nickname"]').type('Julia.Bechtelar') */
    cy.get('[name="name"]').type('Ju')
    cy.get('[name="name"]').type('lia')
    cy.get('[name="surname"]').type('4520')
    cy.get('[name="surname"]').type('{selectall}{backspace}')
    cy.get('[name="surname"]').type('Bech')
    cy.get('[name="email"]').type(`Prueba_email_${randomNumber}`)
    cy.get('[name="email"]').type('@email')
    cy.get('[name="email"]').type('.com')
    cy.get('[name="password"]').type('Hola1234')
    cy.get('[name="passwordCheck"]').type('Hola1234')
    /* cy.get('[name="password"]')
    cy.get('[name="passwordCheck"]') */
    //click. Deberia fallar porque el nomnre de usuario ya esta tomado.
    //cy.get('[name="nickname"]').type('{selectall}{backspace}')
    //cy.get('[name="nickname"]').type(`Prueba_test_${randomNumber}`) 
    //click. Deberia fallar porque no selecciono nada
    cy.get('.RegisterSelect').select('Avatar3')
    cy.get('.ButtonSubmit').click()
    cy.get('.swal2-confirm').click()
  })
})








 describe('Tests log in', () => {
  //beforeEach(() => {
   // cy.visit(`${process.env.REACT_APP_CLIENT_DEPLOY}`)
 // }) 
  /* it('visits the site', () => {
    cy.visit('http://react-alb-1195746012.us-east-1.elb.amazonaws.com/')
  }) */
  it('should display the log in modal', () => {
    cy.get(':nth-child(5) > .HeaderButton').click()
  })
  it('tries to log in with wrong password', () => {
    cy.get('.LoginInputEmail').type(`Prueba_email_${randomNumber}`)
    cy.get('.LoginInputEmail').type('@email.com')
    /* cy.get('.LoginInputEmail').type('luchinni8@gmail.com') */
    cy.get('.LoginInputPassword').type('Hola123')
    /* cy.get('.LoginInputPassword').type('Hola123') */
    cy.get('.LoginSubmit').click()
    cy.get('.swal2-confirm').click()
  })
  it('should clear password input and type the right one', () => {
    cy.get('.LoginInputPassword').type('{selectall}{backspace}')
    cy.get('.LoginInputPassword').type('Hola1234')
    cy.get('.LoginSubmit').click()
  })
}) 

describe('tests ui interface', () => {
  //encontrar alguna forma de que se haga un tipo await
  it('should access a player', () => {
    cy.contains('Luciano_Aufderhar').click()
  })
  it('should go to players list and search, and apply status filter on the results', () => {
    cy.contains('PLAYERS LIST'). click()
    
  })
  
  })


