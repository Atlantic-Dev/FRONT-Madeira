import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux";
import store from '../../redux/store'
import HeaderComp from './Header' 
import {BrowserRouter as Router} from 'react-router-dom'

const renderHeader = component => render(
    <Provider store={store}>
          {component}
        </Provider>
)


test('Guest`s header view', async () => {
    renderHeader(<Router>
                    <HeaderComp/>,
                </Router>,
                )

    // Tests that a guest user (with no session initialized) sees these buttons in the header
    expect(screen.getByText('HOME')).toBeInTheDocument()
    expect(screen.getByText('ABOUT')).toBeInTheDocument()
    expect(screen.getByText('PLAYERS LIST')).toBeInTheDocument()
    expect(screen.getByText('REGISTER')).toBeInTheDocument()
    expect(screen.getByText('LOG IN')).toBeInTheDocument()

    // and does not see these buttons that are only visible when the session is initialized
    const logOut = screen.queryByText('LOG OUT')
    expect(logOut).not.toBeInTheDocument()
    const dashboard = screen.queryByText('DASHBOARD')
    expect(dashboard).not.toBeInTheDocument()
    const profile = screen.queryByText('PROFILE')
    expect(profile).not.toBeInTheDocument()
    const account = screen.queryByText('ACCOUNT')
    expect(account).not.toBeInTheDocument()

    })


