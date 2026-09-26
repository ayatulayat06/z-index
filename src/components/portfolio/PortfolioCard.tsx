import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface PortfolioCardProps {
  project: Project;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const categoryColorMap = {
    Programming: 'text-[#00E5FF] border-[#00E5FF]/40',
    Graphics: 'text-[#38BDF8] border-[#38BDF8]/40',
    Robotics: 'text-[#10B981] border-[#10B981]/40',
    'Web & IT': 'text-[#0284C7] border-[#0284C7]/40',
  };

  const badgeColor = categoryColorMap[project.category] || 'text-[#00E5FF] border-[#00E5FF]/40';

  return (
    <article className="group bg-[#0B0E14] border border-[#1A2230] overflow-hidden hover:border-[#00E5FF]/50 transition-all duration-300 shadow-depth-1 flex flex-col justify-between">
      <div>
        {/* Visual Frame */}
        <div className="relative h-60 w-full bg-[#07080A] overflow-hidden border-b border-[#1A2230]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />

          {/* Category Tag */}
          <div className="absolute top-3.5 left-3.5">
            <span className={`tech-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#07080A]/90 border ${badgeColor}`}>
              {project.category}
            </span>
          </div>

          {/* Status Chip */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-2.5 py-0.5 bg-[#07080A]/90 border border-[#273448] text-[#94A3B8] tech-mono text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>{project.status}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-2 text-xs tech-mono text-[#64748B] mb-2">
            <span>Z:{project.architectureLayers[0]?.level ?? 0}</span>
            <span>//</span>
            <span>{project.year}</span>
            <span>//</span>
            <span>{project.scope}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 line-clamp-2">
            {project.tagline}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-7 pt-0">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="tech-mono text-[10px] px-2 py-0.5 bg-[#121824] border border-[#1E2634] text-[#94A3B8]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-[#1A2230] flex items-center justify-between">
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold tech-mono text-[#F8FAFC] group-hover:text-[#00E5FF] tracking-wider transition-colors"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <span className="text-[10px] tech-mono text-[#64748B]">
            {project.architectureLayers.length} LAYERS
          </span>
        </div>
      </div>
    </article>
  );
};
