import home from "../pages/HomePage"

describe('Home Page', () => {
  it('app deve estar online', function(){
    
    home.home_go()
    const expectedMessage = 'Seja um parceiro entregador pela Buger Eats'
    home.page_get_title(expectedMessage)
  })
})