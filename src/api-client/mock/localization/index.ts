import { LocalizationApiClient, LocalizationApiClientModel } from '@/api-client/models';
import { config } from '@/config';

const localizationApiClient: LocalizationApiClient = new LocalizationApiClientModel(
  config.localization.apiClientOptions
);

export { localizationApiClient };
