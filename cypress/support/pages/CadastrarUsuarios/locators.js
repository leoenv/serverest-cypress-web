const cadastrarUsuariosPageLocators = {

  inputs: {

    digiteNome: () => cy.xpath('//input[@data-testid="nome"]'),
    digiteEmail: () => cy.xpath('//input[@data-testid="email"]'),
    digiteSenha: () => cy.xpath('//input[@data-testid="password"]'),
  },

  buttons: {

    cadastrar: () => cy.xpath('//button[@data-testid="cadastrar"]'),
  },

  texts: {

    cadastroSucesso: () => cy.contains('div', 'Cadastro realizado com sucesso'),
  },
}

export default cadastrarUsuariosPageLocators