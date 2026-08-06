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
    name: 'FocusForge',
    role: 'Team project · CS732 · OmniPort',
    description:
      'Contributed to a full-stack cognitive training app in an Agile team using React, NestJS, MongoDB, Docker, and AWS EC2. Redesigned login/landing interfaces and mobile auth navigation, added game feedback sounds, and configured Vite LAN hosting for on-device testing.',
    stack: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Docker', 'AWS EC2', 'Vercel'],
    href: 'https://github.com/Dingchen-Yuan/focusforge-omniport',
    status: 'Course · Team · Completed',
  },
  {
    name: 'UOA Village',
    role: 'Team project · PGCIT · Witty Wolves',
    description:
      'Team-built university community platform. Developed the Java Swing admin client (user management, statistics, dashboard) and implemented web login, registration, navigation, profile, friend/chat flows, password recovery, and a responsive UoA-inspired theme.',
    stack: ['SvelteKit', 'Express', 'SQLite', 'Java Swing'],
    href: 'https://github.com/Dingchen-Yuan/uoa-village-witty-wolves',
    status: 'Course · Team · Completed',
  },
  {
    name: 'Grok Career Coach',
    role: 'Personal · Live on Azure',
    description:
      'Built and deployed a live AI career-coaching app (ASP.NET Core + React) with Google Identity, JWT access/refresh tokens, PostgreSQL session history, and Redis caching. Optional xAI Grok coaching; containerised with Docker and deployed to Azure Container Apps with Key Vault and GitHub Actions CI.',
    stack: [
      'ASP.NET Core',
      'React',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Azure',
    ],
    href: 'https://github.com/Dingchen-Yuan/grok-career-coach',
    liveHref:
      'https://ca-grok-web.thankfuldune-4d704de3.newzealandnorth.azurecontainerapps.io',
    status: 'Personal · Deployed',
  },
  {
    name: 'AWS Portfolio Ops',
    role: 'Personal · Live on AWS',
    description:
      'Built a NestJS portfolio API with Prisma/PostgreSQL, JWT admin authentication, and protected project CRUD. Implemented S3 presigned uploads and a React frontend with published project list and detail pages. Provisioned S3, CloudFront, and GitHub OIDC with Terraform; deployed the frontend to CloudFront.',
    stack: [
      'React',
      'NestJS',
      'PostgreSQL',
      'AWS S3/CloudFront',
      'Terraform',
      'GitHub Actions',
    ],
    href: 'https://github.com/Dingchen-Yuan/aws-portfolio-ops',
    liveHref: 'https://d2su3weadcioxs.cloudfront.net',
    status: 'Personal · Deployed',
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
    'Built FocusForge (React + NestJS + MongoDB) and UOA Village (SvelteKit + Express + Java Swing admin) in university Agile team projects.',
    'Shipped a live Azure career-coaching app (ASP.NET Core + React) with Google JWT auth, PostgreSQL, Redis, optional xAI Grok, Docker, Container Apps, and Key Vault.',
    'Built AWS Portfolio Ops: NestJS + PostgreSQL API with JWT admin CRUD, S3 uploads, React frontend, and Terraform-provisioned CloudFront deploy.',
  ],
  pdfHref: '/resume.pdf',
  linkedin: 'https://www.linkedin.com/in/dingchen-yuan/',
  github: 'https://github.com/Dingchen-Yuan',
}
