import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/auth.config';
import connectDB from '@/utils/database';
import Ticket from '@/models/Ticket';
import mongoose from 'mongoose';

// 티켓 상세 조회
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' }, 
        { status: 401 }
      );
    }
    
    await connectDB();
    
    const ticketId = params.id;
    
    // ID 형식 검증
    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
      return NextResponse.json(
        { error: '유효하지 않은 티켓 ID입니다.' },
        { status: 400 }
      );
    }
    
    const ticket = await Ticket.findById(ticketId)
      .populate('userId', 'name email')
      .populate('assignedTo', 'name email');
    
    if (!ticket) {
      return NextResponse.json(
        { error: '티켓을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    
    // 관리자가 아니고 티켓 소유자가 아닌 경우 접근 거부
    if (session.user.role !== 'admin' && ticket.userId._id.toString() !== session.user.id) {
      return NextResponse.json(
        { error: '이 티켓에 접근할 권한이 없습니다.' },
        { status: 403 }
      );
    }
    
    return NextResponse.json(ticket);
  } catch (error) {
    console.error('티켓 조회 에러:', error);
    return NextResponse.json(
      { error: '티켓 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 티켓 업데이트
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' }, 
        { status: 401 }
      );
    }
    
    await connectDB();
    
    const ticketId = params.id;
    const { status, priority, assignedTo } = await req.json();
    
    // ID 형식 검증
    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
      return NextResponse.json(
        { error: '유효하지 않은 티켓 ID입니다.' },
        { status: 400 }
      );
    }
    
    // 티켓 존재 여부 확인
    const ticket = await Ticket.findById(ticketId);
    
    if (!ticket) {
      return NextResponse.json(
        { error: '티켓을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    
    // 관리자가 아니고 티켓 소유자가 아닌 경우 접근 거부
    if (session.user.role !== 'admin' && ticket.userId.toString() !== session.user.id) {
      return NextResponse.json(
        { error: '이 티켓을 수정할 권한이 없습니다.' },
        { status: 403 }
      );
    }
    
    // 업데이트 할 필드 설정
    const updateFields: any = {};
    
    if (status) updateFields.status = status;
    if (priority) updateFields.priority = priority;
    if (assignedTo && session.user.role === 'admin') updateFields.assignedTo = assignedTo;
    
    // 티켓 업데이트
    const updatedTicket = await Ticket.findByIdAndUpdate(
      ticketId,
      { $set: updateFields },
      { new: true }
    )
      .populate('userId', 'name email')
      .populate('assignedTo', 'name email');
    
    return NextResponse.json({
      message: '티켓이 성공적으로 업데이트되었습니다.',
      ticket: updatedTicket,
    });
  } catch (error) {
    console.error('티켓 업데이트 에러:', error);
    return NextResponse.json(
      { error: '티켓 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 티켓 메시지 추가
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' }, 
        { status: 401 }
      );
    }
    
    await connectDB();
    
    const ticketId = params.id;
    const { content } = await req.json();
    
    // 내용 검증
    if (!content || content.trim() === '') {
      return NextResponse.json(
        { error: '메시지 내용을 입력해주세요.' },
        { status: 400 }
      );
    }
    
    // ID 형식 검증
    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
      return NextResponse.json(
        { error: '유효하지 않은 티켓 ID입니다.' },
        { status: 400 }
      );
    }
    
    // 티켓 존재 여부 확인
    const ticket = await Ticket.findById(ticketId);
    
    if (!ticket) {
      return NextResponse.json(
        { error: '티켓을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    
    // 관리자가 아니고 티켓 소유자가 아닌 경우 접근 거부
    if (session.user.role !== 'admin' && ticket.userId.toString() !== session.user.id) {
      return NextResponse.json(
        { error: '이 티켓에 메시지를 추가할 권한이 없습니다.' },
        { status: 403 }
      );
    }
    
    // 메시지 추가
    const newMessage = {
      sender: session.user.id,
      content,
      timestamp: new Date(),
      isStaff: session.user.role === 'admin',
    };
    
    // 티켓 상태 변경 - 메시지 추가 시 'closed' 상태였다면 'in-progress'로 변경
    let statusChange = {};
    if (ticket.status === 'closed') {
      statusChange = { status: 'in-progress' };
    }
    
    // 티켓 업데이트
    const updatedTicket = await Ticket.findByIdAndUpdate(
      ticketId,
      { 
        $push: { messages: newMessage },
        ...statusChange
      },
      { new: true }
    )
      .populate('userId', 'name email')
      .populate('assignedTo', 'name email');
    
    return NextResponse.json({
      message: '메시지가 성공적으로 추가되었습니다.',
      ticket: updatedTicket,
    });
  } catch (error) {
    console.error('메시지 추가 에러:', error);
    return NextResponse.json(
      { error: '메시지 추가 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 