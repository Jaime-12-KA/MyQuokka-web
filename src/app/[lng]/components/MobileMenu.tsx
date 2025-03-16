'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu({ lng }) {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">메뉴 열기</span>
        {/* 햄버거 아이콘 */}
        <svg
          className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {/* X 아이콘 */}
        <svg
          className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* 모바일 메뉴 */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`-m-3 p-3 flex items-center rounded-md ${
                      currentPath === link.path ? 'bg-gray-50 text-primary font-bold' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 