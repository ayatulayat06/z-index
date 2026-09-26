'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { StartProjectModal } from '../ui/StartProjectModal';
import { ArrowRight, Terminal, Palette, Cpu, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const [startProjectOpen, setStartProjectOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-[#050608] border-t border-[#1A2230] pt-16 pb-12 overflow-hidden text-sm">
        {/* Subtle grid background */}
        <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-stack-floating">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#1A2230]">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#0E1117] border border-[#273448] flex items-center justify-center text-[#00E5FF] font-black text-sm tech-mono">
                  Z
                </div>
                <span className="text-2xl font-black tracking-widest text-[#F8FAFC]">
                  Z-INDEX
                </span>
              </Link>

              <p className="tech-mono text-xs text-[#00E5FF] tracking-wider uppercase">
                {SITE_CONFIG.philosophy}
              </p>

              <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
                A private technology company engineering practical, high-performance solutions
                at the intersection of programming, design, robotics, and modern web platforms.
              </p>

              <div className="pt-2">
                <span className="tech-mono text-xs text-[#64748B] block">
                  LAYER PHILOSOPHY:
                </span>
                <span className="tech-mono text-xs text-[#94A3B8]">
                  Layer → Stack → Depth → Order → Interaction
                </span>
              </div>
            </div>

            {/* Column 1: Company */}
            <div>
              <h4 className="tech-mono text-xs font-bold text-[#F8FAFC] tracking-widest uppercase mb-4">
                COMPANY
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact */}
            <div>
              <h4 className="tech-mono text-xs font-bold text-[#F8FAFC] tracking-widest uppercase mb-4">
                CONTACT
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/contact" className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setStartProjectOpen(true)}
                    className="text-[#00E5FF] hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Start a Project</span>
                    <ArrowRight size={12} />
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="tech-mono text-xs font-bold text-[#F8FAFC] tracking-widest uppercase mb-4">
                SERVICES
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/services/programming"
                    className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors flex items-center gap-2"
                  >
                    <Terminal size={14} className="text-[#00E5FF]" />
                    <span>Programming</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/graphics"
                    className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors flex items-center gap-2"
                  >
                    <Palette size={14} className="text-[#38BDF8]" />
                    <span>Graphics</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/robotics"
                    className="text-[#94A3B8] hover:text-[#10B981] transition-colors flex items-center gap-2"
                  >
                    <Cpu size={14} className="text-[#10B981]" />
                    <span>Robotics</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-it"
                    className="text-[#94A3B8] hover:text-[#0284C7] transition-colors flex items-center gap-2"
                  >
                    <Globe size={14} className="text-[#0284C7]" />
                    <span>Web & IT</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Stacking System Note */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="tech-mono text-xs text-[#64748B]">
              {SITE_CONFIG.copyright}
            </p>
            <div className="flex items-center gap-3">
              <span className="tech-mono text-[10px] text-[#64748B]">
                STACKING_CONTEXT // RIGOROUS Z-INDEX SYSTEM
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            </div>
          </div>
        </div>
      </footer>

      <StartProjectModal
        isOpen={startProjectOpen}
        onClose={() => setStartProjectOpen(false)}
      />
    </>
  );
};
