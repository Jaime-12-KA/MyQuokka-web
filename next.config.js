/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // myquokka 디렉토리 제외
  distDir: '.next',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    outputFileTracingExcludes: {
      '*': ['**/myquokka/**'],
    },
  }
};

module.exports = nextConfig;