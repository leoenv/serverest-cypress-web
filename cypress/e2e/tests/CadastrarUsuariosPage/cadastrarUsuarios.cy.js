import loginPageSteps from '../../../support/pages/Login/steps'
import cadastrarUsuariosPageSteps from '../../../support/pages/CadastrarUsuarios/steps'

describe('Cadastro Feature', () => {
    
    beforeEach(() => {
      
      loginPageSteps.acessarLoginPage()
      cy.clearCookies()
      cy.clearLocalStorage()
    })
  
    it("Cadastrar usuario com sucesso", () => {

      loginPageSteps.clicarLinkCadastreSe()  
      cadastrarUsuariosPageSteps.validarAcessoCadastrarUsuariosPage()
      cadastrarUsuariosPageSteps.inserirNome()
      cadastrarUsuariosPageSteps.inserirEmail()
      cadastrarUsuariosPageSteps.inserirSenha()
      cadastrarUsuariosPageSteps.clicarBotaoCadastrar()
      cadastrarUsuariosPageSteps.validarCadastro()
    })
})