
### 📄 `README.md`

````markdown
# 🚀 Testes E2E com Cypress - Seu Barriga

Este repositório contém os testes end-to-end (E2E) automatizados para a aplicação [Seu Barriga](https://seubarriga.wcaquino.me), desenvolvidos com **Cypress** em **JavaScript**, seguindo as melhores práticas de automação e organização por Page Object Model (POM).

---

## ✅ Tecnologias e Ferramentas

- [Cypress](https://www.cypress.io/) v14.3.3
- JavaScript ES6
- ESLint + Prettier
- Node.js v18+
- Git + VSCode

---

## 📁 Estrutura de Pastas

```bash
cypress/
├── e2e/
│   ├── cadastro.cy.js
│   ├── login.cy.js
│   └── movimentacao.cy.js
├── support/
│   └── pages/
│       ├── CadastroPage.js
│       ├── LoginPage.js
│       └── MovimentacaoPage.js
└── support/e2e.js
````

---

## 🧪 Testes Implementados

### Cadastro de Usuário

* ✅ Cadastro com dados válidos
* ❌ Cadastro sem senha
* ❌ Cadastro com email já existente
* ❌ Cadastro com email inválido
* ❌ Cadastro com nome ou email em branco

### Login

* ✅ Login com credenciais válidas
* ❌ Login com senha inválida
* ❌ Login com campos vazios

### Movimentação Financeira

* ✅ Cadastro com sucesso
* ❌ Cadastro com campos obrigatórios em branco
* ❌ Cadastro com valor negativo
* ❌ Cadastro com descrição longa
* ❌ Cadastro não pago

> ⚠️ Algumas validações foram simplificadas para verificar apenas o retorno do sistema via `.alert-success`.

---

## ▶️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/OliveiraJessicaBusiness/tray-qa-e2e-test.git
cd tray-qa-e2e-test

```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute os testes

#### Modo visual (interface do Cypress):

```bash
npx cypress open
```

#### Modo headless (linha de comando):

```bash
npx cypress run
```

---

## 🧠 Uso de Inteligência Artificial

Este projeto foi desenvolvido com apoio da **IA ChatGPT (OpenAI)** exclusivamente para:

* Apoiar na estruturação de boas práticas (Page Objects, lint, formatação)
* Otimizar descrições e mensagens do `README.md`
* Sugerir cenários adicionais de testes

**Todo o código e lógica de testes foram escritos e validados manualmente.**

---

## 📌 Requisitos da Proposta

✔️ Projeto hospedado no GitHub
✔️ Código completo com dependências documentadas
✔️ Framework utilizado: **Cypress** com JavaScript
✔️ Uso de IA documentado

---

## 📬 Contato

Jessica Carina
👩‍💻 QA
