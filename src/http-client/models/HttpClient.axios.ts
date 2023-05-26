import axios, { AxiosRequestConfig } from 'axios';
import { HttpRequestType } from './Constants';
import { HttpClient } from './HttpClient.interface';
import { HttpRequestParams } from './HttpRequestParams.interface';
import { UrlUtils } from './UrlUtils';

export class HttpClientAxios implements HttpClient {
  constructor() {}
  async request<R, P>(parameters: HttpRequestParams<P>): Promise<R> {
    const { requestType, endpoint, requiresToken, payload, headers, mockDelay } = parameters;
    const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload as any);
    const options: AxiosRequestConfig = {
      headers: {},
      maxRedirects: 0
    };
    if (headers) {
      options.headers = {
        ...headers
      };
    }
    if (requiresToken && options.headers) {
      options.withCredentials = true;
      //   set auth header
    }
    let result!: R;
    try {
      switch (requestType) {
        case HttpRequestType.get: {
          const response = await axios.get(fullUrl, options);
          result = response?.data as R;
          break;
        }
        case HttpRequestType.post: {
          const response = await axios.post(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }
        case HttpRequestType.put: {
          const response = await axios.put(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }
        case HttpRequestType.patch: {
          const response = await axios.patch(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }
        case HttpRequestType.delete: {
          const response = await axios.delete(fullUrl, options);
          result = response?.data as R;
          break;
        }
        default: {
          console.warn(
            'HttpClientAxios: invalid requestType argument or request type not implemented'
          );
        }
      }
    } catch (e) {
      throw Error('HttpClientAxios: exception');
    }
    if ((mockDelay || 0) > 0) {
      return new Promise<R>((resolve) => {
        setTimeout(() => {
          resolve(result);
        }, mockDelay);
      });
    }
    return result;
  }
}
