import { HttpContentTypes, HttpRequestMethods, HttpRequestType } from './Constants';
import { HttpClient } from './HttpClient.interface';
import { HttpRequestParams } from './HttpRequestParams.interface';
import { UrlUtils } from './UrlUtils';

export class HttpClientFetch implements HttpClient {
  constructor() {}

  async request<R, P = void>(parameters: HttpRequestParams<P>): Promise<R> {
    const { requestType, endpoint, requiresToken, payload, headers, mockDelay } = parameters;
    const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload as any);
    const options: RequestInit = {
      credentials: 'include',
      redirect: 'follow',
      headers: {}
    };
    if (headers) {
      options.headers = {
        ...headers
      };
    }
    if (!options.headers?.hasOwnProperty('Content-Type')) {
      options.headers = {
        ...headers,
        'Content-Type': HttpContentTypes.applicationJson
      };
    }
    if (requiresToken && options.headers) {
      // set auth header
    }
    let result!: R;
    const checkRedirect = async (response: any) => {
      if (response.redirected) {
        document.location = response.url;
        return true;
      }
      return false;
    };
    try {
      switch (requestType) {
        case HttpRequestType.get: {
          options.method = HttpRequestMethods.get;
          const response = (await fetch(fullUrl, options)) as any;
          const redirected = await checkRedirect(response);
          if (!redirected) {
            result = (await response.json()) as R;
          }
          break;
        }
        case HttpRequestType.post: {
          options.method = HttpRequestMethods.post;
          options.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
          const response = (await fetch(fullUrl, options)) as any;
          const redirected = await checkRedirect(response);
          if (!redirected) {
            result = (await response.json()) as R;
          }
          break;
        }
        case HttpRequestType.put: {
          options.method = HttpRequestMethods.put;
          options.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
          const response = (await fetch(fullUrl, options)) as any;
          const redirected = await checkRedirect(response);
          if (!redirected) {
            result = (await response.json()) as R;
          }
          break;
        }
        case HttpRequestType.patch: {
          options.method = HttpRequestMethods.patch;
          options.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
          const response = (await fetch(fullUrl, options)) as any;
          const redirected = await checkRedirect(response);
          if (!redirected) {
            result = (await response.json()) as R;
          }
          break;
        }
        case HttpRequestType.delete: {
          options.method = HttpRequestMethods.delete;
          const response = (await fetch(fullUrl, options)) as any;
          const redirected = await checkRedirect(response);
          if (!redirected) {
            result = (await response.json()) as R;
          }
          break;
        }
        default: {
          console.warn(
            'HttpClientFetch: invalid requestType argument or request type not implemented'
          );
        }
      }
    } catch (e) {
      throw Error('HttpClientFetch: exception');
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
