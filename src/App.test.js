import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux";
import store from './redux/store'
import App from './App' 
import {BrowserRouter as Router} from 'react-router-dom'

const renderApp = component => render(
    <Provider store={store}>
          {component}
        </Provider>
)


test('App renders', async () => {
  renderApp(
    <Router>
        <App/>,
    </Router>,
  )

  expect(screen.getByText('HOME')).toBeInTheDocument()

})
