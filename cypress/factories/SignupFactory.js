
//adicionando faker para gerar dados aleatorios
var faker = require('faker')
//adicionando o validador cpf para dados 
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: firstName + ' ' + lastName,
            cpf: cpf.generate(),
            email: faker.internet.email(lastName),
            whatsapp: '11999999999',
            adress:{
              postalCode: '04534011',
              street: 'Rua Joaquim Floriano',
              number: '123',
              complemento: 'casa',
              district: 'Itaim Bibi',
              city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh:'images/cnh-digital.jpg'
        }

        return data
    }

    
}