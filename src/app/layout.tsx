// app/layout.tsx
import '../styles/globals.css';

export const metadata = {
  title: 'MyQuokka - 한국에서의 외국인 생활 도우미',
  description: '한국에 거주하는 외국인들을 위한 종합 생활 지원 서비스'
};

// 이 레이아웃은 미들웨어에 의해 /ko 또는 다른 언어로 리다이렉션되기 전에 
// 잠시 보여질 수 있는 페이지입니다.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 실제 내용은 [lng]/layout.tsx에서 처리됩니다.
  return children;
}