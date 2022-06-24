import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { stockDetails } from '../redux/Market/Market';
import arrowN from '../assets/arrow-n.png';

export default function List(props) {
  const stocks = useSelector((state) => state);
  const dispatch = useDispatch();
  let left = 1;
  let grid = 'grid-item-l';
  return (stocks.map((stockObj) => {
    if (stockObj.sector === props.filter) {
      if (left <= 1) {
        grid = 'grid-item-l';
        left += 1;
      } else if (left === 2) {
        left += 1;
        grid = 'grid-item-r';
      } else left = 0;
      return ((
        <li key={stockObj.symbol} className={grid}>
          <Link className="grid-link" to="/details" onClick={() => dispatch(stockDetails(stockObj.symbol))}>
            {stockObj.symbol}
            {' $'}
            {stockObj.lastSalePrice}
            <img src={arrowN} alt="arrow pointing right" />
          </Link>
        </li>
      )
      );
    }
    return null;
  }));
}
