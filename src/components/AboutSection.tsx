import React, { useState } from 'react';
import { 
  Terminal
} from 'lucide-react';
import { profileConfig } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core', 'Systems', 'Backend', 'Creative', 'Research'];

  const filteredInterests = selectedCategory === 'All'
    ? profileConfig.interests
    : profileConfig.interests.filter(item => item.category === selectedCategory);

  return (
    <section 
      id="about" 
      aria-label="About Me & Engineering Philosophy"
      className="py-20 md:py-28 border-b border-[#D8D6D0] bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Clean Divider */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D8D6D0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
              <span>Section // 01</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">
              ABOUT & PHILOSOPHY
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4A4A] max-w-sm">
            Deconstructing systems from first principles, writing clean software, and cultivating curiosity.
          </p>
        </div>

        {/* Clean Editorial Layout for About Section */}
        <div className="max-w-4xl space-y-8">
          
          {/* Identity Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8D6D0] text-xs font-bold uppercase tracking-wider text-[#0A0A0A] shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-[#FF9D2E]" />
            <span>Identity Profile: CSE Student & Developer</span>
          </div>

          {/* Bio Narrative */}
          <div className="space-y-5 text-base sm:text-lg text-[#2E2C27] leading-relaxed font-sans">
            {profileConfig.bioParagraphs.map((para, index) => (
              <p key={index} className={index === 0 ? "font-medium text-lg sm:text-xl text-[#0A0A0A] leading-relaxed" : ""}>
                {para}
              </p>
            ))}
          </div>

          {/* Interactive Interests & Focus Areas */}
          <div className="pt-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest">
                Technical & Research Interests
              </span>

              {/* Category Pills Filter */}
              <div className="flex flex-wrap gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0A0A0A] text-white'
                        : 'bg-white border border-[#D8D6D0] text-[#4A4A4A] hover:text-[#0A0A0A]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="flex flex-wrap gap-2 pt-1">
              {filteredInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-150 border ${
                    interest.highlight
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-2xs'
                      : 'bg-white text-[#2B2925] border-[#D8D6D0] hover:border-[#FF9D2E]'
                  }`}
                >
                  <span 
                    className={`w-1.5 h-1.5 rounded-full ${
                      interest.highlight ? 'bg-[#FF9D2E]' : 'bg-[#D8D6D0]'
                    }`} 
                  />
                  {interest.name}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

