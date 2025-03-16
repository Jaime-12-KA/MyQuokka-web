import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from '../middleware-settings';
import koCommon from '../../public/locales/ko/common.json';
import enCommon from '../../public/locales/en/common.json';

// 간소화된 버전의 i18n 서버 설정
const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .init({
      ...getOptions(lng, ns),
      lng,
      ns,
      resources: {
        ko: {
          common: koCommon
        },
        en: {
          common: enCommon
        }
      },
      debug: true // 개발 중 디버깅을 위해 활성화
    });
  return i18nInstance;
};

export async function useTranslation(lng, ns = 'common', options = {}) {
  console.log("useTranslation 호출됨:", lng, ns); // 로깅 추가
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, ns),
    i18n: i18nextInstance
  };
}
