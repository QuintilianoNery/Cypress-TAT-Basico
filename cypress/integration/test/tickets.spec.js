/// <reference types="cypress" />
var faker = require('faker-br');

const nome = faker.name.findName();
const sobrenome = faker.name.lastName();
const nomeCompleto = `${nome} ${sobrenome}`;
const email = faker.internet.email();
const quantidadeTicket = '2';


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
        const cliente = {
            nome,
            sobrenome,
            email
        };
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
        cy.get('#ticket-quantity')
            .select('3')
            .select('4')
            .select('1')
            .select(quantidadeTicket)
    });


    it('Validando radio Buttons', () => {
        cy.get('#vip')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('#general')
            .should('not.be.checked')
            .click()
            .should('be.checked')
    });

    it('Validando checkboxes', () => {
        cy.get('#friend')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('#publication')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('#social-media')
            .should('not.be.checked')
            .click()
            .should('be.checked')
    });

    it('Resetando o preenchimento dos campos', () => {
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

        cy.get('#ticket-quantity')
            .select('3')
            .select('4')
            .select('1')
            .select(quantidadeTicket)

        cy.get('#vip')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('#general')
            .should('not.be.checked')
            .click()
            .should('be.checked')

        cy.get('#friend')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('#publication')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('#social-media')
            .should('not.be.checked')
            .click()
            .should('be.checked')


        cy.get('button[type=reset]')
            .click()
            .should('have.text', 'Reset')

        cy.get('#first-name')
            .should('have.text', '')
    });

    it('Preenchendo apenas os campos obrigatórios', () => {
        const cliente = {
            nome,
            sobrenome,
            email
        };

        cy.preencherCamposObrigatorios(cliente);
        cy.get('button[type=submit]')
            .as('submitButton')
            .should('not.be.disabled')
        cy.get('#agree')
            .uncheck()
        cy.get('@submitButton')
            .should('be.disabled')
    });

    it('Validando se está na página inicial', () => {
        cy.get('header h1')
            .should('have.text', 'TICKETBOX')
            .should('contain', 'TICKETBOX')
    });

    it('Validar fluxo completo do cadastro Tickets - Incompleto ', () => {
        //Ao preencher nome e spbrenome deve-se popular a frase com o nome completo  
        //Quando preencho todos os campos obrigatórios, o sistema deve habilitar o botão de  confirmação

        const cliente = {
            nome,
            sobrenome,
            email
        };
        cy.get('#requests')
            .type('Carnívoro');
        cy.get('#signature')
            .type(nomeCompleto);

        cy.get('#ticket-quantity')
            .select('3')
            .select('4')
            .select('1')
            .select(quantidadeTicket)

        cy.get('#vip')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('#general')
            .should('not.be.checked')
            .click()
            .should('be.checked')

        cy.get('#friend')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('#publication')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('#social-media')
            .should('not.be.checked')
            .click()
            .should('be.checked')

        cy.get('button[type=submit]')
            .should('be.disabled')
        cy.get('#agree')
            .click()
            .should('be.checked')

        cy.get('.agreement p')
            .should('contain', `I, ${nomeCompleto}, wish to buy ${quantidadeTicket} General Admission tickets.`)

        cy.get('button[type=submit]')
            .should('not.be.disabled')
            .click()
            .should('')

    });

    it.skip('Validação do título dos campos', () => {
    });

    it.skip('Validar título da página tickets', () => {
    });

});