'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  CheckCircle2,
  FolderGit2,
  Terminal,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Breadcrumb } from '../layout/Breadcrumb';
import { StartProjectModal } from '../ui/StartProjectModal';
import { TeamMember } from '@/types/team';
import { Project } from '@/types/portfolio';

interface TeamProfileClientProps {
  member: TeamMember;
  memberProjects: Project[];
}

export const TeamProfileClient: React.FC<TeamProfileClientProps> = ({
  member,
  memberProjects,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-24 sm:pb-32">
      <Container>
        <Breadcrumb
          items={[
            { label: 'CONTACT & TEAM', href: '/contact' },
            { label: member.name.toUpperCase() },
          ]}
        />

        {/* Profile Header Hero */}
        <div className="py-10 border-b border-[#1A2230] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#1E2634] shadow-depth-2">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cyan" dot>
                {member.department}
              </Badge>
              {member.secondaryDepartment && (
                <Badge variant="gray">
                  {member.secondaryDepartment}
                </Badge>
              )}
              <span className="tech-mono text-xs text-[#64748B]">
                ID: Z-MEMBER-{member.id.toUpperCase().slice(0, 8)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight">
              {member.name}
            </h1>

            <p className="tech-mono text-base text-[#00E5FF]">
              {member.role}
            </p>

            <p className="text-base text-[#94A3B8] leading-relaxed max-w-2xl">
              {member.bio}
            </p>

            {/* Direct Connect Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setModalOpen(true)}
                icon={<Mail size={14} />}
              >
                Inquire Directly With {member.name.split(' ')[0]}
              </Button>

              {member.socialLinks?.github && (
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 bg-[#121824] border border-[#273448] text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF] transition-colors flex items-center justify-center w-9 h-9"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}

              {member.socialLinks?.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2 bg-[#121824] border border-[#273448] text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF] transition-colors flex items-center justify-center w-9 h-9"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Professional Bio & Responsibilities */}
        <div className="py-12 border-b border-[#1A2230] grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">
                Professional Background
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                {member.detailedBio}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">
                Core Responsibilities at Z-INDEX
              </h3>
              <div className="space-y-3">
                {member.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#0B0E14] border border-[#1A2230] flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-[#00E5FF] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#F8FAFC] leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Skills & Meta */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B0E14] border border-[#1A2230] p-6 space-y-6">
              <h3 className="tech-mono text-xs font-bold text-[#F8FAFC] tracking-widest uppercase border-b border-[#1A2230] pb-3">
                TECHNICAL PROFICIENCIES
              </h3>

              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tech-mono text-xs px-3 py-1 bg-[#121824] border border-[#273448] text-[#F8FAFC]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {member.email && (
                <div className="pt-4 border-t border-[#1A2230]">
                  <span className="tech-mono text-[10px] text-[#64748B] block mb-1">
                    INTERNAL ROUTING ADDRESS
                  </span>
                  <span className="text-xs text-[#00E5FF] tech-mono">
                    {member.email}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Associated Case Studies */}
        {memberProjects.length > 0 && (
          <div className="py-16 border-b border-[#1A2230]">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
                Projects Led / Contributed to by {member.name}
              </h3>
              <p className="text-sm text-[#94A3B8]">
                Explore live case studies showcasing this member&apos;s architectural contributions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {memberProjects.map((proj) => (
                <Link
                  key={proj.id}
                  href={`/portfolio/${proj.slug}`}
                  className="group bg-[#0B0E14] border border-[#1A2230] p-6 hover:border-[#00E5FF]/50 transition-colors flex items-start gap-4"
                >
                  <div className="w-20 h-20 relative shrink-0 bg-[#07080A] border border-[#1E2634] overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="tech-mono text-[10px] text-[#00E5FF] uppercase block mb-1">
                      {proj.category} // {proj.year}
                    </span>
                    <h4 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] line-clamp-2 mt-1">
                      {proj.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="text-xs tech-mono text-[#94A3B8] hover:text-[#00E5FF] inline-flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            <span>Return to Contact &amp; Full Team Directory</span>
          </Link>
        </div>
      </Container>

      <StartProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedDivision={member.department}
        preselectedMember={member.name}
      />
    </div>
  );
};
