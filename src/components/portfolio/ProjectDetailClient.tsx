'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Terminal,
  Cpu,
  Calendar,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Breadcrumb } from '../layout/Breadcrumb';
import { StartProjectModal } from '../ui/StartProjectModal';
import { Project } from '@/types/portfolio';

interface ProjectDetailClientProps {
  project: Project;
  relatedProjects: Project[];
  nextProject?: Project;
}

export const ProjectDetailClient: React.FC<ProjectDetailClientProps> = ({
  project,
  relatedProjects,
  nextProject,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 sm:pb-28">
      {/* Top Header & Breadcrumbs */}
      <Container>
        <Breadcrumb
          items={[
            { label: 'PORTFOLIO', href: '/portfolio' },
            { label: project.title.toUpperCase() },
          ]}
        />

        {/* Project Hero Header */}
        <div className="py-8 border-b border-[#1A2230] space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="cyan" dot>
              {project.category}
            </Badge>
            <span className="tech-mono text-xs text-[#64748B]">
              STATUS: {project.status.toUpperCase()}
            </span>
            <span className="tech-mono text-xs text-[#64748B]">
              // YEAR: {project.year}
            </span>
            <span className="tech-mono text-xs text-[#00E5FF]">
              // {project.scope}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Main Case Study Media Gallery Visual */}
        <div className="relative my-10 h-72 sm:h-96 md:h-[480px] w-full bg-[#07080A] border border-[#1A2230] overflow-hidden shadow-depth-2">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/90 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
            <span className="tech-mono text-xs text-[#00E5FF] bg-[#07080A]/90 px-3 py-1.5 border border-[#273448]">
              SPECIFICATION SCHEMATIC // ARCHITECTURE VERIFIED
            </span>
            <span className="tech-mono text-xs text-[#94A3B8] bg-[#07080A]/90 px-3 py-1.5 border border-[#273448]">
              {project.architectureLayers.length} DISCRETE LAYERS
            </span>
          </div>
        </div>

        {/* Overview, Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-10 border-b border-[#1A2230]">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                <h3 className="tech-mono text-xs font-bold text-[#00E5FF] tracking-widest uppercase">
                  01 // OVERVIEW
                </h3>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                Architecture Context
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                <h3 className="tech-mono text-xs font-bold text-[#EF4444] tracking-widest uppercase">
                  02 // THE CHALLENGE
                </h3>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                Technical Bottlenecks & Constraints
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <h3 className="tech-mono text-xs font-bold text-[#10B981] tracking-widest uppercase">
                  03 // THE SOLUTION
                </h3>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                Engineered System Design
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Engineering Process */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <h3 className="tech-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
                  04 // ENGINEERING PROCESS
                </h3>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-6">
                Execution Sequence
              </h2>
              <div className="space-y-4">
                {project.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 bg-[#0B0E14] border border-[#1A2230] flex flex-col sm:flex-row sm:items-start gap-4"
                  >
                    <span className="tech-mono text-xl font-black text-[#00E5FF] shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[#F8FAFC] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Z-Index Architecture Stacking Breakdown */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                <h3 className="tech-mono text-xs font-bold text-[#00E5FF] tracking-widest uppercase">
                  05 // ARCHITECTURE LAYERING (Z-STACK)
                </h3>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-6">
                Stacking Context & Depth Decomposition
              </h2>
              <div className="space-y-3">
                {project.architectureLayers.map((layer) => (
                  <div
                    key={layer.name}
                    className="p-4 bg-[#0E121A] border-l-4 border-l-[#00E5FF] border border-[#1E2634] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="tech-mono text-[10px] px-2 py-0.5 bg-[#161D29] text-[#00E5FF] border border-[#273448]">
                          LAYER {layer.level}
                        </span>
                        <h4 className="text-sm font-bold text-[#F8FAFC]">
                          {layer.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#94A3B8] mt-1">
                        {layer.description}
                      </p>
                    </div>

                    <div className="shrink-0 text-right sm:text-right">
                      <span className="tech-mono text-xs text-[#38BDF8] bg-[#121824] px-2.5 py-1 border border-[#1E2634] inline-block">
                        {layer.technology}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="p-6 bg-[#0B0E14] border border-[#10B981]/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={18} className="text-[#10B981]" />
                <h3 className="tech-mono text-xs font-bold text-[#10B981] tracking-widest uppercase">
                  06 // VERIFIED OUTCOME
                </h3>
              </div>
              <p className="text-base text-[#F8FAFC] font-medium leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Right Column: Meta Telemetry Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Meta Box */}
            <div className="bg-[#0B0E14] border border-[#1A2230] p-6 space-y-6">
              <h3 className="tech-mono text-xs font-bold text-[#F8FAFC] tracking-widest uppercase border-b border-[#1A2230] pb-3">
                PROJECT TELEMETRY
              </h3>

              <div>
                <span className="tech-mono text-[11px] text-[#64748B] block mb-1">
                  DIVISION
                </span>
                <span className="text-sm font-bold text-[#F8FAFC]">
                  {project.category}
                </span>
              </div>

              <div>
                <span className="tech-mono text-[11px] text-[#64748B] block mb-1">
                  YEAR
                </span>
                <span className="text-sm font-bold text-[#F8FAFC]">
                  {project.year}
                </span>
              </div>

              <div>
                <span className="tech-mono text-[11px] text-[#64748B] block mb-1">
                  DOMAIN SCOPE
                </span>
                <span className="text-sm font-bold text-[#F8FAFC]">
                  {project.scope}
                </span>
              </div>

              <div>
                <span className="tech-mono text-[11px] text-[#64748B] block mb-1">
                  STATUS
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] tech-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  {project.status}
                </span>
              </div>

              <div>
                <span className="tech-mono text-[11px] text-[#64748B] block mb-2">
                  TECHNOLOGIES USED
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="tech-mono text-xs px-2.5 py-1 bg-[#121824] border border-[#1E2634] text-[#94A3B8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A2230]">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => setModalOpen(true)}
                  icon={<ArrowRight size={14} />}
                >
                  Initiate Similar Project
                </Button>
              </div>
            </div>

            {/* Division Capability Prompt */}
            <div className="bg-[#07080A] border border-[#1E2634] p-5">
              <h4 className="text-xs tech-mono text-[#00E5FF] uppercase tracking-wider mb-2">
                DIVISION EXPLORATION
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Learn more about our dedicated capabilities in {project.category}.
              </p>
              <Link
                href={`/services/${project.category.toLowerCase().replace(' & ', '-')}`}
                className="text-xs tech-mono text-[#F8FAFC] hover:text-[#00E5FF] flex items-center gap-1 font-bold"
              >
                <span>View {project.category} Services</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Next Project Navigator */}
        {nextProject && (
          <div className="py-12 border-b border-[#1A2230] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0B0E14] p-8 mt-12">
            <div>
              <span className="tech-mono text-xs text-[#64748B] tracking-wider block mb-1">
                NEXT CASE STUDY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                {nextProject.title}
              </h3>
              <p className="text-xs text-[#94A3B8] mt-1">
                {nextProject.category} // {nextProject.tagline}
              </p>
            </div>

            <Button
              variant="secondary"
              href={`/portfolio/${nextProject.slug}`}
              icon={<ArrowRight size={16} />}
            >
              Examine Next Project
            </Button>
          </div>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="py-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#F8FAFC]">
                Related Case Studies
              </h3>
              <Link
                href="/portfolio"
                className="tech-mono text-xs text-[#00E5FF] hover:underline"
              >
                All Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/portfolio/${rel.slug}`}
                  className="group bg-[#0B0E14] border border-[#1A2230] p-6 hover:border-[#00E5FF]/50 transition-colors flex items-start gap-4"
                >
                  <div className="w-16 h-16 relative shrink-0 bg-[#07080A] border border-[#1E2634] overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="tech-mono text-[10px] text-[#00E5FF] uppercase block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] line-clamp-1 mt-1">
                      {rel.tagline}
                    </p>
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
        preselectedDivision={project.category}
      />
    </div>
  );
};
