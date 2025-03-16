import mongoose from 'mongoose';

// 전역 타입 선언
declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<any> | null;
  };
}

// MongoDB 연결 문자열 (환경 변수에서 가져오거나 기본값 사용)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myquokka';

if (!MONGODB_URI) {
  throw new Error('MongoDB URI가 정의되지 않았습니다. 환경 변수를 확인하세요.');
}

/**
 * 전역 변수로 mongoose 연결 상태를 캐싱합니다
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB; 