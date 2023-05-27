import { configFilesMap } from '@/config/config-files-map';
import { Config } from '@/config/models/Config.interface';

describe('config: mock', () => {
  const config: Config = configFilesMap.get('mock') as Config;
  it('instance should have "global" section', () => {
    expect(config).toHaveProperty('global');
  });
  it('instance should have "httpClient" section', () => {
    expect(config).toHaveProperty('httpClient');
  });
  it('instance should have "items" section', () => {
    expect(config).toHaveProperty('items');
  });

  describe('global', () => {
    const section = config.global;
    it('section should have "version" property', () => {
      expect(section).toHaveProperty('version');
      expect(typeof section.version).toBe('number');
      expect(section.version).toBeGreaterThan(0);
    });
  });

  describe('httpClient', () => {
    const section = config.httpClient;
    it('section should have "clientType" property', () => {
      expect(section).toHaveProperty('clientType');
    });
  });

  describe('apiClient', () => {
    const section = config.apiClient;
    it('section should have "type" property', () => {
      expect(section).toHaveProperty('type');
    });
  });

  describe('items', () => {
    const section = config.items;
    it('section should have "apiClientOptions" property', () => {
      expect(section).toHaveProperty('apiClientOptions');
    });

    describe('apiClientOptions', () => {
      const apiClientOptions = section.apiClientOptions;

      describe('endpoints', () => {
        const endpoints = apiClientOptions.endpoints;
        it('section should have "fetchItems" property', () => {
          expect(endpoints).toHaveProperty('fetchItems');
          expect(typeof endpoints.fetchItems).toBe('string');
          expect(endpoints.fetchItems.length).toBeGreaterThan(10);
        });
      });
    });
  });
});
