"use client";

interface CategoryCardProps {
  title: string;
  icon: string;
  color: string;
  onClick?: () => void;
}

export default function CategoryCard({ title, icon, color, onClick }: CategoryCardProps) {
  return (
    <div 
      className={`${color} rounded-lg p-6 text-center cursor-pointer transition-transform hover:-translate-y-2`}
      onClick={onClick}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-neutral-3">자세히 알아보기</p>
    </div>
  );
} 