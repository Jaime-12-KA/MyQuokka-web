'use client';

import React, { useState } from 'react';

// 요금제 타입 정의
type PricingPlan = {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
};

// 자주 묻는 질문 타입 정의
type PricingFAQ = {
  question: string;
  answer: string;
};

export default function PricingPage() {
  return (
    <div>
      <h1>가격 페이지</h1>
      <p>여기에 가격 관련 내용을 추가하세요.</p>
    </div>
  );
} 