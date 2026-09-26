import React from 'react';

interface TechnologyBadgeProps {
  name: string;
  size?: 'sm' | 'md';
  highlighted?: boolean;
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
  name,
  size = 'sm',
  highlighted = false,
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 border tech-mono font-medium transition-colors ${
        highlighted
          ? 'bg-[#00E5FF]/10 border-[#00E5FF]/40 text-[#00E5FF]'
          : 'bg-[#121824] border-[#1E2634] text-[#94A3B8] hover:border-[#00E5FF]/40 hover:text-[#F8FAFC]'
      } ${size === 'sm' ? 'text-xs' : 'text-sm'}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/60" />
      {name}
    </span>
  );
};
