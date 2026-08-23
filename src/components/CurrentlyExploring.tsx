import React from 'react';
import { 
  Compass, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { currentlyExploringData } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section 
      id="now" 
      aria-label="Currently Exploring and Learning Roadmap"
      className="py-20 md:py-28 border-b border-[#D8D6D0] bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D8D6D0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
              <span>Section // 07</span>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">
                NOW / EXPLORING
              </h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#065F46] border border-[#10B981]/30 font-mono text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>Live Pulse</span>
              </span>
            </div>
          </div>
          <p className="font-mono text-xs text-[#4A4A4A] max-w-sm">
            What I am actively reading, profiling, and experimenting with outside of formal coursework.
          </p>
        </div>

        {/* 2x2 Grid of Active Explorations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyExploringData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D8D6D0] hover:border-[#FF9D2E] transition-all duration-200 shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#8A8A8A] uppercase tracking-wider font-bold">
                    // {item.category}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FF9D2E]/20 text-[#9A3412] font-bold uppercase tracking-wider border border-[#FF9D2E]/30">
                    {item.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-xl text-[#0A0A0A] uppercase tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Concepts Tags & Timeline */}
              <div className="space-y-3 pt-4 border-t border-[#D8D6D0]">
                <div className="flex flex-wrap gap-1.5">
                  {item.keyConcepts.map((concept, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#F3F1EC] text-[11px] font-mono text-[#0A0A0A] border border-[#D8D6D0]"
                    >
                      {concept}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8A8A]">
                  <span>Initiated: {item.startedDate}</span>
                  <span className="text-[#0A0A0A] font-bold uppercase">Active Lab Notebook</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] text-white border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-black text-base uppercase text-white flex items-center justify-center sm:justify-start gap-2 tracking-wide">
              <Terminal className="w-4 h-4 text-[#FF9D2E]" />
              <span>Continuous Growth & Systems Mindset</span>
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#A0A0A0] max-w-xl">
              "The best way to understand systems is to break down their mechanics and build small prototypes from scratch."
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-[#FF9D2E] text-[#0A0A0A] font-mono text-xs font-black uppercase tracking-wider hover:bg-[#FFB45E] transition-colors whitespace-nowrap shadow-2xs"
          >
            Propose a Project or Idea →
          </a>
        </div>

      </div>
    </section>
  );
};
