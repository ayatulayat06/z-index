import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { TeamCard } from '@/components/team/TeamCard';
import { TEAM_MEMBERS } from '@/data/team';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Contact & Team — Let’s Build Something',
  description:
    'Start a conversation with Z-INDEX. Send project requirements or browse our core engineering team members across Programming, Graphics, Robotics, and Web & IT.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pb-24 sm:pb-32">
      <PageHeader
        badge="TRANSMISSION & ROSTER"
        title="LET'S BUILD SOMETHING."
        description="Have an idea, project or problem you want to solve? Start a conversation with Z-INDEX or reach out to a specific team member."
        zIndexLayer={40}
      />

      {/* SECTION A — CONTACT Z-INDEX */}
      <section className="py-16 sm:py-20 border-b border-[#1A2230]">
        <Container>
          <div className="mb-12">
            <span className="tech-mono text-xs text-[#00E5FF] uppercase tracking-widest block mb-2">
              SECTION A // DIRECT INQUIRY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight">
              CONTACT Z-INDEX
            </h2>
            <p className="mt-2 text-base text-[#94A3B8]">
              Transmit your technical specifications, project requirements, or problem statements directly to our triage queue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION B — MEET THE TEAM */}
      <section id="team" className="py-20 sm:py-28 bg-[#0A0D12]">
        <Container>
          <div className="mb-14 max-w-3xl">
            <span className="tech-mono text-xs text-[#00E5FF] uppercase tracking-widest block mb-2">
              SECTION B // COMPANY ROSTER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight">
              MEET THE Z-INDEX TEAM
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We believe in transparency. Review the people behind our software, visual systems, physical robotics, and cloud platforms. You may route your technical inquiry directly to any member.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="tech-mono text-xs text-[#64748B]">
              STRUCTURED TEAM ARCHITECTURE // NO REAL PERSONAL INFORMATION COMPROMISED
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
