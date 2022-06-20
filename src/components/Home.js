export default function Home() {
  const mostSearched = ['AAPL', 'META', 'GOOG', 'MSFT', 'NVDA'];
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {
            mostSearched.map((companySymbol) => <li key={companySymbol}>{companySymbol}</li>)
        }
      </ul>
    </div>
  );
}
