import React from 'react';
import Link from 'next/link';
import { Terminal, Palette, Cpu, Globe, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SITE_CONFIG } from '@/config/site';

export const CoreDivisions: React.FC = () => {
  const icons = {
    programming: <Terminal size={28} className="text-[#00E5FF]" />,
    graphics: <Palette size={28} className="text-[#38BDF8]" />,
    robotics: <Cpu size={28} className="text-[#10B981]" />,
    'web-it': <Globe size={28} className="text-[#0284C7]" />,
  };

  const borderColors = {
    programming: 'hover:border-[#00E5FF]/60',
    graphics: 'hover:border-[#38BDF8]/60',
    robotics: 'hover:border-[#10B981]/60',
    'web-it': 'hover:border-[#0284C7]/60',
  };

  return (
    <section className="py-20 sm:py-28 relative border-b border-[#1A2230]">
      <Container>
        <SectionHeading
          tag="CORE DIVISIONS"
          title="ONE COMPANY. MULTIPLE DIMENSIONS."
          subtitle="Four specialized engineering disciplines operating with unified precision to build software, interfaces, physical machines, and cloud environments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SITE_CONFIG.divisions.map((div) => {
            const icon = icons[div.id as keyof typeof icons];
            const hoverBorder = borderColors[div.id as keyof typeof borderColors];

            return (
              <div
                key={div.id}
                className={`relative bg-[#0B0E14] border border-[#1A2230] p-8 transition-all duration-300 flex flex-col justify-between ${hoverBorder} hover:-translate-y-1.5 shadow-depth-1 group`}
              >
                {/* Number & Icon Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="tech-mono text-3xl font-black text-[#273448] group-hover:text-[#F8FAFC] transition-colors">
                      {div.number}
                    </span>
                    <div className="p-3 bg-[#121824] border border-[#273448] rounded group-hover:border-[#00E5FF]/50 transition-colors">
                      {icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight mb-3">
                    {div.name}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {div.description}
                  </p>
                </div>

                {/* Tags & Explore Link */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {div.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-mono text-xs px-2.5 py-1 bg-[#121824] border border-[#1E2634] text-[#94A3B8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${div.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold tech-mono text-[#00E5FF] hover:text-[#38BDF8] tracking-wider group-hover:translate-x-1 transition-all"
                  >
                    <span>EXPLORE CAPABILITIES</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Corner Technical Marks */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00E5FF]/40" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00E5FF]/40" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
