import { config } from '@/config';
import { ItemsApiClient, ItemsApiClientModel } from '../../models/items';

const itemsApiClient: ItemsApiClient = new ItemsApiClientModel(config.items.apiClientOptions);

export { itemsApiClient };
