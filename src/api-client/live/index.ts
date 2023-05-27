import { config } from '@/config';
import { ItemsApiClientModel, LocalizationApiClientModel } from '../models';
import { ApiClient } from '../models/ApiClient.interface';

const apiLiveClient: ApiClient = {
  localization: new LocalizationApiClientModel(config.localization.apiClientOptions),
  items: new ItemsApiClientModel(config.items.apiClientOptions)
};

export { apiLiveClient };
