import {
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Header from './components/Header';
import Categories from './modules/Categories';
import { getAvgStockPrices } from './redux/Market/Market';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAvgStockPrices([...Categories.mostSearched,
      ...Categories.losers, ...Categories.gainers]));
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
