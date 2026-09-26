import { Service } from '@/types/services';

export const SERVICES: Service[] = [
  {
    id: 'programming',
    title: 'Programming',
    slug: 'programming',
    category: 'Programming',
    tagline: 'Engineered software architectures built for resilience, speed and scale.',
    description: 'We architect and write scalable software systems, custom algorithms, API networks, and digital automation engines with strict type-safety and performance optimization.',
    iconName: 'Terminal',
    capabilities: [
      {
        title: 'Web Applications',
        description: 'Complex, state-driven web applications designed with resilient component architectures and modern frameworks.',
        features: ['SPA & SSR architectures', 'Real-time WebSocket streaming', 'State machines & reactive graphs', 'Offline-first caching policies']
      },
      {
        title: 'Mobile Applications',
        description: 'Cross-platform native applications built for iOS and Android with unified business logic and zero lag.',
        features: ['Flutter & Dart runtimes', 'Native hardware bridging', 'Background synchronization', 'Fluid 60fps/120fps physics']
      },
      {
        title: 'Software Development',
        description: 'Bespoke desktop, daemon and backend software solving complex algorithmic or operational problems.',
        features: ['Modular microservices', 'High-throughput pipelines', 'Strict typed data contracts', 'Comprehensive test suites']
      },
      {
        title: 'API Development',
        description: 'Ultra-fast RESTful and GraphQL API layers with strict schema enforcement, rate-limiting, and telemetry.',
        features: ['OpenAPI / Swagger specs', 'OAuth2 / JWT token flows', 'Distributed rate limiting', 'Sub-millisecond query caches']
      },
      {
        title: 'Automation',
        description: 'Algorithmic workflows eliminating repetitive toil across data ingestion, synchronization, and alerts.',
        features: ['Scheduled cron jobs', 'Event-triggered webhooks', 'Automated data transformation', 'Error handling & retry queues']
      },
      {
        title: 'Custom Software',
        description: 'Tailored computational tools designed specifically around your operational constraints and business logic.',
        features: ['Custom business rule engines', 'Legacy system modernization', 'Secure internal dashboards', 'Auditable transaction logs']
      }
    ],
    technologies: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Python', 'Flutter', 'Firebase', 'Git', 'GitHub'],
    engineeringProcess: [
      { step: '01', title: 'Domain Modeling', description: 'Mapping entity lifecycles, invariant constraints, and state transitions.' },
      { step: '02', title: 'Interface Specification', description: 'Defining strongly-typed contracts for all boundary inputs and outputs.' },
      { step: '03', title: 'Modular Core Coding', description: 'Writing decoupled, unit-testable business logic with zero external side effects.' },
      { step: '04', title: 'Integration & Stress Testing', description: 'Executing concurrency, load, and fault-injection verification tests.' }
    ],
    relatedProjectSlugs: ['strata-kernel-engine', 'omni-pulse-mobile']
  },
  {
    id: 'graphics',
    title: 'Graphics & Digital Design',
    slug: 'graphics',
    category: 'Graphics',
    tagline: 'Visual identity, UI/UX systems and digital experiences engineered with structural precision.',
    description: 'We treat design as an engineering discipline. We build systematic visual languages, design tokens, responsive UI architectures, and ergonomic digital experiences.',
    iconName: 'Palette',
    capabilities: [
      {
        title: 'UI/UX Design',
        description: 'Information architecture, wireframing, and high-fidelity interface layouts designed for effortless human cognition.',
        features: ['Ergonomic workflow mapping', 'Interactive prototypes', 'Micro-interaction design', 'Accessibility-first hierarchy']
      },
      {
        title: 'Brand Identity',
        description: 'Comprehensive brand systems rooted in technology, precision, typography, and mathematical balance.',
        features: ['Geometric mark & typography', 'Monochromatic & accent palettes', 'Visual usage guidelines', 'Vector asset suites']
      },
      {
        title: 'Digital Graphics',
        description: 'Engineered diagrams, technical schematics, 3D layer visual representations, and digital marketing graphics.',
        features: ['Layer-stack visualization', 'System architecture diagrams', 'Vector iconography sets', 'High-DPI visual assets']
      },
      {
        title: 'Social Media Design',
        description: 'Structured visual templates for company announcements, technical updates, and thought leadership.',
        features: ['Cohesive editorial grids', 'Data visualization templates', 'Motion asset concepts', 'Export-ready format specs']
      },
      {
        title: 'Presentation Design',
        description: 'High-impact technical pitch decks, architectural briefings, and executive presentation systems.',
        features: ['Structured slide layouts', 'Custom visual metaphors', 'Data-driven typography', 'Scalable master templates']
      },
      {
        title: 'Visual Systems',
        description: 'Living design token libraries synchronizing visual assets directly with software codebases.',
        features: ['Figma-to-code token sync', 'Component documentation', 'Dark/Light mode calibration', 'Spatial grid definitions']
      }
    ],
    technologies: ['CSS3', 'HTML5', 'React', 'Git', 'GitHub'],
    engineeringProcess: [
      { step: '01', title: 'Cognitive Mapping', description: 'Auditing mental models and sensory flow paths for the target audience.' },
      { step: '02', title: 'Design Token Definition', description: 'Formalizing geometric grids, typographic scales, and color variables.' },
      { step: '03', title: 'Component Prototyping', description: 'Constructing interactive micro-states across hover, active, and focus.' },
      { step: '04', title: 'Accessibility Audit', description: 'Validating color contrast ratios, focus rings, and readability thresholds.' }
    ],
    relatedProjectSlugs: ['neo-tech-design-system', 'vector-core-brand']
  },
  {
    id: 'robotics',
    title: 'Robotics & Automation',
    slug: 'robotics',
    category: 'Robotics',
    tagline: 'Physical computing, IoT sensor telemetry and embedded microcontrollers connecting bits to atoms.',
    description: 'We bridge software and physical hardware. From microcontroller firmware and sensor networks to robotic automation prototypes and industrial telemetry.',
    iconName: 'Cpu',
    capabilities: [
      {
        title: 'Robotics',
        description: 'Electromechanical automation systems, multi-axis actuators, and motion controllers for experimental robotics.',
        features: ['Kinematic motion control', 'PWM driver interfaces', 'Stepper & servo telemetry', 'Real-time safety interlocks']
      },
      {
        title: 'Arduino',
        description: 'Low-latency microcontroller programming, sensor polling, and hardware interrupt-driven control firmware.',
        features: ['Bare-metal C/C++ firmware', 'Hardware interrupt handlers', 'SPI & I2C bus orchestration', 'Non-blocking execution loops']
      },
      {
        title: 'IoT',
        description: 'Connected sensor nodes transmitting environmental, mechanical, and power telemetry to cloud endpoints.',
        features: ['Low-power Wi-Fi & BLE nodes', 'MQTT / HTTPS edge payloads', 'Data buffering during outages', 'Secure cryptographic device keys']
      },
      {
        title: 'Automation',
        description: 'Physical process automation combining sensors, relays, solenoid valves, and robotic arms.',
        features: ['Automated test benches', 'Feedback loop calibration', 'Programmable logic routines', 'Emergency stop fail-safes']
      },
      {
        title: 'Embedded Systems',
        description: 'Dedicated embedded compute modules running real-time operating tasks and deterministic control software.',
        features: ['Memory-constrained optimization', 'Watchdog timer protection', 'Sensor signal conditioning', 'Serial communications']
      },
      {
        title: 'Prototyping',
        description: 'Rapid physical hardware development from breadboard verification to custom PCB and CAD enclosures.',
        features: ['Bench breadboard testing', 'Sensor integration validation', 'Power budget calculations', 'Rapid hardware iteration']
      }
    ],
    technologies: ['Arduino', 'IoT', 'Python', 'Git', 'GitHub'],
    engineeringProcess: [
      { step: '01', title: 'Hardware Feasibility', description: 'Selecting microcontrollers, current limits, and sensor tolerances.' },
      { step: '02', title: 'Breadboard Prototyping', description: 'Testing bus communication (I2C/SPI) and signal noise reduction.' },
      { step: '03', title: 'Firmware Engineering', description: 'Writing non-blocking event loops, state machines, and fail-safes.' },
      { step: '04', title: 'Physical Validation', description: 'Running extended runtime trials, thermal analysis, and telemetry tests.' }
    ],
    relatedProjectSlugs: ['aegis-telemetry-node', 'kinetic-axis-robot']
  },
  {
    id: 'web-it',
    title: 'Web & IT Solutions',
    slug: 'web-it',
    category: 'Web & IT',
    tagline: 'High-performance websites, edge infrastructure and rock-solid IT environments.',
    description: 'We develop lightning-fast websites, configure resilient deployment pipelines, and engineer scalable IT infrastructure designed for 99.99% reliability.',
    iconName: 'Globe',
    capabilities: [
      {
        title: 'Business Websites',
        description: 'Tailored corporate websites with high SEO authority, lightning page loads, and refined technical aesthetics.',
        features: ['Sub-second Largest Contentful Paint', 'Zero cumulative layout shift', 'Semantic HTML5 markup', 'Full responsive fidelity']
      },
      {
        title: 'Web Applications',
        description: 'Scalable portal and SaaS architectures built with modular component stacks and robust database sync.',
        features: ['Server-side rendering (SSR)', 'Incremental static regeneration', 'Edge middleware routing', 'Dynamic data visualization']
      },
      {
        title: 'Deployment',
        description: 'Automated CI/CD pipelines deploying code from repository commits straight to edge global CDNs.',
        features: ['GitHub Actions automation', 'Branch-based preview environments', 'Zero-downtime rolling deploys', 'Automated smoke testing']
      },
      {
        title: 'Performance Optimization',
        description: 'Auditing and re-engineering slow web platforms to achieve 95+ Core Web Vitals across mobile and desktop.',
        features: ['Bundle size tree-shaking', 'Next-gen image transcoding', 'Critical CSS inlining', 'DNS prefetching & lazy loading']
      },
      {
        title: 'Technical Setup',
        description: 'Domain configuration, SSL certificates, security headers, and DNS management for zero vulnerability exposure.',
        features: ['Strict Content-Security-Policy', 'HSTS & TLS 1.3 enforcement', 'DMARC/SPF/DKIM email records', 'Cloudflare DDoS shields']
      },
      {
        title: 'Digital Solutions',
        description: 'Custom internal utilities, knowledge bases, and customer portal integrations streamlining digital operations.',
        features: ['Headless CMS integration', 'Search indexing & filters', 'Analytics privacy configuration', 'Role-based team permissions']
      }
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Node.js', 'Firebase', 'Git', 'GitHub'],
    engineeringProcess: [
      { step: '01', title: 'Architectural Assessment', description: 'Benchmarking performance bottlenecks, latency, and layout stability.' },
      { step: '02', title: 'Platform Implementation', description: 'Building with server-rendered React components and optimized assets.' },
      { step: '03', title: 'Edge Configuration', description: 'Establishing global caching layers, SSL, and security headers.' },
      { step: '04', title: 'Observability Launch', description: 'Instrumenting real-user monitoring (RUM) and error reporting.' }
    ],
    relatedProjectSlugs: ['apex-cloud-portal', 'hyper-mesh-cdn']
  }
];
