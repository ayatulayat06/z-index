import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'gray' | 'green' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
  dot = false,
}) => {
  const variantStyles = {
    cyan: 'border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]',
    blue: 'border-[#0284C7]/30 bg-[#0284C7]/10 text-[#38BDF8]',
    gray: 'border-[#273448] bg-[#121824] text-[#94A3B8]',
    green: 'border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981]',
    amber: 'border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#F59E0B]',
  };

  const dotColors = {
    cyan: 'bg-[#00E5FF]',
    blue: 'bg-[#38BDF8]',
    gray: 'bg-[#94A3B8]',
    green: 'bg-[#10B981]',
    amber: 'bg-[#F59E0B]',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border font-mono uppercase tracking-wider ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`} />}
      {children}
    </span>
  );
};
