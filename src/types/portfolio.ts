/**
 * Core Data Models & Type Definitions for the Portfolio
 * Clean, structured, and modular to allow scaling from student to researcher.
 */

export interface ProfileConfig {
  name: string;
  pronouns?: string;
  monogram: string;
  role: string;
  department: string;
  university: string;
  currentSemester: string;
  location: string;
  timezone: string;
  accentColor: string;
  statusBadge: string;
  openToOpportunities: boolean;
  opportunitiesText: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroIntro: string;
  bioParagraphs: string[];
  contact: {
    email: string;
    github: string;
    resumePdfName: string;
    resumeUrl: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  interests: {
    name: string;
    category: string;
    highlight?: boolean;
  }[];
  philosophy: {
    quote: string;
    author: string;
    principles: {
      number: string;
      title: string;
      description: string;
    }[];
  };
}

export type SkillCategory = 'languages' | 'frameworks' | 'systems' | 'tools' | 'topics';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: 'Core Mastery' | 'Proficient' | 'Working Knowledge' | 'Currently Exploring';
  experienceYears: string;
  highlighted?: boolean;
  description: string;
  tags?: string[];
  associatedProjects?: string[];
}

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Research' | 'Experimental';

export type ProjectCategory = 
  | 'Systems & Graphics' 
  | 'Desktop & Networking' 
  | 'Software Architecture' 
  | 'Algorithms & Data Structures' 
  | 'AI & Machine Learning' 
  | 'Web & Cloud' 
  | 'Academic & Compilers';

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  architectureNotes?: string[];
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
  githubUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  image: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface AcademicJourney {
  degree: string;
  major: string;
  institution: string;
  currentSemester: string;
  expectedGraduation: string;
  location: string;
  currentStanding: string;
  gpa?: string;
  semesters: {
    semester: string;
    term: string;
    year: string;
    status: 'Completed' | 'Current' | 'Upcoming';
    focus: string;
    keyCourses: {
      code: string;
      name: string;
      description: string;
      grade?: string;
    }[];
    semesterHighlights: string[];
  }[];
  achievements: {
    title: string;
    date: string;
    issuer: string;
    description: string;
    icon?: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
  }[];
}

export type ResearchCategory = 'Published' | 'Ongoing' | 'Explorations';

export interface ResearchItem {
  id: string;
  title: string;
  category: ResearchCategory;
  area: string;
  status: string;
  date: string;
  authors: string[];
  abstract: string;
  methodology?: string;
  keyInsights?: string[];
  pdfUrl?: string;
  codeUrl?: string;
  paperUrl?: string;
  interactiveDemo?: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  content: string;
  keyTakeaways: string[];
}

export interface CurrentlyExploringItem {
  id: string;
  title: string;
  category: 'Systems' | 'Algorithms & Theory' | 'Software Engineering' | 'Research Prototype';
  status: 'Deep Dive' | 'Active Experiment' | 'Reading Paper' | 'Building POC';
  description: string;
  keyConcepts: string[];
  startedDate: string;
  relatedLinks?: { label: string; url: string }[];
}
