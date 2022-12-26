class SignupPage {

    go(){        
        cy.visit('/')
        cy.get('a[href="/deliver"').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }
    fillForm(deliver){
        //inserindo os dados do deliver
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        //inserindo o postalCode
        cy.get('input[name="postalcode"]').type(deliver.adress.postalCode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        //inserindo o number e complemento
        cy.get('input[name="address-number"]').type(deliver.adress.number)
        cy.get('input[name="address-details"]').type(deliver.adress.complemento)    
        //validando a busca do postalCode
        cy.get('input[name="address"]').should('have.value', deliver.adress.street)
        cy.get('input[name="district"]').should('have.value', deliver.adress.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.adress.city_state)
        //combinacao de css seletor com texto
        cy.contains('.delivery-method li', deliver.delivery_method).click()
        //upload de arquivo
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)
    
    }
    submit(){
        //subimissão do formulario
        cy.get('form button[type="submit"]').click()
    }
    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }
    alertMessageShouldBe(expectedMessage){
        //cy.get('.alert-error').should('have.text', expectedMessage)

        //validacao para multiplas mensangens comparando se a mensagem está visivel na página
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
}

export const singup = new SignupPage();