import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'soft';
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/22devesh',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/devesh93/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:dnssinghal8269@gmail.com',
    icon: Mail,
  },
  {
    name: 'Phone',
    url: 'tel:+919301594274',
    icon: Phone,
  },
];

export const skills: Skill[] = [
  { name: 'Java', level: 90, category: 'language' },
  { name: 'DSA', level: 85, category: 'language' },
  { name: 'HTML', level: 80, category: 'language' },
  { name: 'CSS', level: 75, category: 'language' },
  { name: 'JavaScript', level: 80, category: 'language' },
  { name: 'Node.js', level: 70, category: 'framework' },
  { name: 'React', level: 75, category: 'framework' },
  { name: 'PHP', level: 65, category: 'framework' },
  { name: 'Laravel', level: 60, category: 'framework' },
  { name: 'MongoDB', level: 70, category: 'tool' },
  { name: 'Git', level: 75, category: 'tool' },
  { name: 'GitHub', level: 80, category: 'tool' },
  { name: 'Time Management', level: 85, category: 'soft' },
  { name: 'Teamwork', level: 90, category: 'soft' },
  { name: 'Learning Mindset', level: 95, category: 'soft' },
];

export const projects: Project[] = [
  {
    title: 'Online Quiz System',
    description:
      'A comprehensive quiz platform allowing instructors to create quizzes and students to take them with automated grading.',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'User authentication and role-based access',
      'Quiz creation and management dashboard',
      'Automated grading system',
      'Enhanced data security',
      'Real-time results and analytics'
    ],
    imageUrl: '/quiz-system.jpg',
    githubUrl: 'https://github.com/22devesh',
  },
  {
    title: 'Delivery Site',
    description:
      'A responsive food delivery platform featuring dynamic UI elements and a streamlined ordering process.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive design across all devices',
      'Interactive shopping cart system',
      'DOM manipulation for seamless UI interactivity',
      'Menu filtering and search functionality',
      'Order tracking simulation'
    ],
    imageUrl: '/delivery-site.jpg',
    githubUrl: 'https://github.com/22devesh',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Introduction to Java',
    issuer: 'Coding Ninjas',
    date: 'May 2024',
    credentialUrl: '/certificates/java.pdf',
  },
  {
    title: 'Server-side JavaScript with Node.js',
    issuer: 'Coursera',
    date: 'March 2024',
    credentialUrl: '/certificates/nodejs.pdf',
  },
  {
    title: 'Mastering DSA',
    issuer: 'Udemy',
    date: 'November 2023',
    credentialUrl: '/certificates/dsa.pdf',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'December 2024',
    credentialUrl: '/certificates/cloud.pdf',
  },
];

export const education: Education[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Lovely Professional University',
    duration: '2022–Present',
    score: 'CGPA: 7.17',
  },
  {
    degree: 'Intermediate',
    institution: '',
    duration: '',
    score: '82.8%',
  },
  {
    degree: 'Matriculation',
    institution: '',
    duration: '',
    score: '76.2%',
  },
];

export const aboutMe = `I am a self-driven software engineering student with a passion for building robust applications. With a strong foundation in Data Structures and Algorithms, Java, and the MERN stack, I continuously explore new technologies to expand my skillset. I approach challenges with analytical thinking and a problem-solving mindset, always eager to learn and grow in this ever-evolving field of computer science.`;