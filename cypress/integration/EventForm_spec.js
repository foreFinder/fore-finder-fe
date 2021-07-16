describe('EventForm', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000/dashboard')
      .intercept('http://3d8bf4156a8c.ngrok.io/api/v1/courses', {
        data: [
          {
            id: '1', 
            type: 'course', 
            attributes: {
              city: 'Denver', 
              cost: '80', 
              name: 'Green Valley Ranch Golf Club', 
              phone: '303.371.3131',
              state: 'Colorado',
              street: '4900 Himalaya Road', 
              zip_code: '80249'
            }
          }
        ]
      })
      .intercept('http://3d8bf4156a8c.ngrok.io/api/v1/players', {
        data: [
          {
            id: '1', 
            type: 'players', 
            attributes: {
              name: 'Amy', 
              friends: [2, 3], 
              events: [2]
            }
          }
        ]
      })
      .get('[data-cy = form-link]').click()
  })

  it('Should display a form with a header', () => {

    cy.get('.form-title').should('be.visible')
      .and('have.text', 'Create a New Tee Time')
  })

  it('User should be able to select a golf course from list', () => {

    cy.get('#golfCourse').select(['Green Valley Ranch Golf Club'])
      .should('have.value', '1')
  })
})