// cypress/support/pages/CadastroPage.js

class CadastroPage {
  visitar() {
    cy.visit('https://seubarriga.wcaquino.me/cadastro');
  }

  preencherNome(nome) {
    cy.get('#nome').clear().type(nome);
  }

  preencherEmail(email) {
    cy.get('#email').clear().type(email);
  }

  preencherSenha(senha) {
    cy.get('#senha').clear().type(senha);
  }

  deixarNomeEmBranco() {
    cy.get('#nome').clear();
  }

  deixarEmailEmBranco() {
    cy.get('#email').clear();
  }

  deixarSenhaEmBranco() {
    cy.get('#senha').clear();
  }

  preencherEmailInvalido() {
    cy.get('#email').clear().type('email-invalido');
  }

  clicarCadastrar() {
    cy.get('.btn.btn-primary').click();
  }

  verificarMensagemSucesso(mensagem) {
    cy.get('.alert.alert-success', { timeout: 10000 }).should('contain', mensagem);
  }

  verificarMensagemErro(mensagem) {
    cy.get('.alert.alert-danger', { timeout: 10000 }).should('contain', mensagem);
  }
}

export default new CadastroPage();
