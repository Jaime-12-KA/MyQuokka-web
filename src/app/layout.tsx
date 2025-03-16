// app/layout.tsx
import { dir } from 'i18next';
import { languages } from '../middleware-settings';
import '../styles/globals.css'; // 상대 경로로 수정

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>{children}</body>
    </html>
  );
}