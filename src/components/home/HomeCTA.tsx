'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { StartProjectModal } from '../ui/StartProjectModal';

export const HomeCTA: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#0A0D12]">
      {/* Visual accents */}
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      <Container className="relative z-stack-floating">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-[#0B0E14]/80 border border-[#273448] p-8 sm:p-16 shadow-depth-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] tech-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            DIRECT COLLABORATION ENGAGEMENT
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight leading-tight">
            HAVE AN IDEA?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#38BDF8] to-[#0284C7] block sm:inline">
              LET&apos;S BUILD IT.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Whether you need custom software engines, visual identity architectures, IoT sensor telemetry, or high-throughput web platforms, Z-INDEX engineers are ready to build.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setModalOpen(true)}
              icon={<ArrowRight size={18} />}
            >
              Start a Project
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="/portfolio"
              icon={<ArrowRight size={18} />}
            >
              Explore Our Work
            </Button>
          </div>

          <div className="pt-6 border-t border-[#1A2230] flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B] tech-mono">
            <span>DIRECT ACCESS TO ENGINEERS</span>
            <span>•</span>
            <span>TRANSPARENT REPOSITORIES</span>
            <span>•</span>
            <span>CONTINUOUS OBSERVABILITY</span>
          </div>
        </div>
      </Container>

      <StartProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
