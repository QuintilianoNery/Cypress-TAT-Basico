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

// var faker = require('faker-br');

// const nome = faker.name.findName();
// const sobrenome = faker.name.lastName();
// const nomeCompleto = `${nome} ${sobrenome}`;

Cypress.Commands.add('preencherCamposObrigatorios', cliente => {
    cy.get('#first-name')
        .type(cliente.nome);
    cy.get('#last-name')
        .type(cliente.sobrenome);
    cy.get('#email')
        .type(cliente.email);
    cy.get('#agree')
        .check();
})
