import axios from 'axios';
import Categories from '../../modules/Categories';

const MY_KEY = 'sk_aa5cc3af96434151899646b1eaded257';
// Actions
const RETRIEVED_PRICES = 'Retriev-symbol-stock-average-price';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case RETRIEVED_PRICES:
      return [...state.filter((obj) => obj.symbol !== action.symbol),
        { avgPrice: action.price, symbol: action.symbol, categorie: action.categorie }];
    default: return state;
  }
}

// Action Creators
// Thunks
export const getAvgStockPrices = (symbols = []) => async (dispatch) => {
  if (symbols.length !== 0) {
    symbols.map(async (symbol) => {
      const response = await axios(`https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${MY_KEY}`);
      let avg;
      let categorie;
      let i = 0;
      let p = 0;
      if (Categories.mostSearched.includes(symbol)) categorie = 'mostSearched';
      if (Categories.gainers.includes(symbol)) categorie = 'gainers';
      if (Categories.losers.includes(symbol)) categorie = 'losers';

      try {
        do {
          i = p;
          avg = response.data[i].average;
          p += 1;
        }
        while (response.data[i].average === null);
      } catch (ex) {
        console.log(`${symbol} Stock price not found`);
      }
      dispatch({
        type: RETRIEVED_PRICES, price: avg, symbol, categorie,
      });
    });
  }
};
