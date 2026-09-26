'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { WORKFLOW_STAGES } from '@/data/workflow';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const Workflow: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section className="py-20 sm:py-28 relative border-b border-[#1A2230] bg-[#07080A]">
      <Container>
        <SectionHeading
          tag="ENGINEERING LIFECYCLE"
          title="FROM IDEA TO CONTINUOUS EVOLUTION."
          subtitle="Our deterministic pipeline ensures every initiative transitions predictably from raw concept to mission-critical deployment."
          align="center"
        />

        {/* Visual Workflow Chain (Desktop Horizontal & Mobile Vertical) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const isCurrent = selectedStep === idx;
            return (
              <button
                key={stage.title}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 text-left border transition-all duration-200 relative ${
                  isCurrent
                    ? 'bg-[#121824] border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.15)] -translate-y-1'
                    : 'bg-[#0B0E14] border-[#1A2230] hover:border-[#273448]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`tech-mono text-xs font-bold ${
                      isCurrent ? 'text-[#00E5FF]' : 'text-[#64748B]'
                    }`}
                  >
                    {stage.number}
                  </span>
                  {idx < WORKFLOW_STAGES.length - 1 && (
                    <span className="hidden lg:block text-[#273448] text-xs">→</span>
                  )}
                </div>
                <h4 className="text-sm font-black text-[#F8FAFC] tracking-wider mb-1">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-[#94A3B8] line-clamp-1">
                  {stage.tagline}
                </p>
                {isCurrent && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E5FF]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="bg-[#0B0E14] border border-[#273448] p-6 sm:p-10 relative shadow-depth-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="tech-mono text-xs text-[#00E5FF] tracking-widest uppercase">
                  PHASE {WORKFLOW_STAGES[selectedStep].number} // PIPELINE EXECUTION
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-2">
                {WORKFLOW_STAGES[selectedStep].title} —{' '}
                <span className="text-[#38BDF8]">
                  {WORKFLOW_STAGES[selectedStep].tagline}
                </span>
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                {WORKFLOW_STAGES[selectedStep].description}
              </p>

              <div>
                <h5 className="tech-mono text-xs uppercase tracking-wider text-[#64748B] mb-3">
                  STAGE DELIVERABLES:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {WORKFLOW_STAGES[selectedStep].deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#121824] border border-[#273448] text-xs text-[#F8FAFC]"
                    >
                      <CheckCircle2 size={13} className="text-[#10B981]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center items-center p-6 bg-[#07080A] border border-[#1E2634] text-center">
              <span className="tech-mono text-4xl font-black text-[#00E5FF] mb-2">
                {WORKFLOW_STAGES[selectedStep].number}
              </span>
              <span className="tech-mono text-xs text-[#64748B] tracking-widest uppercase mb-4">
                STAGE IN PROGRESSION
              </span>
              <div className="text-xs text-[#94A3B8] tech-mono">
                {selectedStep === 0 && 'NEXT: 02 PLAN →'}
                {selectedStep === 1 && 'NEXT: 03 DESIGN →'}
                {selectedStep === 2 && 'NEXT: 04 BUILD →'}
                {selectedStep === 3 && 'NEXT: 05 TEST →'}
                {selectedStep === 4 && 'NEXT: 06 LAUNCH →'}
                {selectedStep === 5 && 'NEXT: 07 EVOLVE →'}
                {selectedStep === 6 && 'LOOP: CONTINUOUS MONITORING ↺'}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
