'use client';

import React, { useState } from 'react';

// 리소스 타입 정의
type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  featured?: boolean;
};

// 카테고리 타입 정의
type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

export default function ResourcesPage() {
  return (
    <div>
      <h1>리소스 페이지</h1>
      <p>여기에 리소스 관련 내용을 추가하세요.</p>
    </div>
  );
} 