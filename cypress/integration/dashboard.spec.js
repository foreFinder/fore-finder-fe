describe('When a user first accesses the Dashboard', () => {
  beforeEach('setup stubs and visit Dashboard', () => {
    cy.setDataStubs()
    cy.visit('http://localhost:3000')
  })

  it('should display their committed tee times', () => {
    cy.get('.tt-containers').should('be.visible')
      .find('.tee-time-container').eq(0)
      .find('.container-title').contains('Committed Tee Times')

    cy.get('.tee-times').eq(0).should('be.visible')
      .find('.tee-time').should('have.length', 1)
      .eq(0).find('h3').contains('Green Valley Ranch Golf Club')

    cy.get('.tee-times').eq(0)
      .find('.tee-time').eq(0)
      .find('.date').contains('Aug 17')
      .parent().parent().find('.time-slot').contains('11:30 AM')
      .parent().parent().find('.hole-count').contains('9')
      .parent().parent().find('.host-name').contains('Amy')
      .parent().parent().find('.spot-counter').contains('1 of 3')

    cy.get('.tee-times').eq(0)
      .find('.tee-time').eq(0)
      .find('button').contains('Cancel')
  })
})
