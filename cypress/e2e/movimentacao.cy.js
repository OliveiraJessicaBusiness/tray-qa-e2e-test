import LoginPage from '../support/pages/LoginPage';
import MovimentacaoPage from '../support/pages/MovimentacaoPage';

describe('Fluxo completo de movimentação financeira', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    LoginPage.realizarLogin('testesucesso@gmail.com.br', 'senha123'); // aqui é onde corrige
    MovimentacaoPage.visitar();
  });


  it('Cadastro de movimentação com sucesso', () => {
    MovimentacaoPage.preencherDataMovimentacao();
    MovimentacaoPage.preencherDataPagamento();
    MovimentacaoPage.preencherDescricao('Freelance');
    MovimentacaoPage.preencherValor('1500');
    MovimentacaoPage.preencherInteressado('Cliente X');
    MovimentacaoPage.marcarComoPago();
    MovimentacaoPage.salvar();
    MovimentacaoPage.verificarMensagemDeSucesso('Freelance');
  });

  it('Tentativa de cadastro com campos em branco', () => {
    MovimentacaoPage.salvar();
    MovimentacaoPage.verificarErroCamposObrigatorios();
  });

  it('Cadastro com valor negativo', () => {
    MovimentacaoPage.preencherDataMovimentacao();
    MovimentacaoPage.preencherDataPagamento();
    MovimentacaoPage.preencherDescricao('Reembolso');
    MovimentacaoPage.preencherValor('-200');
    MovimentacaoPage.preencherInteressado('Fornecedor Y');
    MovimentacaoPage.marcarComoPago();
    MovimentacaoPage.salvar();
    MovimentacaoPage.verificarMensagemDeSucesso('Reembolso');
  });

  it('Cadastro com descrição muito longa', () => {
    const descricaoLonga =
      'Pagamento referente à consultoria técnica especializada em arquitetura e infraestrutura de sistemas distribuídos de larga escala';

    MovimentacaoPage.preencherDataMovimentacao();
    MovimentacaoPage.preencherDataPagamento();
    MovimentacaoPage.preencherDescricao(descricaoLonga);
    MovimentacaoPage.preencherValor('2000');
    MovimentacaoPage.preencherInteressado('Cliente Z');
    MovimentacaoPage.marcarComoPago();
    MovimentacaoPage.salvar();
    MovimentacaoPage.verificarMensagemDeSucesso(descricaoLonga);
  });

  it('Cadastro de movimentação não paga', () => {
    MovimentacaoPage.preencherDataMovimentacao();
    MovimentacaoPage.preencherDataPagamento();
    MovimentacaoPage.preencherDescricao('Compra parcelada');
    MovimentacaoPage.preencherValor('300');
    MovimentacaoPage.preencherInteressado('Loja ABC');
    MovimentacaoPage.desmarcarComoPago();
    MovimentacaoPage.salvar();
    MovimentacaoPage.verificarMensagemDeSucesso('Compra parcelada');
  });
});
