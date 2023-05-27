import { ItemsApiClientOptions } from '@/api-client/models/items';

export interface HttpClientConfig {
  tokenKey: string;
  clientType: string;
}

export interface Config {
  global: {
    version: number;
  };
  httpClient: HttpClientConfig;
  apiClient: {
    type: string;
  };
  items: {
    apiClientOptions: ItemsApiClientOptions;
  };
  localization: {
    apiClientOptions: LocalizationApiClientOptions;
    locales: { key: string; isDefault: boolean }[];
    localStorageCache: { enabled: boolean; expirationInMinutes: number };
  };
}
