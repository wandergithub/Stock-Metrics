import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import mainImg from '../assets/main-image.png';

export default function Home() {
  const [filter, setFilter] = useState('n/a');

  const stocks = useSelector((state) => state);
  const sectors = stocks.map((stock) => stock.sector);
  const uniqueSectors = [...new Set(sectors)];

  function categoriesHandler(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <div><img className="main-img" src={mainImg} alt="main-img" /></div>
      <div className="select-container">
        <p>
          Filter by stock sector:
        </p>
        <select className="select-input" data-testid="select" name="categories" id="categories" onChange={categoriesHandler}>
          {uniqueSectors.map((sector) => (
            <option
              key={sector}
              value={sector}
            >
              {sector}
            </option>
          ))}
        </select>
      </div>
      <ul className="grid-container">
        <List filter={filter} />
      </ul>
    </div>
  );
}
