import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/utils/database';
import User from '@/models/User';
import { compare } from 'bcryptjs';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "이메일", type: "email" },
        password: { label: "비밀번호", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('이메일과 비밀번호를 입력해주세요.');
        }

        await connectDB();
        
        const user = await User.findOne({ email: credentials.email });
        
        if (!user) {
          throw new Error('등록되지 않은 이메일입니다.');
        }
        
        const isPasswordCorrect = await compare(credentials.password, user.password);
        
        if (!isPasswordCorrect) {
          throw new Error('비밀번호가 일치하지 않습니다.');
        }
        
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          language: user.language,
        };
      }
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.language = user.language;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.language = token.language;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-default-secret-key',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 