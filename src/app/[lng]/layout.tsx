import { Inter } from 'next/font/google';
import { useTranslation } from '../../i18n/server';
import LanguageSwitcher from './components/LanguageSwitcher';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default async function Layout({ children, params: { lng } }) {
  const { t } = await useTranslation(lng, 'common');

  return (
    <html lang={lng}>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-8">
                  <Link href={`/${lng}`} className="text-2xl font-bold text-gray-900">
                    MyQuokka
                  </Link>
                  <nav className="hidden md:flex space-x-4">
                    <Link href={`/${lng}/about`} className="text-gray-600 hover:text-gray-900">
                      {t('about.title')}
                    </Link>
                    <Link href={`/${lng}/services`} className="text-gray-600 hover:text-gray-900">
                      Services
                    </Link>
                    <Link href={`/${lng}/resources`} className="text-gray-600 hover:text-gray-900">
                      Resources
                    </Link>
                    <Link href={`/${lng}/pricing`} className="text-gray-600 hover:text-gray-900">
                      Pricing
                    </Link>
                  </nav>
                </div>
                <LanguageSwitcher lng={lng} />
              </div>
            </div>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p>&copy; 2024 MyQuokka. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 