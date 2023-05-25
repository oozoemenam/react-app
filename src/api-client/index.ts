import { apiLiveClient } from './live';
import { apiMockClient } from './mock';
import { ApiClient } from './models/ApiClient.interface';

let env: string = 'mock';

if (import.meta.env.VITE_API_CLIENT) {
  env = import.meta.env.VITE_API_CLIENT.trim();
}

let apiClient: ApiClient;
if (env === 'live') {
  apiClient = apiLiveClient;
} else {
  apiClient = apiMockClient;
}

export { apiClient };
