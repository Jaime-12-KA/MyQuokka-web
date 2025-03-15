# MyQuokka

MyQuokka는 한국에 거주하거나 방문하는 외국인들을 위한 종합 생활 지원 서비스 웹 애플리케이션입니다.

## 프로젝트 개요

이 프로젝트는 외국인들이 한국에서 겪는 언어 장벽, 문화적 차이, 행정 절차의 복잡성, 현지 네트워크 부족 등의 문제를 해결하여 한국 생활의 질을 향상시키는 것을 목표로 합니다.

### 주요 기능

- 데이터베이스 스타일의 정보 시스템 (카테고리 → 서브카테고리 → 상세 정보)
- 사용자 인증 및 다국어 지원
- 티켓팅 시스템을 통한 개인화된 지원 서비스
- AI 기반 챗봇 및 컨텐츠 추천
- 모바일 최적화된 반응형 디자인

## 기술 스택

- **프론트엔드**: React.js, Next.js, TypeScript, TailwindCSS
- **데이터베이스**: MongoDB (예정)
- **API 통합**: Google Cloud Translation API, KakaoMap API, TossPayments (예정)

## 개발 환경 설정

1. 저장소 클론하기
   ```
   git clone [repository-url]
   cd myquokka
   ```

2. 종속성 설치
   ```
   npm install
   ```

3. 개발 서버 실행
   ```
   npm run dev
   ```

4. 브라우저에서 확인
   ```
   http://localhost:3000
   ```

## 디렉토리 구조

```
myquokka/
├── public/             # 정적 파일
├── src/
│   ├── app/            # Next.js 13 App Router
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── styles/         # 전역 스타일 및 테마
│   ├── utils/          # 유틸리티 함수
│   ├── hooks/          # 커스텀 훅
│   └── api/            # API 라우트 및 통합
├── tailwind.config.js  # TailwindCSS 설정
└── tsconfig.json       # TypeScript 설정
```

## 기여 방법

1. 프로젝트 포크
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경 사항 커밋 (`git commit -m 'Add some amazing feature'`)
4. 브랜치 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 라이센스

이 프로젝트는 [라이센스명] 라이센스를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참조하세요. 