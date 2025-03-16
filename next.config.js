/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // App Router를 사용할 때는 i18n 설정을 제거합니다.
  
  // myquokka 디렉토리 제외
  distDir: '.next',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    outputFileTracingExcludes: {
      '*': ['**/myquokka/**'],
    },
  },
  
  // 다국어 지원을 위한 설정
  i18n: {
    locales: ['ko', 'en', 'ja', 'zh', 'fr', 'vi', 'th'],
    defaultLocale: 'ko',
    localeDetection: true
  }
};

module.exports = nextConfig;