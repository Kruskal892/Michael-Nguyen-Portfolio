export type Project = {
  slug: string;
  name: string;
  category: 'Personal' | 'Professional';
  company?: string;
  role: string;
  dates: string;
  team?: number;
  purpose: string;
  contributions: string[];
  technologies: string[];
  website?: string;
  repository?: string;
  status?: string;
  detail?: boolean;
  preview: string;
  note?: string;
  implementation?: string[];
  planned?: string[];
};

export const profile = {
  typingPhrases: [
    'React & Next.js interfaces',
    'Reusable component systems',
    'Real-time web experiences',
  ],
  portrait: 'portrait.jpg',
  name: 'Nguyen Duc Anh Minh',
  shortName: 'Minh Nguyen',
  title: 'Frontend Developer',
  location: 'Hanoi, Vietnam',
  email: 'minhnguyenfe892@gmail.com',
  github: 'https://github.com/Kruskal892',
  linkedin: 'https://www.linkedin.com/in/minhnguyenfe892/',
  headline: ['Thoughtful interfaces.', 'Solid foundations.'],
  introduction: 'Building thoughtful web experiences with React, Next.js, and TypeScript.',
  about:
    'I build production web applications and reusable frontend systems — from headless CMS and booking platforms to payments, dashboards, and real-time features.',
  learning:
    'Alongside my frontend work, I’m expanding into full-stack development through HomiePlace, a personal MERN project, and learning DevOps fundamentals.',
};

