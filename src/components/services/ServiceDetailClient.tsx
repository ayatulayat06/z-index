'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Terminal,
  Palette,
  Cpu,
  Globe,
  CheckCircle2,
  Layers,
  ArrowLeft,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Breadcrumb } from '../layout/Breadcrumb';
import { StartProjectModal } from '../ui/StartProjectModal';
import { Service } from '@/types/services';
import { Project } from '@/types/portfolio';

interface ServiceDetailClientProps {
  service: Service;
  relatedProjects: Project[];
}

export const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({
  service,
  relatedProjects,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const icons: Record<string, React.ReactNode> = {
    Terminal: <Terminal size={32} className="text-[#00E5FF]" />,
    Palette: <Palette size={32} className="text-[#38BDF8]" />,
    Cpu: <Cpu size={32} className="text-[#10B981]" />,
    Globe: <Globe size={32} className="text-[#0284C7]" />,
  };

  return (
    <div className="pt-28 pb-24 sm:pb-32">
      <Container>
        <Breadcrumb
          items={[
            { label: 'SERVICES', href: '/services' },
            { label: service.title.toUpperCase() },
          ]}
        />

        {/* Service Hero */}
        <div className="py-8 border-b border-[#1A2230] space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#121824] border border-[#273448] rounded">
              {icons[service.iconName]}
            </div>
            <div>
              <Badge variant="cyan" dot>
                CORE DIVISION
              </Badge>
              <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight mt-1">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Overview & Engineering Philosophy */}
        <div className="py-12 border-b border-[#1A2230] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl font-bold text-[#F8FAFC]">
              Operational Overview
            </h2>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              {service.description}
            </p>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              Every deliverable within our {service.title} division adheres to strict engineering constraints: modular component isolation, zero extraneous runtime overhead, comprehensive automated test coverage, and transparent code governance.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#0B0E14] border border-[#1A2230] p-6 space-y-4">
            <h3 className="tech-mono text-xs font-bold text-[#F8FAFC] tracking-wider uppercase border-b border-[#1A2230] pb-2">
              DIVISION INITIATIVE
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Have a problem matching our {service.title} capabilities? Engage directly with our team.
            </p>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => setModalOpen(true)}
              icon={<ArrowRight size={14} />}
            >
              Start a {service.title} Project
            </Button>
          </div>
        </div>

        {/* Capabilities Full Breakdown */}
        <div className="py-16 border-b border-[#1A2230]">
          <div className="mb-10">
            <Badge variant="cyan" dot className="mb-2">
              SPECIALIZED MATRIX
            </Badge>
            <h2 className="text-3xl font-extrabold text-[#F8FAFC]">
              Core Capabilities &amp; Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 bg-[#0B0E14] border border-[#1A2230] hover:border-[#00E5FF]/40 transition-colors shadow-depth-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                    <span>{cap.title}</span>
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A2230]">
                  <span className="tech-mono text-[10px] text-[#64748B] block mb-2 uppercase">
                    FEATURE CRITERIA:
                  </span>
                  <ul className="space-y-1.5">
                    {cap.features.map((feat) => (
                      <li
                        key={feat}
                        className="text-xs text-[#F8FAFC] flex items-center gap-2"
                      >
                        <CheckCircle2 size={12} className="text-[#10B981] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Process */}
        <div className="py-16 border-b border-[#1A2230]">
          <div className="mb-10">
            <Badge variant="cyan" dot className="mb-2">
              METHODOLOGY
            </Badge>
            <h2 className="text-3xl font-extrabold text-[#F8FAFC]">
              Engineering &amp; Verification Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.engineeringProcess.map((proc) => (
              <div
                key={proc.step}
                className="p-6 bg-[#0B0E14] border border-[#1A2230]"
              >
                <span className="tech-mono text-2xl font-black text-[#00E5FF] block mb-3">
                  {proc.step}
                </span>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {proc.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Employed */}
        <div className="py-16 border-b border-[#1A2230]">
          <div className="mb-8">
            <h3 className="tech-mono text-xs font-bold text-[#F8FAFC] tracking-widest uppercase mb-2">
              TECHNOLOGIES DEPLOYED IN THIS DIVISION
            </h3>
            <p className="text-sm text-[#94A3B8]">
              Battle-tested tools and frameworks utilized by our {service.title} engineers.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {service.technologies.map((t) => (
              <span
                key={t}
                className="tech-mono text-xs px-3 py-1.5 bg-[#0B0E14] border border-[#273448] text-[#F8FAFC]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="py-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#F8FAFC]">
                Case Studies from this Division
              </h3>
              <Link
                href="/portfolio"
                className="tech-mono text-xs text-[#00E5FF] hover:underline"
              >
                View Full Portfolio →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.slug}`}
                  className="group bg-[#0B0E14] border border-[#1A2230] p-6 hover:border-[#00E5FF]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="tech-mono text-[10px] text-[#00E5FF] uppercase block mb-1">
                      {p.category} // {p.year}
                    </span>
                    <h4 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors mb-2">
                      {p.title}
                    </h4>
                    <p className="text-sm text-[#94A3B8] line-clamp-2 mb-4">
                      {p.description}
                    </p>
                  </div>
                  <div className="text-xs tech-mono text-[#F8FAFC] flex items-center gap-1 font-bold group-hover:text-[#00E5FF]">
                    <span>Read Case Study</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>

      <StartProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedDivision={service.title}
      />
    </div>
  );
};
