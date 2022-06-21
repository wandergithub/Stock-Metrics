import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">Back</Link>
      {window.location.pathname === '/' && <p>2022 Average Stock Prices</p>}
    </header>
  );
}
