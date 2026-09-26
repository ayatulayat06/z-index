import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const PRINCIPLES = [
  {
    step: '01',
    name: 'THINK',
    tagline: 'Start with the idea.',
    description: 'We deconstruct complex problems down to first principles. Rigorous analysis, constraint auditing, and algorithmic modeling precede any line of code.',
  },
  {
    step: '02',
    name: 'DESIGN',
    tagline: 'Create the experience.',
    description: 'Design is not superficial skin; it is visual ergonomics and information hierarchy. We engineer interfaces with mathematical spacing, deep contrast, and zero clutter.',
  },
  {
    step: '03',
    name: 'BUILD',
    tagline: 'Engineer the solution.',
    description: 'We write resilient, typed, and test-covered software, flash reliable microcontroller firmware, and deploy edge cloud systems optimized for 99.99% availability.',
  },
  {
    step: '04',
    name: 'EVOLVE',
    tagline: 'Improve continuously.',
    description: 'Technology is dynamic. We instrument telemetry, gather performance data, and systematically iterate solutions to guarantee long-term operational superiority.',
  },
];

export const WhyZIndex: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative border-b border-[#1A2230] bg-[#0A0D12]">
      <Container>
        <SectionHeading
          tag="CORE PRINCIPLES"
          title="WHY Z-INDEX?"
          subtitle="We do not operate as an ordinary freelance team or superficial agency. We are an engineering group governed by four uncompromising disciplines."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((p) => (
            <div
              key={p.name}
              className="bg-[#0B0E14] border border-[#1A2230] p-6 sm:p-8 relative hover:border-[#00E5FF]/40 transition-all duration-300 hover:-translate-y-1 shadow-depth-1 flex flex-col justify-between"
            >
              <div>
                <span className="tech-mono text-3xl font-black text-[#1E2634] block mb-4">
                  {p.step}
                </span>
                <h3 className="text-xl font-bold text-[#F8FAFC] tracking-wide mb-1">
                  {p.name}
                </h3>
                <p className="tech-mono text-xs text-[#00E5FF] mb-4">
                  {p.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1A2230] flex items-center justify-between">
                <span className="tech-mono text-[10px] text-[#64748B]">
                  DISCIPLINE_{p.step}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/50" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
