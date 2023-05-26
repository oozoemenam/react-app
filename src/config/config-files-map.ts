import configBeta from './config-files/beta.json';
import configJsonServer from './config-files/jsonserver.json';
import configLocal from './config-files/localapis.json';
import configMock from './config-files/mock.json';
import configProd from './config-files/prod.json';
import { Config } from './models/Config.interface';

export const configFilesMap: Map<string, Config> = new Map<string, Config>([
  ['mock', configMock],
  ['jsonserver', configJsonServer],
  ['localapis', configLocal],
  ['beta', configBeta],
  ['prod', configProd]
]);
