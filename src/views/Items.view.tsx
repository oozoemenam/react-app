import { useEffect } from 'react';
import ItemList from '../components/items/ItemList.component';
import { IItem } from '../models/items/Item.interface';
import { useAppStore } from '../store';

function ItemsView() {
  const { itemsState } = useAppStore();

  const { loading, items } = itemsState.getters;

  const onItemSelect = (item: IItem) => {
    itemsState.actions.toggleItemSelected(item);
  };

  useEffect(() => {
    itemsState.actions.loadItems();
  }, []);

  return (
    <div>
      <ItemList loading={loading} items={items} onItemSelect={onItemSelect} />
    </div>
  );
}

export default ItemsView;
