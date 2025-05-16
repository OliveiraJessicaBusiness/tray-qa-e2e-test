class LoginPage {
    visitar() {
      cy.visit('https://seubarriga.wcaquino.me/login');
    }
  
    preencherEmail(email) {
      cy.get('#email').clear().type(email);
    }
  
    preencherSenha(senha) {
      cy.get('#senha').clear().type(senha);
    }
  
    clicarEntrar() {
      cy.get('.btn').click();
    }
  
    verificarMensagemBoasVindas(mensagem) {
      cy.get('.alert-success').should('contain', mensagem);
    }
  
    realizarLogin(email = 'testesucesso@gmail.com.br', senha = 'senha123') {
      this.visitar();
      this.preencherEmail(email);
      this.preencherSenha(senha);
      this.clicarEntrar();
    }
    verificarMensagemErro(mensagem) {
        cy.get('.alert').should('contain', mensagem);
      }
  }
  
  export default new LoginPage(); // exporta como instância
  