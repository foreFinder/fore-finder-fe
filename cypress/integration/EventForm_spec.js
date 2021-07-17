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

  it('User should be able to pick a date in the future for tee time', () => {

    cy.get('#Date').type('2021-11-13')
      .should('have.value', '2021-11-13')
  })

  it('User should be able to input a time between 7a - 5p', () => {

    cy.get('#teeTime').type('12:30')
      .should('have.value', '12:30')
  })

  it('User should be able to select how many open positions there are available', () => {

    cy.get('#numPlayers').select(['3'])
      .should('have.value', '3')
  })

  it('User should be able to select either 9 holes to be played', () => {

    cy.get('[type="radio"]').check('9')
      .should('have.value', '9')
  })

  it('User should be able to select either 18 holes to be played', () => {

    cy.get('[type="radio"]').check('18')
      .should('have.value', '18')
  })

  it('User should be able to select a private event and invite all friends', () => {

    cy.get('[type="radio"]').check('private')
      .get('#allFriends').check().should('be.checked')
  })

  it('User should be able to select a private event and invite Andrew only', () => {

    cy.get('[type="radio"]').check('private')
      .get('#2').check().should('be.checked')
  })
})


describe('Sad Path Tests', () => {

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

  it('Should notify user if they did not select a golf course and tried to submit form', () => {

    cy.get('#Date').type('2021-11-13')
      .get('#teeTime').type('12:30')
      .get('#numPlayers').select(['3'])
      .get('[type="radio"]').check('9')
      .get('.form-submit').click()

      /* Need to come back to this test after add logic to tell user to select course*/
  })

  it('Should notify user if they did not input a tee time', () => {

    cy.get('.form-submit').click()
      .get('input:invalid').should('have.length', 1)
      .get('#teeTime').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
  })
})