'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from '../middleware-settings';

i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language, namespace) => 
    import(`../../public/locales/${language}/${namespace}.json`)
  ))
  .init({
    ...getOptions(),
    lng: undefined, // 클라이언트 측에서는 자동 감지를 사용
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    }
  });

export default i18next;
