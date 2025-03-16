'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getOptions } from '../middleware-settings';
import koCommon from '../../public/locales/ko/common.json';
import enCommon from '../../public/locales/en/common.json';
import jaCommon from '../../public/locales/ja/common.json';
import zhCommon from '../../public/locales/zh/common.json';
import frCommon from '../../public/locales/fr/common.json';
import viCommon from '../../public/locales/vi/common.json';
import thCommon from '../../public/locales/th/common.json';

// 간소화된 버전의 i18n 클라이언트 설정
i18next
  .use(initReactI18next)
  .init({
    ...getOptions(),
    lng: undefined, // 클라이언트 측에서는 자동 감지를 사용
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    resources: {
      ko: {
        common: koCommon
      },
      en: {
        common: enCommon
      },
      ja: {
        common: jaCommon
      },
      zh: {
        common: zhCommon
      },
      fr: {
        common: frCommon
      },
      vi: {
        common: viCommon
      },
      th: {
        common: thCommon
      }
    },
    debug: true // 개발 중 디버깅을 위해 활성화
  });

export default i18next;
