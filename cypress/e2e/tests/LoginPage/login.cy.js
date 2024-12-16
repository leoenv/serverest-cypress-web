import loginPageSteps from '../../../support/pages/Login/steps'

describe('Login Feature', () => {
    
    beforeEach(() => {
      
      loginPageSteps.acessarLoginPage()
      cy.clearCookies()
      cy.clearLocalStorage()
    })
  
    it("Realizar login com sucesso", () => {

      loginPageSteps.inserirLogin()
      loginPageSteps.inserirSenha()
      loginPageSteps.clicarBotaoEntrar()
      loginPageSteps.validarLogin()
    })

    it("Tentativa de login com senha invalida", () => {

      loginPageSteps.inserirLogin()
      loginPageSteps.inserirSenhaInvalida()
      loginPageSteps.clicarBotaoEntrar()
      loginPageSteps.validarLoginSenhaInvalida()
    })
})