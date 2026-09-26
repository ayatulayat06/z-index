# Z-INDEX — DIGITAL BRAND PLATFORM

> **Technology × Creativity × Engineering**  
> **BUILDING IDEAS. ENGINEERING THE FUTURE.**  
> *Where Ideas Move Up the Stack.*

---

## 01. Brand & Architectural Overview

**Z-INDEX** is a private technology company operating at the intersection of computer programming, visual digital design, physical robotics, and edge web infrastructure.

### The Four Core Divisions:
1. **01 // Programming**: Distributed software architectures, algorithms, asynchronous event loops, and type-safe systems.
2. **02 // Graphics & Digital Design**: Design tokens, mathematical layouts, ergonomic UI/UX, and technical brand identity systems.
3. **03 // Robotics & Automation**: Microcontroller firmware, Arduino logic, low-power IoT sensor telemetry, and physical prototyping.
4. **04 // Web & IT Solutions**: Edge deployment pipelines, server-rendered web platforms, 99.99% availability, and infrastructure hardening.

---

## 02. Z-Index Stacking System & Neo-Tech Minimal

The company identity directly drives the visual and structural architecture through the philosophy:
**Layer → Stack → Depth → Order → Interaction**

### Centralized Stacking Registry:
| Context Layer | Z-Index Level | Purpose & Semantic Role |
|:---|:---:|:---|
| **Base Content** | `0` | Underlying document flow, typography, and standard layout |
| **Decorative Layer** | `10` | Coordinate grids, scanlines, telemetry points |
| **Floating Elements** | `20` | Interactive cards, hover planes, status chips |
| **Sticky Elements** | `50` | Filter bars, contextual subheaders |
| **Navbar** | `100` | Fixed primary navigation and telemetry command header |
| **Dropdown** | `200` | Context menus and select lists |
| **Overlay** | `500` | Backdrop blurs and ambient focus dimmers |
| **Modal** | `1000` | High-priority dialogues (e.g. Start a Project) |
| **Toast** | `1100` | Real-time system feedback, alerts, and notifications |

---

## 03. Design Tokens & Color Palette

- **Near Black Foundation**: `#07080A`, `#0B0E14`
- **Elevated Surfaces**: `#121824`, `#182232`
- **Primary Text**: `#F8FAFC`
- **Secondary Text**: `#94A3B8`, `#64748B`
- **Accent Electric Cyan**: `#00E5FF`
- **Accent Secondary Blue**: `#38BDF8`, `#0284C7`
- **Status Colors**: Success `#10B981`, Warning `#F59E0B`, Error `#EF4444`

---

## 04. Pages & Routes Architecture

- `/` — Premium Home featuring interactive signature 3D Z-Stack visual, core division cards, selected work, workflow stages, tech stack, and dual CTAs.
- `/portfolio` — Filterable portfolio directory (All, Programming, Graphics, Robotics, Web & IT) with live project counts.
- `/portfolio/[project]` — Dynamic case studies with challenge, solution, execution sequence, multi-tier z-stack architecture, and verified outcomes.
- `/about` — Company manifesto, mission, vision, four core areas, execution timeline (01–06), and the Z-Index Stacking System documentation.
- `/services` — Overview of all four divisions with in-depth capabilities and specifications.
- `/services/[service]` — Division-level deep dive into capabilities, engineering processes, deployed tech, and associated case studies.
- `/contact` — Dual architecture:
  - **Section A**: Encrypted Contact Form with real-time accessible validation and direct division inboxes.
  - **Section B**: Meet the Team roster with professional cards, skills, and direct inquiry routing.
- `/team/[member]` & `/contact/[member]` — Detailed individual team member profiles showing responsibilities, associated case studies, and contact options.
- `/faq` — Accessible accordion repository organized by General, Services, Projects, and Technical categories.
- `/_not-found` — Z-INDEX themed 404 with out-of-bounds layer diagnostic graphic.
- `/sitemap.xml` & `/robots.txt` — Automated search engine indexing.

---

## 05. Development & Production Run Instructions

### Prerequisites
- Node.js 18.18+ or 20+ (Tested on Node v24)
- npm 10+

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Production Build
```bash
npm run build
```

### Run Production Server
```bash
npm start
```

---

## 06. Data Separation & Scalability

Content is strictly separated from presentation logic:
- `src/data/portfolio.ts` — Case studies and architecture layer models.
- `src/data/services.ts` — Division capabilities and engineering processes.
- `src/data/team.ts` — Structured team roster and responsibilities.
- `src/data/faq.ts` — Categorized questions and answers.
- `src/data/technologies.ts` — Engineering stack items.
- `src/data/workflow.ts` — Pipeline stages and milestones.
