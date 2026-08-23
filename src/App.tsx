import React, { useState, useEffect } from 'react';
import { StatusTicker } from './components/StatusTicker';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectArchive } from './components/ProjectArchive';
import { AcademicJourney } from './components/AcademicJourney';
import { ResearchSection } from './components/ResearchSection';
import { WritingSection } from './components/WritingSection';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ArticleModal } from './components/ArticleModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectItem, ArticleItem } from './types/portfolio';
import { featuredProjectsData, allProjectsArchive } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  // Synchronize URL hash with project selection
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '');
        const all = [...featuredProjectsData, ...allProjectsArchive];
        const matched = all.find(p => p.slug === slug || p.id === slug);
        if (matched) {
          setSelectedProject(matched);
        }
      } else if (selectedProject && !hash.startsWith('#project-')) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    window.location.hash = `project-${project.slug || project.id}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      window.history.pushState(null, '', window.location.pathname + '#projects');
    }
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Active section scroll spy (only runs when on main portfolio page)
  useEffect(() => {
    if (selectedProject) return;

    const sections = [
      'hero',
      'about',
      'skills',
      'projects',
      'archive',
      'journey',
      'research',
      'writing',
      'now',
      'contact',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selectedProject]);

  // Keyboard accessibility: Close modals/project page on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProject) {
          handleBackToPortfolio();
        }
        setSelectedArticle(null);
        setIsResumeModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // If a project is selected, replace current page with dedicated ProjectDetailPage
  if (selectedProject) {
    return (
      <ProjectDetailPage 
        project={selectedProject}
        onBack={handleBackToPortfolio}
        onSelectProject={handleOpenProject}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F1EC] text-[#0A0A0A] font-sans antialiased selection:bg-[#FF9D2E] selection:text-black">
      {/* Top Live Telemetry & Status Ticker */}
      <StatusTicker />

      {/* Main Sticky Navigation */}
      <Navigation 
        activeSection={activeSection}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Scrollable Sections */}
      <main id="main-content-flow">
        {/* 01. Hero & Introduction */}
        <HeroSection 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* 02. About & Engineering Philosophy */}
        <AboutSection />

        {/* 03. Skills & Technologies */}
        <SkillsSection />

        {/* 04. Featured Projects Showcase */}
        <FeaturedProjects 
          onSelectProject={handleOpenProject}
        />

        {/* 05. Complete Project Archive */}
        <ProjectArchive 
          onSelectProject={handleOpenProject}
        />

        {/* 06. Academic Journey & Coursework */}
        <AcademicJourney />

        {/* 07. Research & Exploration */}
        <ResearchSection />

        {/* 08. Writing & Technical Notes */}
        <WritingSection 
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 09. Currently Exploring / Roadmap */}
        <CurrentlyExploring />

        {/* 10. Contact & Dispatch Form */}
        <ContactSection 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Article Reader Modal */}
      <ArticleModal 
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* ATS-Formatted Curriculum Vitae Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

