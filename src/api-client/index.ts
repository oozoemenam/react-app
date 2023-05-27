import { config } from '@/config';
import { apiLiveClient } from './live';
import { apiMockClient } from './mock';
import { ApiClient } from './models/ApiClient.interface';

let apiClient: ApiClient;
if (config.apiClient.type === 'live') {
  apiClient = apiLiveClient;
} else {
  apiClient = apiMockClient;
}

export { apiClient };
