/**
 * Portfolio Data & Content Constants
 * Centralized data management for all portfolio sections
 */

export const PROFILE = {
  name: 'Vishwajeet Singh',
  github: 'vishwajeetsingh01',
  linkedin: 'vishwajeetsingh-',
  bio: 'Building intelligent, enterprise-ready AI systems that combine Generative AI, automation, analytics, and cloud-native architecture.',
  summary: 'Building intelligent, enterprise-ready AI systems that combine Generative AI, automation, analytics, and cloud-native architecture. My focus is on solving business challenges with scalable solutions that improve efficiency, user experience, and decision-making.',
  year: new Date().getFullYear(),
};

export const HERO_PHRASES = [
  'Generative AI Specialist',
  'AI & Automation Architect',
  'Analytics & BI Expert',
  'Cloud Solutions Engineer',
  'LLM & RAG Expert',
];

export const ROLE_DESCRIPTIONS = [
  'Designing and deploying generative AI solutions, prompt engineering, and building context-aware assistants.',
  'Architecting automated workflows and intelligent pipelines that connect LLMs with enterprise systems.',
  'Delivering analytics and BI dashboards that turn data into actionable business insights.',
  'Building cloud-native, scalable systems and integrations for analytics and AI workloads.',
  'Implementing Retrieval-Augmented Generation (RAG) systems and LLM orchestration for knowledge-driven apps.',
];
export const EXPERTISE = [
  {
    title: 'AI & Automation',
    description: 'Building enterprise-grade intelligent workflows using LLMs, RAG architectures, AI agents, and scalable automation pipelines.',
  },
  {
    title: 'Analytics & BI',
    description: 'Delivering data-driven dashboards and actionable insights using Power BI, SAP Analytics Cloud (SAC), and modern analytics technologies.',
  },
  {
    title: 'Cloud & Data',
    description: 'Developing cloud-native applications, modern data engineering practices, and scalable deployment patterns.',
  },
  {
    title: 'Impact',
    description: 'Building intelligent solutions that reduce manual effort, speed decisions, and deliver measurable business value.',
  },
];

export const CORE_TOOLS = [
  'Gen AI', 'AI/ML', 'Azure', 'Power BI', 'SAP',
  'Python', 'SQL', 'Git', 'Database',
];

export const EXPERTISE_AREAS = [
  'Conversational AI experiences for enterprise workflows',
  'Data visualization and business intelligence systems',
  'Cloud-ready automation and analytics platforms',
  'AI-powered applications for intelligent transformation',
];

export const STATS = [
  { value: '4+', label: 'Years experience' },
  { value: '10+', label: 'Enterprise projects' },
  { value: 'Tech', label: 'Analytics & cloud stack' },
];

