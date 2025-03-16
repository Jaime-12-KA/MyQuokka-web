import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from '../middleware-settings';

// 간소화된 버전의 i18n 서버 설정
const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .init({
      ...getOptions(lng, ns),
      resources: {
        ko: {
          common: require('../../public/locales/ko/common.json')
        },
        en: {
          common: require('../../public/locales/en/common.json')
        }
      }
    });
  return i18nInstance;
};

export async function useTranslation(lng, ns = 'common', options = {}) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, ns),
    i18n: i18nextInstance
  };
}
