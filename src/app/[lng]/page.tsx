import { useTranslation } from '../../i18n/server';
import LanguageSwitcher from './components/LanguageSwitcher';

export default async function HomePage({ params: { lng } }) {
  console.log('HomePage 렌더링 시작, 언어:', lng);
  const { t } = await useTranslation(lng, 'common');
  
  // 실제 번역된 텍스트 또는 대체 텍스트
  const welcomeText = t('home.welcome');
  const descriptionText = t('home.description');
  
  console.log('번역 결과:', { welcomeText, descriptionText });

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">MyQuokka</h1>
          <LanguageSwitcher lng={lng} />
        </div>
      </header>
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold">
              {welcomeText !== 'home.welcome' ? welcomeText : '한국에서의 외국인 생활, 더 쉽고 풍요롭게'}
            </h2>
            <p className="mt-4">
              {descriptionText !== 'home.description' ? descriptionText : 'MyQuokka는 한국에 거주하는 외국인들을 위한 종합 생활 지원 서비스입니다.'}
            </p>
            
            <div className="mt-8 p-4 bg-blue-50 rounded text-center">
              <p className="text-lg">현재 선택된 언어: <strong>{lng}</strong></p>
              <p className="mt-2">다른 언어로 전환하려면 우측 상단의 언어 선택기를 사용하세요.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}