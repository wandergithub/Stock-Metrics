import { useSelector } from 'react-redux';

export default function Details() {
  const stock = useSelector((state) => state.filter((obj) => obj.details === true));
  return (
    <div>
      <p>{stock[0].sector}</p>
      <p>{stock[0].securityType}</p>
      <p>{stock[0].bidPrice}</p>
      <p>{stock[0].bidSize}</p>
      <p>{stock[0].askPrice}</p>
      <p>{stock[0].askSize}</p>
      <p>{stock[0].volume}</p>
      <p>{stock[0].lastSalePrice}</p>
      <p>{stock[0].lastSaleSize}</p>
    </div>
  );
}
