'use client';

import React from 'react';

// 서비스 타입 정의
type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
};

// 고객 후기 타입 정의
type Testimonial = {
  id: number;
  name: string;
  nationality: string;
  quote: string;
  avatar?: string;
};

export default function ServicesPage() {
  // 서비스 데이터
  const services: Service[] = [
    {
      id: 'translation',
      title: '번역 및 통역 서비스',
      description: '한국어 문서, 대화, 이메일 등의 번역과 통역을 제공합니다.',
      features: [
        '문서 번역 (계약서, 비자 신청서, 학교 서류 등)',
        '실시간 통역 서비스 (관공서, 병원, 부동산 방문 시)',
        '이메일 및 메시지 번역',
        '웹사이트 및 앱 내용 번역'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      id: 'housing',
      title: '주거 지원 서비스',
      description: '주택 검색부터 계약까지 한국 주거 시스템을 쉽게 이용할 수 있도록 도와드립니다.',
      features: [
        '주택 검색 및 추천',
        '부동산 중개인과 동행 및 통역',
        '계약서 번역 및 확인',
        '임대인과의 협상 지원',
        '유틸리티 설정 및 관리 지원'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'visa',
      title: '비자 및 서류 지원',
      description: '한국의 비자 신청 및 관련 서류 처리를 도와드립니다.',
      features: [
        '비자 신청 가이드 및 지원',
        '필요 서류 준비 및 번역',
        '출입국 관리 사무소 동행',
        '비자 연장 및 변경 지원',
        '외국인 등록증 신청 지원'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 'healthcare',
      title: '의료 서비스 지원',
      description: '한국 의료 시스템 이용 및 의사소통을 돕습니다.',
      features: [
        '병원 예약 및 동행',
        '의료 통역 서비스',
        '약국 이용 지원',
        '건강 보험 안내 및 가입 지원',
        '응급 의료 상황 대응 지원'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 'education',
      title: '교육 지원 서비스',
      description: '한국 교육 시스템 이용 및 학교 관련 지원을 제공합니다.',
      features: [
        '학교 및 교육 기관 검색 및 추천',
        '입학 신청 지원',
        '학부모-교사 면담 통역',
        '학교 서류 번역 및 작성 지원',
        '한국어 학습 자료 및 가이드 제공'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      id: 'daily',
      title: '일상 생활 지원',
      description: '한국에서의 일상 생활을 더 쉽고 편리하게 만들어 드립니다.',
      features: [
        '쇼핑 및 생필품 구매 지원',
        '은행 계좌 개설 및 금융 서비스 이용 지원',
        '휴대폰 개통 및 인터넷 설치 지원',
        '교통 시스템 이용 안내',
        '각종 공공 서비스 이용 지원'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];
  
  // 고객 후기 데이터
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Johnson",
      nationality: "미국",
      quote: "MyQuokka 덕분에 한국에서의 비자 연장 과정이 정말 수월했어요. 어려운 서류 작업과 출입국 사무소 방문 시 도움을 받아 스트레스 없이 처리할 수 있었습니다."
    },
    {
      id: 2,
      name: "Wang Wei",
      nationality: "중국",
      quote: "아파트 계약 시 MyQuokka의 통역 서비스를 이용했는데, 정말 큰 도움이 되었습니다. 복잡한 계약 조건들을 정확히 이해하고 협상할 수 있었어요."
    },
    {
      id: 3,
      name: "Takashi Yamamoto",
      nationality: "일본",
      quote: "병원 방문 시 의사와의 소통이 걱정되었는데, MyQuokka의 의료 통역 서비스 덕분에 증상을 정확히 설명하고 의사의 설명도 잘 이해할 수 있었습니다."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MyQuokka 서비스</h1>
            <p className="text-xl max-w-3xl mx-auto">
              한국에서의 생활을 더 쉽고 편안하게 만들어 드립니다.
              언어 장벽을 넘어 모든 서비스를 원활하게 이용하세요.
            </p>
          </div>
        </section>
        
        {/* 서비스 소개 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service) => (
                <div key={service.id} className="bg-gray-50 rounded-xl p-8 shadow-md">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 서비스 프로세스 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">서비스 이용 방법</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="text-xl font-semibold mb-3">회원 가입</h3>
                  <p className="text-gray-600">앱을 다운로드하고 간단한 정보로 회원 가입을 완료하세요.</p>
                  {/* 연결 화살표 (모바일에서는 숨김) */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="text-xl font-semibold mb-3">서비스 선택</h3>
                  <p className="text-gray-600">필요한 서비스를 선택하고 상세 정보를 입력하세요.</p>
                  {/* 연결 화살표 (모바일에서는 숨김) */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="text-xl font-semibold mb-3">매칭 및 확인</h3>
                  <p className="text-gray-600">요청에 맞는 전문가와 매칭되며 일정과 세부사항을 확인합니다.</p>
                  {/* 연결 화살표 (모바일에서는 숨김) */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h3 className="text-xl font-semibold mb-3">서비스 이용</h3>
                  <p className="text-gray-600">약속된 시간에 서비스를 이용하고 만족도를 평가해주세요.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 고객 후기 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">이용자 후기</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                      {testimonial.avatar ? (
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.nationality}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA 섹션 */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              MyQuokka와 함께라면 한국에서의 생활이 더 편안해집니다.
              언제든지 필요한 도움을 받아보세요.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full text-lg transition">
                서비스 신청하기
              </button>
              <button className="bg-blue-700 text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-full text-lg transition border border-white">
                더 알아보기
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 