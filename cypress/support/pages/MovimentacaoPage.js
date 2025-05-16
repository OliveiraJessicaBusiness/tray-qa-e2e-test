class MovimentacaoPage {
    visitar() {
      cy.visit('https://seubarriga.wcaquino.me/movimentacao');
    }
  
    preencherDescricao(descricao) {
      cy.get('#descricao').clear().type(descricao);
    }
  
    preencherValor(valor) {
      cy.get('#valor').clear().type(valor);
    }
  
    preencherInteressado(interessado) {
      cy.get('#interessado').clear().type(interessado);
    }
  
    preencherDataMovimentacao(data = '01/01/2024') {
      cy.get('#data_transacao').clear().type(data);
    }
  
    preencherDataPagamento(data = '01/01/2024') {
      cy.get('#data_pagamento').clear().type(data);
    }
  
    marcarComoPago() {
      cy.get('#status_pago').check();
    }
  
    desmarcarComoPago() {
      cy.get('#status_pendente').check();
    }
  
    salvar() {
      cy.get('.btn-primary').click();
    }
  
    verificarMensagemDeSucesso() {
        cy.get('.alert', { timeout: 10000 }).should('be.visible');
      }
  
    verificarErroCamposObrigatorios() {
      cy.get('.alert-danger').should('be.visible');
    }
  }
  
  export default new MovimentacaoPage();
  