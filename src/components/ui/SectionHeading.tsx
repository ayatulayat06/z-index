import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {tag && (
        <div className={`mb-4 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <Badge variant="cyan" dot>
            {tag}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-2 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="h-0.5 w-12 bg-[#00E5FF]" />
        <div className="h-0.5 w-3 bg-[#0284C7]" />
        <div className="h-0.5 w-1 bg-[#273448]" />
      </div>
    </div>
  );
};
