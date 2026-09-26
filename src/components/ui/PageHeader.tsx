import React from 'react';
import { Container } from './Container';
import { Badge } from './Badge';

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  zIndexLayer?: number;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  zIndexLayer = 0,
}) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden border-b border-[#1A2230]">
      {/* Ambient Radial Mesh */}
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      <Container>
        <div className="relative z-stack-floating max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            {badge && <Badge variant="cyan" dot>{badge}</Badge>}
            <span className="tech-mono text-xs text-[#64748B] tracking-widest uppercase">
              LAYER_INDEX // Z:{zIndexLayer}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight leading-[1.1]">
            {title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
};
