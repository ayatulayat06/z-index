'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { PROJECTS } from '@/data/portfolio';
import { DivisionCategory } from '@/types/portfolio';

const CATEGORIES: ('ALL' | DivisionCategory)[] = [
  'ALL',
  'Programming',
  'Graphics',
  'Robotics',
  'Web & IT',
];

export const FeaturedPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | DivisionCategory>('ALL');

  const filteredProjects =
    activeTab === 'ALL'
      ? PROJECTS.slice(0, 4)
      : PROJECTS.filter((p) => p.category === activeTab).slice(0, 4);

  return (
    <section className="py-20 sm:py-28 relative border-b border-[#1A2230] bg-[#07080A]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            tag="SELECTED WORK"
            title="IDEAS ENGINEERED INTO REALITY."
            subtitle="Explore highlighted projects across software architectures, design systems, physical IoT nodes, and edge web platforms."
            className="mb-0"
          />

          <Button variant="outline" href="/portfolio" icon={<ArrowRight size={14} />}>
            View All Projects
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#1A2230]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-xs tech-mono uppercase tracking-wider transition-all duration-200 border ${
                activeTab === cat
                  ? 'bg-[#00E5FF] text-[#07080A] font-bold border-[#00E5FF]'
                  : 'bg-[#0E1117] text-[#94A3B8] border-[#1E2634] hover:text-[#F8FAFC] hover:border-[#273448]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#0B0E14] border border-[#1A2230] overflow-hidden hover:border-[#00E5FF]/50 transition-all duration-300 shadow-depth-1 flex flex-col"
            >
              {/* Project Image Frame */}
              <div className="relative h-56 sm:h-64 w-full bg-[#07080A] overflow-hidden border-b border-[#1A2230]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="tech-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#07080A]/90 border border-[#273448] text-[#00E5FF]">
                    {project.category}
                  </span>
                </div>

                {/* Year & Status */}
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <span className="tech-mono text-[10px] px-2 py-0.5 bg-[#07080A]/90 border border-[#273448] text-[#94A3B8]">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="tech-mono text-[11px] px-2 py-0.5 bg-[#121824] border border-[#1E2634] text-[#94A3B8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold tech-mono text-[#F8FAFC] group-hover:text-[#00E5FF] tracking-wider transition-colors"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button variant="secondary" href="/portfolio" icon={<ArrowRight size={16} />}>
            Explore All 8 Case Studies →
          </Button>
        </div>
      </Container>
    </section>
  );
};
