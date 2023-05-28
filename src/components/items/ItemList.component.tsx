import * as React from 'react';
import { IItem } from '../../models/items/Item.interface';
import { Loader } from '../shared/Loader.component';
import Item from './children/Item.component';

interface ItemListProps {
  loading: boolean;
  items: IItem[];
  onItemSelect: (item: IItem) => void;
}

const ItemList: React.FunctionComponent<ItemListProps> = ({ loading, items, onItemSelect }) => {
  const handleItemClick = (item: IItem) => {
    onItemSelect(item);
  };

  let element;
  if (loading) {
    element = <Loader />;
  } else {
    element = (
      <div>
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              testid={`item-${item.id}`}
              model={item}
              isLast={index === items.length - 1}
              onItemSelect={() => handleItemClick(item)}></Item>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h3>Items - loading: {String(loading)}</h3>
      {element}
    </div>
  );
};

export default ItemList;
