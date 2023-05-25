import { ApiClient } from '../models/ApiClient.interface';
import { itemsApiClient } from './items';

const apiMockClient: ApiClient = {
  items: itemsApiClient
};

export { apiMockClient };
