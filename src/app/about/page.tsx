import { Metadata } from 'next';
import Link from 'next/link';
import {
  Terminal,
  Palette,
  Cpu,
  Globe,
  ArrowRight,
  CheckCircle2,
  Layers,
  Compass,
  Zap,
} from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ABOUT_PROCESS_TIMELINE } from '@/data/workflow';
import { SITE_CONFIG } from '@/config/site';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'About — Technology × Creativity × Engineering',
  description:
    'Z-INDEX combines programming, creative design, robotics and modern web technologies to transform ideas into practical digital and physical experiences.',
  path: '/about',
});

export default function AboutPage() {
  const divisions = [
    {
      name: 'Programming',
      number: '01',
      icon: <Terminal size={24} className="text-[#00E5FF]" />,
      lead: 'Ayat & Manop (Z programmer)',
      desc: 'The Programming division engineers enterprise-grade software architectures, distributed backend logic, and robust cross-platform applications. We design custom algorithms, asynchronous task workers, and type-safe API ecosystems that deliver determinism and sub-millisecond execution under high concurrency.',
      capabilities: [
        'Full-Stack Web & Mobile Architecture',
        'Distributed Task Schedulers & Workers',
        'Type-Safe REST & GraphQL APIs',
        'State Machines & Automation Logic',
      ],
      stack: 'TypeScript, Next.js, Node.js, Python, Flutter, Git',
    },
    {
      name: 'Graphics & Digital Design',
      number: '02',
      icon: <Palette size={24} className="text-[#38BDF8]" />,
      lead: 'Mongchaihla Marma',
      desc: 'Treating design as an engineering discipline, the Graphics division architects systematic visual languages, living design tokens, and ergonomic interfaces. We craft high-contrast dark visual foundations, mathematical layout grids, and brand systems that make complex technical software intuitive and accessible.',
      capabilities: [
        'Mathematical Design Token Systems',
        'Ergonomic High-Density UI/UX',
        'Technical Brand Architecture & Identity',
        'Vector Schematics & Blueprint Graphics',
      ],
      stack: 'Figma, Design Tokens, Tailwind CSS, HTML5, Accessible Primitives',
    },
    {
      name: 'Robotics & Automation',
      number: '03',
      icon: <Cpu size={24} className="text-[#10B981]" />,
      lead: 'Arafat Abir',
      desc: 'Bridging digital software with physical hardware, the Robotics division specializes in microcontroller firmware, physical computing, and real-time sensor telemetry. We engineer low-power IoT telemetry nodes, electromechanical actuation systems, and deterministic automation test benches built for extreme durability.',
      capabilities: [
        'Bare-Metal Arduino & C/C++ Firmware',
        'Low-Power Edge IoT Sensor Telemetry',
        'Multi-Axis Actuator & Motion Systems',
        'Hardware Prototyping & Stress Diagnostics',
      ],
      stack: 'Arduino, Embedded C/C++, MQTT, I2C/SPI, Python',
    },
    {
      name: 'Web & IT Solutions',
      number: '04',
      icon: <Globe size={24} className="text-[#0284C7]" />,
      lead: 'Ayat',
      desc: 'The Web & IT division develops high-performance web platforms, global edge caching networks, and mission-critical cloud deployments. We optimize applications for sub-second Largest Contentful Paint, maintain 99.99% operational availability, and implement zero-trust cybersecurity headers across all deployments.',
      capabilities: [
        'Server-Rendered React & Next.js Platforms',
        'Global Anycast Edge Caching & CDNs',
        'Core Web Vitals Performance Tuning',
        'SSL, DNS & Security Header Hardening',
      ],
      stack: 'Next.js, React 19, TypeScript, Cloudflare/Edge, Firebase',
    },
  ];

  return (
    <div className="pb-24 sm:pb-32">
      <PageHeader
        badge="COMPANY PROFILE"
        title="WE BUILD MORE THAN SOFTWARE."
        description="Z-INDEX combines technology, creativity and engineering to transform ideas into meaningful digital and physical experiences. A private technology company where ideas move up the stack."
        zIndexLayer={10}
      />

      {/* Section: Who We Are & Manifesto */}
      <section className="py-20 border-b border-[#1A2230]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Badge variant="cyan" dot className="mb-4">
                WHO WE ARE
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight leading-tight mb-6">
                An Engineering Group Governed by Structural Honesty.
              </h2>
              <p className="tech-mono text-sm text-[#00E5FF] leading-relaxed mb-6">
                &ldquo;Where Ideas Move Up the Stack.&rdquo;
              </p>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Z-INDEX is not an agency built on disposable templates or superficial hype. We are a private technology company engineered to solve hard problems across the digital and physical spectrum.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base text-[#94A3B8] leading-relaxed bg-[#0B0E14] border border-[#1A2230] p-8 sm:p-10 shadow-depth-1">
              <p>
                From distributed software engines running on heterogeneous compute clusters, to precision-calibrated microcontroller loops and multi-axis mechanical actuators, our multidisciplinary team treats every problem as an integrated system.
              </p>
              <p>
                We believe software and hardware should not be segregated into disjointed silos. When software engineers understand circuit timings, and designers understand CSS layout engines and token mathematics, the products built achieve a level of cohesion, speed, and durability that conventional teams cannot match.
              </p>
              <div className="pt-4 border-t border-[#1A2230] flex items-center justify-between tech-mono text-xs text-[#64748B]">
                <span>PRIVATE TECHNICAL CHARTER</span>
                <span>Z-INDEX // EST. 2024</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Mission & Vision */}
      <section className="py-20 border-b border-[#1A2230] bg-[#0A0D12]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-[#0B0E14] border border-[#1A2230] p-8 sm:p-10 relative shadow-depth-1 border-t-4 border-t-[#00E5FF]">
              <div className="flex items-center gap-2 mb-4">
                <Compass size={20} className="text-[#00E5FF]" />
                <span className="tech-mono text-xs font-bold text-[#00E5FF] tracking-widest uppercase">
                  OUR MISSION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-4">
                Make technology useful, creative and accessible.
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Too much modern technology creates friction rather than utility. Our mission is to engineer systems that operate reliably under real-world constraints, stripping away unneeded complexity while empowering individuals and enterprises to execute ambitious work.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0B0E14] border border-[#1A2230] p-8 sm:p-10 relative shadow-depth-1 border-t-4 border-t-[#38BDF8]">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={20} className="text-[#38BDF8]" />
                <span className="tech-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
                  OUR VISION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-4">
                Build a future where ideas can move from imagination to reality.
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Ideas are fragile when trapped in isolation. We envision a future where the transition from conceptual sketch to functioning physical device, scalable cloud platform, or digital tool is seamless, deterministic, and verifiable.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Core Areas */}
      <section className="py-20 border-b border-[#1A2230]">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="cyan" dot className="mb-3">
              FOUR PILLARS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              The Four Core Areas
            </h2>
            <p className="mt-4 text-base text-[#94A3B8]">
              Operating as distinct yet interconnected engineering capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((d) => (
              <div
                key={d.name}
                className="bg-[#0B0E14] border border-[#1A2230] p-6 sm:p-8 hover:border-[#00E5FF]/40 transition-colors flex flex-col justify-between shadow-depth-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="tech-mono text-xs text-[#64748B]">
                      DIV {d.number}
                    </span>
                    <div className="p-2 bg-[#121824] border border-[#1E2634] rounded">
                      {d.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-1.5">
                    {d.name}
                  </h3>
                  <div className="mb-4">
                    <span className="inline-block tech-mono text-xs text-[#00E5FF] bg-[#121824] px-2.5 py-1 border border-[#1E2634]">
                      LEAD: {d.lead}
                    </span>
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {d.desc}
                  </p>
                  <div className="space-y-2 mb-6 border-t border-[#1A2230] pt-4">
                    <span className="tech-mono text-[10px] text-[#64748B] uppercase tracking-wider block">
                      Core Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {d.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1A2230] flex items-center justify-between tech-mono text-xs text-[#64748B]">
                  <span>CORE STACK:</span>
                  <span className="text-[#94A3B8] text-right truncate ml-2">{d.stack}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section: Philosophy */}
      <section className="py-20 border-b border-[#1A2230] bg-[#07080A]">
        <Container>
          <div className="bg-[#0B0E14] border border-[#273448] p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl">
              <Badge variant="cyan" dot className="mb-4">
                CORE PHILOSOPHY
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight mb-6">
                Technology should solve problems, create possibilities and improve experiences.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                <p>
                  At Z-INDEX, we reject meaningless technical busywork. Every architecture we recommend, every line of TypeScript we author, and every circuit schematic we route serves an explicit purpose: reducing entropy, eliminating friction, and unlocking human leverage.
                </p>
                <p>
                  We measure code quality by its maintainability five years from now, not by how quickly it was thrown together yesterday. That is the commitment of an engineering-first company.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Visual Timeline Workflow */}
      <section className="py-20 border-b border-[#1A2230] bg-[#0A0D12]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" dot className="mb-3">
              TIMELINE METHODOLOGY
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight">
              01 → 06 Execution Sequence
            </h2>
            <p className="mt-4 text-base text-[#94A3B8]">
              A disciplined, milestone-governed workflow transforming conceptual ambiguity into verified production reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_PROCESS_TIMELINE.map((item) => (
              <div
                key={item.step}
                className="bg-[#0B0E14] border border-[#1A2230] p-6 relative hover:border-[#00E5FF]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="tech-mono text-2xl font-black text-[#00E5FF]">
                    {item.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#1A2230]" />
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section: Z-INDEX Stacking System Documentation */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="cyan" dot className="mb-3">
              THE SIGNATURE PHILOSOPHY
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight">
              The Z-Index Stacking System
            </h2>
            <p className="mt-4 text-base text-[#94A3B8]">
              In CSS, <code className="text-[#00E5FF] tech-mono">z-index</code> governs depth, order, and physical visual hierarchy. In our company, it defines how ideas ascend from raw substrate to user interaction.
            </p>
          </div>

          {/* Centralized Stacking Registry Table */}
          <div className="bg-[#0B0E14] border border-[#1A2230] overflow-hidden shadow-depth-2">
            <div className="p-4 bg-[#121824] border-b border-[#1A2230] flex items-center justify-between">
              <span className="tech-mono text-xs font-bold text-[#F8FAFC]">
                SYSTEM STACK REGISTRY // LOGICAL CONSTRAINTS
              </span>
              <span className="tech-mono text-xs text-[#10B981]">
                ZERO ARBITRARY VALUES
              </span>
            </div>

            <div className="divide-y divide-[#1A2230]">
              {SITE_CONFIG.stackingLayers.map((layer) => (
                <div
                  key={layer.layer}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#121824]/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="tech-mono text-sm font-bold text-[#00E5FF] w-14 shrink-0 bg-[#07080A] px-2.5 py-1 border border-[#273448] text-center">
                      Z:{layer.zIndex}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#F8FAFC]">
                        {layer.layer}
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        {layer.description}
                      </p>
                    </div>
                  </div>

                  <span className="tech-mono text-[10px] text-[#64748B] shrink-0 uppercase">
                    CONTEXT: ACTIVE_LAYER
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <Button variant="primary" href="/contact" icon={<ArrowRight size={16} />}>
              Collaborate With Z-INDEX →
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
