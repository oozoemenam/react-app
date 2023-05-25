import { ApiClient } from '../models/ApiClient.interface';
import { itemsApiClient } from './items';

const apiLiveClient: ApiClient = {
  items: itemsApiClient
};

export { apiLiveClient };
