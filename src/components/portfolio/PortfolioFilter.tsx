'use client';

import React from 'react';
import { DivisionCategory } from '@/types/portfolio';

interface PortfolioFilterProps {
  categories: ('ALL' | DivisionCategory)[];
  activeCategory: 'ALL' | DivisionCategory;
  onSelect: (category: 'ALL' | DivisionCategory) => void;
  counts: Record<string, number>;
}

export const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  categories,
  activeCategory,
  onSelect,
  counts,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#1A2230] mb-10">
      {categories.map((cat) => {
        const isSelected = activeCategory === cat;
        const count = counts[cat] || 0;

        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 text-xs tech-mono uppercase tracking-wider flex items-center gap-2 transition-all duration-200 border ${
              isSelected
                ? 'bg-[#00E5FF] text-[#07080A] font-bold border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                : 'bg-[#0B0E14] text-[#94A3B8] border-[#1E2634] hover:text-[#F8FAFC] hover:border-[#273448]'
            }`}
          >
            <span>{cat}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected ? 'bg-[#07080A] text-[#00E5FF]' : 'bg-[#161B24] text-[#64748B]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
