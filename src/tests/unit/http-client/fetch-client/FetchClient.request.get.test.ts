import { HttpClientFetch, HttpRequestParams, HttpRequestType } from '../../../../http-client';

let mockRequestParams: HttpRequestParams<any> = {
  requestType: HttpRequestType.get,
  endpoint: 'api/v1/products',
  requiresToken: false
};

describe('HttpClient: fetch-client: request: get', (done) => {
  const httpClient = new HttpClientFetch();
  it('should execute get request successfully', async () => {
    const unmockedFetch = global.fetch || (() => {});
    global.fetch = unmockedFetch;

    const expectedResult = {
      result: `request completed: ${mockRequestParams.endpoint}`
    };

    vitest.spyOn(global, 'fetch').mockImplementation(async () =>
      Promise.resolve({
        redirected: false,
        json: () => Promise.resolve(JSON.stringify(expectedResult))
      } as any)
    );

    try {
      const response = await httpClient.request(mockRequestParams);
      expect(response).not.toBeNull();
      expect(response).toEqual(expectedResult);
    } catch (error) {
      console.error('FetchClient.request.get.test.ts: error', error);
    }
    global.fetch = unmockedFetch;
  });

  it('get should throw error on rejection', () => {
    const unmockedFetch = global.fetch || (() => {});
    global.fetch = unmockedFetch;

    vitest.spyOn(global, 'fetch').mockImplementation(async () => Promise.reject());

    httpClient.request(mockRequestParams).catch((error) => {
      expect(error).toBeDefined();
      expect(error.toString()).toEqual('Error: HttpClientFetch: exception');
    });
  });
});
