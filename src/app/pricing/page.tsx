'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// 요금제 타입 정의
type PricingPlan = {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
};

// 자주 묻는 질문 타입 정의
type PricingFAQ = {
  question: string;
  answer: string;
};

export default function PricingPage() {
  // 월간/연간 플랜 상태 관리
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  // 요금제 데이터
  const pricingPlans: PricingPlan[] = [
    {
      id: 'basic',
      name: '기본 플랜',
      price: 0,
      period: billingPeriod === 'monthly' ? '월' : '년',
      description: '필수 정보와 기본 가이드 제공',
      features: [
        '기본 생활 정보 접근',
        '커뮤니티 읽기 접근',
        '무료 가이드 다운로드',
        '앱 접근성',
        '기본 알림 서비스'
      ]
    },
    {
      id: 'standard',
      name: '스탠다드 플랜',
      price: billingPeriod === 'monthly' ? 19900 : 199000,
      period: billingPeriod === 'monthly' ? '월' : '년',
      description: '번역, 상담 및 문서 지원 포함',
      features: [
        '기본 플랜의 모든 기능',
        '월 5회 번역 지원',
        '월 2회 1:1 상담',
        '행정 문서 작성 지원',
        '커뮤니티 전체 접근',
        '우선 응답 서비스'
      ],
      isPopular: true
    },
    {
      id: 'premium',
      name: '프리미엄 플랜',
      price: billingPeriod === 'monthly' ? 39900 : 399000,
      period: billingPeriod === 'monthly' ? '월' : '년',
      description: '무제한 상담 및 긴급 지원 포함',
      features: [
        '스탠다드 플랜의 모든 기능',
        '월 15회 번역 지원',
        '무제한 1:1 상담',
        '월 2회 동행 서비스',
        '긴급 지원 서비스',
        '건강검진 예약 할인'
      ]
    }
  ];
  
  // 가격 포맷 함수
  const formatPrice = (price: number): string => {
    if (price === 0) return '무료';
    return new Intl.NumberFormat('ko-KR').format(price) + '원';
  };
  
  // 자주 묻는 질문 데이터
  const faqs: PricingFAQ[] = [
    {
      question: '구독은 언제든지 취소할 수 있나요?',
      answer: '네, 언제든지 취소 가능합니다. 구독 취소 시 현재 결제 주기의 끝까지 서비스를 이용하실 수 있으며, 그 이후에는 추가 결제가 발생하지 않습니다.'
    },
    {
      question: '플랜은 언제든지 변경할 수 있나요?',
      answer: '네, 언제든지 변경 가능합니다. 상위 플랜으로 업그레이드하면 즉시 적용되며, 하위 플랜으로 다운그레이드하면 현재 결제 주기가 끝난 후 적용됩니다.'
    },
    {
      question: '번역 지원은 어떻게 사용하나요?',
      answer: '앱 내의 번역 요청 메뉴를 통해 텍스트, 문서, 또는 사진을 업로드하면 전문 번역가가 번역을 진행합니다. 각 플랜별로 월간 이용 가능한 횟수가 정해져 있습니다.'
    },
    {
      question: '동행 서비스는 어디에서 이용 가능한가요?',
      answer: '서울, 부산, 인천, 대구, 대전 등 주요 도시에서 이용 가능합니다. 그 외 지역은 상담을 통해 가능 여부를 확인해 드립니다.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 헤더 섹션 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">가격 정책</h1>
            <p className="text-xl max-w-3xl mx-auto">
              MyQuokka는 한국에서의 생활을 더 쉽게 만들어 드립니다.
              귀하의 필요에 맞는 요금제를 선택하세요.
            </p>
            
            {/* 결제 주기 선택 */}
            <div className="inline-flex items-center bg-blue-800 rounded-full p-1 mt-8">
              <button
                className={`px-4 py-2 rounded-full transition ${
                  billingPeriod === 'monthly' ? 'bg-white text-blue-700' : 'text-white'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                월간 결제
              </button>
              <button
                className={`px-4 py-2 rounded-full transition ${
                  billingPeriod === 'yearly' ? 'bg-white text-blue-700' : 'text-white'
                }`}
                onClick={() => setBillingPeriod('yearly')}
              >
                연간 결제 <span className="text-xs font-bold">(17% 할인)</span>
              </button>
            </div>
          </div>
        </section>
        
        {/* 요금제 섹션 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white border rounded-xl shadow-lg overflow-hidden relative ${
                    plan.isPopular ? 'border-blue-500 md:scale-105 z-10' : 'border-gray-200'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="bg-blue-500 text-white py-1 px-4 text-xs font-bold uppercase absolute top-0 right-0 rounded-bl-lg">
                      가장 인기
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{formatPrice(plan.price)}</span>
                      {plan.price > 0 && <span className="text-gray-500">/{plan.period}</span>}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full rounded-lg py-3 font-medium transition ${
                        plan.isPopular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {plan.price === 0 ? '무료로 시작하기' : '구독하기'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 엔터프라이즈 플랜 */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2">엔터프라이즈 플랜</h3>
                  <p>기업 및 단체를 위한 커스텀 솔루션을 제공합니다.</p>
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">맞춤형 서비스가 필요하신가요?</h4>
                    <p className="text-gray-600">
                      10인 이상의 그룹이나 특별한 요구사항이 있는 기업을 위한 맞춤 플랜을 제공합니다.
                      귀사의 요구에 맞는 서비스를 구성해 드립니다.
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
                    문의하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 자주 묻는 질문 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA 섹션 */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">준비되셨나요?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              지금 바로 MyQuokka와 함께 한국에서의 생활을 더 편리하게 시작하세요.
            </p>
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full text-lg transition">
              무료로 시작하기
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 