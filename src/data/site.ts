export const PROFILE = {
  name: 'Dingchen Yuan',
  preferred: 'Barry',
  title: 'Full-Stack Developer',
  location: 'Auckland, New Zealand',
  school: 'Master of Information Technology · University of Auckland',
  email: 'yuandingchen666@gmail.com',
  phone: '+64 27 478 4936',
  github: 'https://github.com/Dingchen-Yuan',
  linkedin: 'https://www.linkedin.com/in/dingchen-yuan/',
  website: 'https://dingchen-yuan.github.io',
  tagline:
    'Full-stack developer focused on ASP.NET, React/TypeScript, and shipping reliable cloud-backed products.',
  about: [
    'I’m Dingchen (Barry) Yuan, a full-stack developer completing a Master of Information Technology at the University of Auckland. I build end-to-end web systems — from ASP.NET / Node APIs and relational data models to polished React and Svelte interfaces.',
    'Recent work includes team products such as FocusForge (React + NestJS + MongoDB) and UOA Village (SvelteKit + Express + SQLite), plus ongoing portfolio projects around JWT auth, xAI Grok, Azure, and AWS. I’m especially interested in clean API design, cloud deployment, and AI-assisted engineering workflows.',
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
    name: 'UOA Village',
    role: 'Team project · PGCIT · Witty Wolves',
    description:
      'Blogging/social platform with articles, comments, friends, chat, and password recovery. Built the Java Swing admin client plus core web UX (login/register/nav/profile) and UoA-inspired theming.',
    stack: ['SvelteKit', 'Express', 'SQLite', 'Java Swing', 'Vite'],
    href: 'https://github.com/Dingchen-Yuan/uoa-village-witty-wolves',
    status: 'Course · Team · Completed',
  },
  {
    name: 'FocusForge',
    role: 'Team project · CS732 · OmniPort',
    description:
      'Full-stack focus & memory training app with Google OAuth/JWT, MongoDB, Docker, AWS EC2, and Vercel. Contributed login/landing redesign, mobile auth nav polish, game SFX, and Vite LAN device preview.',
    stack: ['React', 'TypeScript', 'Vite', 'NestJS', 'MongoDB', 'JWT/OAuth', 'Docker', 'AWS'],
    href: 'https://github.com/Dingchen-Yuan/focusforge-omniport',
    status: 'Course · Team · Completed',
  },
  {
    name: 'Grok Career Coach',
    role: 'Personal · In progress',
    description:
      'Planned ASP.NET Core career-coaching API with JWT, PostgreSQL, Redis, Docker, and xAI Grok, targeting Azure App Service + Key Vault. Repository scaffolded; implementation underway.',
    stack: ['ASP.NET Core', 'C#', 'JWT', 'PostgreSQL', 'Redis', 'Docker', 'Grok', 'Azure'],
    href: 'https://github.com/Dingchen-Yuan/grok-career-coach',
    status: 'Personal · In progress',
  },
  {
    name: 'AWS Portfolio Ops',
    role: 'Personal · In progress',
    description:
      'Planned NestJS portfolio ops API with JWT-protected admin uploads, PostgreSQL, S3/CloudFront, Docker, GitHub Actions, and Terraform on AWS. Repository scaffolded; implementation underway.',
    stack: ['NestJS', 'JWT', 'PostgreSQL', 'S3', 'CloudFront', 'Docker', 'Terraform', 'AWS'],
    href: 'https://github.com/Dingchen-Yuan/aws-portfolio-ops',
    status: 'Personal · In progress',
  },
]

export const STACK = [
  {
    group: 'Languages',
    items: ['C#', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    group: 'Frontend',
    items: ['React', 'SvelteKit', 'Vite', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    group: 'Backend',
    items: ['ASP.NET Core', 'NestJS', 'Node.js / Express', 'REST APIs', 'JWT / OAuth', 'Entity Framework'],
  },
  {
    group: 'Data & Cloud',
    items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Azure', 'AWS', 'Docker'],
  },
]

export const RESUME = {
  summary:
    'MIT (UoA) full-stack developer with team delivery experience across ASP.NET/C#, React/TypeScript, NestJS, and cloud-backed apps. Open to internships and junior full-stack / backend roles in New Zealand.',
  highlights: [
    'Shipped UOA Village (SvelteKit + Express + Java Swing admin) and FocusForge (React + NestJS + MongoDB + OAuth) in university team projects.',
    'Comfortable designing REST APIs, relational models, and auth flows (JWT / OAuth); experienced with Docker-based local and cloud deploy paths.',
    'Building follow-on portfolio work: Grok + Azure career API, and AWS portfolio ops (S3, Terraform, CI/CD).',
  ],
  pdfHref: '/resume.pdf',
  linkedin: 'https://www.linkedin.com/in/dingchen-yuan/',
  github: 'https://github.com/Dingchen-Yuan',
}
