import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import OpenAI from 'openai';
import { authOptions } from '@/app/auth.config';

// OpenAI 설정
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
    const { message, history = [] } = await req.json();
    
    if (!message || message.trim() === '') {
      return NextResponse.json(
        { error: '메시지를 입력해주세요.' },
        { status: 400 }
      );
    }
    
    // 시스템 지시 메시지와 대화 기록 구성
    const systemMessage = {
      role: 'system',
      content: '당신은 한국에 있는 외국인들을 도와주는 MyQuokka의 AI 도우미입니다. 한국 생활에 관련된 정보, 행정 절차, 문화, 주거, 교통, 의료 등에 대한 질문에 친절하고 상세하게 답변해야 합니다. 답변은 최대한 정확하고 도움이 되어야 합니다. 질문이 한국 생활과 관련 없는 경우 정중하게 범위를 벗어났다고 알려주세요. 사용자의 언어로 응답하세요.'
    };
    
    // 대화 기록 구성
    const messages = [
      systemMessage,
      ...history,
      { role: 'user', content: message }
    ];
    
    // OpenAI API 호출
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 500,
    });
    
    // 응답 반환
    return NextResponse.json({
      response: response.choices[0].message.content,
      history: [
        ...history,
        { role: 'user', content: message },
        { role: 'assistant', content: response.choices[0].message.content }
      ]
    });
  } catch (error: any) {
    console.error('AI 챗봇 에러:', error);
    
    // API 키 오류 처리
    if (error.message.includes('API key')) {
      return NextResponse.json(
        { error: 'OpenAI API 키가 유효하지 않습니다. 관리자에게 문의하세요.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'AI 챗봇 서비스 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 