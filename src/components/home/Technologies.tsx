import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { TECHNOLOGIES } from '@/data/technologies';

export const Technologies: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative border-b border-[#1A2230] bg-[#07080A]">
      <Container>
        <SectionHeading
          tag="ENGINEERING STACK"
          title="BUILT WITH MODERN TECHNOLOGY"
          subtitle="We select tools based on mathematical performance, memory safety, and active ecosystem reliability. Only technologies Z-INDEX actually employs."
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="p-4 bg-[#0B0E14] border border-[#1A2230] hover:border-[#00E5FF]/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/40 group-hover:bg-[#00E5FF] transition-colors" />
                  <span className="tech-mono text-[9px] text-[#64748B]">
                    {tech.category.split(' ')[0]}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                  {tech.name}
                </h4>
              </div>

              <div className="mt-3 pt-2 border-t border-[#161D29]">
                <div className="flex flex-wrap gap-1">
                  {tech.divisions.map((d) => (
                    <span
                      key={d}
                      className="tech-mono text-[8px] text-[#64748B] uppercase"
                    >
                      {d.slice(0, 3)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Note */}
        <div className="mt-8 text-center">
          <p className="tech-mono text-xs text-[#64748B]">
            NO PROPRIETARY VENDOR LOCK-IN // STANDARDIZED OPEN PROTOCOLS // STRICT TYPE CHECKING
          </p>
        </div>
      </Container>
    </section>
  );
};
