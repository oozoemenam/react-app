import { HttpRequestParams } from './HttpRequestParams.interface';

export interface HttpClientConfig {
  tokenKey: string;
  clientType: string;
}

export interface HttpClient {
  request<R, P = void>(parameters: HttpRequestParams<P>): Promise<R>;
}
