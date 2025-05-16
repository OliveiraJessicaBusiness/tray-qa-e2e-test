import LoginPage from '../support/pages/LoginPage';

describe('Login no sistema Seu Barriga', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    LoginPage.visitar();
  });

  it('Login com credenciais válidas', () => {
    LoginPage.preencherEmail('testesucesso@gmail.com.br');
    LoginPage.preencherSenha('senha123');
    LoginPage.clicarEntrar();
    LoginPage.verificarMensagemBoasVindas('Bem vindo, Usuário Teste!');
  });

  it('Login com senha inválida', () => {
    LoginPage.preencherEmail('testesucesso@gmail.com.br');
    LoginPage.preencherSenha('senhaErrada');
    LoginPage.clicarEntrar();
    LoginPage.verificarMensagemErro('Problemas com o login do usuário');
  });

  it('Login com email em branco', () => {
    LoginPage.preencherSenha('senha123');
    LoginPage.clicarEntrar();
    LoginPage.verificarMensagemErro('Email é um campo obrigatório');
  });

  it('Login com senha em branco', () => {
    LoginPage.preencherEmail('testesucesso@gmail.com.br');
    LoginPage.clicarEntrar();
    LoginPage.verificarMensagemErro('Senha é um campo obrigatório');
  });

  it('Login com ambos os campos em branco', () => {
    LoginPage.clicarEntrar();
    LoginPage.verificarMensagemErro('Email é um campo obrigatório');
  });
});
