import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';
import { TeamMember } from '@/types/team';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const departmentColors: Record<string, string> = {
    Programming: 'text-[#00E5FF] border-[#00E5FF]/40',
    Graphics: 'text-[#38BDF8] border-[#38BDF8]/40',
    Robotics: 'text-[#10B981] border-[#10B981]/40',
    'Web & IT': 'text-[#0284C7] border-[#0284C7]/40',
  };

  const badgeColor = departmentColors[member.department] || 'text-[#00E5FF] border-[#00E5FF]/40';

  return (
    <div className="bg-[#0B0E14] border border-[#1A2230] p-6 sm:p-7 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-depth-1 flex flex-col justify-between group">
      <div>
        {/* Profile Photo / Avatar Frame */}
        <div className="relative w-28 h-28 mx-auto mb-6 bg-[#07080A] rounded-full overflow-hidden border-2 border-[#1E2634] group-hover:border-[#00E5FF]/60 transition-colors">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Member Meta */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className={`tech-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${badgeColor}`}>
              {member.department}
            </span>
            {member.secondaryDepartment && (
              <span className="tech-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#273448] text-[#94A3B8]">
                {member.secondaryDepartment}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
            {member.name}
          </h3>

          <p className="tech-mono text-xs text-[#00E5FF] mt-1">
            {member.role}
          </p>
        </div>

        {/* Short Professional Bio */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed text-center mb-6 line-clamp-3">
          {member.bio}
        </p>

        {/* Core Skills Chips */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {member.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="tech-mono text-[10px] px-2 py-0.5 bg-[#121824] border border-[#1E2634] text-[#94A3B8]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links: View Profile & Direct Inquiry */}
      <div className="pt-4 border-t border-[#1A2230] flex items-center justify-between">
        <Link
          href={`/team/${member.slug}`}
          className="text-xs font-bold tech-mono text-[#F8FAFC] group-hover:text-[#00E5FF] flex items-center gap-1.5 transition-colors"
        >
          <span>VIEW PROFILE</span>
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>

        {member.email && (
          <span className="tech-mono text-[11px] text-[#64748B]">
            {member.projects.length} PROJECTS
          </span>
        )}
      </div>
    </div>
  );
};
