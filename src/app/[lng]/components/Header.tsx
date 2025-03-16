'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ lng }: { lng: string }) {
  const pathname = usePathname();
  
  // 현재 경로에서 언어 부분을 제외한 경로
  const currentPath = pathname.replace(/^\/[^/]+/, '') || '/';
  
  // 네비게이션 링크 정의
  const navLinks = [
    { name: '홈', href: `/${lng}`, path: '/' },
    { name: '서비스', href: `/${lng}/services`, path: '/services' },
    { name: '리소스', href: `/${lng}/resources`, path: '/resources' },
    { name: '가격', href: `/${lng}/pricing`, path: '/pricing' },
    { name: 'FAQ', href: `/${lng}/faq`, path: '/faq' },
    { name: '소개', href: `/${lng}/about`, path: '/about' },
  ];

  // 언어 전환 링크
  const altLng = lng === 'ko' ? 'en' : 'ko';
  const altLngPath = pathname.replace(/^\/[^/]+/, `/${altLng}`);

  return (
    <nav className="flex space-x-8">
      {/* 네비게이션 링크 */}
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-base font-medium ${
            currentPath === link.path
              ? 'text-primary font-bold'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          {link.name}
        </Link>
      ))}
      
      {/* 언어 선택 */}
      <Link
        href={altLngPath}
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        {altLng === 'en' ? '🇺🇸 EN' : '🇰🇷 KO'}
      </Link>
    </nav>
  );
} 