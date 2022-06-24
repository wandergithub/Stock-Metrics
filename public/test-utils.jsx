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
        askPrice: 147.38,
        askSize: 247,
        bidPrice: 136.23,
        bidSize: 300,
        lastSalePrice: 136.24,
        lastSaleSize: 10,
        sector: "electronictechnology",
        securityType: "cs",
        symbol: "AAPL",
        volume: 1185255,
      },
      {
        symbol: 'MCSF',
        askPrice: 147.38,
        askSize: 247,
        bidPrice: 136.23,
        bidSize: 300,
        lastSalePrice: 136.24,
        lastSaleSize: 10,
        sector: "n/a",
        securityType: "cs",
        volume: 1185255,
      },
      {
        askPrice: 1.52,
        askSize: 100,
        bidPrice: 1.3,
        bidSize: 100,
        lastSalePrice: 1.42,
        lastSaleSize: 100,
        sector: "consumernon-durables",
        securityType: "cs",
        symbol: "TBLT",
        volume: 1157,
      }
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