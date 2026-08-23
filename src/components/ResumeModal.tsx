import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Mail, 
  Github, 
  MapPin, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { profileConfig, skillsData, featuredProjectsData, academicJourneyData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="curriculum-vitae-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A0A]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#D8D6D0] rounded-3xl shadow-2xl overflow-hidden text-[#0A0A0A] max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8D6D0] bg-[#F3F1EC] print:hidden">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-[#FF9D2E]" />
            <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest">
              CURRICULUM VITAE // {profileConfig.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#ECE8E1] border border-[#D8D6D0] text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white hover:bg-[#ECE8E1] text-[#0A0A0A] border border-[#D8D6D0] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted ATS Printable Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 font-sans text-[#1A1A1A] leading-normal bg-white">
          
          {/* Header */}
          <div className="border-b-2 border-[#0A0A0A] pb-4 space-y-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-2xl sm:text-3xl font-black text-[#0A0A0A] uppercase tracking-tight">
                {profileConfig.name}
              </h1>
              <span className="font-mono text-xs font-bold text-[#0A0A0A] bg-[#FF9D2E] px-2.5 py-0.5 rounded text-black self-center sm:self-auto uppercase tracking-wider">
                {profileConfig.role.split('|')[0].trim()}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs font-mono text-[#4A4A4A] pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#FF9D2E]" />
                <a href={`mailto:${profileConfig.contact.email}`} className="hover:underline">{profileConfig.contact.email}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Github className="w-3 h-3" />
                <a href={profileConfig.contact.github} target="_blank" rel="noreferrer" className="hover:underline">{profileConfig.contact.github.replace('https://', '')}</a>
              </span>
              <span>•</span>
              <span>{profileConfig.location}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0A0A0A] border-b border-[#D8D6D0] pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-[#0A0A0A]">{academicJourneyData.institution}</span>
                <div className="text-[#333]">{academicJourneyData.degree}</div>
                <div className="text-xs text-[#666] mt-0.5 font-mono">
                  Standing: {academicJourneyData.currentSemester}
                </div>
              </div>
              <div className="font-mono text-xs text-[#666] mt-1 sm:mt-0 text-left sm:text-right">
                <div>Expected: {academicJourneyData.expectedGraduation}</div>
                <div>{academicJourneyData.location}</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0A0A0A] border-b border-[#D8D6D0] pb-1">
              Technical Skills & Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-[#F3F1EC] rounded-xl border border-[#D8D6D0]">
                <span className="font-bold text-[#0A0A0A] block mb-1">Programming Languages: </span>
                <span className="text-[#333] font-mono text-[11px]">C, C++ (C++17/20), Java, SQL</span>
              </div>
              <div className="p-3 bg-[#F3F1EC] rounded-xl border border-[#D8D6D0]">
                <span className="font-bold text-[#0A0A0A] block mb-1">Systems & Graphics: </span>
                <span className="text-[#333] font-mono text-[11px]">Raylib, POSIX Sockets, Multithreading, Memory Profiling</span>
              </div>
              <div className="p-3 bg-[#F3F1EC] rounded-xl border border-[#D8D6D0]">
                <span className="font-bold text-[#0A0A0A] block mb-1">Toolchains & Environments: </span>
                <span className="text-[#333] font-mono text-[11px]">Git, CMake, Linux Environment, GDB, Valgrind, GoogleTest</span>
              </div>
              <div className="p-3 bg-[#F3F1EC] rounded-xl border border-[#D8D6D0]">
                <span className="font-bold text-[#0A0A0A] block mb-1">Database & UI Systems: </span>
                <span className="text-[#333] font-mono text-[11px]">MySQL, SQLite, JDBC, JavaFX, FXML</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#0A0A0A] border-b border-[#D8D6D0] pb-1">
              Key Engineering Projects
            </h2>

            {featuredProjectsData.map((project) => (
              <div key={project.id} className="space-y-1.5 p-3.5 bg-[#F3F1EC] rounded-xl border border-[#D8D6D0]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-[#0A0A0A] text-xs sm:text-sm uppercase tracking-tight">
                    {project.title} | <span className="font-mono text-xs font-bold text-[#FF9D2E]">{project.technologies.slice(0, 4).join(', ')}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#666] font-bold">{project.year}</div>
                </div>
                <p className="text-[#333] leading-relaxed text-xs">
                  {project.description}
                </p>
                <ul className="list-disc list-inside text-[#444] space-y-0.5 pl-1 text-xs">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Independent Study (if available) */}
          {academicJourneyData.certifications.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#0A0A0A] border-b border-[#D8D6D0] pb-1">
                Certifications & Technical Specializations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {academicJourneyData.certifications.map((cert, i) => (
                  <div key={i} className="p-3 bg-[#F3F1EC] rounded-xl border border-[#D8D6D0] space-y-0.5">
                    <span className="font-bold text-[#0A0A0A] block">• {cert.name}</span>
                    <div className="text-[11px] text-[#666] font-mono">{cert.issuer} ({cert.date})</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-[#F3F1EC] border-t border-[#D8D6D0] flex items-center justify-between text-xs font-mono text-[#8A8A8A] print:hidden">
          <span>Formatted for Standard ATS Engineering Ingestion</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] transition-colors text-xs font-bold uppercase tracking-wider"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
};
