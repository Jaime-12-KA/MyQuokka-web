import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/auth.config';
import connectDB from '@/utils/database';
import Ticket from '@/models/Ticket';

// 티켓 생성
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' }, 
        { status: 401 }
      );
    }
    
    await connectDB();
    
    const { title, description, category, priority = 'medium' } = await req.json();
    
    // 필수 필드 확인
    if (!title || !description || !category) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }
    
    // 새 티켓 생성
    const newTicket = new Ticket({
      userId: session.user.id,
      title,
      description,
      category,
      priority,
      status: 'pending',
      messages: [
        {
          sender: session.user.id,
          content: description,
          timestamp: new Date(),
          isStaff: false,
        },
      ],
    });
    
    await newTicket.save();
    
    return NextResponse.json(
      { message: '티켓이 성공적으로 생성되었습니다.', ticket: newTicket },
      { status: 201 }
    );
  } catch (error) {
    console.error('티켓 생성 에러:', error);
    return NextResponse.json(
      { error: '티켓 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 사용자 티켓 조회
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' }, 
        { status: 401 }
      );
    }
    
    await connectDB();
    
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const userId = session.user.id;
    
    // 관리자는 모든 티켓 조회 가능, 일반 사용자는 자신의 티켓만 조회 가능
    let query: any = {};
    
    if (session.user.role !== 'admin') {
      query.userId = userId;
    }
    
    if (status && status !== 'all') {
      query.status = status;
    }
    
    const tickets = await Ticket.find(query)
      .sort({ updatedAt: -1 })
      .populate('userId', 'name email')
      .populate('assignedTo', 'name email');
    
    return NextResponse.json(tickets);
  } catch (error) {
    console.error('티켓 조회 에러:', error);
    return NextResponse.json(
      { error: '티켓 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 