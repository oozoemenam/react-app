import axios from 'axios';
import { HttpClientAxios, HttpRequestParams, HttpRequestType } from '../../../../http-client';

let mockRequestParams: HttpRequestParams<any> = {
  requestType: HttpRequestType.post,
  endpoint: 'api/v1/products',
  requiresToken: false,
  payload: {}
};

type P = typeof mockRequestParams.payload;

describe('HttpClient: axios-client: request: post', () => {
  const httpClient = new HttpClientAxios();
  it('should execute post request successfully', () => {
    vitest
      .spyOn(axios, 'post')
      .mockImplementation(async () =>
        Promise.resolve({ data: `request completed: ${mockRequestParams.endpoint}` })
      );
    httpClient
      .request<string, P>(mockRequestParams)
      .then((response) => {
        expect(response).toEqual(`request completed: ${mockRequestParams.endpoint}`);
      })
      .catch((error) => {
        console.error('AxiosClient.request.post.test.ts: post error', error);
      });
  });
});
