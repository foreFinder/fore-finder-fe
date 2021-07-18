// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const devEnv = 'http://861341e035fa.ngrok.io/'

Cypress.Commands.add('setReadStubs', () => {
  cy.fixture('../fixtures/players.json')
    .then(players => cy.intercept(`${devEnv}api/v1/players`, players))
  
  cy.fixture('../fixtures/courses.json')
    .then(courses => cy.intercept(`${devEnv}api/v1/courses`, courses))

  cy.fixture('../fixtures/Events/initial_events.json')
    .then(events => cy.intercept(`${devEnv}api/v1/players/1/events`, events))
})

Cypress.Commands.add('setUpdateStubs', () => {
  cy.intercept('PATCH', `${devEnv}api/v1/player-event`, (req) => {
    if (req.body.invite_status === 'accepted') {
      cy.fixture('../fixtures/Events/events_after_accept.json')
        .then(events => cy.intercept(`${devEnv}api/v1/players/1/events`, events))
    } else if (req.body.invite_status === 'declined') {
      cy.fixture('../fixtures/Events/events_after_decline.json')
        .then(events => cy.intercept(`${devEnv}api/v1/players/1/events`, events))
    }
  })
})
