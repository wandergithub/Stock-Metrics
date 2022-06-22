// test-utils.jsx
import {BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import reducer from '../src/redux/Market/Market'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: reducer, preloadedState: [
      {
        symbol: 'AAPLE',
        category: 'losers',
        avgPrice: 1000,
      },
      {
        symbol: 'MCSF',
        categorie: 'mostSearched',
        label: '123',
        high: 213,
        low: 1,
        open: 341,
        close: 34,
        date: 'date',
        volume: 12,
        numberOfTrades: 21,
        avgPrice: 1213,
      },
    ] }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Router><Provider store={store}>{children}</Provider></Router>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }