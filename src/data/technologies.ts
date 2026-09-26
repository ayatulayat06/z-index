export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile & Hardware' | 'Tooling & Cloud';
  divisions: ('Programming' | 'Graphics' | 'Robotics' | 'Web & IT')[];
  description: string;
}

export const TECHNOLOGIES: TechItem[] = [
  { name: 'TypeScript', category: 'Frontend', divisions: ['Programming', 'Web & IT'], description: 'Type-safe programming model for enterprise frontend & backend runtimes' },
  { name: 'Next.js', category: 'Frontend', divisions: ['Programming', 'Web & IT'], description: 'React architecture framework for server-rendered and static web platforms' },
  { name: 'React', category: 'Frontend', divisions: ['Programming', 'Graphics', 'Web & IT'], description: 'Component-driven user interface composition system' },
  { name: 'Python', category: 'Backend', divisions: ['Programming', 'Robotics'], description: 'Data orchestration, automation algorithms and physical computing telemetry' },
  { name: 'Node.js', category: 'Backend', divisions: ['Programming', 'Web & IT'], description: 'Asynchronous event-driven JavaScript server environments' },
  { name: 'Flutter', category: 'Mobile & Hardware', divisions: ['Programming', 'Graphics'], description: 'Cross-platform native mobile and embedded touch interfaces' },
  { name: 'Arduino', category: 'Mobile & Hardware', divisions: ['Robotics'], description: 'Microcontroller hardware computing and sensor loop orchestration' },
  { name: 'IoT', category: 'Mobile & Hardware', divisions: ['Robotics'], description: 'Connected sensor networks, MQTT protocols and edge telemetry' },
  { name: 'Firebase', category: 'Tooling & Cloud', divisions: ['Programming', 'Web & IT'], description: 'Real-time database sync, cloud authentication and edge hosting' },
  { name: 'Git', category: 'Tooling & Cloud', divisions: ['Programming', 'Graphics', 'Robotics', 'Web & IT'], description: 'Distributed version control and release lifecycle automation' },
  { name: 'GitHub', category: 'Tooling & Cloud', divisions: ['Programming', 'Web & IT'], description: 'CI/CD pipeline orchestration, code review and repository infrastructure' },
  { name: 'HTML5', category: 'Frontend', divisions: ['Graphics', 'Web & IT'], description: 'Semantic, accessible, and structured document standards' },
  { name: 'CSS3', category: 'Frontend', divisions: ['Graphics', 'Web & IT'], description: 'Modern layout grids, variable tokens and hardware-accelerated animations' },
  { name: 'JavaScript', category: 'Frontend', divisions: ['Programming', 'Web & IT'], description: 'Core modern ECMAScript standard for client and server compute' },
];
