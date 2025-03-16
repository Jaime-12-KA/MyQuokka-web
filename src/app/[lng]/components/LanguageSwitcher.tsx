// app/[lng]/components/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { languages } from '../../../i18n/settings';

export default function LanguageSwitcher({ lng }) {
  const router = useRouter();
  const currentPathname = usePathname();
  
  const handleLanguageChange = (newLng) => {
    // 현재 경로와 언어 변경 로그
    console.log('현재 경로:', currentPathname);
    console.log('현재 언어:', lng);
    console.log('새 언어:', newLng);
    
    // 정규식을 사용하여 경로에서 언어 부분을 교체
    // ^/{lng}(/.*)$ 패턴을 사용하여 시작 부분의 언어 코드를 정확히 교체
    const pathWithoutLng = currentPathname.replace(/^\/[^/]+/, '');
    const newPathname = `/${newLng}${pathWithoutLng}`;
    
    console.log('새 경로:', newPathname);
    router.push(newPathname);
  };
  
  return (
    <div className="relative">
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={lng}
        className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-sm focus:outline-none"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language === 'ko' && '한국어'}
            {language === 'en' && 'English'}
            {language === 'ja' && '日本語'}
            {language === 'zh' && '中文'}
            {language === 'fr' && 'Français'}
            {language === 'vi' && 'Tiếng Việt'}
            {language === 'th' && 'ภาษาไทย'}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}