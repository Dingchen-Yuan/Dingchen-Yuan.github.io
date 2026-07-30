export const PROFILE = {
  name: 'Dingchen Yuan',
  preferred: 'Barry',
  title: 'Full-Stack Developer',
  location: 'Auckland, New Zealand',
  school: 'Master of Information Technology · University of Auckland',
  email: 'yuandingchen666@gmail.com',
  github: 'https://github.com/Dingchen-Yuan',
  linkedin: 'https://www.linkedin.com/in/', // update when ready
  tagline: 'Building calm, reliable software — from APIs to polished interfaces.',
  about: [
    'I’m Dingchen (Barry) Yuan, a full-stack developer studying MIT at the University of Auckland. I care about clear product thinking, solid backend structure, and interfaces that feel intentional.',
    'Recently I’ve been working on FocusForge — a full-stack focus & memory game — with NestJS, React, MongoDB, and real-time game UX. I’m especially interested in cloud deployment, AI-assisted development workflows, and shipping maintainable systems.',
  ],
}

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const

export const PROJECTS = [
  {
    name: 'FocusForge',
    role: 'Team project · CS732 · Frontend & product UX',
    description:
      'Full-stack focus and memory game with NestJS API, React client, MongoDB, Google OAuth, leaderboards, and responsive play/HUD polish — including mobile auth UX and LAN device preview.',
    stack: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Tailwind', 'Vite'],
    href: 'https://github.com/Dingchen-Yuan/group-project-omniport',
    status: 'Course · Team',
  },
]

export const STACK = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Three.js'],
  },
  {
    group: 'Backend',
    items: ['NestJS', 'Node.js', 'REST APIs', 'JWT / OAuth', 'MongoDB', 'Mongoose'],
  },
  {
    group: 'Tools & Cloud',
    items: ['Git / GitHub', 'Docker', 'CI basics', 'Postman', 'Linux', 'AI-assisted workflows'],
  },
]

export const RESUME = {
  summary:
    'MIT student and full-stack developer focused on TypeScript systems, clean UI, and practical cloud/dev tooling.',
  highlights: [
    'Shipped team full-stack game product (FocusForge) with auth, persistence, and mobile-aware UI.',
    'Comfortable across React SPAs and NestJS services with validation, logging, and API design.',
    'Interested in cloud deployment, observability, and AI-assisted engineering practices.',
  ],
  // Place a PDF at public/resume.pdf and this link will work.
  pdfHref: '/resume.pdf',
}
