import { useTranslation } from '../../../i18n/server';

export default async function AboutPage({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'common');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* 미션과 비전 섹션 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">{t('about.mission.title')} & {t('about.vision.title')}</h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-700">{t('about.mission.title')}</h3>
                  <p className="text-gray-700">
                    {t('about.mission.description')}
                  </p>
                </div>
                <div className="bg-indigo-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-700">{t('about.vision.title')}</h3>
                  <p className="text-gray-700">
                    {t('about.vision.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 우리의 가치 섹션 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('about.values.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('about.values.inclusivity.title')}</h3>
                <p className="text-gray-600">{t('about.values.inclusivity.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('about.values.reliability.title')}</h3>
                <p className="text-gray-600">{t('about.values.reliability.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('about.values.innovation.title')}</h3>
                <p className="text-gray-600">{t('about.values.innovation.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 팀 소개 섹션 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('about.team.title')}</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">{t('about.team.photoText')}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{t('about.team.member1.name')}</h3>
                <p className="text-blue-600">{t('about.team.member1.position')}</p>
                <p className="text-gray-600 mt-2">
                  {t('about.team.member1.bio')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">{t('about.team.photoText')}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{t('about.team.member2.name')}</h3>
                <p className="text-blue-600">{t('about.team.member2.position')}</p>
                <p className="text-gray-600 mt-2">
                  {t('about.team.member2.bio')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">{t('about.team.photoText')}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{t('about.team.member3.name')}</h3>
                <p className="text-blue-600">{t('about.team.member3.position')}</p>
                <p className="text-gray-600 mt-2">
                  {t('about.team.member3.bio')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}