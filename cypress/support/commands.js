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

const devEnv = 'http://3d8bf4156a8c.ngrok.io/'

Cypress.Commands.add('setDataStubs', () => {
  cy.fixture('../fixtures/players.json')
    .then(players => cy.intercept(`${devEnv}api/v1/players`, players))
  
  cy.fixture('../fixtures/courses.json')
    .then(courses => cy.intercept(`${devEnv}api/v1/courses`, courses))

  cy.fixture('../fixtures/events.json')
    .then(events => cy.intercept(`${devEnv}api/v1/events`, events))
})
