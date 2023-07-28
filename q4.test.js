it('has correct header text', () => {

  // Get H1 with data-test-id="header-inner"
  cy.get('[data-test-id="header-inner"]').as('header') 

  // Assert text content 
  cy.get('@header').should('contain', 'Road to Hire')

  // Assert class name
  cy.get('@header').should('have.class', 'header-inner') 

})