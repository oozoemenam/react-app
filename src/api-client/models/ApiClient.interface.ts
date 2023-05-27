import { ItemsApiClient } from './items/ItemsApiClient.interface';
import { LocalizationApiClient } from './localization';

export interface ApiClient {
  localization: LocalizationApiClient;
  items: ItemsApiClient;
}
