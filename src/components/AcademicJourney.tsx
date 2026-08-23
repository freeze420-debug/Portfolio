import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Building2,
  Calendar,
  Sparkles,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { academicJourneyData } from '../data/portfolioData';

export const AcademicJourney: React.FC = () => {
  const [isJourneyDropdownOpen, setIsJourneyDropdownOpen] = useState<boolean>(true);
  const [expandedSemester, setExpandedSemester] = useState<string>('4th Semester');

  const toggleSemester = (sem: string) => {
    setExpandedSemester(expandedSemester === sem ? '' : sem);
  };

  return (
    <section 
      id="journey" 
      aria-label="Journey and Academic Timeline"
      className="py-20 md:py-28 border-b border-[#D8D6D0] bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D8D6D0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
              <span>Section // 04</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">
              JOURNEY
            </h2>
          </div>
          <div className="font-mono text-xs text-[#4A4A4A] max-w-sm">
            <span className="text-[#8A8A8A]">Timeline & Milestones</span>
          </div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-5xl">
          
          {/* Main Timeline Item 1: Islamic University of Technology */}
          <div className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group">
            
            {/* Left Rail: Year & Timeline Node Dot */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 pt-2 sm:pt-3 w-20 sm:w-28 justify-end text-right">
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#8A8A8A] tracking-tight">
                2024 - 
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#B4B1A8] group-hover:bg-[#FF9D2E] group-hover:scale-125 transition-all shrink-0 ring-4 ring-[#F3F1EC]" />
            </div>

            {/* Vertical Guide Line */}
            <div className="absolute left-[84px] sm:left-[116px] top-6 bottom-0 w-px bg-[#D8D6D0] -translate-x-1/2" />

            {/* Timeline Content Block */}
            <div className="flex-1 pb-12">
              
              {/* Main Card / Clickable Trigger */}
              <div 
                onClick={() => setIsJourneyDropdownOpen(!isJourneyDropdownOpen)}
                className="w-full text-left bg-white hover:bg-[#FAF9F6] border border-[#D8D6D0] hover:border-[#0A0A0A] rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-200 cursor-pointer shadow-2xs group/card"
                role="button"
                tabIndex={0}
                aria-expanded={isJourneyDropdownOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsJourneyDropdownOpen(!isJourneyDropdownOpen);
                  }
                }}
              >
                <div className="flex items-start sm:items-center justify-between gap-4">
                  
                  {/* University Emblem + Title & Subtitle */}
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                    {/* IUT Institutional Logo / Crest Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0A0A0A] text-white flex flex-col items-center justify-center shrink-0 shadow-xs group-hover/card:bg-[#1A1A1A] transition-colors border border-black/10">
                      <GraduationCap className="w-6 h-6 text-[#FF9D2E]" />
                      <span className="text-[9px] font-mono font-black text-white/90 tracking-tighter -mt-0.5">IUT</span>
                    </div>

                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl text-[#0A0A0A] group-hover/card:text-[#0A0A0A] transition-colors">
                          <span className="font-mono text-sm sm:text-base font-semibold text-[#8A8A8A] mr-1.5">2024 - .</span>
                          Studying at Islamic University of Technology
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#065F46] border border-[#10B981]/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                          Current
                        </span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] font-medium">
                        Bachelor of Science in Computer Science & Engineering
                      </p>
                    </div>
                  </div>

                  {/* Dropdown Indicator */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-block font-mono text-[11px] text-[#8A8A8A] group-hover/card:text-[#0A0A0A]">
                      {isJourneyDropdownOpen ? 'Collapse Academic Details' : 'View Academic Details'}
                    </span>
                    <div className="p-2 rounded-xl bg-[#F3F1EC] border border-[#D8D6D0] text-[#0A0A0A] group-hover/card:bg-[#0A0A0A] group-hover/card:text-white transition-colors">
                      {isJourneyDropdownOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Sub-info banner inside summary */}
                <div className="mt-3.5 pt-3 border-t border-[#ECE8E1] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#8A8A8A]">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[#4A4A4A]">
                      <MapPin className="w-3.5 h-3.5 text-[#FF9D2E]" />
                      Gazipur, Bangladesh
                    </span>
                    <span>•</span>
                    <span>Class of {academicJourneyData.expectedGraduation}</span>
                  </div>
                  <span className="text-[#FF9D2E] font-bold">
                    Click to {isJourneyDropdownOpen ? 'hide' : 'explore'} coursework & certifications →
                  </span>
                </div>
              </div>

              {/* Dropdown Content: Academic Journey Details */}
              <AnimatePresence>
                {isJourneyDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#D8D6D0] space-y-8 shadow-xs">
                      
                      {/* 2-Column Grid: Coursework by Semester + Certifications */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* Left Column: Semester-by-Semester Progression */}
                        <div className="lg:col-span-7 space-y-5">
                          <div className="flex items-center justify-between text-[11px] font-mono text-[#4A4A4A] pb-2 border-b border-[#D8D6D0]">
                            <span className="uppercase tracking-wider font-bold text-[#0A0A0A] flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-[#FF9D2E]" />
                              Semester-by-Semester Progression
                            </span>
                            <span>4 Semesters Completed / In Progress</span>
                          </div>

                          <div className="space-y-3.5 relative before:absolute before:inset-y-0 before:left-3.5 before:w-0.5 before:bg-[#D8D6D0]">
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
                                      className="w-full p-4 flex items-center justify-between text-left cursor-pointer focus:outline-hidden"
                                    >
                                      <div className="space-y-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                          <span className="font-display font-black text-base text-[#0A0A0A]">
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
                                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                      </div>
                                    </button>

                                    {/* Accordion Expanded Body */}
                                    {isExpanded && (
                                      <div className="px-4 pb-4 pt-2 border-t border-[#D8D6D0] space-y-3.5 bg-[#F3F1EC]/60">
                                        {/* Coursework List */}
                                        <div className="space-y-2">
                                          <span className="text-[10px] font-bold text-[#8A8A8A] uppercase tracking-wider">
                                            Key Theoretical & Applied Courses
                                          </span>
                                          <div className="grid grid-cols-1 gap-2">
                                            {sem.keyCourses.map((c, i) => (
                                              <div key={i} className="p-2.5 rounded-xl bg-white border border-[#D8D6D0] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 shadow-2xs">
                                                <div>
                                                  <span className="font-sans font-bold text-[#0A0A0A] text-xs sm:text-[13px]">
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
                                              Milestones & Practical Labs
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

                        {/* Right Column: Certifications & Roadmap */}
                        <div className="lg:col-span-5 space-y-6">
                          
                          {/* Certifications Card */}
                          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#D8D6D0] shadow-2xs space-y-4">
                            <div className="flex items-center justify-between border-b border-[#D8D6D0] pb-3">
                              <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                                <Award className="w-4 h-4 text-[#FF9D2E]" />
                                Certifications
                              </span>
                              <span className="text-[10px] font-mono text-[#8A8A8A] font-semibold">0 ITEMS</span>
                            </div>

                            <div className="p-6 rounded-2xl border border-dashed border-[#D8D6D0] bg-[#F9F8F6] flex flex-col items-center justify-center text-center space-y-2">
                              <Award className="w-5 h-5 text-[#B4B1A8]" />
                              <p className="text-xs font-medium text-[#4A4A4A]">No certifications listed yet</p>
                              <p className="text-[11px] font-mono text-[#8A8A8A]">Certificates & accreditations will appear here</p>
                            </div>
                          </div>

                          {/* Academic Focus & Roadmap */}
                          <div className="p-5 rounded-2xl bg-white border border-[#D8D6D0] shadow-2xs space-y-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-[#0A0A0A]">
                              <Sparkles className="w-4 h-4 text-[#FF9D2E]" />
                              <span>Upcoming Electives & Specializations</span>
                            </div>
                            <p className="text-xs text-[#4A4A4A] leading-relaxed">
                              Focusing on Distributed Systems, Network Security, Operating Systems Kernels, and Machine Learning Systems across 5th–8th semesters.
                            </p>
                          </div>

                        </div>

                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
