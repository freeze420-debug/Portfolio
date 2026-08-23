import React, { useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check, 
  Code2, 
  Calendar,
  Cpu
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { HexGridVisualizer } from './HexGridVisualizer';
import { NetworkTopologyVisualizer } from './NetworkTopologyVisualizer';
import { FarmOSVisualizer } from './FarmOSVisualizer';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const renderProjectVisualizer = (projectId: string) => {
    switch (projectId) {
      case 'glinski-hexagonal-chess':
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
    <div 
      id="project-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A0A]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#F3F1EC] border border-[#D8D6D0] rounded-3xl shadow-2xl overflow-hidden text-[#0A0A0A] max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8D6D0] bg-white">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9D2E]" />
            <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest">
              Case Study // {project.category}
            </span>
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#F3F1EC] text-[#4A4A4A] border border-[#D8D6D0]">
              Year: {project.year}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg bg-[#F3F1EC] hover:bg-[#ECE8E1] text-[#0A0A0A] border border-[#D8D6D0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Title & Tagline */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${
                project.status === 'Completed' 
                  ? 'bg-[#10B981]/15 text-[#065F46] border border-[#10B981]/30' 
                  : project.status === 'Research' 
                  ? 'bg-[#8B5CF6]/15 text-[#5B21B6] border border-[#8B5CF6]/30'
                  : 'bg-[#FF9D2E]/20 text-[#9A3412] border border-[#FF9D2E]/40'
              }`}>
                ● {project.status}
              </span>
              <span className="text-xs font-mono text-[#8A8A8A]">
                {project.category}
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight uppercase">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#4A4A4A] font-medium leading-snug">
              {project.tagline}
            </p>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-5 rounded-2xl border border-[#D8D6D0] shadow-2xs">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider font-bold">
                    {m.label}
                  </div>
                  <div className="font-display text-base sm:text-lg font-black text-[#0A0A0A]">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Simulation / Live Visualizer */}
          {renderProjectVisualizer(project.id) && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FF9D2E]" />
                Interactive Simulation & Topology
              </h3>
              {renderProjectVisualizer(project.id)}
            </div>
          )}

          {/* Deep-Dive Narrative */}
          <div className="space-y-4 font-sans text-sm sm:text-base text-[#2E2C27] leading-relaxed">
            <h3 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#FF9D2E]" />
              Engineering Overview & Motivation
            </h3>
            <div className="space-y-3 whitespace-pre-line bg-white p-6 rounded-2xl border border-[#D8D6D0] shadow-2xs">
              {project.longDescription || project.description}
            </div>
          </div>

          {/* Key Highlights / Achievements */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Key Technical Highlights & Innovations
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-[#D8D6D0] text-xs sm:text-sm text-[#2E2C27] shadow-2xs">
                    <span className="font-mono font-bold text-[#FF9D2E] text-xs pt-0.5">0{i+1}.</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FF9D2E]" />
                Architecture & Data Flow
              </h3>
              <div className="space-y-2">
                {project.architectureNotes.map((note, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#D8D6D0] text-xs font-mono text-[#33312B] shadow-2xs">
                    {note}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet Spotlight */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#FF9D2E]" />
                  {project.codeSnippet.title}
                </h3>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-[#D8D6D0] text-[11px] font-mono font-bold text-[#0A0A0A] transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3 text-[#FF9D2E]" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="bg-[#0A0A0A] text-[#E5E5E5] p-5 rounded-2xl border border-[#262626] font-mono text-xs overflow-x-auto leading-relaxed shadow-md">
                <pre className="selection:bg-[#FF9D2E] selection:text-black">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Technologies Stack Pills */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-[#8A8A8A] uppercase tracking-widest">
              Technologies & Toolchain
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white border border-[#D8D6D0] font-mono text-xs text-[#0A0A0A] font-bold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-white border-t border-[#D8D6D0] flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-xs text-[#8A8A8A]">
            Repository status: Verified build
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F3F1EC] border border-[#0A0A0A] text-[#0A0A0A] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Interactive View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
