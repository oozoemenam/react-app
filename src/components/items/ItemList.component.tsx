import * as React from 'react';
import { IItem } from '../../models/items/Item.interface';
import Item from './children/Item.component';

interface ItemListProps {
  items: IItem[];
  onItemSelect: (item: IItem) => void;
}

const ItemList: React.FunctionComponent<ItemListProps> = (props) => {
  const handleItemClick = (item: IItem) => {
    props.onItemSelect(item);
  };

  return (
    <div>
      <h3>Items:</h3>
      {props.items.map((item, index) => {
        return (
          <Item
            key={index}
            testid={`item-${item.id}`}
            model={item}
            onItemSelect={() => handleItemClick(item)}></Item>
        );
      })}
    </div>
  );
};

export default ItemList;