export const SKILL_CATEGORIES = [
  {
    title: 'Generative AI',
    icon: 'star',
    skills: [
      { name: 'OpenAI', percentage: 90 },
      { name: 'Azure OpenAI', percentage: 92 },
      { name: 'LangChain', percentage: 90 },
      { name: 'RAG', percentage: 95 },
      { name: 'AI Agents', percentage: 82 },
      { name: 'Prompt Engineering', percentage: 85 },
    ],
  },
  {
    title: 'Programming',
    icon: 'code',
    skills: [
      { name: 'Python', percentage: 95 },
      { name: 'SQL', percentage: 92 },
      { name: 'Flask', percentage: 90 },
      { name: 'FastAPI', percentage: 88 },
      { name: 'JavaScript', percentage: 80 },
      { name: 'React', percentage: 82 },
    ],
  },
  {
    title: 'Analytics & Cloud',
    icon: 'chart',
    skills: [
      { name: 'Power BI', percentage: 94 },
      { name: 'SAP Analytics', percentage: 91 },
      { name: 'Azure Cloud', percentage: 88 },
      { name: 'Data Engineering', percentage: 86 },
      { name: 'Databricks', percentage: 84 },
      { name: 'Snowflake', percentage: 85 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'A',
    title: 'Intelligent Field Assistant',
    description: 'AI-powered mobile assistant for field operations with real-time data sync and offline capabilities.',
    tags: ['LLM', 'RAG', 'Azure', 'React Native'],
    github: '#',
  },
  {
    id: 'B',
    title: 'Smart Order Automation',
    description: 'Enterprise automation system reducing manual order processing by 80% using AI agents.',
    tags: ['AI Agents', 'Python', 'SAP', 'Automation'],
    github: '#',
  },
  {
    id: 'C',
    title: 'Employee Assistant Using LLM Agent',
    description: 'Internal AI chatbot for HR operations built with LangChain and OpenAI APIs.',
    tags: ['OpenAI', 'LangChain', 'RAG', 'Flask'],
    github: '#',
  },
  {
    id: 'D',
    title: 'GenAI Driven IWM Chatbot',
    description: 'Intelligent Workforce Management chatbot with context-aware responses and multi-language support.',
    tags: ['Generative AI', 'NLP', 'Azure', 'FastAPI'],
    github: '#',
  },
  {
    id: 'E',
    title: 'Power BI Dashboard',
    description: 'Executive dashboard with real-time analytics and predictive insights for decision-making.',
    tags: ['Power BI', 'Analytics', 'DAX', 'SQL'],
    github: '#',
  },
  {
    id: 'F',
    title: 'Data Engineering Pipeline',
    description: 'Scalable ETL pipeline processing 1M+ records daily with data quality checks.',
    tags: ['Python', 'Databricks', 'Spark', 'Cloud'],
    github: '#',
  },
];

export const EXPERIENCES = [
  {
    period: 'Jun 2024 - Present',
    position: 'Software Engineer',
    company: 'Incture Technologies',
    description: 'Leading development of AI-powered enterprise solutions with focus on Generative AI and cloud architecture.',
    skills: ['Generative AI', 'Cloud Architecture', 'Team Leadership', 'System Design'],
  },
  {
    period: 'Jun 2022 - Jun 2024',
    position: 'Associate Software Engineer',
    company: 'Incture Technologies',
    description: 'Developed full-stack applications, led AI automation initiatives, and mentored junior developers.',
    skills: ['Full Stack Development', 'AI/ML', 'Automation', 'Problem Solving'],
  },
  {
    period: 'Jan 2022 - Jun 2022',
    position: 'Academic Internship',
    company: 'Board Infinity',
    description: 'Built data analytics solutions and participated in real-world project development.',
    skills: ['Data Analytics', 'Python', 'SQL', 'Project Delivery'],
  },
  {
    period: 'Sep 2021 - Apr 2022',
    position: 'Data Science Internship',
    company: 'Incture Technologies',
    description: 'Developed machine learning models and conducted data analysis for business insights.',
    skills: ['Machine Learning', 'Data Analysis', 'Python', 'Statistics'],
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Application (MCA)',
    field: 'Computer Science & Engineering',
    school: 'Motilal Nehru National Institute of Technology (MNNIT), Prayagraj',
    period: '2019 - 2022',
    gpa: '8.02 / 10',
    highlights: [
      'MCA (2019–2022) — 8.02/10',
      'Academic Excellence Award 2021',
    ],
  },
  {
    degree: 'Bachelor of Science (B.Sc.)',
    field: 'PCM',
    school: 'J.R.N. Rajasthan Vidyapeeth University, Udaipur',
    period: '2016 - 2018',
    gpa: '70.38%',
    highlights: [
      'B.Sc.(PCM) (2016–2018) — 70.38%',
      'Consistent academic performance with strong practical lab experience in physics and chemistry',
    ],
  },
  {
    degree: 'Intermediate (12th Grade)',
    field: 'B-Science',
    school: 'H.B. Inter College, Hathi, Varanasi',
    period: '2015',
    gpa: '71.60%',
    highlights: [
      'Intermediate (2015) — 71.60%',
      'Passed with distinction in Hindi and Chemistry',
      'Active participation in science fairs and inter-school competitions',
    ],
  },
  {
    degree: 'High School (10th Grade)',
    field: 'Science Stream',
    school: 'H.B. Inter College, Hathi, Varanasi',
    period: '2013',
    gpa: '74.00%',
    highlights: [
      'High School (2013) — 74.00%',
      'Science Olympiad participant',
      'Active member of school science club or quiz team',
      'Completed advanced coursework in physics, chemistry, and mathematics'
    ],
  }, 
];

export const NAVIGATION = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];
