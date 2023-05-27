import { config } from '@/config';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { getUserPreferredLocale, setUserPreferredLocale } from './i18n.init';

export function useLocalization() {
  const instance = useTranslation('translation');
  return {
    t: instance.t,
    currentLocale: i18n.language,
    changeLocale: (localeId: string) => {
      i18n.changeLanguage(localeId);
      setUserPreferredLocale(localeId);
    },
    locales: config.localization.locales,
    getUserPreferredLocale
  };
}
