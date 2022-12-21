
//import da classe instanciada signup
import signup from "../pages/SignupPage"
//importando massa de dados dinamica
import SignupFactory from "../factories/SignupFactory"
describe('Cadastro', () => {
  //estanciando a classe SignupPage
  //var signupPage = new SignupPage()

  //beforeEach(function(){
  //  cy.fixture('deliver').then((d) => {
  //    this.deliver = d;

  //})
  //})
  it.skip('User should be deliver', function () {

    //criando a massa de dados dentro do teste7
    var deliver = SignupFactory.deliver()


    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    //validação da mensagem de sucesso
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)

  })
  it.skip('Invalid Doc', function () {
    var deliver = SignupFactory.deliver()
    //substituindo o cpf da massa de dados com dado invalido
    deliver.cpf = '123456789AA'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    const expectedMessage = 'Oops! CPF inválido'
    signup.alertMessageShouldBe(expectedMessage)

  })
  it.skip('Invalid email', function () {

    var deliver = SignupFactory.deliver()
    //substituindo o email da massa de dados com dado invalido
    deliver.email = 'teste.com.br'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    const expectedMessage = 'Oops! Email com formato inválido.'
    signup.alertMessageShouldBe(expectedMessage)

  })

  it.skip('Empty Fields', function () {
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'cep', output: 'É necessário informar o CEP' },
      { field: 'numero', output: 'É necessário informar o número do endereço' },
      { field: 'metodo', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' }]
    signup.go()
    signup.submit()
        messages.forEach(function(msg){
        it(`${msg.field} é obrigatório`, function(){
            signup.alertMessageShouldBe(msg.output)
        })
    })

  })
  context('Require Fields', function () {
    //contexto para test case de validação de campos obrigatórios
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o e-mail' },
      { field: 'cep', output: 'É necessário informar o CEP' },
      { field: 'numero', output: 'É necessário informar o número do endereço' },
      { field: 'metodo', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' }]

      beforeEach(function(){
        signup.go();
        signup.submit();
      })
      messages.forEach(function(msg){
        it(`${msg.field} é obrigatório`, function(){
            signup.alertMessageShouldBe(msg.output)
        })
    })


  })



})