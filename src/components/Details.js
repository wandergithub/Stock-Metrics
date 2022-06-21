import { useSelector } from 'react-redux';

export default function Details() {
  const stock = useSelector((state) => state.filter((obj) => obj.details === true));
  return (
    <div>
      <p>{stock[0].symbol}</p>
      <p>{stock[0].categorie}</p>
      <p>{stock[0].avgPrice}</p>
      <p>{stock[0].label}</p>
      <p>{stock[0].high}</p>
      <p>{stock[0].low}</p>
      <p>{stock[0].open}</p>
      <p>{stock[0].close}</p>
      <p>{stock[0].volume}</p>
      <p>{stock[0].numberOfTrades}</p>
      <p>{stock[0].date}</p>
    </div>
  );
}
