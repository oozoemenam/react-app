import { apiClient } from '@/api-client';
import { config } from '@/config';
import i18n, { BackendModule } from 'i18next';
import { initReactI18next } from 'react-i18next';

const localStorageConfig = config.localization.localStorageCache;

export const userPreferredLocaleStorageKey = 'user-locale-id';

export const getUserPreferredLocale = () => {
  const availableLocales = config.localization.locales;
  const preferredLocale = localStorage.getItem(userPreferredLocaleStorageKey);
  if (!preferredLocale) {
    const defaultLocale = availableLocales.find((l) => l.isDefault)?.key;
    return defaultLocale;
  }
  return preferredLocale;
};

export const setUserPreferredLocale = (localeId: string) => {
  localStorage.setItem(userPreferredLocaleStorageKey, localeId);
};

const getLocaleData = async (namespace: string, localeId: string): Promise<Object> => {
  const localeStorageKey = `locale-id-data-${localeId}`;
  const cacheEntryStr = localStorage.getItem(localeStorageKey) || '{}';
  let cacheEntry: { appVersion: number; expiresAt: number; json: string } = {
    appVersion: -1,
    expiresAt: 0,
    json: ''
  };
  if (localStorageConfig.enabled) {
    try {
      cacheEntry = JSON.parse(cacheEntryStr);
    } catch (error) {
      console.error('error parsing data', cacheEntryStr);
    }
  }
  if (
    cacheEntry &&
    cacheEntry.appVersion === config.global.version &&
    cacheEntry.expiresAt - Date.now() > 0
  ) {
    return cacheEntry.json;
  } else {
    const translationData = await apiClient.localization.fetchTranslation(namespace, localeId);
    if (localStorageConfig.enabled) {
      const date = new Date();
      const expiresAt = date.setMinutes(
        date.getMinutes() + Number(localStorageConfig.expirationInMinutes)
      );
      localStorage.setItem(
        localeStorageKey,
        JSON.stringify({
          appVersion: config.global.version,
          expiresAt: expiresAt,
          json: translationData
        })
      );
    }
    return translationData;
  }
};

const backendModule: BackendModule = {
  type: 'backend',
  init(services, backendOptions, i18nextOptions) {},
  read(language, namespace, callback) {
    const key = language;
    getLocaleData(namespace, key).then((obj) => callback(null, obj));
  }
};

i18n
  .use(initReactI18next)
  .use(backendModule)
  .init({
    lng: getUserPreferredLocale(),
    fallbackLng: 'en-US',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    load: 'currentOnly'
  });
