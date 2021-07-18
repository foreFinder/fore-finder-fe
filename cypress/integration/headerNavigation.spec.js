describe('Header Navigation', () => {
  beforeEach(() => {
    cy.visit('/dashboard')
  })

  it.only('should render the mobile menu accordingly', () => {
    // check the hamburger menu is not rendered in desktop view
    cy.viewport(1920, 1080)
    cy.get('[data-cy=ham-menu]')
      .should('not.be.visible')
    // check the hamburger menu is rendered otherwise
    cy.viewport(960, 540)
    cy.get('[data-cy=ham-menu]')
      .should('be.visible')
    // check the menu opens as expected and has navlinks
    cy.get('[data-cy=ham-menu]').click()
    cy.get('[data-cy=nav-menu]').should('be.visible')
  })

  it('should display a logo that can take you the dashboard', () => {
    cy.viewport(1920, 1080)
    cy.get('[data-cy=logo]').click()
    cy.url().should('eq', 'http://localhost:3000/dashboard')
  })

  it('should have a route to form', () => {
    cy.get('[data-cy=nav-menu]')
    .get('[data-cy=form-link]')
    .should('be.visible')
    .get('[data-cy=community-link]')
    .should('be.visible')
  })

})