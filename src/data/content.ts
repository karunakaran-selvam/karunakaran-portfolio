import type { Project, Skill, Experience, SocialLink } from '@/types';

export const profile = {
  name: 'Karunakaran Selvam',
  role: 'Senior Software Engineer',
  tagline:
    'I build scalable, high-performance web applications using React, TypeScript, and modern frontend technologies. Passionate about creating intuitive user experiences, writing clean code, and delivering products that make a real business impact.',
  location: 'Remote · IST (UTC+5:30)',
  email: 'karunakaran.selvam@outlook.com',
  resume: '/Karunakaran_Selvam_CV.pdf',
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/karunakaran-selvam/' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karunakaran-selvam/',
  },
  { label: 'WhatsApp', href: 'https://wa.me/919876543210' },
  { label: 'Resume', href: '/Karunakaran_Selvam_CV.pdf' },
];

export const projects: Project[] = [
  {
    id: 'proj-01',
    index: '01',
    title: 'Healthcare Provider Management Platform',
    description:
      'Contributed to the development of a large-scale healthcare provider management platform used by internal teams to manage provider information, hospital networks, clinic associations, and healthcare workflows. Focused on building scalable React components, integrating REST APIs, improving application performance, and delivering responsive user interfaces while collaborating in an Agile environment.',
    stack: [
      'React',
      'TypeScript',
      'Redux',
      'REST API',
      'Vitest',
      'Git',
      'Vite',
    ],
    href: '#',
    repo: '#',
  },
  {
    id: 'proj-02',
    index: '02',
    title: 'Internal Healthcare Administration Portal',
    description:
      'Built internal administrative features for healthcare operations, enabling efficient management of provider data, facility records, user workflows, and business processes through a modern React application..',
    stack: ['React', 'TypeScript', 'Redux', 'REST API'],
    href: '#',
    repo: '#',
    featured: true,
  },
  {
    id: 'proj-03',
    index: '03',
    title: 'Customer Management Portal',
    description:
      'Built a customer management platform with dynamic forms, authentication, role-based access, and reusable UI architecture.',
    stack: ['React', 'TypeScript', 'Axios', 'REST API'],
    href: '#',
    repo: '#',
    featured: true,
  },
  {
    id: 'proj-04',
    index: '04',
    title: 'Internal Business Application',
    description:
      'Designed and implemented business workflows with reusable frontend architecture, improving maintainability and overall development efficiency.',
    stack: ['React', 'Redux', 'JavaScript'],
    href: '#',
    repo: '#',
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'MySQL'],
  },
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'Vite',
      'Redux',
      'Context API',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  { category: 'Backend', items: ['Node.js', 'Postgres', 'REST', 'Python'] },
  { category: 'Testing', items: ['Vitest', 'Jest', 'React Testing Library'] },
  {
    category: 'Tooling',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Docker',
      'Figma',
      'Chrome DevTools',
      'Postman',
    ],
  },
];

export const experience: Experience[] = [
  {
    id: 'exp-01',
    role: 'Senior Frontend Engineer',
    org: 'CGI Inc',
    period: '2025 — Present',
    summary:
      'Leading the design-system rebuild and mentoring two engineers on component architecture.',
  },
  {
    id: 'exp-02',
    role: 'Software Engineer',
    org: 'ConcertIDC Pvt Ltd',
    period: '2021 — 2025',
    summary:
      'Shipped the customer dashboard from 0 to 1; reduced bundle size by 38% during the Vite migration.',
  },
  {
    id: 'exp-03',
    role: 'Software Engineer',
    org: 'MEQUALS Technologies Pvt Ltd',
    period: '2019 — 2021',
    summary:
      'Built marketing sites and small product MVPs for early-stage startups.',
  },
];
