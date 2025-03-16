import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/utils/database';
import User from '@/models/User';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, language = 'ko' } = await req.json();

    // 필수 필드 확인
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 비밀번호 길이 검증
    if (password.length < 6) {
      return NextResponse.json(
        { error: '비밀번호는 6자 이상이어야 합니다.' },
        { status: 400 }
      );
    }

    // 데이터베이스 연결
    await connectDB();

    // 이메일 중복 확인
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return NextResponse.json(
        { error: '이미 등록된 이메일입니다.' },
        { status: 400 }
      );
    }

    // 새 사용자 생성
    const newUser = new User({
      name,
      email,
      password,
      language,
    });

    // 사용자 저장
    await newUser.save();

    // 응답에서 비밀번호 제외
    const userWithoutPassword = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      language: newUser.language,
    };

    return NextResponse.json(
      { message: '회원가입이 완료되었습니다.', user: userWithoutPassword },
      { status: 201 }
    );
  } catch (error) {
    console.error('회원가입 에러:', error);
    return NextResponse.json(
      { error: '회원가입 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 