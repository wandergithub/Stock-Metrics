import {
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Header from './components/Header';
import symbolList from './modules/Categories';
import { getAvgStockPrices } from './redux/Market/Market';
import Details from './components/Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAvgStockPrices([...symbolList]));
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
