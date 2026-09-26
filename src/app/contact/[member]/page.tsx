import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TeamProfileClient } from '@/components/team/TeamProfileClient';
import { TEAM_MEMBERS } from '@/data/team';
import { PROJECTS } from '@/data/portfolio';
import { constructMetadata } from '@/lib/seo';

interface MemberPageProps {
  params: Promise<{ member: string }>;
}

export async function generateStaticParams() {
  return TEAM_MEMBERS.map((member) => ({
    member: member.slug,
  }));
}

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const { member: slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);

  if (!member) {
    return { title: 'Team Member Not Found' };
  }

  return constructMetadata({
    title: `${member.name} — ${member.role}`,
    description: member.bio,
    path: `/contact/${member.slug}`,
    keywords: [member.name, member.role, member.department, ...member.skills],
    ogImage: member.photo,
    type: 'profile',
  });
}

export default async function MemberDetailPage({ params }: MemberPageProps) {
  const { member: slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  const memberProjects = PROJECTS.filter((p) =>
    member.projects.includes(p.slug)
  );

  return (
    <TeamProfileClient
      member={member}
      memberProjects={memberProjects}
    />
  );
}
