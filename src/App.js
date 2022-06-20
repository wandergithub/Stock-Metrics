import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { getAvgStockPrices } from './redux/Market/Market';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const mostSearched = ['aapl', 'META', 'GOOG', 'TSLA', 'NVDA', 'BABA'];
  useEffect(() => {
    dispatch(getAvgStockPrices(mostSearched));
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
