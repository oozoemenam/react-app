import { ApiClient } from '../models/ApiClient.interface';
import { itemsApiClient } from './items';
import { localizationApiClient } from './localization';

const apiMockClient: ApiClient = {
  localization: localizationApiClient,
  items: itemsApiClient
};

export { apiMockClient };
