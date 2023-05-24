import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { itemsStoreSlice, useItemsActions, useItemsGetters } from '../items';
import { IRootState } from './models';

export const rootStore = configureStore({
  reducer: {
    itemsState: itemsStoreSlice.reducer
  }
});

export type IRootStore = ReturnType<typeof rootStore.getState>;

export function useAppStore(): IRootState {
  const commit = useDispatch();
  return {
    itemsState: {
      actions: useItemsActions(commit),
      getters: useItemsGetters()
    }
  };
}

type IAppState = ReturnType<typeof rootStore.getState>;

export function getAppState(): IAppState {
  const appState = rootStore.getState();
  return {
    ...appState
  };
}
