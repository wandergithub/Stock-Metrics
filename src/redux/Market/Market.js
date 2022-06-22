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
          sector: action.sector,
          securityType: action.securityType,
          bidPrice: action.bidPrice,
          bidSize: action.bidSize,
          askPrice: action.askPrice,
          askSize: action.askSize,
          volume: action.volume,
          lastSalePrice: action.lastSalePrice,
          lastSaleSize: action.lastSaleSize,
          categorie: action.categorie,
          symbol: action.symbol,
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
  const rSymbols = symbols.join(',');
  const response = await axios(`https://cloud.iexapis.com/stable/tops?token=${MY_KEY}&symbols=${rSymbols}`);
  if (response.data.length !== 0) {
    response.data.map(async (obj) => {
      let categorie;
      if (Categories.mostSearched.includes(obj.symbol)) categorie = 'mostSearched';
      if (Categories.gainers.includes(obj.symbol)) categorie = 'gainers';
      if (Categories.losers.includes(obj.symbol)) categorie = 'losers';

      let sector;
      let securityType;
      let bidPrice;
      let bidSize;
      let askPrice;
      let askSize;
      let lastSalePrice;
      let lastSaleSize;
      let volume;
      try {
        sector = obj.sector;
        securityType = obj.securityType;
        bidPrice = obj.bidPrice;
        bidSize = obj.bidSize;
        askPrice = obj.askPrice;
        askSize = obj.askSize;
        volume = obj.volume;
        lastSalePrice = obj.lastSalePrice;
        lastSaleSize = obj.lastSaleSize;
      } catch (ex) {
        console.erro(`${obj.symbol} Stock information not found`);
      }

      dispatch({
        type: RETRIEVED_PRICES,
        sector,
        securityType,
        bidPrice,
        bidSize,
        askPrice,
        askSize,
        volume,
        lastSalePrice,
        lastSaleSize,
        categorie,
        symbol: obj.symbol,
      });
    });
  }
};
