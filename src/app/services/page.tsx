'use client';

import React from 'react';

// 서비스 타입 정의
type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
};

// 고객 후기 타입 정의
type Testimonial = {
  id: number;
  name: string;
  nationality: string;
  quote: string;
  avatar?: string;
};

export default function ServicesPage() {
  return (
    <div>
      <h1>서비스 페이지</h1>
      <p>여기에 서비스 관련 내용을 추가하세요.</p>
    </div>
  );
} 