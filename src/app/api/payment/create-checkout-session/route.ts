import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/auth.config';

// 모의 Stripe 구현 (실제 Stripe API 호출 대신 사용)
export async function POST(req: NextRequest) {
  try {
    // 인증 확인
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' }, 
        { status: 401 }
      );
    }
    
    // 요청 본문 파싱
    const { priceId, serviceName, serviceType } = await req.json();
    
    if (!priceId) {
      return NextResponse.json(
        { error: '가격 ID가 필요합니다.' },
        { status: 400 }
      );
    }
    
    // 실제 Stripe 호출 대신 모의 응답 생성
    console.log(`결제 정보 - 서비스: ${serviceName}, 유형: ${serviceType}, 가격 ID: ${priceId}`);
    
    // 성공 URL 생성 (실제 결제 성공 후 리디렉션 URL)
    const successUrl = `${req.headers.get('origin')}/payment/success?session_id=mock_session_${Date.now()}`;
    
    // 모의 결제 URL 반환
    return NextResponse.json({
      url: successUrl,
      mock: true,
      message: '모의 결제가 성공적으로 생성되었습니다. 이것은 테스트용 응답입니다.'
    });
  } catch (error: any) {
    console.error('결제 세션 생성 에러:', error);
    return NextResponse.json(
      { error: '결제 세션 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 