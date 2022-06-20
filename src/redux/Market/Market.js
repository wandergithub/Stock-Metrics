import axios from 'axios';

const MY_KEY = 'sk_aa5cc3af96434151899646b1eaded257';
// Actions
const RETRIEVED_PRICES = 'Retriev-symbol-stock-average-price';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case RETRIEVED_PRICES:
      return [...state.filter((obj) => obj.symbol !== action.symbol),
        { avgPrice: action.price, symbol: action.symbol }];
    default: return state;
  }
}

// Action Creators
// Thunks
export const getAvgStockPrices = (symbols = []) => async (dispatch) => {
  if (symbols.length !== 0) {
    symbols.map(async (symbol) => {
      const response = await axios(`https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${MY_KEY}`);
      dispatch({ type: RETRIEVED_PRICES, price: response.data[0].average, symbol });
    });
  }
};
