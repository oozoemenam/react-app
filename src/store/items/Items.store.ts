import { Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { apiClient } from '../../api-client';
import { IItem } from '../../models/items/Item.interface';
import { IRootStore } from '../root/Root.store';
import { itemsStoreSlice } from './Items.slice';

export function useItemsActions(commit: Dispatch<any>) {
  const mutations = itemsStoreSlice.actions;

  const actions = {
    loadItems: async () => {
      commit(mutations.setLoading(true));
      const data = await apiClient.items.fetchItems();
      commit(mutations.setItems(data));
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
