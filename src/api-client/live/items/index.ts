import { ItemsApiClient, ItemsApiClientModel, ItemsApiClientOptions } from '../../models/items';

const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: '/api/v1/products'
  }
};

const itemsApiClient: ItemsApiClient = new ItemsApiClientModel(options);

export { itemsApiClient };
