describe('When a user first accesses the Dashboard', () => {
  beforeEach('setup stubs and visit Dashboard', () => {
    cy.setReadStubs()
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

  it('should display available tee times hosted by friends', () => {
    cy.get('.tt-containers').should('be.visible')
      .find('.tee-time-container').eq(1)
      .find('.container-title').contains('Available Tee Times')

    cy.get('.tee-times').eq(1).should('be.visible')
      .find('.tee-time').should('have.length', 1)
      .eq(0).find('h3').contains('City Park Golf Course')

    cy.get('.tee-times').eq(1)
      .find('.tee-time').eq(0)
      .find('.date').contains('Aug 18')
      .parent().parent().find('.time-slot').contains('12:30 PM')
      .parent().parent().find('.hole-count').contains('18')
      .parent().parent().find('.host-name').contains('Andrew')
      .parent().parent().find('.spot-counter').contains('2 of 3')

    cy.get('.tee-times').eq(1)
      .find('.tee-time').eq(0)
      .find('button').eq(0).contains('Decline')
      .next('button').contains('Accept')
  })
})

describe('Invite type selector', () => {
  beforeEach('setup stubs and visit Dashboard', () => {
    cy.setReadStubs()
    cy.visit('http://localhost:3000')
  })

  it('should render both public and private events when All is selected', () => {
    cy.get('.invite-type-select')
      .find('button').eq(1)
      .contains('All').click()
    
    cy.get('.tee-times').eq(1).should('be.visible')
      .find('.tee-time').should('have.length', 2)

    cy.get('.tee-times').eq(1)
      .find('.tee-time').eq(1)
      .find('h3').contains('Riverdale Golf Club')
  })

  it('should render private events when Friends is selected after selecting All', () => {
    cy.get('.invite-type-select')
      .find('button').eq(1)
      .contains('All').click()

    cy.get('.invite-type-select')
      .find('button').eq(0)
      .contains('Friends').click()

    cy.get('.tee-times').eq(1).should('be.visible')
      .find('.tee-time').should('have.length', 1)

    cy.get('.tee-times').eq(1)
      .find('.tee-time').eq(0)
      .find('h3').contains('City Park Golf Course')
  })
})

describe('Invite actions', () => {
  beforeEach('setup initial stubs and visit Dashboard', () => {
    cy.setReadStubs()
    cy.setUpdateStub()
    cy.visit('http://localhost:3000')
  })

  describe('Accept button', () => {
    beforeEach('setup stub for accept action', () => {
      cy.setActionStub('accept')
    })

    it('should add an event to a player\'s commited tee times', () => {
      cy.get('.tee-times').eq(1).should('be.visible')
        .find('.tee-time').eq(0)
        .find('.invitation-actions')
        .find('button').eq(1).contains('Accept').click() 

      
    })
  })
})
