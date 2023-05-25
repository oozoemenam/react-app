import { IItem } from '../../../models/items/Item.interface';

export interface ItemsApiClient {
  fetchItems: () => Promise<IItem[]>;
}
