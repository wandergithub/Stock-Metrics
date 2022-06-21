import { useSelector } from 'react-redux';

export default function List(props) {
  const stocks = useSelector((state) => state);

  return (stocks.map((stockObj) => {
    if (stockObj.categorie === props.filter) {
      return (stockObj.avgPrice
        ? (
          <li key={stockObj.symbol}>
            {stockObj.symbol}
            {' $'}
            {stockObj.avgPrice}
          </li>
        ) : ''
      );
    }
    return null;
  }));
}
