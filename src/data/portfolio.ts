import { Project } from '@/types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'strata-kernel-engine',
    title: 'Strata Kernel Engine',
    slug: 'strata-kernel-engine',
    category: 'Programming',
    tagline: 'Distributed high-throughput task processing & automation engine',
    description: 'A fault-tolerant task queue and distributed automation engine designed to orchestrate asynchronous batch workloads across heterogeneous server clusters.',
    image: '/images/portfolio/project-programming-1.svg',
    technologies: ['TypeScript', 'Node.js', 'Python', 'GitHub'],
    status: 'Production',
    featured: true,
    year: '2025',
    scope: 'Distributed Automation Infrastructure',
    overview: 'Engineered as an internal backbone for multi-step task execution, Strata Kernel provides predictable job scheduling, automatic retry policies with exponential backoff, and distributed transaction isolation.',
    challenge: 'Asynchronous workers frequently faced memory pressure, out-of-order execution during network partitions, and lack of real-time visibility into stuck background queues.',
    solution: 'Constructed an event-driven architecture using strict state machines, persistent write-ahead logs, and worker heartbeats with sub-second health telemetry.',
    process: [
      { step: '01', title: 'State Machine Specification', description: 'Formulated strict transition states ensuring no job could skip verification or commit steps.' },
      { step: '02', title: 'Worker Pool Implementation', description: 'Built an event loop engine with controlled memory quotas per process.' },
      { step: '03', title: 'Failure Injection Simulation', description: 'Simulated network dropouts and sudden worker crashes to verify automatic lock releases.' },
      { step: '04', title: 'Telemetry Dashboard', description: 'Exposed real-time throughput metrics via streaming WebSocket sockets.' }
    ],
    architectureLayers: [
      { level: 0, name: 'Data Persistence Layer', technology: 'Write-Ahead Log & Schema DB', description: 'Guarantees durable transaction recording before task dispatch.' },
      { level: 10, name: 'Event Bus', technology: 'Pub/Sub Telemetry Broker', description: 'Dispatches task assignment packets with zero payload loss.' },
      { level: 20, name: 'Worker Pool', technology: 'TypeScript & Python Subprocesses', description: 'Isolated execution sandbox with strict memory and CPU caps.' },
      { level: 50, name: 'Kernel API & Controller', technology: 'Node.js Fastify Daemon', description: 'Validates incoming task requests, signs tokens, and coordinates state.' }
    ],
    outcome: 'Eliminated job dropouts completely during simulated node failures and reduced average queue processing latency by 42%.',
    relatedSlugs: ['omni-pulse-mobile', 'apex-cloud-portal']
  },
  {
    id: 'neo-tech-design-system',
    title: 'Neo-Tech Design System',
    slug: 'neo-tech-design-system',
    category: 'Graphics',
    tagline: 'Multi-layer token-driven design system and component architecture',
    description: 'A unified visual language and UI component library built for technical interfaces, featuring deep contrast, layer stacking tokens, and strict mathematical spacing.',
    image: '/images/portfolio/project-graphics-1.svg',
    technologies: ['CSS3', 'HTML5', 'React', 'TypeScript'],
    status: 'Active Deployment',
    featured: true,
    year: '2025',
    scope: 'Design Engineering & Token Architecture',
    overview: 'Neo-Tech was built to unify multiple digital product surfaces under a single cohesive aesthetic: deep charcoal foundations, electric cyan accents, and clear depth hierarchy.',
    challenge: 'Developers were previously guessing z-index levels, border radius tokens, and color values, resulting in inconsistent stacking and visual clutter.',
    solution: 'Standardized a 9-layer stacking context, fluid typographic scale, and an exhaustive set of accessible micro-interaction states across all UI primitives.',
    process: [
      { step: '01', title: 'Stacking Context Audit', description: 'Categorized every UI element into strict z-index tiers from base content to modals.' },
      { step: '02', title: 'Contrast & Accessibility Calibration', description: 'Tested all color combinations to exceed WCAG AAA standards for text readability.' },
      { step: '03', title: 'Component Library Coding', description: 'Implemented pure TypeScript React primitives with zero bloated external dependencies.' },
      { step: '04', title: 'Documentation & Storybook', description: 'Documented each token with interactive interactive previews and copyable code snippets.' }
    ],
    architectureLayers: [
      { level: 0, name: 'Foundational Tokens', technology: 'CSS Custom Properties', description: 'Hex palettes, font metrics, spacing units, and border radii.' },
      { level: 10, name: 'Stacking Registry', technology: 'Strict Z-Index Hierarchy', description: 'Guarantees modals, dropdowns, and sticky headers never collide.' },
      { level: 20, name: 'Accessible Primitives', technology: 'HTML5 & ARIA Attributes', description: 'Semantic buttons, accordions, and dialogs with keyboard traversal.' },
      { level: 50, name: 'Domain Composites', technology: 'React Component Modules', description: 'Cards, navigation bars, and data tables consumed by product teams.' }
    ],
    outcome: 'Decreased frontend development turnaround time by 60% and eliminated 100% of z-index stacking bugs across projects.',
    relatedSlugs: ['vector-core-brand', 'apex-cloud-portal']
  },
  {
    id: 'aegis-telemetry-node',
    title: 'Aegis Telemetry Node',
    slug: 'aegis-telemetry-node',
    category: 'Robotics',
    tagline: 'Edge IoT sensor telemetry and environmental monitoring hardware',
    description: 'An industrial-grade IoT hardware sensor unit capable of measuring temperature, vibration, atmospheric pressure, and acoustic anomalies with edge computing intelligence.',
    image: '/images/portfolio/project-robotics-1.svg',
    technologies: ['Arduino', 'IoT', 'Python', 'Git'],
    status: 'Production',
    featured: true,
    year: '2025',
    scope: 'Embedded Hardware & Edge Telemetry',
    overview: 'Designed for deployment in server rooms and mechanical automation bays, Aegis continuously samples multi-axis accelerometer and thermal sensors, flagging anomalies locally.',
    challenge: 'Noisy electrical environments caused false sensor interrupts, while continuous Wi-Fi transmission rapidly exhausted battery reserves on edge nodes.',
    solution: 'Engineered hardware signal filtering, implemented low-power sleep cycles between burst polling, and packed telemetry into lightweight binary payloads.',
    process: [
      { step: '01', title: 'Hardware Schematic Design', description: 'Configured microcontroller GPIO lines, pull-up resistors, and power regulation circuits.' },
      { step: '02', title: 'Firmware Event Loop', description: 'Wrote non-blocking C++ routines using timer interrupts to sample sensors deterministically.' },
      { step: '03', title: 'Edge Threshold Logic', description: 'Calculated moving averages and standard deviations directly on the microcontroller.' },
      { step: '04', title: 'Field Stress Testing', description: 'Subjected units to thermal swings and electromagnetic noise to ensure continuous uptime.' }
    ],
    architectureLayers: [
      { level: 0, name: 'Sensor Array Hardware', technology: 'I2C & SPI Transducers', description: 'Physical thermistors, accelerometers, and barometric sensors.' },
      { level: 10, name: 'Microcontroller Core', technology: 'Arduino Microcontroller', description: 'Low-latency sampling loop with hardware interrupt protection.' },
      { level: 20, name: 'Edge Filter Firmware', technology: 'Embedded C/C++', description: 'Statistical outlier rejection and threshold boundary checks.' },
      { level: 50, name: 'Relay Protocol', technology: 'MQTT / TLS Encryption', description: 'Transmits encrypted telemetry packets to upstream ingestion services.' }
    ],
    outcome: 'Operates continuously for over 180 days on low power while capturing critical mechanical anomalies minutes before potential hardware failures.',
    relatedSlugs: ['kinetic-axis-robot', 'strata-kernel-engine']
  },
  {
    id: 'apex-cloud-portal',
    title: 'Apex Cloud Portal',
    slug: 'apex-cloud-portal',
    category: 'Web & IT',
    tagline: 'High-availability infrastructure dashboard & deployment console',
    description: 'A modern web platform offering real-time observability, server health status, automated deployment rollback triggers, and DNS telemetry.',
    image: '/images/portfolio/project-web-1.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Firebase', 'GitHub'],
    status: 'Production',
    featured: true,
    year: '2025',
    scope: 'Cloud Infrastructure & Web Platform',
    overview: 'Apex Cloud Portal gives engineering teams complete control over their distributed services, combining streaming server metrics with instant zero-downtime deploy controls.',
    challenge: 'Legacy administrative panels were sluggish, suffered from slow page reloads during high-frequency server updates, and lacked responsive mobile support.',
    solution: 'Re-architected the portal with Next.js App Router, optimistic UI updates, responsive layered layouts, and real-time push data streaming.',
    process: [
      { step: '01', title: 'Information Hierarchy', description: 'Structured critical telemetry so urgent alerts are immediately surfaced to operators.' },
      { step: '02', title: 'SSR & Edge Streaming', description: 'Implemented server-rendered dashboards with streaming suspense boundaries.' },
      { step: '03', title: 'Security Header Hardening', description: 'Enforced strict CSP policies, CSRF tokens, and role-based access verification.' },
      { step: '04', title: 'Performance Tuning', description: 'Optimized rendering to sustain 60fps even when rendering thousands of data points.' }
    ],
    architectureLayers: [
      { level: 0, name: 'Cloud Provider APIs', technology: 'Container & Edge Infrastructure', description: 'Provides real-time CPU, RAM, and network bandwidth data.' },
      { level: 10, name: 'Real-Time Sync Engine', technology: 'Firebase Realtime Stream', description: 'Pushes instant status changes to connected browsers.' },
      { level: 20, name: 'Application Server', technology: 'Next.js 15 Server Components', description: 'Pre-renders authenticated pages and protects private API routes.' },
      { level: 50, name: 'Interactive UI Shell', technology: 'Neo-Tech Minimal Web Client', description: 'Keyboard-navigable control panel with modal confirmation dialogs.' }
    ],
    outcome: 'Achieved 99.9% uptime, reduced operator deploy cycle times from 15 minutes to 30 seconds, and earned a 98 Google Lighthouse score.',
    relatedSlugs: ['hyper-mesh-cdn', 'neo-tech-design-system']
  },
  {
    id: 'kinetic-axis-robot',
    title: 'Kinetic Axis Controller',
    slug: 'kinetic-axis-robot',
    category: 'Robotics',
    tagline: 'Precision 3-axis motion driver and automated test arm controller',
    description: 'An open-loop and closed-loop electromechanical actuator platform for automated testing of button switches, touchscreens, and hardware durability.',
    image: '/images/portfolio/project-robotics-2.svg',
    technologies: ['Arduino', 'Python', 'IoT', 'Git'],
    status: 'Internal R&D',
    featured: false,
    year: '2025',
    scope: 'Robotic Prototyping & Motion Systems',
    overview: 'Built to automate repetitive physical touch testing for hardware devices, this 3-axis positioning system delivers 0.05mm positioning repeatability.',
    challenge: 'Stepper motor vibration generated mechanical jitter during high-speed moves, causing positional drift over long 48-hour testing runs.',
    solution: 'Designed micro-stepping motor drivers with acceleration ramping profiles, coupled with optical home sensors for periodic calibration.',
    process: [
      { step: '01', title: 'Kinematics Modeling', description: 'Calculated acceleration curves in Python to prevent sudden torque spikes.' },
      { step: '02', title: 'Driver Electronics', description: 'Configured silent microstep driver boards with thermal heat sinks.' },
      { step: '03', title: 'Host Software Interface', description: 'Developed a CLI and web bridge to send G-code commands via USB serial.' },
      { step: '04', title: 'Endurance Benchmark', description: 'Ran over 250,000 automated cycles without a single skipped motor step.' }
    ],
    architectureLayers: [
      { level: 0, name: 'Mechanical Frame', technology: 'Aluminum Extrusion & Leadscrews', description: 'Rigid structural base dampening motor resonance.' },
      { level: 10, name: 'Actuator Drivers', technology: 'Stepper Motors & Drivers', description: 'Provides smooth current regulation and torque delivery.' },
      { level: 20, name: 'Microcontroller Loop', technology: 'Arduino Motion Firmware', description: 'Calculates pulse timing with microsecond precision.' },
      { level: 50, name: 'Host Supervisor', technology: 'Python Automation Scripts', description: 'Loads test coordinate recipes and monitors cycle counts.' }
    ],
    outcome: 'Automated 100% of touch longevity testing, reducing physical hardware verification cycle times from weeks to days.',
    relatedSlugs: ['aegis-telemetry-node', 'strata-kernel-engine']
  },
  {
    id: 'vector-core-brand',
    title: 'Vector Core Brand Language',
    slug: 'vector-core-brand',
    category: 'Graphics',
    tagline: 'Technical branding, geometric iconography & visual guidelines',
    description: 'An uncompromising visual identity crafted for a deep-tech engineering initiative, featuring strict isometric grid systems and monospace typographic harmony.',
    image: '/images/portfolio/project-graphics-2.svg',
    technologies: ['HTML5', 'CSS3', 'React'],
    status: 'Production',
    featured: false,
    year: '2025',
    scope: 'Brand Identity & Visual Architecture',
    overview: 'Vector Core represents the visual philosophy of precision engineering: clear geometric angles, high-contrast dark tones, and razor-sharp typographic hierarchy.',
    challenge: 'The initiative needed to project rigorous engineering credibility without falling into generic startup cliches or trendy gradients.',
    solution: 'Designed an identity anchored in mathematical grids, technical blueprint annotations, and modular vector marks that scale flawlessly from 16px to stadium billboards.',
    process: [
      { step: '01', title: 'Identity Principles', description: 'Codified three pillars: Structural Honesty, Precision Contrast, and Layer Depth.' },
      { step: '02', title: 'Logomark Geometry', description: 'Constructed an intersecting glyph based on the Cartesian z-axis coordinate system.' },
      { step: '03', title: 'Iconographic System', description: 'Created over 120 custom technical icons with uniform 1.5px stroke weights.' },
      { step: '04', title: 'Brand Guidelines Portal', description: 'Built an interactive web guideline displaying exact RGB, CMYK, and CSS tokens.' }
    ],
    architectureLayers: [
      { level: 0, name: 'Grid System', technology: '8pt Geometric Coordinate Grid', description: 'Governs all visual margins, aspect ratios, and padding.' },
      { level: 10, name: 'Typographic Scale', technology: 'Geometric Sans & Monospace', description: 'Calculated using a 1.25 major third modular ratio.' },
      { level: 20, name: 'Color Calibration', technology: 'Deep Charcoal & Cyan Accent', description: 'High contrast ratio exceeding 14:1 for critical markings.' },
      { level: 50, name: 'Asset Distribution', technology: 'SVG Vectors & React Icons', description: 'Resolution-independent vector assets for web and print.' }
    ],
    outcome: 'Delivered an iconic visual signature that immediately distinguishes the technology initiative as an engineering leader.',
    relatedSlugs: ['neo-tech-design-system', 'apex-cloud-portal']
  },
  {
    id: 'omni-pulse-mobile',
    title: 'Omni Pulse Mobile Diagnostic',
    slug: 'omni-pulse-mobile',
    category: 'Programming',
    tagline: 'Cross-platform mobile hardware diagnostic and telemetry app',
    description: 'A responsive mobile application built with Flutter that communicates with local IoT nodes via Bluetooth Low Energy to display real-time sensor waveforms.',
    image: '/images/portfolio/project-programming-2.svg',
    technologies: ['Flutter', 'Python', 'TypeScript', 'Git'],
    status: 'Production',
    featured: false,
    year: '2025',
    scope: 'Cross-Platform Mobile Engineering',
    overview: 'Engineers on the manufacturing floor require instant diagnostic insight into operating machinery. Omni Pulse provides high-speed telemetry graphing right in their pocket.',
    challenge: 'Rendering continuous 60Hz sensor waveform graphs caused severe frame drops on older handheld devices.',
    solution: 'Implemented custom canvas painting with memory ring-buffers, discarding off-screen sample points before the paint pipeline.',
    process: [
      { step: '01', title: 'BLE Protocol Framing', description: 'Structured compact 20-byte binary packets for minimal Bluetooth latency.' },
      { step: '02', title: 'State Architecture', description: 'Decoupled sensor ingestion threads from UI rendering using Dart isolates.' },
      { step: '03', title: 'Custom Painter Canvas', description: 'Wrote hardware-accelerated drawing routines with zero widget rebuild overhead.' },
      { step: '04', title: 'Field Validation', description: 'Verified communication stability across diverse mobile handsets in RF-noisy environments.' }
    ],
    architectureLayers: [
      { level: 0, name: 'BLE Hardware Stack', technology: 'Bluetooth Low Energy 5.0', description: 'Maintains encrypted peer-to-peer serial link.' },
      { level: 10, name: 'Binary Parser', technology: 'Dart ByteData Isolate', description: 'Decodes raw bytes without impacting the UI frame rate.' },
      { level: 20, name: 'Circular Telemetry Buffer', technology: 'Ring Buffer Data Structure', description: 'Stores rolling 10,000 data points in fixed RAM.' },
      { level: 50, name: 'Custom Render Canvas', technology: 'Flutter CustomPainter', description: 'Draws dynamic waveforms at a stable 60 frames per second.' }
    ],
    outcome: 'Achieved rock-solid 60fps graph updates and reduced on-site troubleshooting times from hours to under 5 minutes.',
    relatedSlugs: ['aegis-telemetry-node', 'strata-kernel-engine']
  },
  {
    id: 'hyper-mesh-cdn',
    title: 'Hyper Mesh Edge Network',
    slug: 'hyper-mesh-cdn',
    category: 'Web & IT',
    tagline: 'Global edge routing, asset caching & SSL termination infrastructure',
    description: 'An ultra-low latency static asset deployment pipeline with geo-distributed edge caching, automatic image transcoding, and DDoS mitigation.',
    image: '/images/portfolio/project-web-2.svg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'GitHub'],
    status: 'Active Deployment',
    featured: false,
    year: '2025',
    scope: 'Web Infrastructure & Performance Engineering',
    overview: 'Ensures that Z-INDEX web properties and partner platforms load instantaneously anywhere on the planet with zero server configuration overhead.',
    challenge: 'Global latency spikes in regions far from central datacenters caused noticeable delays during initial website handshakes.',
    solution: 'Configured distributed edge caching rules, Brotli compression pipelines, and DNS geo-routing with automated origin fallbacks.',
    process: [
      { step: '01', title: 'Latency Benchmarking', description: 'Mapped global time-to-first-byte (TTFB) across 14 geographical regions.' },
      { step: '02', title: 'Edge Rules Configuration', description: 'Wrote declarative caching headers maximizing hit rates for immutable assets.' },
      { step: '03', title: 'Build Pipeline Integration', description: 'Integrated hash-based asset cache busting directly into the CI/CD pipeline.' },
      { step: '04', title: 'Failover Verification', description: 'Conducted simulated datacenter blackouts to test automatic edge DNS rerouting.' }
    ],
    architectureLayers: [
      { level: 0, name: 'Origin Storage', technology: 'Encrypted Object Buckets', description: 'Immutable source repository for compiled web bundles.' },
      { level: 10, name: 'Compression Engine', technology: 'Brotli & Gzip Compaction', description: 'Reduces asset payloads by up to 78% on average.' },
      { level: 20, name: 'Edge POP Network', technology: 'Anycast DNS & Distributed Caches', description: 'Serves cached pages within 20ms of end users.' },
      { level: 50, name: 'Client Verification', technology: 'Service Worker & Cache API', description: 'Enables near-instantaneous subsequent page navigations.' }
    ],
    outcome: 'Dropped average worldwide TTFB from 380ms to under 45ms, with a 99.4% edge cache hit ratio.',
    relatedSlugs: ['apex-cloud-portal', 'strata-kernel-engine']
  }
];
