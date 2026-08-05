export const PROFILE = {
  name: 'DINGCHEN (BARRY) YUAN',
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
    'I am DINGCHEN (BARRY) YUAN, a full-stack developer completing a Master of Information Technology at the University of Auckland. I build end-to-end web systems — from ASP.NET / Node APIs and relational data models to polished React and Svelte interfaces.',
    'Recent work includes team products such as FocusForge (React + NestJS + MongoDB) and UOA Village (SvelteKit + Express + SQLite), plus a live Azure career-coaching app with Google JWT auth, PostgreSQL, Redis, and optional xAI Grok. I am especially interested in clean API design, cloud deployment, and AI-assisted engineering workflows.',
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
    name: 'Grok Career Coach',
    role: 'Personal · Live on Azure',
    description:
      'Live ASP.NET Core + React career-coaching app: Google Identity sign-in with JWT access/refresh tokens, PostgreSQL session history, Redis analyze caching, optional xAI Grok, Docker, and Azure Container Apps + Key Vault. Users paste a job description and résumé highlights to get structured coaching output.',
    stack: [
      'ASP.NET Core',
      'React',
      'TypeScript',
      'Google JWT',
      'PostgreSQL',
      'Redis',
      'Grok',
      'Docker',
      'Azure Container Apps',
      'Key Vault',
    ],
    href: 'https://github.com/Dingchen-Yuan/grok-career-coach',
    liveHref:
      'https://ca-grok-web.thankfuldune-4d704de3.newzealandnorth.azurecontainerapps.io',
    status: 'Personal · Deployed',
  },
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
    items: [
      'ASP.NET Core',
      'NestJS',
      'Node.js / Express',
      'REST APIs',
      'JWT / OAuth',
      'Entity Framework',
    ],
  },
  {
    group: 'Data & Cloud',
    items: [
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'SQLite',
      'Redis',
      'Docker',
      'Azure',
      'Azure Container Apps',
      'Key Vault',
      'AWS',
      'GitHub Actions (CI)',
    ],
  },
]

export const RESUME = {
  summary:
    'MIT (UoA) full-stack developer with team delivery experience across ASP.NET/C#, React/TypeScript, NestJS, and cloud-backed apps. Open to internships and junior full-stack / backend roles in New Zealand.',
  highlights: [
    'Shipped a live Azure career-coaching app (ASP.NET Core + React) with Google JWT auth, PostgreSQL, Redis, optional xAI Grok, Docker, Container Apps, and Key Vault.',
    'Shipped UOA Village (SvelteKit + Express + Java Swing admin) and FocusForge (React + NestJS + MongoDB + OAuth) in university team projects.',
    'Comfortable designing REST APIs, relational models, and auth flows (JWT / OAuth); experienced with Docker-based local and cloud deploy paths and GitHub Actions CI.',
  ],
  pdfHref: '/resume.pdf',
  linkedin: 'https://www.linkedin.com/in/dingchen-yuan/',
  github: 'https://github.com/Dingchen-Yuan',
}
