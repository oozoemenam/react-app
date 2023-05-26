import { HttpRequestParams, HttpRequestType, useHttpClient } from '../../../http-client';
// import { HttpRequestParams, HttpRequestType, useHttpClient } from '@/http-client';
import { IItem } from '../../../models/items/Item.interface';
import { ItemsApiClient } from './ItemsApiClient.interface';
import { ItemsApiClientEndpoints, ItemsApiClientOptions } from './ItemsApiClientOptions.interface';

export class ItemsApiClientModel implements ItemsApiClient {
  private readonly endpoints!: ItemsApiClientEndpoints;
  private readonly mockDelay: number = 0;

  constructor(options: ItemsApiClientOptions) {
    this.endpoints = options.endpoints;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  fetchItems(): Promise<IItem[]> {
    const requestParameters: HttpRequestParams = {
      requestType: HttpRequestType.get,
      endpoint: this.endpoints.fetchItems,
      requiresToken: false,
      mockDelay: this.mockDelay
    };
    return useHttpClient().request<IItem[]>(requestParameters);
  }
}
