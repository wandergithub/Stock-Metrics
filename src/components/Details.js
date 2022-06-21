import { useSelector } from 'react-redux';

export default function Details() {
  const stock = useSelector((state) => state.filter((obj) => obj.details === true));
  return (
    <div>
      <p>{stock[0].symbol}</p>
      <p>{stock[0].categorie}</p>
      <p>{stock[0].avgPrice}</p>
    </div>
  );
}
