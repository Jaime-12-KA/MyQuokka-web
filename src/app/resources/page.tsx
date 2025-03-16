'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// 리소스 타입 정의
type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  featured?: boolean;
};

// 카테고리 타입 정의
type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

export default function ResourcesPage() {
  // 카테고리 필터링을 위한 상태
  const [activeCategory, setActiveCategory] = useState<string>('all');
  // 검색을 위한 상태
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // 카테고리 데이터
  const categories: Category[] = [
    {
      id: 'all',
      name: '전체',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    },
    {
      id: 'guides',
      name: '가이드',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'forms',
      name: '서식',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 'videos',
      name: '비디오',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'infographics',
      name: '인포그래픽',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];
  
  // 리소스 데이터
  const resources: Resource[] = [
    {
      id: 'visa-guide',
      title: '한국 비자 신청 가이드',
      description: '비자 유형별 신청 방법 및 필요 서류를 상세히 안내합니다.',
      category: 'guides',
      image: 'https://via.placeholder.com/300x200?text=Visa+Guide',
      link: '/resources/visa-guide',
      featured: true
    },
    {
      id: 'housing-contract',
      title: '주택 임대차 계약서 번역본',
      description: '한국 표준 주택 임대차 계약서의 다국어 번역본입니다.',
      category: 'forms',
      image: 'https://via.placeholder.com/300x200?text=Housing+Contract',
      link: '/resources/housing-contract'
    },
    {
      id: 'banking-guide',
      title: '외국인을 위한 은행 계좌 개설 가이드',
      description: '한국 주요 은행의 외국인 계좌 개설 방법을 안내합니다.',
      category: 'guides',
      image: 'https://via.placeholder.com/300x200?text=Banking+Guide',
      link: '/resources/banking-guide'
    },
    {
      id: 'subway-guide',
      title: '서울 지하철 이용 가이드',
      description: '서울 지하철 노선도 및 이용 방법에 관한 종합 안내서입니다.',
      category: 'guides',
      image: 'https://via.placeholder.com/300x200?text=Subway+Guide',
      link: '/resources/subway-guide'
    },
    {
      id: 'healthcare-video',
      title: '한국 의료 시스템 이해하기',
      description: '한국 건강보험, 병원 이용 방법, 약국 이용법 등을 설명하는 비디오입니다.',
      category: 'videos',
      image: 'https://via.placeholder.com/300x200?text=Healthcare+Video',
      link: '/resources/healthcare-video'
    },
    {
      id: 'tax-infographic',
      title: '외국인 세금 안내',
      description: '한국에 거주하는 외국인의 세금 납부 의무와 방법을 설명하는 인포그래픽입니다.',
      category: 'infographics',
      image: 'https://via.placeholder.com/300x200?text=Tax+Infographic',
      link: '/resources/tax-infographic'
    },
    {
      id: 'language-video',
      title: '일상 한국어 배우기',
      description: '일상 생활에서 유용한 한국어 표현을 배울 수 있는 비디오 시리즈입니다.',
      category: 'videos',
      image: 'https://via.placeholder.com/300x200?text=Language+Video',
      link: '/resources/language-video'
    },
    {
      id: 'emergency-guide',
      title: '긴급 상황 대처 가이드',
      description: '화재, 지진, 의료 응급 상황 등 각종 긴급 상황 시 대처 방법을 안내합니다.',
      category: 'guides',
      image: 'https://via.placeholder.com/300x200?text=Emergency+Guide',
      link: '/resources/emergency-guide',
      featured: true
    }
  ];
  
  // 필터링된 리소스
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // 추천 리소스
  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">리소스 센터</h1>
            <p className="text-xl max-w-3xl mx-auto">
              한국 생활에 필요한 모든 정보와 리소스를 한 곳에서 찾아보세요.
              가이드, 서식, 비디오 등 다양한 자료를 제공합니다.
            </p>
          </div>
        </section>
        
        {/* 추천 리소스 */}
        {featuredResources.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">추천 리소스</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {featuredResources.map(resource => (
                  <div key={resource.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img 
                          src={resource.image} 
                          alt={resource.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                          {categories.find(cat => cat.id === resource.category)?.name}
                        </div>
                        <h3 className="mt-2 text-xl font-bold">{resource.title}</h3>
                        <p className="mt-2 text-gray-600">{resource.description}</p>
                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
                          자세히 보기
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* 카테고리 및 검색 섹션 */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`flex items-center px-4 py-2 rounded-full transition ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* 검색 */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="리소스 검색..."
                  className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            
            {/* 리소스 그리드 */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredResources.length > 0 ? (
                filteredResources.map(resource => (
                  <div key={resource.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                    <img 
                      src={resource.image} 
                      alt={resource.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-5">
                      <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                        {categories.find(cat => cat.id === resource.category)?.name}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium transition">
                        자세히 보기 &rarr;
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-500 text-lg">검색 결과가 없습니다. 다른 키워드로 검색해보세요.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* 구독 섹션 */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">최신 리소스 업데이트 받기</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              새로운 가이드, 서식, 비디오 등이 업데이트될 때 알림을 받아보세요.
              이메일로 월 1회 최신 리소스 정보를 보내드립니다.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="이메일 주소 입력"
                  className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
                  구독하기
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                언제든지 구독을 취소할 수 있으며, 개인정보는 안전하게 보호됩니다.
              </p>
            </div>
          </div>
        </section>
        
        {/* 요청 섹션 */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">필요한 리소스가 없나요?</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              찾고 계신 정보나 리소스가 없다면 알려주세요.
              요청하신 리소스를 준비하여 제공해 드리겠습니다.
            </p>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg transition">
              리소스 요청하기
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 