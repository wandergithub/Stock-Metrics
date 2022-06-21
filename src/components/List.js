import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { stockDetails } from '../redux/Market/Market';

export default function List(props) {
  const stocks = useSelector((state) => state);
  const dispatch = useDispatch();

  return (stocks.map((stockObj) => {
    if (stockObj.categorie === props.filter) {
      return (stockObj.avgPrice
        ? (
          <li key={stockObj.symbol}>
            <Link to="/details" onClick={() => dispatch(stockDetails(stockObj.symbol))}>
              {stockObj.symbol}
              {' $'}
              {stockObj.avgPrice}
            </Link>
          </li>
        ) : ''
      );
    }
    return null;
  }));
}
