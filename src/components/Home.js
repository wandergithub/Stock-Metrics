import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from './List';

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
      <div>
        <select data-testid="select" name="categories" id="categories" onChange={categoriesHandler}>
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
      <p>
        Filter by sector:
        {filter}
      </p>
      <ul>
        <List filter={filter} />
      </ul>
    </div>
  );
}
