import { useSelector } from 'react-redux';

export default function Home() {
  const stocks = useSelector((state) => state);
  return (
    <div>
      <ul>
        {stocks.map((stockObj) => (
          <li key={stockObj.symbol}>
            {stockObj.symbol}
            {' $'}
            {stockObj.avgPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}
