// import React from 'react';
// import './App.css';
import ItemList from './components/items/ItemList.component';
import { Item } from './models/items/Item.interface';

const items: Item[] = [
  {
    id: 1,
    name: 'Item 1',
    selected: false
  },
  {
    id: 2,
    name: 'Item 2',
    selected: false
  },
  {
    id: 3,
    name: 'Item 3',
    selected: false
  },
];

function App() {
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default App
