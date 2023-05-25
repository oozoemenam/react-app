import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
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
    return new Promise<IItem[]>((resolve) => {
      const endpoint = this.endpoints.fetchItems;
      const options: AxiosRequestConfig = {
        headers: {}
      };

      axios
        .get(endpoint, options)
        .then((response: AxiosResponse) => {
          if (!this.mockDelay) {
            resolve(response.data as IItem[]);
          } else {
            setTimeout(() => {
              resolve(response.data as IItem[]);
            }, this.mockDelay);
          }
        })
        .catch((error: any) => {
          console.error('ItemsApliClient: HttpClient GET error', error);
        });
    });
  }
}
