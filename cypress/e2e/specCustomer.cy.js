const randomNumber = (Math.floor(Math.random() * 300)).toString()

describe('Tests sign up', () => {
  it('visits the site', () => {
    cy.visit('http://localhost:3001/')
  })
  it('should not allow the guest to enter a customer`s profile and redirect it to register', () => {
    cy.contains('Luciano_Aufderhar').click({force:true})
  })
  it('should be every input validated', () => {
    // validacion de todo el form
    // usuario ya ocupado (el error salta al final)
    /* cy.get('[name="nickname"]').type('Julia.Bechtelar') */
    cy.get('[name="nickname"]').type(`Prueba_test_${randomNumber}`) 
    // nombre muy corto
    cy.get('[name="name"]').type('Ju')
    cy.get('[name="name"]').type('lia')
    // números en el apellido
    cy.get('[name="surname"]').type('4520')
    cy.get('[name="surname"]').type('{selectall}{backspace}')
    cy.get('[name="surname"]').type('Bech')
    // email sin @ ni .
    cy.get('[name="email"]').type(`Prueba_email_random_${randomNumber}`)
    // email sin .
    cy.get('[name="email"]').type('@email')
    cy.get('[name="email"]').type('.com')
    // password sin número
    cy.get('[name="password"]').type('hola')
    // password sin mayúscula
    cy.get('[name="password"]').type('1234')
    // password sin suficientes caracteres
    cy.get('[name="password"]').type('{selectall}{backspace}')
    cy.get('[name="password"]').type('Hola123')
    cy.get('[name="password"]').type('4')
    // confirm password que no matchea
    cy.get('[name="passwordCheck"]').type('Hola123')
    cy.get('[name="passwordCheck"]').type('4')
    cy.get('.RegisterButtonSubmit').click()
    // aca falla porque el nickname ya existe
    cy.get('.swal2-confirm').click()
    // cambiamos nickname por uno válido
    /* cy.get('[name="nickname"]').type('{selectall}{backspace}')
    cy.get('[name="nickname"]').type(`Prueba_test_${randomNumber}`) 
    
    cy.get('.ButtonSubmit').click()
    cy.get('.swal2-confirm').click() */
    /* cy.get('AvatarModalContainer > AvatarModalButton').click() */
  })
})

 describe('Tests log in', () => {
  //beforeEach(() => {
   // cy.visit(`${process.env.REACT_APP_CLIENT_DEPLOY}`)
 // }) 
 it('visits the site', () => {
    cy.visit('http://localhost:3001/')
    //cy.visit('http://react-alb-1195746012.us-east-1.elb.amazonaws.com/')
  }) 
  it('should display the log in modal', () => {
    cy.get(':nth-child(5) > .HeaderButton').click()
  })
  it('tries to log in with wrong password', () => {
    cy.get('.LoginInputEmail').type(`Prueba_email_random_${randomNumber}`)
    cy.get('.LoginInputEmail').type('@email.com')
    cy.get('.LoginInputPassword').type('Hola123') 
    cy.get('.LoginSubmit').click()
    cy.get('.swal2-confirm').click()
  })
  it('should clear password input and type the right one', () => {
    cy.get('.LoginInputPassword').type('{selectall}{backspace}')
    cy.get('.LoginInputPassword').type('{selectall}{backspace}')
    cy.get('.LoginInputPassword').type('Hola1234')
    cy.get('.LoginSubmit').click()
  })
})  

describe('searchs players and orders and filters the results', () => {
  it('visits the site', () => {
    cy.visit('http://localhost:3001/')
  })
  it('access the players list and search', () => {
    cy.get(':nth-child(2) > .HeaderButton').click()
    cy.get('.ListPageSearch').type('lu')
    cy.get('.ListPageSearchSubmit').click()
  }) 
  it('orders the results by rank', () => {
    cy.contains('▼').click()
    cy.contains('▲').click()
  })
  it('filters the results by status', () => {
    cy.get('.ListPageFilterSelect').select('Silver')
    cy.get('.ListPageFilterSelect').select('Diamond')

  })
})


describe('access about component', () => {
  it('visits the site', () => {
    cy.visit('http://localhost:3001/')
  })
  it('access about', () => {
    cy.get(':nth-child(3) > .HeaderButton').click({force:true})

  })
})


describe('access its own profile and edits it', () => {
  it('visits the site', () => {
    cy.visit('http://localhost:3001/')
  })
  //entrar en profile 
  it('access its own profile', () => {
    cy.get(':nth-child(4) > .HeaderButton').click({force:true})

  })
  //editar el perfil 
  it('opens edit profile modal', () => {
    cy.get('.ProfileDataEditBtn').click()
    cy.get('[name="name"]').type('Luchi')
    cy.get('[value="change"]').click()
    cy.containes('OK').click()
  })

  // cambiar la contraseña
  it('opens edit password modal', () => {
    cy.get('.ProfileDataPasswordBtn').click()
    cy.get('[input="oldPassword"]').type('Hola1234')
    cy.get('[input="newPassword"]').type('Hola12345')
    cy.get('[input="newPasswordRepeat"]').type('Hola12345')
    cy.get('[input="submit change password"]').click()
  })
})






// alternativas de log out
describe('Tests log out', () => {
  it('visits the site', () => {
    cy.visit('http://localhost:3001/')
  })
  it('should log out when clicks the button', () => {
    cy.get(':nth-child(5) > .HeaderButton').click()
  })
})

/* describe('Tests log out', () => {
  it('should log out when clicks the button', () => {
    cy.contains('LOG OUT').click({force:true})
  })
})  */