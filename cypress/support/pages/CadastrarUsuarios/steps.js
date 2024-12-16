import cadastrarUsuariosPageLocators from './locators'
import gerarMassa from '../../commands'

class cadastrarUsuariosPageSteps {

    validarAcessoCadastrarUsuariosPage() {

      cadastrarUsuariosPageLocators.buttons.cadastrar().should('be.visible')
    }

    inserirNome() {

      cadastrarUsuariosPageLocators.inputs.digiteNome().type('Teste')
    }

    inserirEmail() {

      cadastrarUsuariosPageLocators.inputs.digiteEmail().type(gerarMassa())
    }

    inserirSenha() {

      cadastrarUsuariosPageLocators.inputs.digiteSenha().type('test123*')
    }

    clicarBotaoCadastrar() {

      cadastrarUsuariosPageLocators.buttons.cadastrar().click()
    }

    validarCadastro() {

      cadastrarUsuariosPageLocators.texts.cadastroSucesso().should('be.visible')
    }
  }

export default new cadastrarUsuariosPageSteps()