"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [language, setLanguage] = useState('ko');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary to-blue-700 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">MyQuokka</div>
        
        {/* 모바일 메뉴 토글 버튼 */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-neutral-2">홈</Link>
          <Link href="/about" className="hover:text-neutral-2">소개</Link>
          <Link href="/services" className="hover:text-neutral-2">서비스</Link>
          <Link href="/pricing" className="hover:text-neutral-2">가격</Link>
          <Link href="/resources" className="hover:text-neutral-2">리소스</Link>
          <Link href="/faq" className="hover:text-neutral-2">FAQ</Link>
        </nav>
        
        <div className="hidden md:flex space-x-3">
          <select 
            className="bg-transparent border border-white rounded px-2 py-1"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="ko">한국어</option>
            <option value="en">English</option>
          </select>
          <button className="bg-white text-primary px-4 py-1 rounded">로그인</button>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-4">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link href="/" className="hover:text-neutral-2">홈</Link>
            <Link href="/about" className="hover:text-neutral-2">소개</Link>
            <Link href="/services" className="hover:text-neutral-2">서비스</Link>
            <Link href="/pricing" className="hover:text-neutral-2">가격</Link>
            <Link href="/resources" className="hover:text-neutral-2">리소스</Link>
            <Link href="/faq" className="hover:text-neutral-2">FAQ</Link>
          </nav>
          <div className="flex justify-between pt-4 border-t border-white border-opacity-20">
            <select 
              className="bg-transparent border border-white rounded px-2 py-1"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
            <button className="bg-white text-primary px-4 py-1 rounded">로그인</button>
          </div>
        </div>
      )}
    </header>
  );
} 