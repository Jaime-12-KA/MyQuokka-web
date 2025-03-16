// 다국어 설정을 미들웨어에서 직접 사용할 수 있도록 복제한 파일
export const fallbackLng = 'ko';
export const languages = ['ko', 'en', 'ja', 'zh', 'fr', 'vi', 'th'];
export const defaultNS = 'common';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
} 