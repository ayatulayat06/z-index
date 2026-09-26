import { TeamMember } from '@/types/team';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '04A1',
    name: 'AYAT',
    slug: 'ayat',
    photo: '/images/team/member-ayat.svg',
    role: 'Principal Systems & Web Architect',
    department: 'Web & IT',
    secondaryDepartment: 'Graphics',
    bio: 'Software engineer and web architect specializing in distributed architectures, full-stack systems, and edge infrastructure.',
    detailedBio: 'Ayat leads software architecture and modern web systems at Z-INDEX. Specializing in high-concurrency software architectures, server-rendered applications, and edge cloud infrastructure, Ayat ensures that all systems achieve maximum speed, strict type safety, and 99.99% operational uptime across both Programming and Web & IT divisions.',
    skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Python', 'Cloud Infrastructure', 'Web Performance', 'Edge Caching', 'DevOps', 'API Architecture'],
    responsibilities: [
      'Lead software architecture, core backend logic, and algorithmic engines',
      'Architect resilient production web platforms and edge cloud deployment pipelines',
      'Establish technical coding standards, CI/CD workflows, and code review guidelines',
      'Ensure sub-second page performance, security hardening, and high availability'
    ],
    email: 'info.ayat06@gmail.com',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    projects: ['strata-kernel-engine', 'apex-cloud-portal', 'hyper-mesh-cdn'],
    featured: true
  },
  {
    id: '01M1',
    name: 'Z PROGRAMMER',
    slug: 'manop',
    photo: '/images/team/member-manop.svg',
    role: 'Senior Systems & Automation Developer',
    department: 'Web & IT',
    secondaryDepartment: 'Programming',
    bio: 'Systems programmer focused on high-throughput backend services, automation engines, algorithms, and cross-platform mobile apps.',
    detailedBio: 'Manop (Z programmer) drives core programming logic, computational algorithms, and cross-platform application development at Z-INDEX. With deep proficiency in TypeScript, Python, and Flutter, Manop builds resilient automation engines and low-latency task processing pipelines.',
    skills: ['TypeScript', 'Python', 'Node.js', 'Algorithms', 'Automation Engines', 'Flutter', 'Data Structures', 'Git', 'System Concurrency'],
    responsibilities: [
      'Develop scalable backend services, custom algorithms, and automation workflows',
      'Build cross-platform mobile diagnostic applications and device communication bridges',
      'Implement asynchronous task queues and performance optimizations',
      'Conduct comprehensive integration testing and continuous code reviews'
    ],
    email: 'zprogrammeryt@gmail.com',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    projects: ['strata-kernel-engine', 'omni-pulse-mobile'],
    featured: true
  },
  {
    id: '03M2',
    name: 'MONGCHAIHLA MARMA',
    slug: 'mongchaihla-marma',
    photo: '/images/team/member-graphics.svg',
    role: 'Head of Design & Visual Systems',
    department: 'Graphics',
    secondaryDepartment: 'Programming',
    bio: 'Interface architect and brand designer crafting mathematical design tokens, ergonomic UI/UX, and technical brand identities.',
    detailedBio: 'Mongchaihla Marma leads the Graphics & Digital Design division at Z-INDEX. Specializing in systematic UI/UX architectures, design tokens, and technical brand identity, Mongchaihla bridges the gap between engineering rigor and aesthetic elegance, creating interfaces that are visually striking and effortlessly ergonomic.',
    skills: ['Design Systems', 'UI/UX Architecture', 'Typography', 'Figma', 'CSS Architecture', 'Brand Identity', 'Vector Graphics', 'Accessibility'],
    responsibilities: [
      'Direct company-wide visual identity, design token systems, and UI/UX standards',
      'Translate complex technical architectures into intuitive, accessible user interfaces',
      'Maintain the Neo-Tech Minimal design language across all company touchpoints',
      'Audit accessibility (WCAG AAA), contrast ratios, and responsive ergonomic behavior'
    ],
    email: 'mongchaihla@z-index.internal',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      portfolio: 'https://z-index.tech'
    },
    projects: ['neo-tech-design-system', 'vector-core-brand'],
    featured: true
  },
  {
    id: '02A2',
    name: 'ARAFAT ABIR',
    slug: 'arafat-abir',
    photo: '/images/team/member-robotics.svg',
    role: 'Lead Robotics & IoT Engineer',
    department: 'Robotics',
    secondaryDepartment: 'Web & IT',
    bio: 'Hardware and embedded engineer specializing in microcontroller firmware, IoT sensor telemetry, and physical prototyping.',
    detailedBio: 'Arafat Abir heads the physical computing and robotics laboratory at Z-INDEX. Specializing in Arduino microcontroller firmware, low-power edge sensor telemetry protocols, and electromechanical automation rigs, Arafat connects digital commands to the physical world with deterministic precision.',
    skills: ['Microcontroller Firmware', 'Arduino', 'IoT Telemetry', 'C/C++', 'Python', 'Kinematics', 'Circuit Design', 'Sensor Interfacing'],
    responsibilities: [
      'Lead physical hardware prototyping, PCB layout reviews, and firmware development',
      'Design low-power edge sensor telemetry protocols (MQTT, I2C, SPI) and RF communications',
      'Engineer electromechanical actuation and test automation rigs',
      'Conduct hardware stress tests, thermal diagnostics, and electromagnetic shielding audits'
    ],
    email: 'arafatabirabir2276@gamil.com',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    projects: ['aegis-telemetry-node', 'kinetic-axis-robot'],
    featured: true
  }
];

