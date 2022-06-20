import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAvgStockPrices } from './redux/Market/Market';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();
  const mostSearched = ['aapl', 'META', 'GOOG', 'TSLA', 'NVDA', 'BABA'];
  useEffect(() => {
    dispatch(getAvgStockPrices(mostSearched));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details" element={<Home />} />
    </Routes>
  );
}

export default App;
