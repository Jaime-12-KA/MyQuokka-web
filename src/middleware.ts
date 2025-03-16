import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fallbackLng, languages } from './middleware-settings';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 요청 정보 로깅
  console.log('미들웨어 실행됨, URL:', request.url);
  console.log('경로:', pathname);
  console.log('지원 언어:', languages);
  
  // 현재 요청된 경로에서 언어 확인
  const pathnameIsMissingLocale = languages.every(
    (lng) => !pathname.startsWith(`/${lng}/`) && pathname !== `/${lng}`
  );
  
  console.log('언어 코드 없음:', pathnameIsMissingLocale);

  // 언어 코드가 없는 경우 기본 언어로 리다이렉트
  if (pathnameIsMissingLocale) {
    // 홈페이지인 경우 /ko로 리다이렉트
    const locale = fallbackLng;
    const newUrl = new URL(
      `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, 
      request.url
    );
    console.log('리다이렉트 URL:', newUrl.toString());
    return NextResponse.redirect(newUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  // 특정 파일 및 API 경로를 제외한 모든 경로 처리
  matcher: [
    // 미들웨어가 적용될 경로 설정
    '/((?!_next/static|_next/image|favicon.ico|api/auth).*)'
  ]
};
