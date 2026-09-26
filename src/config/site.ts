export const SITE_CONFIG = {
  name: 'Z-INDEX',
  companyType: 'Private Technology Company',
  philosophy: 'Technology × Creativity × Engineering',
  tagline: 'BUILDING IDEAS. ENGINEERING THE FUTURE.',
  subTagline: 'Where Ideas Move Up the Stack.',
  description: 'Z-INDEX combines programming, creative design, robotics and modern web technologies to transform ideas into practical digital and technological solutions.',
  url: 'https://z-index.tech',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  divisions: [
    {
      id: 'programming',
      name: 'Programming',
      slug: 'programming',
      number: '01',
      description: 'Software, applications, automation and digital systems engineered with strict performance and precision.',
      tags: ['Full-Stack', 'API Architecture', 'Automation Engines', 'Custom Algorithms'],
    },
    {
      id: 'graphics',
      name: 'Graphics Design',
      slug: 'graphics',
      number: '02',
      description: 'Visual identity, UI/UX systems and digital experiences balancing aesthetic order and ergonomic clarity.',
      tags: ['Design Systems', 'Interface Architecture', 'Identity Craft', 'Motion Typography'],
    },
    {
      id: 'robotics',
      name: 'Robotics & IOT',
      slug: 'robotics',
      number: '03',
      description: 'Robotics, IoT hardware, physical computing and embedded sensor telemetry for physical intelligence.',
      tags: ['Embedded Systems', 'IoT Telemetry', 'Microcontrollers', 'Physical Computing'],
    },
    {
      id: 'web-it',
      name: 'Web & IT ',
      slug: 'web-it',
      number: '04',
      description: 'Modern resilient web platforms, cloud infrastructure, performance optimization and digital solutions.',
      tags: ['Cloud Infrastructure', 'Web Systems', 'Performance Tuning', 'DevOps & Reliability'],
    },
  ],
  stackingLayers: [
    { layer: 'Base Content', zIndex: 0, description: 'Underlying document flow, standard typography and structured layout' },
    { layer: 'Decorative Layer', zIndex: 10, description: 'Technical gridlines, background telemetry nodes, ambient coordinates' },
    { layer: 'Floating Elements', zIndex: 20, description: 'Interactive cards, hover planes, status markers, depth chips' },
    { layer: 'Sticky Elements', zIndex: 50, description: 'Filter navigation, sticky subheaders, contextual controls' },
    { layer: 'Navbar', zIndex: 100, description: 'Primary fixed header with division telemetry and command routes' },
    { layer: 'Dropdown', zIndex: 200, description: 'Context menus, language selectors, division jump panels' },
    { layer: 'Overlay', zIndex: 500, description: 'Backdrop blurs and ambient focus dimmers' },
    { layer: 'Modal', zIndex: 1000, description: 'High-priority interactive dialogues and project initiator window' },
    { layer: 'Toast', zIndex: 1100, description: 'Real-time telemetry notices, submission confirmations, status alerts' },
  ],
  contact: {
    inquiries: 'contract@zindex.teach',
    divisions: [
      { id: 'programming', email: 'zprogrammeryt@gmail.com', label: 'Programming & Systems' },
      { id: 'graphics', email: 'mongmarma@z-index.internal', label: 'Graphics & Experience' },
      { id: 'robotics', email: 'arafatabirabir2276@gmail.com', label: 'Robotics & IoT Labs' },
      { id: 'web-it', email: 'info.ayat06@gmail.com', label: 'Web & Infrastructure' },
    ],
    operationalHours: 'Mon - Fri, 09:00 - 18:00 UTC',
    channels: [
      { name: 'GitHub Protocol', handle: 'github.com/z-index-tech' },
      { name: 'Engineering Telemetry', handle: 'dev.z-index.tech' },
      { name: 'Matrix / Signal Secure Relay', handle: '@z-index:relay.node' }
    ]
  },
  copyright: '© 2026-27 Z-INDEX. All rights reserved.'
};
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;