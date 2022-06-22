import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '../../public/test-utils';
import App from '../App';
import apiData from '../modules/api';

// We use msw to intercept the network request during the test,
// and return the response stocks Data after 150ms
// when receiving a get request to the `https://cloud.iexapis.com/stable/stock/<symbol>/intraday-prices` endpoint
const handlers = [
  rest.get('https://cloud.iexapis.com/stable/stock/AAPLE/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/REV/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/LEXX/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/SWVL/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/SOUN/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/MREO/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/GBNH/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/ADN/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/TBLT/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/ADXN/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/CNVY/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/WBA/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/NVDA/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/MSFT/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/BON/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/GOOG/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/META/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
  rest.get('https://cloud.iexapis.com/stable/stock/AAPL/intraday-prices', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());
// Reset any runtime request handlers we may add during the tests
afterEach(() => server.resetHandlers());
// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('App integration tests', () => {
  test('Displays home page initially', () => {
    render(<App />);

    const element = screen.queryByText(/2022/i);

    expect(element).toBeInTheDocument();
  });

  test('Stock initially displayed', () => {
    render(<App />);

    const element = screen.queryByText(/MCSF/i);
    // Expect initial stocks to be in the list
    expect(element).toBeInTheDocument();
  });

  test('Filter option works', () => {
    render(<App />);
    const filter = screen.getByTestId('select');
    const element = screen.queryByText(/MCSF/i);
    // Element initialy in the list
    expect(element).toBeInTheDocument();
    // Filter changed
    userEvent.selectOptions(filter, 'losers');
    // Element not in the list
    expect(element).not.toBeInTheDocument();
  });

  test('Navigation to details and back to home page', () => {
    render(<App />);
    const element = screen.queryByText(/MCSF/i);
    // Initialize on Home page
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
    // Select an item
    userEvent.click(element);
    // Go to details page
    expect(window.location.pathname).toBe('/details');
    // Click Back to Home page
    userEvent.click(screen.getByText(/back/i));
    // Expect to be on Home page again
    expect(window.location.pathname).toBe('/');
  });
});
