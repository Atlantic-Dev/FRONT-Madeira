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

    // should have an email input
    const inputName = screen.getByPlaceholderText('Email')
    expect(inputName).toBeInTheDocument()
    // should have a password input
    const inputPassword = screen.getByPlaceholderText('Password')
    expect(inputPassword).toBeInTheDocument()
    // should have a Log in button
    expect(screen.getByText('Log in')).toBeInTheDocument()
})
