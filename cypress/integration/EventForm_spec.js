describe('EventForm', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000')
      .intercept('https://8f05812ea9bf.ngrok.io/api/v1/courses', {
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
      .intercept('https://8f05812ea9bf.ngrok.io/api/v1/players', {
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
      
  })
})