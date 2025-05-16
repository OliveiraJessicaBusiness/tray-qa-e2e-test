// cypress/e2e/cadastro.cy.js

import CadastroPage from '../support/pages/CadastroPage';

describe('Cadastro de novo usuário', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    CadastroPage.visitar();
  });

  it('Cadastro com dados válidos', () => {
    const email = `teste${Date.now()}@email.com`;
    CadastroPage.preencherNome('Usuário Teste');
    CadastroPage.preencherEmail(email);
    CadastroPage.preencherSenha('123456');
    CadastroPage.clicarCadastrar();
    CadastroPage.verificarMensagemSucesso('Usuário inserido com sucesso');
  });

  it('Cadastro sem preencher a senha', () => {
    CadastroPage.preencherNome('Usuário Teste');
    CadastroPage.preencherEmail(`teste${Math.floor(Math.random() * 10000)}@email.com`);
    CadastroPage.deixarSenhaEmBranco();
    CadastroPage.clicarCadastrar();
    CadastroPage.verificarMensagemErro('Senha é um campo obrigatório');
  });

  it('Cadastro com e-mail já existente', () => {
    CadastroPage.preencherNome('Usuário Existente');
    CadastroPage.preencherEmail('teste@email.com'); // email já usado
    CadastroPage.preencherSenha('123456');
    CadastroPage.clicarCadastrar();
    CadastroPage.verificarMensagemErro('Endereço de email já utilizado');
  });

  it('Cadastro com e-mail inválido', () => {
    CadastroPage.preencherNome('Usuário Teste');
    CadastroPage.preencherEmailInvalido();
    CadastroPage.preencherSenha('123456');
    CadastroPage.clicarCadastrar();
    cy.get('#email:invalid').should('exist');
  });

  it('Cadastro com nome em branco', () => {
    CadastroPage.deixarNomeEmBranco();
    CadastroPage.preencherEmail(`teste${Math.floor(Math.random() * 10000)}@email.com`);
    CadastroPage.preencherSenha('123456');
    CadastroPage.clicarCadastrar();
    CadastroPage.verificarMensagemErro('Nome é um campo obrigatório');
  });

  it('Cadastro com email em branco', () => {
    CadastroPage.deixarEmailEmBranco();
    CadastroPage.preencherNome('Usuário Teste');
    CadastroPage.preencherSenha('123456');
    CadastroPage.clicarCadastrar();
    CadastroPage.verificarMensagemErro('Email é um campo obrigatório');
  });
});
