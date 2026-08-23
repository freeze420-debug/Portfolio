import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check, 
  Code2, 
  Calendar,
  Cpu,
  ArrowRight,
  Share2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { featuredProjectsData, allProjectsArchive } from '../data/portfolioData';
import { HexGridVisualizer } from './HexGridVisualizer';
import { NetworkTopologyVisualizer } from './NetworkTopologyVisualizer';
import { FarmOSVisualizer } from './FarmOSVisualizer';

interface ProjectDetailPageProps {
  project: ProjectItem;
  onBack: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ 
  project, 
  onBack,
  onSelectProject
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top upon opening project detail
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Find next and previous projects
  const allProjects = [...featuredProjectsData, ...allProjectsArchive.filter(p => !featuredProjectsData.some(fp => fp.id === p.id))];
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const renderProjectVisualizer = (projectId: string) => {
    switch (projectId) {
      case 'glinski-hexagonal-chess':
      case 'glinsky-hex-chess':
        return <HexGridVisualizer />;
      case 'javafx-chat-app':
        return <NetworkTopologyVisualizer />;
      case 'farmos-management-system':
        return <FarmOSVisualizer />;
      default:
        return null;
    }
  };

  return (
    <div id="project-detail-page" className="min-h-screen bg-[#F3F1EC] text-[#0A0A0A] font-sans antialiased pb-24 animate-in fade-in duration-200">
      
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D8D6D0] py-3.5 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Back to Portfolio button */}
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F3F1EC] hover:bg-[#0A0A0A] hover:text-white border border-[#D8D6D0] text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-all cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-[#FF9D2E]" />
            <span>Back to Projects</span>
          </button>

          {/* Center Project Identifier */}
          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-[#8A8A8A]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-bold text-[#0A0A0A] truncate max-w-xs">{project.title}</span>
            <span>// {project.year}</span>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-xl bg-[#F3F1EC] hover:bg-white border border-[#D8D6D0] text-[#0A0A0A] text-xs transition-colors cursor-pointer"
              title="Copy link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#10B981]" /> : <Share2 className="w-4 h-4 text-[#4A4A4A]" />}
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">GitHub Code</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>

        </div>
      </header>

      {/* Main Case Study Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-10 sm:space-y-12">
        
        {/* Breadcrumb & Metadata Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <button 
              type="button"
              onClick={onBack}
              className="font-mono text-xs text-[#8A8A8A] hover:text-[#0A0A0A] transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <span className="font-mono text-xs text-[#8A8A8A]">/</span>
            <span className="font-mono text-xs text-[#8A8A8A]">{project.category}</span>
            <span className="font-mono text-xs text-[#8A8A8A]">/</span>
            <span className="font-mono text-xs font-bold text-[#FF9D2E]">{project.slug}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold ${
              project.status === 'Completed' 
                ? 'bg-[#10B981]/15 text-[#065F46] border border-[#10B981]/30' 
                : project.status === 'Research' 
                ? 'bg-[#8B5CF6]/15 text-[#5B21B6] border border-[#8B5CF6]/30'
                : 'bg-[#FF9D2E]/20 text-[#9A3412] border border-[#FF9D2E]/40'
            }`}>
              ● {project.status}
            </span>
            <span className="font-mono text-xs text-[#8A8A8A] bg-white px-2.5 py-1 rounded-full border border-[#D8D6D0]">
              Timeline: {project.year}
            </span>
            <span className="font-mono text-xs text-[#8A8A8A] bg-white px-2.5 py-1 rounded-full border border-[#D8D6D0]">
              Category: {project.category}
            </span>
          </div>

          {/* Big Editorial Title & Tagline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0A] tracking-tight uppercase leading-[1.05]">
            {project.title}
          </h1>
          
          <p className="font-sans text-lg sm:text-xl text-[#3A3731] font-medium leading-relaxed max-w-4xl">
            {project.tagline}
          </p>
        </div>

        {/* Project Thumbnail Image Hero */}
        {project.image && (
          <div className="relative rounded-3xl overflow-hidden border border-[#D8D6D0] bg-[#0A1120] shadow-md max-h-[480px]">
            <img 
              src={project.image} 
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center max-h-[480px]"
            />
            <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs border border-white/20 text-white text-[11px] font-mono px-3 py-1 rounded-lg">
              {project.technologies.slice(0, 3).join(' • ')}
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#FF9D2E]" />
              System Metrics & Benchmarks
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-[#D8D6D0] shadow-2xs space-y-1">
                  <div className="font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider font-bold">
                    {m.label}
                  </div>
                  <div className="font-display text-lg sm:text-xl font-black text-[#0A0A0A]">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Simulation & Live Visualizer */}
        {renderProjectVisualizer(project.id) && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF9D2E]" />
                Interactive Simulation & Protocol Topology
              </h2>
              <span className="text-[10px] font-mono text-[#8A8A8A] uppercase">Active In-Browser Simulator</span>
            </div>
            {renderProjectVisualizer(project.id)}
          </div>
        )}

        {/* Deep Dive Narrative & Engineering Overview */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#FF9D2E]" />
            Engineering Overview & Architecture
          </h2>
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D8D6D0] shadow-2xs space-y-4 font-sans text-base text-[#2E2C27] leading-relaxed">
            <p className="font-medium text-lg text-[#0A0A0A]">
              {project.description}
            </p>
            <div className="whitespace-pre-line text-[#3A3731] leading-relaxed border-t border-[#ECE8E1] pt-4">
              {project.longDescription || project.description}
            </div>
          </div>
        </div>

        {/* Key Highlights & Technical Accomplishments */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              Key Innovations & Engineering Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-white border border-[#D8D6D0] flex items-start gap-3 shadow-2xs"
                >
                  <span className="font-mono font-black text-sm text-[#FF9D2E] pt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="text-xs sm:text-sm text-[#2E2C27] font-medium leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture & Systems Data Flow */}
        {project.architectureNotes && project.architectureNotes.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FF9D2E]" />
              Data Flow & Design Patterns
            </h2>
            <div className="space-y-2.5">
              {project.architectureNotes.map((note, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#D8D6D0] text-xs sm:text-sm font-mono text-[#33312B] shadow-2xs flex items-start gap-2.5">
                  <span className="text-[#FF9D2E] font-bold">↳</span>
                  <span className="leading-relaxed">{note}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Snippet Spotlight */}
        {project.codeSnippet && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#FF9D2E]" />
                {project.codeSnippet.title}
              </h2>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#ECE8E1] border border-[#D8D6D0] text-xs font-mono font-bold text-[#0A0A0A] transition-colors cursor-pointer shadow-2xs"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5 text-[#FF9D2E]" />}
                <span>{copiedCode ? 'Copied to Clipboard' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="bg-[#0A0A0A] text-[#E5E5E5] p-5 sm:p-6 rounded-3xl border border-[#262626] font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed shadow-lg">
              <pre className="selection:bg-[#FF9D2E] selection:text-black">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Technologies & Toolchains Pill Repository */}
        <div className="space-y-3 bg-white p-6 rounded-3xl border border-[#D8D6D0] shadow-2xs">
          <span className="text-xs font-bold text-[#8A8A8A] uppercase tracking-widest block">
            Complete Technology Stack & Libraries
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3.5 py-1.5 rounded-xl bg-[#F3F1EC] border border-[#D8D6D0] font-mono text-xs text-[#0A0A0A] font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Navigation & Next Project Carousel */}
        <div className="pt-8 border-t border-[#D8D6D0] space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-2xs cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#ECE8E1] border border-[#0A0A0A] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8A8A8A]" />
              </a>
            )}
          </div>

          {/* Prev / Next Project Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {prevProject && (
              <div 
                onClick={() => onSelectProject(prevProject)}
                className="p-4 rounded-2xl bg-white border border-[#D8D6D0] hover:border-[#FF9D2E] transition-colors cursor-pointer group space-y-1"
              >
                <div className="text-[10px] font-mono text-[#8A8A8A] uppercase font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3 text-[#FF9D2E]" />
                  <span>Previous Case Study</span>
                </div>
                <div className="font-display font-bold text-sm text-[#0A0A0A] group-hover:text-[#FF9D2E] transition-colors truncate">
                  {prevProject.title}
                </div>
              </div>
            )}

            {nextProject && (
              <div 
                onClick={() => onSelectProject(nextProject)}
                className="p-4 rounded-2xl bg-white border border-[#D8D6D0] hover:border-[#FF9D2E] transition-colors cursor-pointer group space-y-1 sm:text-right"
              >
                <div className="text-[10px] font-mono text-[#8A8A8A] uppercase font-bold flex items-center gap-1 sm:justify-end">
                  <span>Next Case Study</span>
                  <ArrowRight className="w-3 h-3 text-[#FF9D2E]" />
                </div>
                <div className="font-display font-bold text-sm text-[#0A0A0A] group-hover:text-[#FF9D2E] transition-colors truncate">
                  {nextProject.title}
                </div>
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
};
