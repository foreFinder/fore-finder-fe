describe('Player List', () => {
  beforeEach('setup stubs and visit Dashboard', () => {
    cy.setDataStubs()
    cy.visit('http://localhost:3000')
  })

  it('should render as sidebar in desktop view', () => {
    cy.get('[class=player-list-desktop]')
      .should('be.visible')
  })

  it('should be accessible through hamburger menu mobile and tablet views', () => {
    cy.viewport(960, 540)
    cy.get('[class=player-list-desktop]')
      .should('not.be.visible')
    cy.get('[class=player-list-desktop]')
      .should('be.visible')
  })
  
  it('should allow you to switch between friends and community players', () => {
    cy.get('[class=player-type-button]').eq(1).click()
    cy.get('[class=player-type-button]').eq(0).click()

  })

  it('should allow you to add friends from the community', () => {
    cy.get('[class=player-type-button]').eq(1).click()
    
  })

  it('should allow you to remove friends', () => {

  })


})