export const projects: Project[] = [
  {
    slug: 'homieplace',
    name: 'HomiePlace',
    category: 'Personal',
    role: 'Full-Stack Developer',
    dates: 'September 2026 – Present',
    status: 'In development',
    detail: true,
    preview: 'A place to live.\nPeople to share it with.',
    purpose:
      'A platform in development for shared housing, room discovery, and roommate collaboration.',
    contributions: [
      'Developing a React and TypeScript client with a Node.js and Express backend.',
      'Building MongoDB user models and authentication controllers.',
      'Implementing registration emails and token-based password-reset endpoints.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    repository: 'https://github.com/Kruskal892/HomiePlace',
    implementation: [
      'The React client currently renders a placeholder. The Express server connects to MongoDB through Mongoose.',
      'Registration and password-reset routes are mounted. User registration uses bcrypt password hashing and Nodemailer verification emails.',
      'JWT login, profile, and email-verification controllers exist, but are not mounted as routes. Password-reset tokens are hashed, expire after 15 minutes, and are consumed through an atomic database update.',
    ],
    planned: [
      'Room discovery and roommate collaboration',
      'Cloudinary media uploads',
      'Real-time messaging with Socket.IO',
      'Complete authentication and frontend integration',
    ],
    note: 'Public README, package files, client entry point, server routes, and auth controllers inspected on 2 October 2026. Source inspection confirms implementation scope, not runtime readiness. Some README routing notes lag behind the source.',
  },
  {
    slug: 'porta',
    name: 'Porta CMS',
    category: 'Professional',
    company: 'SmartOSC',
    role: 'Frontend Developer / Frontend Lead',
    dates: 'July 2025 – Present',
    team: 10,
    detail: true,
    preview: 'Content, composed.\nEditing, connected.',
    purpose: 'A headless CMS platform with real-time visual editing and flexible page composition.',
    contributions: [
      'Led frontend architecture using Next.js 15 App Router and Sanity.',
      'Built reusable content blocks for articles, product pages, and landing pages.',
      'Implemented Sanity Presentation, Live Content APIs, and Draft Mode previews.',
      'Maintained a Turborepo monorepo and documented reusable components in Storybook.',
      'Collaborated with backend engineers and designers on editorial workflows.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Sanity',
      'Turborepo',
      'Tailwind CSS',
      'Redux',
      'TanStack Query',
      'Storybook',
    ],
    website: 'https://www.porta.com.au/',
    implementation: [
      'Next.js 15 App Router and Sanity support the frontend architecture and content-driven page composition.',
      'Reusable blocks cover articles, product pages, and landing pages. Sanity Presentation, Live Content APIs, and Draft Mode support editorial previews.',
      'Turborepo organizes the monorepo, while Storybook documents reusable components.',
    ],
    note: 'The linked public website shows the customer-facing experience. Internal CMS editing tools are not publicly accessible. Contributions are based on the supplied professional project description.',
  },
  {
    slug: 'dovehero',
    detail: true,
    name: 'DoveHero CRM',
    category: 'Professional',
    company: 'AdamoSoft',
    role: 'Frontend Developer',
    dates: 'September 2024 – February 2025',
    team: 15,
    preview: 'Closer conversations.',
    purpose:
      'A CRM platform with real-time communication, maps, and AI-assisted customer interactions.',
    contributions: [
      'Built Socket.IO chat and notification interfaces.',
      'Integrated Google Maps with custom overlays.',
      'Integrated ChatGPT API features for summaries and suggested replies.',
      'Built accessible components with Shadcn UI and Radix UI.',
      'Managed state with Redux and TanStack Query; built forms with React Hook Form and Zod.',
    ],
    technologies: [
      'React',
      'Socket.IO',
      'Google Maps',
      'TypeScript',
      'ChatGPT API',
      'Shadcn UI',
      'Radix UI',
      'Redux',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
    website: 'https://crm.dovehero.com/',
    implementation: [
      'Socket.IO powers the chat and notification interfaces. Google Maps custom overlays support location-based data visualization.',
      'ChatGPT API integrations provide conversation summaries and suggested replies. Shadcn UI and Radix UI support reusable, accessible components.',
      'Redux and TanStack Query manage client state and server data; React Hook Form and Zod support form validation.',
    ],
    note: 'The website may require authentication.',
  },
  {
    slug: 'trekko',
    detail: true,
    implementation: [
      'Next.js 15 features use SSR and SSG. TanStack Query caching and optimized API handling support data-loading performance.',
      'Web Workers and streaming techniques handle large datasets while supporting responsive interactions.',
      'Ant Design and Tailwind CSS support reusable components. Internationalization enables multilingual experiences, and Recharts powers interactive analytics.',
    ],
    note: 'No confirmed public production website is supplied. Project details describe my frontend contribution at AdamoSoft.',
    name: 'Trekko Travel',
    category: 'Professional',
    company: 'AdamoSoft',
    role: 'Frontend Developer',
    dates: 'February 2025 – July 2025',
    team: 7,
    preview: 'More ways to explore.',
    purpose: 'A multilingual travel booking platform with interactive data visualization.',
    contributions: [
      'Developed Next.js 15 features with SSR and SSG.',
      'Built reusable components with Ant Design and Tailwind CSS.',
      'Implemented internationalization and API caching with TanStack Query.',
      'Used Web Workers and streaming for large datasets.',
      'Built analytics interfaces with Recharts.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Redux',
      'TanStack Query',
      'Ant Design',
      'Tailwind CSS',
      'Web Workers',
      'Recharts',
      'i18n',
    ],
  },
  {
    slug: 'subscription',
    detail: true,
    name: 'Subscription Webapp',
    category: 'Professional',
    company: 'AdamoSoft',
    role: 'Frontend Developer',
    dates: 'July 2024 – September 2024',
    team: 3,
    preview: 'Subscription & billing',
    purpose: 'Subscription and billing interfaces with multilingual support.',
    contributions: [
      'Built Stripe-integrated subscription and billing interfaces.',
      'Implemented multilingual support and responsive layouts with Styled Components and Tailwind CSS.',
      'Managed state with Redux and TanStack Query; implemented validation with React Hook Form and Zod.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Stripe',
      'Styled Components',
      'Tailwind CSS',
      'Redux',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
    website: 'https://lemi.vibbromusic.com/',
    implementation: [
      'Stripe is integrated into subscription and billing interfaces.',
      'Styled Components and Tailwind CSS support responsive layouts alongside multilingual support.',
      'Redux and TanStack Query manage client state and server data. React Hook Form and Zod provide form validation.',
    ],
  },
  {
    slug: 'shopology',
    detail: true,
    implementation: [
      'Socket.IO and Recharts support live dashboards and chart visualizations.',
      'Ant Design, Tailwind CSS, and Styled Components support responsive interfaces.',
      'Internationalization provides multilingual interfaces, while Redux and TanStack Query manage application state and server data.',
    ],
    note: 'No public website is supplied. Project details describe my frontend contribution at AdamoSoft.',
    name: 'Shopology',
    category: 'Professional',
    company: 'AdamoSoft',
    role: 'Frontend Developer',
    dates: 'July 2023 – June 2024',
    team: 5,
    preview: 'Live retail insights',
    purpose: 'A mall management system with real-time dashboards and multilingual interfaces.',
    contributions: [
      'Built live charts and dashboards with Socket.IO and Recharts.',
      'Developed responsive components with Ant Design, Tailwind CSS, and Styled Components.',
      'Implemented internationalization and managed state with Redux and TanStack Query.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Socket.IO',
      'Recharts',
      'Ant Design',
      'Tailwind CSS',
      'Styled Components',
      'Redux',
      'TanStack Query',
      'i18n',
    ],
  },
];

export const experience = [
  {
    company: 'SmartOSC',
    role: 'Frontend Developer / Frontend Lead',
    dates: 'July 2025 – Present',
    description:
      'Lead frontend development and architecture for a Next.js and Sanity platform. Build reusable page components, support real-time editorial workflows, and collaborate with backend engineers and designers.',
  },
  {
    company: 'AdamoSoft',
    role: 'Frontend Developer',
    dates: 'June 2023 – July 2025',
    description:
      'Delivered React and Next.js applications across travel booking, CRM, subscriptions, and mall management. Worked on reusable interfaces, data fetching, payments, real-time features, and third-party integrations.',
  },
  {
    company: 'Bacha Software',
    role: 'React Native Intern',
    dates: 'July 2022 – August 2022',
    description:
      'Studied and practiced React Native fundamentals, design patterns, and middleware concepts.',
  },
];

export const expertise = [
  {
    title: 'Frontend',
    items:
      'JavaScript, TypeScript, React, Next.js App Router, responsive design, accessible interfaces, SSR, SSG, ISR.',
  },
  {
    title: 'UI & component systems',
    items:
      'Tailwind CSS, Ant Design, Shadcn UI, Radix UI, Styled Components, reusable component architecture.',
  },
  { title: 'State & forms', items: 'Redux, TanStack Query, React Hook Form, Zod.' },
  {
    title: 'CMS & architecture',
    items:
      'Sanity Studio, schema design, visual editing, Draft Mode, component-driven page builders, monorepos.',
  },
  {
    title: 'Performance',
    items:
      'Code splitting, lazy loading, memoization, Web Workers, caching, Core Web Vitals, Lighthouse profiling.',
  },
  { title: 'Development tools', items: 'Git, GitHub, Vite, Turborepo, Storybook, Figma.' },
];
export const development = [
  {
    label: 'Personal project experience',
    title: 'Beyond the frontend',
    items:
      'Node.js, Express, MongoDB, Mongoose, JWT, Socket.IO, Cloudinary, Nodemailer. Applied or explored within the developing HomiePlace project; feature completion varies.',
  },
  {
    label: 'Currently learning',
    title: 'From code to deployment',
    items:
      'Docker, Linux, GitHub Actions CI/CD, application deployment, backend architecture, database design.',
  },
];
export const skillLogos: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
  'UI & component systems': ['Tailwind CSS', 'Ant Design', 'Shadcn UI', 'Radix UI'],
  'State & forms': ['Redux', 'TanStack Query', 'React Hook Form', 'Zod'],
  'CMS & architecture': ['Sanity', 'Turborepo'],
  Performance: ['Lighthouse'],
  'Development tools': ['Git', 'GitHub', 'Vite', 'Storybook', 'Figma'],
  'Beyond the frontend': ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.IO', 'Cloudinary'],
  'From code to deployment': ['Docker', 'Linux', 'GitHub Actions'],
};
export const education = {
  institution: 'Hanoi University (HANU)',
  degree: 'Bachelor of Information Technology',
  dates: 'October 2020 – December 2024',
  specialization: 'Software Engineering',
  coursework:
    'Data Structures and Algorithms, Web Development, Database Management, Artificial Intelligence.',
};
export const certifications = [
  {
    name: 'English Language Certificate — C1 Level',
    issuer: 'Hanoi University (HANU)',
    detail: 'Issued December 2024',
  },
  {
    name: 'Gemini Certified Educator',
    issuer: 'Google for Education',
    detail: 'Issued January 2026 · Expires January 2029 · Credential ID: 170671964',
  },
  {
    name: 'Claude Academy: Claude 101, Claude Code 101, AI Fluency: Framework and foundations',
    issuer: 'Anthropic',
    detail: 'October 2026',
  },
];
export const awards = { institution: 'Hanoi University', count: 4 };
