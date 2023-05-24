import { Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { IItem } from '../../models/items/Item.interface';
import { IRootStore } from '../root/Root.store';
import { itemsStoreSlice } from './Items.slice';

export function useItemsActions(commit: Dispatch<any>) {
  const mutations = itemsStoreSlice.actions;

  const actions = {
    loadItems: async () => {
      commit(mutations.setLoading(true));
      const mockItems: IItem[] = [
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
        }
      ];
      setTimeout(() => {
        commit(mutations.setItems(mockItems));
      }, 1000);
    },
    toggleItemSelected: async (item: IItem) => {
      commit(mutations.setItemSelected(item));
    }
  };
  return actions;
}

export function useItemsGetters() {
  return {
    loading: useSelector((s: IRootStore) => s.itemsState.loading),
    items: useSelector((s: IRootStore) => s.itemsState.items)
  };
}

export interface IItemsStore {
  actions: ReturnType<typeof useItemsActions>;
  getters: ReturnType<typeof useItemsGetters>;
}
