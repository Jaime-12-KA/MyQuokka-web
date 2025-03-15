"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-4 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MyQuokka</h3>
            <p className="text-neutral-2">한국에서의 외국인 생활, 더 쉽고 풍요롭게</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">서비스</h4>
            <ul className="space-y-2">
              <li><Link href="/services/housing" className="text-neutral-2 hover:text-white">주거</Link></li>
              <li><Link href="/services/transportation" className="text-neutral-2 hover:text-white">교통</Link></li>
              <li><Link href="/services/administration" className="text-neutral-2 hover:text-white">행정 절차</Link></li>
              <li><Link href="/services/healthcare" className="text-neutral-2 hover:text-white">의료</Link></li>
              <li><Link href="/services/emergency" className="text-neutral-2 hover:text-white">긴급 대응</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">회사 정보</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-neutral-2 hover:text-white">소개</Link></li>
              <li><Link href="/blog" className="text-neutral-2 hover:text-white">블로그</Link></li>
              <li><Link href="/careers" className="text-neutral-2 hover:text-white">채용</Link></li>
              <li><Link href="/partners" className="text-neutral-2 hover:text-white">제휴 문의</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">고객 지원</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-neutral-2 hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="text-neutral-2 hover:text-white">문의하기</Link></li>
              <li><Link href="/terms" className="text-neutral-2 hover:text-white">이용약관</Link></li>
              <li><Link href="/privacy" className="text-neutral-2 hover:text-white">개인정보처리방침</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-3 mt-8 pt-6 text-center text-neutral-3">
          &copy; {new Date().getFullYear()} MyQuokka. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 