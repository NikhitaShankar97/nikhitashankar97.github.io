// ============================================
// NIKHITA SHANKAR — PORTFOLIO DATA
// Edit this file to update all content
// ============================================

export interface Experience {
  id: string
  company: string
  logo?: string
  role: string
  period: string
  type: 'full-time' | 'intern' | 'volunteer' | 'capstone'
  description: string
  technologies?: string[]
}

export interface Project {
  id: string
  featured?: boolean
  featuredStyle?: 'default' | 'hackathon' | 'flagship' | 'silver'
  title: string
  wordmark?: string
  wordmarkAccent?: string
  description: string
  problem?: string
  impact?: string
  badges?: { text: string; variant: 'default' | 'hackathon' | 'winner' | 'silver' | 'flagship' }[]
  tags: string[]
  links: { label: string; url: string; primary?: boolean }[]
  isExternalLink?: boolean
}

export interface Honor {
  id: string
  icon: string
  tag: string
  tagVariant?: 'default' | 'winner' | 'silver'
  cardVariant?: 'default' | 'winner' | 'silver'
  title: string
  description: string
  links: { label: string; url: string }[]
}

export interface SkillCategory {
  label: string
  skills: { name: string; icon?: string }[]
}

export interface Education {
  id: string
  logo: string
  years: string
  school: string
  degree: string
  note?: string
}

