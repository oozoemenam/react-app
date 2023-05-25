import { ItemsApiClient, ItemsApiClientModel, ItemsApiClientOptions } from '../../models/items';

const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: '/static/mock-data/items/items.json'
  },
  mockDelay: 1000
};

const itemsApiClient: ItemsApiClient = new ItemsApiClientModel(options);

export { itemsApiClient };
