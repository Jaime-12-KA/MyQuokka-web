import { dir } from 'i18next';
import '../../../styles/globals.css';
import { languages } from '../../middleware-settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function LngLayout({
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