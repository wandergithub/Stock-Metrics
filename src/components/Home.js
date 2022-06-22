import React, { useState } from 'react';
import List from './List';

export default function Home() {
  const [filter, setFilter] = useState('mostSearched');
  function categoriesHandler(e) {
    setFilter(e.target.value);
  }
  return (
    <div>
      <div>
        <select data-testid="select" name="categories" id="categories" onChange={categoriesHandler}>
          <option value="mostSearched">Most Searched</option>
          <option value="gainers">Gainers</option>
          <option value="losers">Losers</option>
        </select>
      </div>
      <p>
        Stocks:
        {filter}
      </p>
      <ul>
        <List filter={filter} />
      </ul>
    </div>
  );
}
