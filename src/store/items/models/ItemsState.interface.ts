import { IItem } from '../../../models/items/Item.interface';

export interface IItemsState {
  loading: boolean;
  items: IItem[];
}
