/* const { CLIENT_URL } = process.env */

describe('Website works', () => {
  it('Visits website', () => {
    cy.visit('http://react-alb-1195746012.us-east-1.elb.amazonaws.com/')

    cy.contains('players list').click()
    cy.contains('Luciano_Aufderhar').click()
    // Should be on a new URL which
    // includes '/commands/actions'
    //cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify
    // that the value has been updated
    //cy.get('.action-email')
      //.type('fake@email.com')
      //.should('have.value', 'fake@email.com')
  })
})

describe('hay token', () => {
  it('Visits website', () => {
    cy.visit('http://react-alb-1195746012.us-east-1.elb.amazonaws.com/')
    cy.get('login').click().should(() => {
      
    });
    expect(localStorage.getItem('token'))
})})

/* let localStore;

beforeEach(() => {
  localStore = {};

  cy.localStorage('getItem').and.callFake((token) =>
    token in localStore ? localStore[token] : null
  )
}); */

/* Visit: https://example.cypress.io
Find the element with content: type
Click on it
Get the URL
Assert it includes: /commands/actions
Get the input with the action-email class
Type fake@email.com into the input
Assert the input reflects the new value */