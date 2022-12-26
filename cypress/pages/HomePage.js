class HomePage {
    
    home_go(){
        cy.visit('/')
        }
    page_get_title(expectedMessage){
        cy.get('#page-home main h1').should('have.text', expectedMessage)
    }
}

export const home= new HomePage();