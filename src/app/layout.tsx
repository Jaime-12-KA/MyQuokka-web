// app/layout.tsx
import { dir } from 'i18next';
import { languages } from '../middleware-settings';
import '../styles/globals.css'; // 상대 경로로 수정

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

// 이 레이아웃은 미들웨어에 의해 /ko 또는 다른 언어로 리다이렉션되기 전에 
// 잠시 보여질 수 있는 페이지입니다.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}