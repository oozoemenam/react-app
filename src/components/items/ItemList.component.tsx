import * as React from 'react';
import { Item } from '../../models/items/Item.interface';

interface ItemListProps {
    items: Item[],
    onItemSelect: (item: Item) => void
}

const ItemList: React.FunctionComponent<ItemListProps> = (props) => {
  const handleItemClick = (item: Item) => {
    props.onItemSelect(item);
  }

  return (
    <div>
        <h3>Items:</h3>
          {props.items.map((item, index) => {
            return (
              <button 
                key={index} 
                onClick={() => handleItemClick(item)}
              >{item.name} - {item.selected.toString()}</button>
            );
          })}
    </div>
  )
};

export default ItemList;
