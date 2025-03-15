// 변경 전: export const authOptions: AuthOptions = { ... }
// 변경 후:
import { AuthOptions } from 'next-auth';

const authOptions: AuthOptions = {
  // 기존 구성...
};

export { authOptions };  // 별도로 내보내기

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };