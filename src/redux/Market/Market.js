import axios from 'axios';
import Categories from '../../modules/Categories';

const MY_KEY = 'sk_aa5cc3af96434151899646b1eaded257';
// Actions
const RETRIEVED_PRICES = 'Retrieved-symbol-stock-average-price';
const OPENED_DETAILS = 'Opened-symbol-stock-details';
// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case RETRIEVED_PRICES:
      return [...state.filter((obj) => obj.symbol !== action.symbol),
        {
          avgPrice: action.price,
          symbol: action.symbol,
          categorie: action.categorie,
          label: action.label,
          high: action.high,
          low: action.low,
          open: action.open,
          close: action.close,
          volume: action.volume,
          numberOfTrades: action.numberOfTrades,
          date: action.date,
        }];
    case OPENED_DETAILS:
      return [...state.map((obj) => {
        if (obj.symbol === action.symbol) {
          return { ...obj, details: true };
        }
        return { ...obj, details: false };
      })];
    default: return state;
  }
}

// Action Creators
export const stockDetails = (symbol) => ({ type: OPENED_DETAILS, symbol });
// Thunks
export const getAvgStockPrices = (symbols = []) => async (dispatch) => {
  if (symbols.length !== 0) {
    symbols.map(async (symbol) => {
      const response = await axios(`https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${MY_KEY}`);
      let categorie;
      if (Categories.mostSearched.includes(symbol)) categorie = 'mostSearched';
      if (Categories.gainers.includes(symbol)) categorie = 'gainers';
      if (Categories.losers.includes(symbol)) categorie = 'losers';

      let avg;
      let label;
      let high;
      let low;
      let open;
      let close;
      let volume;
      let numberOfTrades;
      let date;
      try {
        let i = 0;
        let p = 0;
        do {
          i = p;
          p += 1;
        }
        while (response.data[i].average === null);

        avg = response.data[i].average;
        label = response.data[i].label;
        high = response.data[i].high;
        low = response.data[i].low;
        open = response.data[i].open;
        close = response.data[i].close;
        volume = response.data[i].volume;
        numberOfTrades = response.data[i].numberOfTrades;
        date = response.data[i].date;
      } catch (ex) {
        console.erro(`${symbol} Stock price not found`);
      }

      dispatch({
        type: RETRIEVED_PRICES,
        price: avg,
        symbol,
        categorie,
        label,
        high,
        low,
        open,
        close,
        volume,
        numberOfTrades,
        date,
      });
    });
  }
};
