export default function Header() {
  return (
    <header>
      {window.location.pathname === '/' && <p>2022 Average Stock Prices</p>}
    </header>
  );
}
