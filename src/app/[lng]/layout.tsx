import { dir } from 'i18next';
import '../globals.css';
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
} 