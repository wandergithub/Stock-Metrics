import reducer, { stockDetails } from '../redux/Market/Market';

describe('Test redux functions', () => {
  test('stockDetails Action Creator |test A', () => {
    const actionCreator = stockDetails('test');
    const OPENED_DETAILS = 'Opened-symbol-stock-details';

    expect(actionCreator).toEqual({ type: OPENED_DETAILS, symbol: 'test' });
  });

  test('Reducer action OPENED_DETAILS functionality |test A', () => {
    const OPENED_DETAILS = 'Opened-symbol-stock-details';
    const initialState = [
      {
        symbol: 'AAPLE',
        category: 'mostSearched',
        avgPrice: 1000,
      },
    ];
    const action = {
      type: OPENED_DETAILS, symbol: 'AAPLE',
    };
    const expectedState = [
      {
        symbol: 'AAPLE',
        category: 'mostSearched',
        avgPrice: 1000,
        details: true,
      },
    ];

    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(expectedState);
  });

  test('Reducer action OPENED_DETAILS functionality |test B', () => {
    const OPENED_DETAILS = 'Opened-symbol-stock-details';
    const initialState = [
      {
        symbol: 'AAPLE',
        category: 'mostSearched',
        avgPrice: 1000,
      },
    ];
    const action = {
      type: OPENED_DETAILS, symbol: 'MCSF',
    };
    const expectedState = [
      {
        symbol: 'AAPLE',
        category: 'mostSearched',
        avgPrice: 1000,
        details: false,
      },
    ];

    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(expectedState);
  });
  test('Reducer action RETRIEVED_PRICES functionality |test A', () => {
    const RETRIEVED_PRICES = 'Retrieved-symbol-stock-average-price';
    const initialState = [
      {
        symbol: 'AAPLE',
        category: 'mostSearched',
        avgPrice: 1000,
      },
    ];
    const action = {
      type: RETRIEVED_PRICES,
      symbol: 'MCSF',
      askPrice: 'any value',
      askSize: 'any value',
      bidPrice: 'any value',
      bidSize: 'any value',
      lastSalePrice: 'any value',
      lastSaleSize: 'any value',
      sector: 'any value',
      securityType: 'any value',
      volume: 12,
    };
    const expectedState = [
      {
        symbol: 'AAPLE',
        category: 'mostSearched',
        avgPrice: 1000,
      },
      {
        askPrice: 'any value',
        askSize: 'any value',
        bidPrice: 'any value',
        bidSize: 'any value',
        lastSalePrice: 'any value',
        lastSaleSize: 'any value',
        sector: 'any value',
        securityType: 'any value',
        symbol: 'MCSF',
        volume: 12,
      },
    ];

    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(expectedState);
  });
});
