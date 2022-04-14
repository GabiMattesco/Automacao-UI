/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso' , () => {
        cy.get('#username').type('gabimattesco@gmail.com')
        cy.get('#password').type('G@b12022!')
        cy.get('.woocommerce-form > .button').click()  
        
        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('gabi@gmail.com')
        cy.get('#password').type('G@b12022!')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('gabimattesco@gmail.com')
        cy.get('#password').type('gab12022!')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , "Erro: A senha fornecida para o e-mail gabimattesco@gmail.com está incorreta. Perdeu a senha?")
    })

 })