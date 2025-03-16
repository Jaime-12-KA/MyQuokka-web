import { redirect } from 'next/navigation';
import { fallbackLng } from '@/middleware-settings';

export default function Home() {
  // 기본 언어로 리디렉션
  redirect(`/${fallbackLng}`);
} 