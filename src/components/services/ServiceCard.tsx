import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Palette, Cpu, Globe, CheckCircle2 } from 'lucide-react';
import { Service } from '@/types/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const icons: Record<string, React.ReactNode> = {
    Terminal: <Terminal size={24} className="text-[#00E5FF]" />,
    Palette: <Palette size={24} className="text-[#38BDF8]" />,
    Cpu: <Cpu size={24} className="text-[#10B981]" />,
    Globe: <Globe size={24} className="text-[#0284C7]" />,
  };

  const colors: Record<string, string> = {
    programming: 'border-l-[#00E5FF]',
    graphics: 'border-l-[#38BDF8]',
    robotics: 'border-l-[#10B981]',
    'web-it': 'border-l-[#0284C7]',
  };

  return (
    <div
      id={service.slug}
      className={`bg-[#0B0E14] border border-[#1A2230] p-8 sm:p-10 transition-all duration-300 shadow-depth-1 border-l-4 ${
        colors[service.slug] || 'border-l-[#00E5FF]'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#121824] border border-[#273448] rounded">
            {icons[service.iconName] || <Terminal size={24} />}
          </div>
          <div>
            <span className="tech-mono text-[10px] text-[#64748B] tracking-widest block">
              DIVISION 0{index + 1}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              {service.title}
            </h3>
          </div>
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#121824] border border-[#273448] text-xs font-bold tech-mono text-[#00E5FF] hover:border-[#00E5FF] transition-colors"
        >
          <span>FULL DIVISION PROFILE</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <p className="text-base text-[#94A3B8] leading-relaxed mb-8 max-w-4xl">
        {service.description}
      </p>

      {/* 6 Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {service.capabilities.map((cap) => (
          <div
            key={cap.title}
            className="p-4 bg-[#0E121A] border border-[#1E2634] hover:border-[#273448] transition-colors"
          >
            <h4 className="text-sm font-bold text-[#F8FAFC] mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              <span>{cap.title}</span>
            </h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
              {cap.description}
            </p>
            <ul className="space-y-1">
              {cap.features.slice(0, 2).map((feat) => (
                <li key={feat} className="text-[11px] text-[#64748B] flex items-center gap-1.5">
                  <span className="text-[#00E5FF]">›</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Technologies & Deep Dive Link */}
      <div className="pt-6 border-t border-[#1A2230] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="tech-mono text-xs text-[#64748B] mr-2">TECH STACK:</span>
          {service.technologies.map((t) => (
            <span
              key={t}
              className="tech-mono text-xs px-2.5 py-0.5 bg-[#121824] border border-[#1E2634] text-[#94A3B8]"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="text-xs tech-mono text-[#00E5FF] hover:underline flex items-center gap-1 font-bold"
        >
          <span>Explore {service.title} Architecture</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};
