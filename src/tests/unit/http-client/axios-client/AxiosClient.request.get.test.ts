import axios from 'axios';
import { HttpClientAxios, HttpRequestParams, HttpRequestType } from '../../../../http-client';

let mockRequestParams: HttpRequestParams<any> = {
  requestType: HttpRequestType.get,
  endpoint: 'api/v1/products',
  requiresToken: false
};

describe('HttpClient: axios-client: request: get', () => {
  const httpClient = new HttpClientAxios();
  it('should execute get request successfully', () => {
    vitest
      .spyOn(axios, 'get')
      .mockImplementation(async () =>
        Promise.resolve({ data: `request completed: ${mockRequestParams.endpoint}` })
      );
    httpClient
      .request(mockRequestParams)
      .then((response) => {
        expect(response).toEqual(`request completed: ${mockRequestParams.endpoint}`);
      })
      .catch((error) => {
        console.error('AxisClient.request.get.test.ts: error', error);
      });
  });
});

describe('HttpClient: axios-client: request: get', () => {
  const httpClient = new HttpClientAxios();
  it('get should throw error on rejection', () => {
    vitest
      .spyOn(axios, 'get')
      .mockImplementation(async () =>
        Promise.reject({ data: `request completed: ${mockRequestParams.endpoint}` })
      );
    httpClient.request(mockRequestParams).catch((error) => {
      expect(error).toBeDefined();
      expect(error.toString()).toEqual('Error: HttpClientAxios: exception');
    });
  });
});
