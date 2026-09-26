export interface WorkflowStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const WORKFLOW_STAGES: WorkflowStep[] = [
  {
    number: '01',
    title: 'IDEA',
    tagline: 'Start with the idea',
    description: 'System feasibility audit, functional requirements framing, and structural problem decomposition.',
    deliverables: ['Concept Specification', 'Technical Scope Document', 'Architecture Feasibility']
  },
  {
    number: '02',
    title: 'PLAN',
    tagline: 'Architect the blueprint',
    description: 'Milestone modeling, technology stack selection, database and hardware schema definition.',
    deliverables: ['System Architecture Diagram', 'Milestone Schedule', 'Data Models']
  },
  {
    number: '03',
    title: 'DESIGN',
    tagline: 'Create the experience',
    description: 'Layered interface architecture, token design systems, and interaction ergonomics.',
    deliverables: ['Design System Tokens', 'Interactive Prototype', 'Component Library']
  },
  {
    number: '04',
    title: 'BUILD',
    tagline: 'Engineer the solution',
    description: 'Strict modular implementation, clean typed codebases, embedded firmware and API engines.',
    deliverables: ['Version-Controlled Codebase', 'Firmware Binaries', 'API Endpoints']
  },
  {
    number: '05',
    title: 'TEST',
    tagline: 'Verify precision',
    description: 'Automated unit tests, hardware stress cycles, accessibility audits, and security validation.',
    deliverables: ['Test Coverage Suite', 'A11y Compliance Report', 'Security Audit']
  },
  {
    number: '06',
    title: 'LAUNCH',
    tagline: 'Deploy with confidence',
    description: 'Automated CI/CD staging, edge caching rollout, and physical telemetry deployment.',
    deliverables: ['Production Release', 'Observability Dashboards', 'Documentation']
  },
  {
    number: '07',
    title: 'EVOLVE',
    tagline: 'Improve continuously',
    description: 'Performance benchmarking, telemetry diagnostics, and iterative capability expansion.',
    deliverables: ['Iteration Roadmaps', 'Performance Optimization Logs', 'Feature Expansion']
  }
];

export const ABOUT_PROCESS_TIMELINE = [
  { step: '01', title: 'Discover', description: 'Analyze technical constraints, environmental conditions, and core objectives.' },
  { step: '02', title: 'Plan', description: 'Formulate system architecture blueprints and milestone trajectories.' },
  { step: '03', title: 'Design', description: 'Craft multi-layered visual languages and ergonomic interaction systems.' },
  { step: '04', title: 'Build', description: 'Write resilient, modular code, build hardware prototypes, and configure infrastructure.' },
  { step: '05', title: 'Test', description: 'Rigorous regression analysis, signal integrity tests, and accessibility benchmarks.' },
  { step: '06', title: 'Launch', description: 'Production provisioning, telemetry activation, and seamless cutover.' }
];
