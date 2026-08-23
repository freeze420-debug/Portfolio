import React, { useState } from 'react';
import { 
  Microscope, 
  FileText, 
  ArrowUpRight, 
  Github, 
  Layers, 
  Sparkles, 
  BookOpen, 
  CheckCircle2,
  Atom,
  Clock
} from 'lucide-react';
import { researchData } from '../data/portfolioData';
import { ResearchCategory, ResearchItem } from '../types/portfolio';

export const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ResearchCategory>('Explorations');

  const tabs: ResearchCategory[] = ['Explorations', 'Ongoing', 'Published'];

  const filteredItems = researchData.filter(item => item.category === activeTab);

  return (
    <section 
      id="research" 
      aria-label="Research and Academic Exploration"
      className="py-20 md:py-28 border-b border-[#D8D6D0] bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D8D6D0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
              <span>Section // 06</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">
              RESEARCH & EXPLORATION
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4A4A] max-w-sm">
            Investigating mathematical optimizations, memory hierarchy dynamics, and algorithmic proofs.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mb-8 p-1 bg-white rounded-xl border border-[#D8D6D0] shadow-2xs w-fit">
          {tabs.map((tab) => {
            const count = researchData.filter(item => item.category === tab).length;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#0A0A0A] text-white shadow-2xs'
                    : 'text-[#4A4A4A] hover:text-[#0A0A0A] hover:bg-[#F3F1EC]'
                }`}
              >
                <span>{tab}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                  activeTab === tab ? 'bg-[#FF9D2E] text-[#0A0A0A]' : 'bg-[#ECE8E1]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Research Items or Professional Empty Panel */}
        {filteredItems.length > 0 ? (
          <div className="space-y-8">
            {filteredItems.map((item) => (
              <article 
                key={item.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8D6D0] shadow-2xs space-y-6 hover:border-[#FF9D2E] transition-colors"
              >
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D6D0] pb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FF9D2E]/20 text-[#9A3412] border border-[#FF9D2E]/30">
                      {item.status}
                    </span>
                    <span className="font-mono text-xs text-[#8A8A8A]">
                      Area: {item.area}
                    </span>
                    <span className="font-mono text-xs text-[#8A8A8A]">
                      • {item.date}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-[#4A4A4A]">
                    Author: <span className="font-bold text-[#0A0A0A]">{item.authors.join(', ')}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-[#0A0A0A] tracking-tight uppercase">
                  {item.title}
                </h3>

                {/* Abstract */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#0A0A0A] uppercase tracking-widest">
                    Abstract
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#2E2C27] leading-relaxed">
                    {item.abstract}
                  </p>
                </div>

                {/* Key Insights */}
                {item.keyInsights && (
                  <div className="space-y-2 bg-[#F3F1EC] p-5 rounded-2xl border border-[#D8D6D0]">
                    <span className="text-[10px] font-bold text-[#0A0A0A] uppercase tracking-widest">
                      Key Theoretical Insights & Contributions
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A4A4A]">
                      {item.keyInsights.map((insight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Methodology & Action Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#D8D6D0]">
                  {item.methodology && (
                    <div className="font-mono text-xs text-[#4A4A4A]">
                      <span className="text-[#0A0A0A] font-bold">Methodology: </span>
                      {item.methodology}
                    </div>
                  )}

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    {item.codeUrl && (
                      <a
                        href={item.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F3F1EC] hover:bg-[#ECE8E1] border border-[#D8D6D0] text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {item.paperUrl && (
                      <a
                        href={item.paperUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Read Working Draft</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Clean Professional Empty State Panel */
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D8D6D0] text-center space-y-4 max-w-2xl mx-auto shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#F3F1EC] text-[#FF9D2E] flex items-center justify-center mx-auto border border-[#D8D6D0]">
              <Atom className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0A0A0A] uppercase tracking-tight">
              No Research Publications Yet
            </h3>
            <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed max-w-lg mx-auto">
              Currently an undergraduate student focused on core coursework, hands-on systems programming, and foundational computer science topics. Future academic papers and technical research notes will be published here.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-[#8A8A8A]">
              <span className="px-3 py-1 bg-[#F3F1EC] rounded-lg border border-[#D8D6D0]">
                Status: Undergrad Track
              </span>
              <span className="px-3 py-1 bg-[#F3F1EC] rounded-lg border border-[#D8D6D0]">
                Focus: Systems & Algorithms
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
