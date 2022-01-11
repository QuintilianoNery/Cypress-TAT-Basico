/// <reference types="cypress" />
var faker = require('faker-br');

const nome = faker.name.findName();
const sobrenome = faker.name.lastName();
const nomeCompleto = `${nome} ${sobrenome}`;
const email = faker.internet.email();

describe('Tickets', () => {
    beforeEach(() => {
        cy.visit('/index.html');
    });

    it('Preencher todos os campos do tipo texto', () => {
        //digitar nome
        //digitar sobrenome
        //digitar email
        //Carnívoro
        //digitar nome completo
        cy.get('#first-name')
            .type(nome);
        cy.get('#last-name')
            .type(sobrenome);
        cy.get('#email')
            .type(email);
        cy.get('#requests')
            .type('Carnívoro');
        cy.get('#signature')
            .type(nomeCompleto);

    });

    it('Preenchimento de e-mail inválido', () => {

        //informa que o campo possui o ID e com uma classe inválida
        cy.get('#email')
            .as('email')
            .type('teste.teste.com');
        cy.get('#email.invalid')
            .should('exist')
        cy.get('@email')
            .clear()
            .type('q@q.com')
        cy.get('#email.invalid')
            .should('not.exist')
    });

    it('Validando a seleção da quantidade de Tickets', () => {
        // selecionando 2 tickets
    });

    it('Resetando o preenchimento dos campos', () => {

    });

    it('Validar título da página tickets', () => {

    });

    it('Validando radio Buttons', () => {

    });

    it('Validando checkboxes - Selecionar Friend', () => {

    });


    it('Validando checkboxes - Selecionar Publication', () => {

    });

    it('Validando checkboxes - Selecionar  Social Media', () => {

    });

    it('Validando checkboxes - intercalar seleção', () => {
        cy.get('header h1')
            .should('have.text', 'TICKETBOX')
            .should('contain', 'TICKETBOX')
    });

    it('Validar fluxo completo do cadastro Tickets ', () => {
        //Ao preencher nome e spbrenome deve-se popular a frase com o nome completo  
        //Quando preencho todos os campos obrigatórios, o sistema deve habilitar o botão de  confirmação
        //
        //
    });

    it('Preencher o cadastro completo e em seguida resetar', () => {
        //Se clicar em resetar, o formulário deve ser limpo
        cy.get('#first-name').type(nome);
        cy.get('#last-name').type(sobrenome);
        cy.get('.agreement p')
            .should('contain', `I, ${nomeCompleto}, wish to buy 1 General Admission ticket.`)
    });

    it('Validação do título dos campos', () => {

    });

});