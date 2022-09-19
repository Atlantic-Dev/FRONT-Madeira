import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux";
import store from '../../redux/store'
import Login from './Login'
import {BrowserRouter as Router} from 'react-router-dom'


const renderLogin = component => render(
    <Provider store={store}>
          {component}
        </Provider>

)

test('Login modal inputs and button', async () => {
    renderLogin(<Router>
                    <Login/>,
                </Router>,
                )

    // tiene que tener un input de email, uno de password y un boton de login 
    const inputName = screen.getByPlaceholderText('Email')
    expect(inputName).toBeInTheDocument()
    const inputPassword = screen.getByPlaceholderText('Password')
    expect(inputPassword).toBeInTheDocument()
    expect(screen.getByText('Log in')).toBeInTheDocument()
})
