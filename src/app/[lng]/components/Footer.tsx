import Link from 'next/link';

export default function Footer({ lng }: { lng: string }) {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl text-primary">MyQuokka</div>
            <p className="text-gray-600 mt-2">© 2024 MyQuokka. 모든 권리 보유.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">링크</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={`/${lng}`} className="text-gray-600 hover:text-primary">
                    홈
                  </Link>
                </li>
                <li>
                  <Link href={`/${lng}/services`} className="text-gray-600 hover:text-primary">
                    서비스
                  </Link>
                </li>
                <li>
                  <Link href={`/${lng}/resources`} className="text-gray-600 hover:text-primary">
                    리소스
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">법률</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={`/${lng}/privacy`} className="text-gray-600 hover:text-primary">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href={`/${lng}/terms`} className="text-gray-600 hover:text-primary">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">문의</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@myquokka.com" className="text-gray-600 hover:text-primary">
                    info@myquokka.com
                  </a>
                </li>
                <li>
                  <a href="tel:+8201012345678" className="text-gray-600 hover:text-primary">
                    +82 010-1234-5678
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 