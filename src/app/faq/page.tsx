'use client';

import React, { useState } from 'react';

// FAQ 항목 타입 정의
type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export default function FAQPage() {
  // FAQ 데이터
  const faqs: FAQItem[] = [
    {
      question: "MyQuokka 서비스는 어떤 언어를 지원하나요?",
      answer: "현재 영어, 중국어, 일본어, 베트남어, 태국어, 프랑스어, 스페인어를 지원하고 있습니다. 추가 언어 지원은 계속 확대될 예정입니다.",
      category: "서비스 일반"
    },
    {
      question: "서비스 이용을 위해 앱을 다운로드해야 하나요?",
      answer: "네, 더 나은 사용자 경험을 위해 앱 다운로드를 권장합니다. 앱스토어나 구글 플레이에서 'MyQuokka'를 검색하여 다운로드하실 수 있습니다.",
      category: "앱 이용 안내"
    },
    {
      question: "번역 서비스는 어떻게 이용하나요?",
      answer: "앱 내에서 '번역 요청' 메뉴를 통해 텍스트를 입력하거나 문서/이미지를 업로드하시면 됩니다. 구독 플랜에 따라 이용 가능한 번역 횟수가 달라집니다.",
      category: "앱 이용 안내"
    },
    {
      question: "구독은 언제든지 취소할 수 있나요?",
      answer: "네, 언제든지 취소 가능합니다. 앱 내 '내 계정' > '구독 관리'에서 취소하실 수 있으며, 취소 시 다음 결제일까지는 서비스를 계속 이용하실 수 있습니다.",
      category: "구독 및 결제"
    },
    {
      question: "결제 방법은 어떤 것이 있나요?",
      answer: "신용카드, 체크카드, 페이팔, 그리고 한국 내 주요 간편결제(카카오페이, 네이버페이, 토스 등)를 지원합니다.",
      category: "구독 및 결제"
    },
    {
      question: "문서 번역의 소요 시간은 얼마나 되나요?",
      answer: "일반적인 문서(1-2페이지)는 24시간 이내에 완료됩니다. 긴급 번역 서비스는 프리미엄 플랜에서 이용 가능하며, 최대 4시간 이내 처리됩니다.",
      category: "서비스 일반"
    },
    {
      question: "동행 서비스는 어떻게 예약하나요?",
      answer: "앱 내 '동행 서비스' 메뉴에서 원하는 날짜와 시간, 목적을 선택하여 예약하실 수 있습니다. 최소 48시간 전에 예약하는 것을 권장합니다.",
      category: "서비스 일반"
    },
    {
      question: "플랜 변경은 어떻게 하나요?",
      answer: "앱 내 '내 계정' > '구독 관리' > '플랜 변경'에서 다른 플랜으로 변경하실 수 있습니다. 업그레이드는 즉시 적용되고, 다운그레이드는 현재 결제 주기가 끝난 후 적용됩니다.",
      category: "구독 및 결제"
    },
  ];

  // 카테고리별 필터링을 위한 상태
  const [activeCategory, setActiveCategory] = useState<string>("전체");
  
  // 검색 기능을 위한 상태
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // 카테고리 목록 추출
  const categories = ["전체", ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  // 필터링된 FAQ 목록
  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "전체" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // FAQ 아코디언 상태 관리
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* 헤더 섹션 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">자주 묻는 질문</h1>
            <p className="text-xl max-w-3xl mx-auto">
              MyQuokka 서비스에 대한 궁금증을 해결해 드립니다.
              원하는 답변을 찾지 못하셨다면 언제든지 문의해 주세요.
            </p>
            
            {/* 검색 상자 */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="질문을 검색해보세요..."
                  className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-3 top-3 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ 컨텐츠 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* 카테고리 탭 */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* FAQ 목록 */}
            <div className="max-w-3xl mx-auto">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <div key={index} className="mb-4 border rounded-lg overflow-hidden">
                    <button
                      className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
                      onClick={() => toggleItem(index)}
                    >
                      <span className="font-medium text-lg">{faq.question}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transform transition ${openItems.includes(index) ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openItems.includes(index) && (
                      <div className="p-4 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                        <p className="text-sm text-blue-600 mt-2">{faq.category}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">검색 결과가 없습니다. 다른 키워드로 검색해보세요.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* 추가 문의 섹션 */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">아직 질문이 있으신가요?</h2>
            <p className="text-gray-700 mb-6">
              원하는 답변을 찾지 못하셨다면 언제든지 문의해 주세요.
              빠른 시간 내에 답변 드리겠습니다.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition">
              문의하기
            </button>
          </div>
        </section>
      </main>
    </div>
  );
} 