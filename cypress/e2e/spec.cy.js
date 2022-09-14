describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})

/* Visit: https://example.cypress.io
Find the element with content: type
Click on it
Get the URL
Assert it includes: /commands/actions
Get the input with the action-email class
Type fake@email.com into the input
Assert the input reflects the new value */