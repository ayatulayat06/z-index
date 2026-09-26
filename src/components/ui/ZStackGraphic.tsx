'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Palette, Cpu, Globe, ArrowUpRight } from 'lucide-react';

interface LayerData {
  id: string;
  name: string;
  divisionNumber: string;
  zIndexVal: number;
  icon: React.ReactNode;
  tagline: string;
  tech: string[];
  color: string;
  slug: string;
}

const LAYERS: LayerData[] = [
  {
    id: 'robotics',
    name: 'ROBOTICS & AUTOMATION',
    divisionNumber: '03',
    zIndexVal: 40,
    icon: <Cpu size={20} />,
    tagline: 'Physical computing, microcontrollers, sensor telemetry & IoT',
    tech: ['Arduino', 'IoT', 'Python', 'C/C++'],
    color: '#10B981',
    slug: '/services/robotics',
  },
  {
    id: 'graphics',
    name: 'GRAPHICS & DIGITAL DESIGN',
    divisionNumber: '02',
    zIndexVal: 30,
    icon: <Palette size={20} />,
    tagline: 'Visual systems, UI/UX architecture, token systems & brand craft',
    tech: ['Design Systems', 'CSS3', 'Typography', 'Figma'],
    color: '#38BDF8',
    slug: '/services/graphics',
  },
  {
    id: 'programming',
    name: 'PROGRAMMING',
    divisionNumber: '01',
    zIndexVal: 20,
    icon: <Terminal size={20} />,
    tagline: 'Distributed algorithms, backend systems, APIs & automation',
    tech: ['TypeScript', 'Next.js', 'Node.js', 'Python'],
    color: '#00E5FF',
    slug: '/services/programming',
  },
  {
    id: 'webit',
    name: 'WEB & IT SOLUTIONS',
    divisionNumber: '04',
    zIndexVal: 10,
    icon: <Globe size={20} />,
    tagline: 'Edge cloud platforms, sub-second web apps, security & CDN',
    tech: ['Cloud Infra', 'SSR', 'Edge CDN', 'DevOps'],
    color: '#0284C7',
    slug: '/services/web-it',
  },
];

export const ZStackGraphic: React.FC = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-xl mx-auto py-8">
      {/* Decorative background depth frame */}
      <div className="absolute -inset-4 bg-[#0B0E14]/40 border border-[#1A2230] rounded-xl tech-grid-bg opacity-70 pointer-events-none" />
      
      {/* Telemetry header */}
      <div className="flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="tech-mono text-xs text-[#94A3B8] tracking-wider uppercase">
            ACTIVE STACK ARCHITECTURE // 4 DIMENSIONS
          </span>
        </div>
        <span className="tech-mono text-[11px] text-[#64748B]">
          HOVER TO INSPECT LAYER
        </span>
      </div>

      {/* Layered Stack Container */}
      <div className="relative flex flex-col space-y-[-24px] sm:space-y-[-28px] pt-4 pb-8 perspective-1000">
        {LAYERS.map((layer, idx) => {
          const isHovered = hoveredLayer === layer.id;
          const isDimmed = hoveredLayer !== null && !isHovered;

          // Compute responsive margin indentation for pyramid stack effect
          const indentStyles = [
            'w-[86%] mx-auto',
            'w-[92%] mx-auto',
            'w-[96%] mx-auto',
            'w-full mx-auto',
          ][idx];

          return (
            <div
              key={layer.id}
              onMouseEnter={() => setHoveredLayer(layer.id)}
              onMouseLeave={() => setHoveredLayer(null)}
              style={{
                zIndex: isHovered ? 60 : layer.zIndexVal,
              }}
              className={`relative transition-all duration-300 transform ${indentStyles} ${
                isHovered
                  ? '-translate-y-3 scale-[1.02] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] border-[#00E5FF]'
                  : isDimmed
                  ? 'opacity-65 scale-[0.98]'
                  : 'hover:-translate-y-1'
              }`}
            >
              <div
                className="relative bg-[#0E121A] border border-[#222C3D] p-4 sm:p-5 transition-colors duration-300"
                style={{
                  borderLeftColor: layer.color,
                  borderLeftWidth: '4px',
                  boxShadow: isHovered ? `0 0 25px ${layer.color}30` : undefined,
                }}
              >
                {/* Layer Stacking Tag & Division Indicator */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="p-1.5 rounded bg-[#161D29] border border-[#273448]"
                      style={{ color: layer.color }}
                    >
                      {layer.icon}
                    </span>
                    <div>
                      <span className="tech-mono text-[10px] text-[#64748B] block tracking-widest">
                        DIMENSION {layer.divisionNumber}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#F8FAFC] tracking-wide">
                        {layer.name}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="tech-mono text-[10px] px-2 py-0.5 rounded bg-[#161D29] text-[#94A3B8] border border-[#273448]">
                      Z:{layer.zIndexVal}
                    </span>
                    <Link
                      href={layer.slug}
                      aria-label={`Explore ${layer.name}`}
                      className="p-1.5 text-[#94A3B8] hover:text-[#00E5FF] hover:bg-[#161D29] rounded transition-colors"
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs text-[#94A3B8] line-clamp-1 mb-2">
                  {layer.tagline}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {layer.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-mono text-[10px] px-2 py-0.5 bg-[#121824] border border-[#1E2634] text-[#94A3B8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Subtle corner tech indicator */}
                <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#64748B]/40" />
                <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#64748B]/40" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Layer hierarchy indicator */}
      <div className="mt-2 text-center">
        <span className="tech-mono text-[11px] text-[#64748B] tracking-widest uppercase">
          [ DEPTH ORDER: LAYER → STACK → DEPTH → ORDER → INTERACTION ]
        </span>
      </div>
    </div>
  );
};
