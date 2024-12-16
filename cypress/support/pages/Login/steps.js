import loginPageLocators from './locators'
import homePageLocators from '../Home/locators'

class loginPageSteps {

    acessarLoginPage() {

      cy.visit('/')
      loginPageLocators.buttons.entrar().should('be.visible')
    }

    inserirLogin() {

      loginPageLocators.inputs.digiteEmail().type('test@gmail.com')
    }

    inserirSenha() {

      loginPageLocators.inputs.digiteSenha().type('test123*')
    }

    inserirSenhaInvalida() {

      loginPageLocators.inputs.digiteSenha().type('343434343434343')
    }

    clicarBotaoEntrar() {

      loginPageLocators.buttons.entrar().click()
    }

    clicarLinkCadastreSe() {

      loginPageLocators.buttons.cadastreSe().click()
    }

    validarLogin() {

      homePageLocators.buttons.logout().should('be.visible')
    }

    validarLoginSenhaInvalida() {

      loginPageLocators.texts.emailSenhaInvalidos().should('be.visible')
    }
  }

export default new loginPageSteps()