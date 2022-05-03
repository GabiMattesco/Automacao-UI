/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Arcadio Gym Short')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]')
            .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.sub-title > .woocommerce-Price-amount > bdi').should('contain' , 'R$40,00')
        
          
    
    });

});