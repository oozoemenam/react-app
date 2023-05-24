import { useState } from 'react';
// import './App.css';
import ItemList from './components/items/ItemList.component';
import { Item } from './models/items/Item.interface';

const dataItems: Item[] = [
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
]

function App() {
  const [items, setItems] = useState<Item[]>(dataItems)
  
  const handleItemSelect = (item: Item) => {
    const updatedItems = [...items]
    const found = updatedItems.find(i => i.id === item.id) as Item
    found.selected = !item.selected
    setItems(updatedItems)
  }

  return (
    <div className='App'>
      <ItemList items={items} onItemSelect={handleItemSelect} />
    </div>
  )
}

export default App
