const loginPageLocators = {

  inputs: {

    digiteEmail: () => cy.xpath('//input[@data-testid="email"]'),
    digiteSenha: () => cy.xpath('//input[@data-testid="senha"]'),
  },

  buttons: {

    entrar: () => cy.xpath('//button[@data-testid="entrar"]'),
    cadastreSe: () => cy.xpath('//a[@data-testid="cadastrar"]'),
  },

  texts: {

    emailSenhaInvalidos: () => cy.contains('div', 'Email e/ou senha inválidos'),
  },
}

export default loginPageLocators