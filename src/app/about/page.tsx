'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MyQuokka에 대하여</h1>
            <p className="text-xl max-w-3xl mx-auto">
              한국에 거주하는 외국인들을 위한 종합 지원 서비스를 제공합니다.
              언어 장벽을 넘어 한국 생활을 더 편리하고 즐겁게 만들어 드립니다.
            </p>
          </div>
        </section>

        {/* 미션과 비전 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">미션과 비전</h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-700">미션</h3>
                  <p className="text-gray-700">
                    언어 장벽과 문화적 차이로 인한 어려움을 해소하여 외국인들이 한국에서 
                    더 편안하고 풍요로운 삶을 영위할 수 있도록 돕는 것입니다.
                  </p>
                </div>
                <div className="bg-indigo-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-700">비전</h3>
                  <p className="text-gray-700">
                    한국에 거주하는 모든 외국인들이 언어 장벽 없이 
                    자신의 잠재력을 최대한 발휘하고 한국 생활을 온전히 즐길 수 있는 
                    세상을 만들어 나가는 것입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 가치 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">우리의 가치</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">포용성</h3>
                <p className="text-gray-600">다양한 문화와 배경을 가진 모든 이들을 환영하고 존중합니다.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">신뢰성</h3>
                <p className="text-gray-600">정확하고 믿을 수 있는 서비스를 제공하기 위해 최선을 다합니다.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">혁신</h3>
                <p className="text-gray-600">끊임없이 새로운 해결책을 모색하고 서비스를 개선합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 팀 소개 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">우리 팀</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  {/* 팀원 이미지를 추가하세요 */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">사진</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">홍길동</h3>
                <p className="text-blue-600">대표</p>
                <p className="text-gray-600 mt-2">다국어에 능통한 전문가로 외국인들의 한국 생활 적응을 돕기 위해 MyQuokka를 설립했습니다.</p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  {/* 팀원 이미지를 추가하세요 */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">사진</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">김서연</h3>
                <p className="text-blue-600">번역 매니저</p>
                <p className="text-gray-600 mt-2">영어, 중국어, 일본어를 비롯한 다양한 언어를 능숙하게 구사하며 고품질 번역 서비스를 이끌고 있습니다.</p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  {/* 팀원 이미지를 추가하세요 */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">사진</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">이준호</h3>
                <p className="text-blue-600">고객 지원 책임자</p>
                <p className="text-gray-600 mt-2">고객의 요구를 정확히 파악하고 최적의 솔루션을 제공하는 데 전문성을 갖추고 있습니다.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 