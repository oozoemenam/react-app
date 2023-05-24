import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../models/items/Item.interface';
import { IItemsState } from './models';

const initialItemsState: IItemsState = {
  loading: false,
  items: []
};

export const itemsStoreSlice = createSlice({
  name: 'itemsStoreSlice',
  initialState: initialItemsState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setItems: (state, action: PayloadAction<IItem[]>) => {
      state.items = action.payload || [];
      state.loading = false;
    },
    setItemSelected: (state, action: PayloadAction<IItem>) => {
      const item = action.payload;
      const found = state.items.find((i) => i.id === item.id) as IItem;
      found.selected = !found.selected;
    }
  }
});