export interface Stat {
  value: string
  label: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface PortfolioData {
  name: string
  firstName: string
  lastName: string
  initials: string
  email: string
  location: string
  status: string
  headline: string
  taglineMessages: string[]
  bio: {
    lead: string
    paragraphs: string[]
  }
  hobbies: string[]
  resumeUrl: string
  stats: Stat[]
  sidebar: {
    location: string
    degree: string
    degreeSub: string
    focus: string
    focusSub: string
    status: string
  }
  skills: SkillCategory[]
  education: Education[]
  honors: Honor[]
  experience: Experience[]
  featuredProjects: Project[]
  otherProjects: Project[]
  socialLinks: SocialLink[]
  formspreeEndpoint: string
}

export const portfolioData: PortfolioData = {
  name: 'Nikhita Shankar',
  firstName: 'Nikhita',
  lastName: 'Shankar',
  initials: 'NS',
  email: 'nikhitashankar97@gmail.com',
  location: 'United States',
  status: 'Open to opportunities',
  headline: 'Data Engineer & Analytics Professional',
  taglineMessages: [
    'Data Engineer',
    'Analytics Professional',
    'BI and Pipeline Builder',
    'MS Business Analytics, UIUC',
  ],
  bio: {
    lead: "I don't just move data. I build the systems that <strong>turn it into decisions.</strong>",
    paragraphs: [
      'At <strong>Obvience</strong>, I design analytics platforms where AI and human judgment meet, integrating Microsoft Fabric, Power BI, and agentic pipelines to help organizations stop guessing and start knowing. Before that, three years at <strong>ExxonMobil</strong> and a year at <strong>Hyperplane</strong> (a B2B fintech startup) building financial intelligence infrastructure at scale.',
      'With an MS in Business Analytics from <strong>UIUC</strong>, I work at the intersection of data engineering and applied AI: the place where LLMs, predictive models, and clean pipelines actually ship together. My thesis: the best data work disappears into the product. Nobody notices the pipeline. Everyone notices the insight.',
    ],
  },
  hobbies: ['🍳 Cooking', '✈️ Traveling', '🏸 Badminton', '⚽ Football', '🏏 Cricket', '🏎️ Formula 1'],
  resumeUrl: '/Nikhita_Shankar_Resume.pdf',

  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '4', label: 'Companies' },
    { value: '15+', label: 'Projects' },
    { value: '2', label: 'Publications' },
  ],

  sidebar: {
    location: 'United States',
    degree: 'MS Business Analytics',
    degreeSub: 'BE Computer Science',
    focus: 'Data Engineering · BI',
    focusSub: 'Analytics · Data Science',
    status: 'Open to work',
  },

  skills: [
    {
      label: 'Languages',
      skills: [
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'R', icon: 'devicon-r-plain' },
        { name: 'SQL', icon: 'devicon-sqlite-plain' },
      ],
    },
    {
      label: 'BI & Visualization',
      skills: [
        { name: 'Power BI', icon: 'fas fa-chart-bar' },
        { name: 'Tableau', icon: 'fas fa-chart-pie' },
        { name: 'IBM Cognos', icon: 'fas fa-th' },
      ],
    },
    {
      label: 'Cloud & Platforms',
      skills: [
        { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
        { name: 'Azure', icon: 'devicon-azure-plain' },
        { name: 'Microsoft Fabric', icon: 'fas fa-layer-group' },
      ],
    },
    {
      label: 'Data Engineering',
      skills: [
        { name: 'Databricks', icon: 'fas fa-database' },
        { name: 'Snowflake', icon: 'fas fa-snowflake' },
        { name: 'dbt', icon: 'fas fa-diagram-project' },
        { name: 'KNIME', icon: 'fas fa-diagram-project' },
      ],
    },
  ],

  education: [
    {
      id: 'uiuc',
      logo: '/uiuc.png',
      years: '2024 – 2025',
      school: 'University of Illinois Urbana-Champaign',
      degree: 'Master of Science in Business Analytics',
      note: 'Beta Gamma Sigma Honor Society inductee',
    },
    {
      id: 'rvce',
      logo: '/rvce.png',
      years: '2016 – 2020',
      school: 'R.V. College of Engineering',
      degree: 'Bachelor of Engineering in Computer Science',
      note: 'Published undergraduate research in IRJET',
    },
  ],

  honors: [
    {
      id: 'bgs',
      icon: '🏛',
      tag: 'Honor Society',
      title: 'Beta Gamma Sigma',
      description: 'Inducted into the international business honor society, recognizing the top 20% of business graduates globally.',
      links: [
        { label: 'Society ↗', url: 'https://www.betagammasigma.org/home' },
        { label: 'Certificate ↗', url: '/BGS_Membership_Certificate.pdf' },
      ],
    },
    {
      id: 'aws',
      icon: '☁️',
      tag: 'Certification',
      title: 'AWS Certified Cloud Practitioner',
      description: 'Validated foundational knowledge of AWS cloud architecture, core services, security, and best practices.',
      links: [
        { label: 'View Credential ↗', url: 'https://www.credly.com/badges/a43a4d9f-bed3-4567-a006-6a6921d92c60' },
      ],
    },
    {
      id: 'exxon-awards',
      icon: '🏆',
      tag: 'Award',
      title: 'ExxonMobil Recognition Awards',
      description: 'Annual "Bright Beginner" Award and Quarterly Recognition Award for innovation and excellence in analytics delivery.',
      links: [
        { label: 'Annual Award ↗', url: '/ExxonMobil_Annual_Recognition_Certificate.pdf' },
        { label: 'Quarterly ↗', url: '/ExxonMobil_Quarterly_Recognition_Certificate.pdf' },
      ],
    },
    {
      id: 'irjet',
      icon: '📄',
      tag: 'Publication',
      title: 'Review of Recommendation Systems, IRJET',
      description: 'Published review of collaborative, content-based, and hybrid filtering techniques with matrix factorization implementation.',
      links: [
        { label: 'Read Paper ↗', url: 'https://irjet.net/archives/V7/i5/IRJET-V7I5303.pdf' },
      ],
    },
    {
      id: 'first48-hackathon',
      icon: '🥇',
      tag: '1st Place · Hackathon',
      tagVariant: 'winner',
      cardVariant: 'winner',
      title: 'Zerve x HackerEarth Hackathon — First Place',
      description: 'Won first place for First48, predicting long-term user success from 48 hours of behavioral data. Random Forest AUC ~0.98, user segmentation, Streamlit app.',
      links: [
        { label: 'View Notebook ↗', url: 'https://www.zerve.ai/gallery/6c20e273-9afb-4fc5-8dfa-9b8a44829b24' },
        { label: 'Announcement ↗', url: 'https://www.linkedin.com/posts/zerve-ai_we-just-wrapped-the-zerve-x-hackerearth-hackathon-activity-7454448842118426625-tAdy' },
      ],
    },
    {
      id: 'odsc-datathon',
      icon: '🥈',
      tag: '2nd Place · Datathon',
      tagVariant: 'silver',
      cardVariant: 'silver',
      title: 'ODSC AI Datathon — 2nd Place',
      description: 'Built UpNext, a product-led growth intelligence tool combining ML upgrade prediction, user segmentation, and funnel analysis in 24 hours.',
      links: [
        { label: 'View Notebook ↗', url: 'https://app.zerve.ai/notebook/f74703d8-d9e0-4a18-937d-5041e653acc2' },
        { label: 'Announcement ↗', url: 'https://www.linkedin.com/posts/odsc-ai_odscai-datathon-datascience-activity-7456008697786458112-uN90' },
      ],
    },
    {
      id: 'emosense',
      icon: '🧠',
      tag: 'Publication',
      title: 'EmoSense, Zenodo 2025',
      description: 'Privacy-preserving framework for early burnout detection using behavioral metadata. Introduces the Emotional Stability Drift Index (ESDI).',
      links: [
        { label: 'Read Paper ↗', url: 'https://zenodo.org/records/18058997' },
      ],
    },
  ],

  experience: [
    {
      id: 'obvience',
      company: 'Obvience',
      logo: '/obvience.png',
      role: 'Data Engineer',
      period: '2025 – Present',
      type: 'full-time',
      description: 'Designing and implementing end-to-end analytics solutions using Microsoft Fabric, Power BI, and SQL Server.',
      technologies: ['Microsoft Fabric', 'Power BI', 'SQL Server'],
    },
    {
      id: 'workgaze',
      company: 'WorkGaze',
      logo: '/workgaze.png',
      role: 'Data Engineer',
      period: 'Aug – Sep 2025',
      type: 'volunteer',
      description: 'Built automated data workflows for AI-driven workplace analytics at Global Launch Inc.',
    },
    {
      id: 'wolters-kluwer',
      company: 'Wolters Kluwer',
      logo: '/wolterskluwer.png',
      role: 'Data Science and AI Consultant',
      period: 'Jan – May 2025',
      type: 'capstone',
      description: 'Developed LLM-based differential diagnosis system using GPT-4o and Gemini. Benchmarked prompt engineering frameworks for clinical decision support.',
      technologies: ['GPT-4o', 'Gemini', 'LLM', 'Healthcare AI'],
    },
    {
      id: 'colorado-west',
      company: 'Colorado West Healthcare',
      logo: '/coloradowest.png',
      role: 'Data Engineering and Analytics Lead',
      period: 'Aug – Dec 2024',
      type: 'capstone',
      description: 'Designed Cognos-based Workforce Insights Dashboard with SQL and Python pipelines for HR KPI reporting.',
      technologies: ['IBM Cognos', 'SQL', 'Python', 'HR Analytics'],
    },
    {
      id: 'hyperplane',
      company: 'Hyperplane',
      logo: '/hyperplane.png',
      role: 'Data Engineer',
      period: 'May 2023 – May 2024',
      type: 'full-time',
      description: 'Built data platforms and financial intelligence systems at a fintech startup, supporting through acquisition by Nubank.',
    },
    {
      id: 'exxonmobil',
      company: 'ExxonMobil',
      logo: '/exxonmobil.png',
      role: 'Data Science / Analytics / Data Engineering',
      period: 'Jan 2020 – Apr 2023',
      type: 'full-time',
      description: 'Three-year tenure across data science, analytics, and engineering. Won Annual Bright Beginner Award and Quarterly Recognition Award.',
    },
    {
      id: 'softtek',
      company: 'Softtek',
      logo: '/softtek.png',
      role: 'Engineering Intern',
      period: 'Jun – Jul 2019',
      type: 'intern',
      description: 'Contributed to software engineering projects at a global IT services firm.',
    },
  ],

  featuredProjects: [
    {
      id: 'first48',
      featured: true,
      featuredStyle: 'hackathon',
      title: 'What Drives Successful Usage in the First 48 Hours?',
      wordmark: 'First',
      wordmarkAccent: '48',
      description: 'Full product analytics pipeline predicting long-term user success from 48 hours of behavioral data. Random Forest classifier AUC ~0.98, user segmentation, interactive Streamlit app.',
      badges: [
        { text: '⚡ Zerve x HackerEarth Hackathon', variant: 'hackathon' },
        { text: '🥇 1st Place', variant: 'winner' },
      ],
      tags: ['Python', 'Random Forest', 'Behavioral ML', 'Product Analytics', 'Segmentation'],
      links: [
        { label: '▶ Watch Demo', url: 'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view' },
      ],
    },
    {
      id: 'upnext',
      featured: true,
      featuredStyle: 'silver',
      title: 'Product-Led Growth Intelligence for Zerve',
      wordmark: 'Up',
      wordmarkAccent: 'Next',
      description: '24-hour datathon build predicting subscription upgrades. LightGBM + XGBoost modeling, funnel analysis, user segmentation, Streamlit app with revenue opportunity estimates.',
      badges: [
        { text: '⚡ ODSC AI Datathon', variant: 'default' },
        { text: '🥈 2nd Place', variant: 'silver' },
      ],
      tags: ['Python', 'LightGBM', 'XGBoost', 'Streamlit', 'Product Analytics', 'Segmentation'],
      links: [
        { label: '▶ Watch Demo', url: 'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view' },
      ],
    },
    {
      id: 'clay-revenue',
      featured: true,
      featuredStyle: 'flagship',
      title: 'Turning GTM Signals Into Revenue-Ready Decisions',
      wordmark: 'Clay',
      wordmarkAccent: 'Revenue Intelligence',
      description: 'End-to-end revenue intelligence platform on Snowflake, dbt, Streamlit, and Sigma. Governed dbt models feed an interactive decision-support app for GTM leaders.',
      badges: [
        { text: '⭐ Flagship Project', variant: 'flagship' },
      ],
      tags: ['Snowflake', 'dbt', 'Streamlit', 'Sigma', 'Python', 'SQL'],
      links: [
        { label: '▶ Live App', url: 'https://clay-revenue-intelligence.streamlit.app/', primary: true },
        { label: '▶ Watch Demo', url: 'https://drive.google.com/file/d/1myC2VvyljWLBQ4f85bczDpQe_W-xmZa9/view' },
        { label: '↗ GitHub', url: 'https://github.com/NikhitaShankar97/clay-revenue-intelligence' },
      ],
    },
    {
      id: 'llm-diagnosis',
      featured: true,
      title: 'LLM Differential Diagnosis',
      description: 'GPT-4o and Gemini-powered clinical decision support system built with Wolters Kluwer Health.',
      badges: [{ text: 'Industry Capstone', variant: 'default' }],
      tags: ['GPT-4o', 'Gemini', 'LLM', 'Healthcare AI'],
      links: [],
      isExternalLink: true,
    },
    {
      id: 'spotify-pipeline',
      featured: true,
      title: 'Spotify Playlist Prediction Pipeline',
      description: 'Production-grade AWS pipeline: S3 → Glue → Athena → QuickSight.',
      badges: [{ text: 'Cloud Pipeline', variant: 'default' }],
      tags: ['AWS', 'S3 / Glue', 'Athena', 'QuickSight'],
      links: [],
      isExternalLink: true,
    },
    {
      id: 'workforce-insights',
      featured: true,
      title: 'Workforce Insights Dashboard',
      description: 'Cognos-based HR analytics platform for Colorado West Healthcare.',
      badges: [{ text: 'Industry Capstone', variant: 'default' }],
      tags: ['IBM Cognos', 'SQL', 'Python', 'HR Analytics'],
      links: [],
      isExternalLink: true,
    },
  ],

  otherProjects: [
    { id: 'nlp-disaster', title: 'NLP Disaster Tweet Classification', description: 'BERT and DistilBERT classification for crisis detection.', tags: ['NLP', 'BERT', 'PyTorch'], links: [] },
    { id: 'yelp-bi', title: 'Yelp Business Intelligence Platform', description: 'End-to-end BI pipeline with Azure and Python.', tags: ['Azure', 'Python', 'BI'], links: [] },
    { id: 'stock-forecast', title: 'Stock Market Forecasting', description: 'ML models and dashboards for equity analysis.', tags: ['Python', 'ML', 'Time Series'], links: [] },
    { id: 'mlda', title: 'MLDA Mortality Analysis', description: 'Regression Discontinuity on drinking age policy effects.', tags: ['R', 'Causal Inference'], links: [] },
    { id: 'property-value', title: 'Property Value Prediction', description: 'Predictive real estate modeling for urban planning.', tags: ['R', 'Regression', 'GIS'], links: [] },
    { id: 'blockchain', title: 'Blockchain Analytics', description: 'On-chain dashboards with Dune Analytics and SQL.', tags: ['SQL', 'Dune', 'Web3'], links: [] },
    { id: 'coffee-shop', title: 'Coffee Shop Sales Dashboard', description: 'Interactive Excel dashboard for operational insights.', tags: ['Excel', 'Analytics'], links: [] },
    { id: 'movie', title: 'Cinematic Insights Dashboard', description: 'Movie trends analysis with Python and Tableau.', tags: ['Python', 'Tableau'], links: [] },
    { id: 'retail', title: 'Retail Analytics and Strategy', description: 'Multi-dimensional analysis with Wolfram Mathematica.', tags: ['Mathematica', 'Strategy'], links: [] },
  ],

  socialLinks: [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhita-shankar-analytics/', icon: 'fab fa-linkedin' },
    { platform: 'GitHub', url: 'https://github.com/NikhitaShankar97', icon: 'fab fa-github' },
    { platform: 'Email', url: 'mailto:nikhitashankar97@gmail.com', icon: 'fas fa-envelope' },
  ],

  formspreeEndpoint: 'https://formspree.io/f/xovvozlz',
}