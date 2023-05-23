import * as React from 'react';
import { Item } from '../../models/items/Item.interface';

interface IItemsListProps {
    items: Item[]
}

const ItemList: React.FunctionComponent<IItemsListProps> = (props) => {
  return (
    <div>
        <h3>Items:</h3>
        <ul>
          {props.items.map((item, index) => {
            return (
              <li key={index}>{item.name}</li>
            )
          })}
        </ul>
    </div>
  )
};

export default ItemList;
