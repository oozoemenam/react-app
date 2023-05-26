import { HttpClient, HttpClientAxios, HttpClientFetch } from './models';
export * from './models';

let _httpClient: HttpClient | undefined = undefined;

export const useHttpClient = () => {
  if (!_httpClient) {
    const clientType = 'fetch';
    if (clientType === 'fetch') {
      _httpClient = new HttpClientFetch();
    } else if (clientType === 'axios') {
      _httpClient = new HttpClientAxios();
    }
  }
  return _httpClient as HttpClient;
};
