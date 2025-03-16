import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { languages } from '../../i18n/settings';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyQuokka - 한국에서의 외국인 생활, 더 쉽고 풍요롭게',
  description: '비자, 세금, 주택 등 한국에서의 외국인 생활에 필요한 모든 정보와 서비스를 제공합니다.',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng}>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="font-bold text-2xl text-primary">MyQuokka</div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block">
                  <Header lng={lng} />
                </div>
                <MobileMenu lng={lng} />
              </div>
            </div>
          </div>
          <main className="flex-grow">
            {children}
          </main>
          <Footer lng={lng} />
        </div>
      </body>
    </html>
  );
} 