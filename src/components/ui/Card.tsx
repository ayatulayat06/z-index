import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  depth?: 1 | 2 | 3;
  as?: 'div' | 'article' | 'section';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  interactive = true,
  depth = 1,
  as: Component = 'div',
}) => {
  const depthStyles = {
    1: 'shadow-depth-1',
    2: 'shadow-depth-2',
    3: 'shadow-depth-3',
  };

  return (
    <Component
      className={`relative bg-[#0B0E14] border border-[#1A2230] p-6 sm:p-8 transition-all duration-300 ${
        interactive ? 'hover:border-[#00E5FF]/40 hover:-translate-y-1' : ''
      } ${depthStyles[depth]} ${className}`}
    >
      {/* Corner Technical Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00E5FF]/40" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00E5FF]/40" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00E5FF]/40" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00E5FF]/40" />
      {children}
    </Component>
  );
};
