"use client";

import Image from 'next/image'
import CategoryCard from '@/components/CategoryCard'

export default function Home() {
  const categories = [
    { title: '주거', icon: '🏠', color: 'bg-red-100' },
    { title: '교통', icon: '🚆', color: 'bg-blue-100' },
    { title: '행정 절차', icon: '📝', color: 'bg-green-100' },
    { title: '의료', icon: '🏥', color: 'bg-yellow-100' },
    { title: '긴급 대응', icon: '🆘', color: 'bg-purple-100' },
  ];

  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-primary-light to-blue-50 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">한국에서의 외국인 생활, <br />더 쉽고 풍요롭게</h1>
            <p className="text-lg mb-8">
              MyQuokka는 한국에 거주하거나 방문하는 외국인들을 위한 종합 생활 지원 서비스입니다.
              언어 장벽, 문화적 차이, 행정 절차의 복잡성 등의 문제를 함께 해결해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">서비스 알아보기</button>
              <button className="btn-outline">문의하기</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-96 w-full">
              {/* 이미지는 public 폴더에 추가 필요 */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg text-gray-500">
                여기에 히어로 이미지 삽입
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 카테고리 섹션 */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">필요한 정보를 빠르게 찾아보세요</h2>
            <p className="text-neutral-3 mt-4">
              한국 생활에 필요한 모든 정보를 카테고리별로 쉽게 찾을 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                icon={category.icon}
                color={category.color}
                onClick={() => console.log(`Clicked on ${category.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 특징 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MyQuokka 서비스 특징</h2>
            <p className="text-neutral-3 mt-4">
              귀하의 한국 생활을 더욱 편리하게 만들어주는 특별한 기능들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-4">다국어 지원</h3>
              <p className="text-neutral-3">
                영어, 한국어를 포함한 다양한 언어로 서비스를 제공합니다. 언어 장벽 없이 필요한 정보를 얻으세요.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AI 비서</h3>
              <p className="text-neutral-3">
                AI 비서가 질문에 빠르게 답변하고 개인 맞춤형 정보를 제공합니다. 24시간 언제든지 이용 가능합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4">맞춤형 지원</h3>
              <p className="text-neutral-3">
                개인의 상황과 요구에 맞는 맞춤형 지원 서비스를 제공합니다. 복잡한 문제도 함께 해결해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">고객 후기</h2>
            <p className="text-neutral-3 mt-4">
              MyQuokka 서비스를 이용한 고객들의 생생한 후기를 확인하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: '영어 교사, 서울',
                text: 'MyQuokka 덕분에 한국에서의 집 계약과 비자 갱신 과정이 훨씬 쉬워졌어요. 언어 장벽 때문에 걱정했는데, 이제는 모든 것이 문제 없어요!',
                avatar: '👩‍🦰'
              },
              {
                name: 'Michael Chen',
                role: '대학원생, 부산',
                text: '의료 시스템이 복잡했는데, MyQuokka의 가이드를 통해 병원 예약과 보험 청구 과정을 쉽게 해결했습니다. 정말 큰 도움이 되었어요.',
                avatar: '👨‍🎓'
              },
              {
                name: 'Emma Garcia',
                role: 'IT 전문가, 인천',
                text: '새로운 도시로 이사했을 때 MyQuokka의 지역 정보와 커뮤니티 연결 기능이 정착하는 데 큰 도움이 되었어요. 이 서비스 없이는 상상할 수 없어요!',
                avatar: '👩‍💻'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{review.avatar}</div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-neutral-3 text-sm">{review.role}</p>
                  </div>
                </div>
                <p className="italic text-neutral-3">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">한국 생활의 새로운 동반자가 되어드립니다</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            MyQuokka와 함께 한국에서의 생활을 더 쉽고 풍요롭게 만들어보세요.
            지금 바로 시작하세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
              무료로 시작하기
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-md font-bold hover:bg-white hover:bg-opacity-10 transition-colors">
              서비스 둘러보기
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 