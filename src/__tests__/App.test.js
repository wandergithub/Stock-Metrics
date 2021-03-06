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
  rest.get('https://cloud.iexapis.com/stable/tops', (req, res, ctx) => res(ctx.json(apiData), ctx.delay(150))),
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

    const element = screen.queryByText(/Filter/i);

    expect(element).toBeInTheDocument();
  });

  test('Stocks initially displayed', () => {
    render(<App />);

    const element = screen.queryByText(/MCSF/i);
    // Expect initial stocks to be in the list
    expect(element).toBeInTheDocument();
  });

  test('Filter option', () => {
    render(<App />);
    const filter = screen.getByTestId('select');
    const element = screen.queryByText(/MCSF/i);
    // electronictechnology categorie items not in the list.
    expect(screen.queryByText(/AAPL/i)).not.toBeInTheDocument();
    // Initial categorie in the list.
    expect(element).toBeInTheDocument();
    // User Changes filter options
    userEvent.selectOptions(filter, 'electronictechnology');
    // electronictechnology categorie items appears on the list
    expect(screen.queryByText(/AAPL/i)).toBeInTheDocument();
    expect(element).not.toBeInTheDocument();
  });

  test('Navigation to details and back to home page', () => {
    render(<App />);
    const element = screen.queryByText(/MCSF/i);
    // Initialize on Home page
    expect(screen.getByText(/Filter/i)).toBeInTheDocument();
    // Select an item
    userEvent.click(element);
    // Go to details page
    expect(window.location.pathname).toBe('/details');
    // Click Back to Home page
    userEvent.click(screen.getByTestId('backBtn'));
    // Expect to be on Home page again
    expect(window.location.pathname).toBe('/');
  });
});
