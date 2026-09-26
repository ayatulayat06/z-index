'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ZStackGraphic } from '../ui/ZStackGraphic';
import { StartProjectModal } from '../ui/StartProjectModal';

export const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#1A2230]">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />
      <div className="absolute inset-0 tech-grid-bg opacity-40 pointer-events-none" />

      {/* Decorative Technical Coordinates */}
      <div className="absolute top-28 right-8 hidden xl:block tech-mono text-[10px] text-[#64748B] space-y-1">
        <div>SYS_COORD: 40.7128° N, 74.0060° W</div>
        <div>DEPTH_BUFFER: 4_TIERS // Z:10-Z:1000</div>
        <div>CORE_ENGINE: ACTIVE // 100% HEALTH</div>
      </div>

      <Container className="relative z-stack-floating">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="cyan" dot>
                PRIVATE TECHNOLOGY COMPANY
              </Badge>
              <span className="tech-mono text-xs text-[#64748B] tracking-wider">
                CORE MATRIX // 01-04
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-[#F8FAFC] tracking-tight leading-[1.05]">
              BUILDING IDEAS.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#38BDF8] to-[#0284C7] block sm:inline">
                ENGINEERING
              </span>{' '}
              THE FUTURE.
            </h1>

            <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-xl font-normal">
              Z-INDEX combines programming, creative design, robotics and modern web technologies to transform ideas into practical digital and technological solutions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => setModalOpen(true)}
                icon={<ArrowRight size={16} />}
              >
                Start a Project
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="/portfolio"
                icon={<ArrowRight size={16} />}
              >
                Explore Portfolio
              </Button>
            </div>

            {/* Quick Dimension Telemetry */}
            <div className="pt-6 border-t border-[#1A2230] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="tech-mono text-[10px] text-[#64748B] block">DIV 01</span>
                <span className="text-xs font-bold text-[#F8FAFC]">Programming</span>
              </div>
              <div>
                <span className="tech-mono text-[10px] text-[#64748B] block">DIV 02</span>
                <span className="text-xs font-bold text-[#F8FAFC]">Graphics</span>
              </div>
              <div>
                <span className="tech-mono text-[10px] text-[#64748B] block">DIV 03</span>
                <span className="text-xs font-bold text-[#F8FAFC]">Robotics</span>
              </div>
              <div>
                <span className="tech-mono text-[10px] text-[#64748B] block">DIV 04</span>
                <span className="text-xs font-bold text-[#F8FAFC]">Web & IT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Visual Representation */}
          <div className="lg:col-span-6 flex justify-center">
            <ZStackGraphic />
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
