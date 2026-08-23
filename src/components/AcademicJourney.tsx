import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Trophy, 
  ExternalLink,
  Sparkles,
  MapPin
} from 'lucide-react';
import { academicJourneyData } from '../data/portfolioData';

export const AcademicJourney: React.FC = () => {
  const [expandedSemester, setExpandedSemester] = useState<string>('4th Semester');

  const toggleSemester = (sem: string) => {
    setExpandedSemester(expandedSemester === sem ? '' : sem);
  };

  return (
    <section 
      id="journey" 
      aria-label="Academic Journey and University Timeline"
      className="py-20 md:py-28 border-b border-[#D8D6D0] bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D8D6D0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
              <span>Section // 05</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">
              ACADEMIC JOURNEY
            </h2>
          </div>
          <div className="font-mono text-xs text-[#4A4A4A] max-w-sm">
            <div className="font-bold text-[#0A0A0A]">{academicJourneyData.institution}</div>
            <div>{academicJourneyData.degree}</div>
          </div>
        </div>

        {/* 2-Column Layout: Chronological Semester Timeline + Honors & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Semester-by-Semester Progression */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#4A4A4A] pb-2 border-b border-[#D8D6D0]">
              <span className="uppercase tracking-wider font-bold text-[#0A0A0A]">
                Chronological Coursework & Semesters
              </span>
              <span>Class of {academicJourneyData.expectedGraduation}</span>
            </div>

            <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-3.5 before:w-0.5 before:bg-[#D8D6D0]">
              {academicJourneyData.semesters.map((sem, index) => {
                const isExpanded = expandedSemester === sem.semester;
                const isCurrent = sem.status === 'Current';

                return (
                  <div 
                    key={index} 
                    className="relative pl-9 transition-all"
                  >
                    {/* Timeline Node Icon */}
                    <div className={`absolute left-1.5 top-3.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      isCurrent
                        ? 'bg-[#FF9D2E] border-[#0A0A0A] ring-4 ring-[#FF9D2E]/20'
                        : 'bg-[#0A0A0A] border-[#F3F1EC]'
                    }`} />

                    {/* Semester Card */}
                    <div className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                      isCurrent 
                        ? 'bg-white border-[#0A0A0A] ring-2 ring-[#0A0A0A]' 
                        : 'bg-white border-[#D8D6D0] hover:border-[#FF9D2E]'
                    }`}>
                      {/* Card Header (Accordion Clickable) */}
                      <button
                        type="button"
                        onClick={() => toggleSemester(sem.semester)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer focus:outline-hidden"
                      >
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-display font-black text-lg text-[#0A0A0A]">
                              {sem.semester}
                            </span>
                            <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                              isCurrent
                                ? 'bg-[#FF9D2E] text-black font-black'
                                : 'bg-[#F3F1EC] text-[#4A4A4A] border border-[#D8D6D0]'
                            }`}>
                              {sem.term} {sem.year} {isCurrent && '• IN PROGRESS'}
                            </span>
                          </div>
                          <p className="font-sans text-xs text-[#4A4A4A]">
                            {sem.focus}
                          </p>
                        </div>

                        <div className="p-1 rounded-lg bg-[#F3F1EC] border border-[#D8D6D0] text-[#0A0A0A]">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {/* Accordion Expanded Body */}
                      {isExpanded && (
                        <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-[#D8D6D0] space-y-4 bg-[#F3F1EC]/60">
                          {/* Coursework List */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold text-[#8A8A8A] uppercase tracking-wider">
                              Key Theoretical & Applied Courses
                            </span>
                            <div className="grid grid-cols-1 gap-2">
                              {sem.keyCourses.map((c, i) => (
                                <div key={i} className="p-2.5 rounded-xl bg-white border border-[#D8D6D0] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 shadow-2xs">
                                  <div>
                                    <span className="font-mono font-bold text-[#0A0A0A] mr-2">
                                      {c.code}
                                    </span>
                                    <span className="font-sans font-medium text-[#0A0A0A]">
                                      {c.name}
                                    </span>
                                    {c.description && (
                                      <p className="text-[11px] text-[#4A4A4A] mt-0.5">
                                        {c.description}
                                      </p>
                                    )}
                                  </div>
                                  {c.grade && (
                                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#10B981]/15 text-[#065F46] border border-[#10B981]/30 font-bold self-start sm:self-center">
                                      {c.grade}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Semester Highlights */}
                          {sem.semesterHighlights && (
                            <div className="space-y-1.5 pt-1">
                              <span className="text-[10px] font-bold text-[#8A8A8A] uppercase tracking-wider">
                                Milestones & Engineering Output
                              </span>
                              <ul className="space-y-1 text-xs text-[#4A4A4A]">
                                {sem.semesterHighlights.map((hl, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF9D2E] shrink-0 mt-0.5" />
                                    <span>{hl}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Academic Honors & Professional Certifications */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Core Academic Competencies / Areas of Focus */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D8D6D0] shadow-2xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#D8D6D0] pb-3.5">
                <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#FF9D2E]" />
                  Academic Focus & Foundations
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Curriculum</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#F3F1EC] border border-[#D8D6D0] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xs text-[#0A0A0A]">Systems & Low-Level Programming</span>
                    <span className="text-[10px] font-mono font-bold text-[#FF9D2E]">C / POSIX / Sockets</span>
                  </div>
                  <p className="text-[11px] text-[#4A4A4A] leading-relaxed">
                    Manual memory management, pointers, bit manipulation, network socket programming, and OS fundamentals.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F3F1EC] border border-[#D8D6D0] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xs text-[#0A0A0A]">Algorithms & Data Structures</span>
                    <span className="text-[10px] font-mono font-bold text-[#FF9D2E]">C++ STL / DSA</span>
                  </div>
                  <p className="text-[11px] text-[#4A4A4A] leading-relaxed">
                    Graph algorithms, dynamic programming, asymptotic analysis, balanced search trees, and complexity theory.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F3F1EC] border border-[#D8D6D0] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xs text-[#0A0A0A]">Object-Oriented Design & DBs</span>
                    <span className="text-[10px] font-mono font-bold text-[#FF9D2E]">Java / JavaFX / SQL</span>
                  </div>
                  <p className="text-[11px] text-[#4A4A4A] leading-relaxed">
                    SOLID principles, design patterns, multithreaded desktop UI architecture, relational schema normalization, and ACID properties.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications & Independent Study */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D8D6D0] shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#D8D6D0] pb-3">
                <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#FF9D2E]" />
                  Certifications & Deep Study
                </span>
              </div>

              <div className="space-y-2.5">
                {academicJourneyData.certifications.map((cert, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#F3F1EC] border border-[#D8D6D0] flex items-center justify-between gap-2 text-xs">
                    <div>
                      <div className="font-display font-bold text-[#0A0A0A]">
                        {cert.name}
                      </div>
                      <div className="font-mono text-[11px] text-[#8A8A8A] mt-0.5">
                        {cert.issuer} • {cert.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note on Future Academic Growth */}
            <div className="p-4 rounded-2xl bg-[#ECE8E1] border border-[#D8D6D0] font-mono text-[11px] text-[#4A4A4A] leading-relaxed">
              <span className="text-[#0A0A0A] font-bold">Future Roadmap: </span>
              Preparing for upper-division electives in Distributed Systems, Compiler Optimization, and Machine Learning Systems during 5th-8th semesters.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
