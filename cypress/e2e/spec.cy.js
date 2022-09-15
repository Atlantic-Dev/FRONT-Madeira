/* const { CLIENT_URL } = process.env */

describe('Website works', () => {
  it('Visits website', () => {
    cy.visit('http://react-alb-1195746012.us-east-1.elb.amazonaws.com/')

    cy.contains('players list').click()
    cy.contains('Luciano_Aufderhar').click()
   
  })
})

describe('hay token', () => {
  it('Visits website', () => {
    cy.visit('http://react-alb-1195746012.us-east-1.elb.amazonaws.com/')
    cy.get('login').click()
    cy.get('input:first').type('luchinni8@gmail.com')
    cy.get('input:second').type('Hola1234')
    cy.get('login').click()
    
    
    //expect(localStorage.getItem('token')) 
})})
