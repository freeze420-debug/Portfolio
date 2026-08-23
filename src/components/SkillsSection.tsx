import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Layers, 
  Wrench, 
  Terminal, 
  ExternalLink, 
  Check, 
  FolderGit2,
  Sparkles,
  Search
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory, SkillItem } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(skillsData[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryFilters: { id: string; label: string; count: number }[] = [
    { id: 'all', label: 'All Disciplines', count: skillsData.length },
    { id: 'languages', label: 'Languages', count: skillsData.filter(s => s.category === 'languages').length },
    { id: 'systems', label: 'Systems & Core CS', count: skillsData.filter(s => s.category === 'systems').length },
    { id: 'frameworks', label: 'Frameworks & Graphics', count: skillsData.filter(s => s.category === 'frameworks').length },
    { id: 'tools', label: 'Toolchains & DevOps', count: skillsData.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = skillsData.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="skills" 
      aria-label="Skills and Technical Stack"
      className="py-20 md:py-28 border-b border-[#D8D6D0] bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D8D6D0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
              <span>Section // 02</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">
              SKILLS & TECHNOLOGY
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4A4A] max-w-sm">
            Categorized by practical mastery, underlying systems understanding, and real project implementations.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-[#D8D6D0] shadow-2xs">
            {categoryFilters.map(filter => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedCategory(filter.id)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === filter.id
                    ? 'bg-[#0A0A0A] text-white shadow-2xs'
                    : 'text-[#4A4A4A] hover:text-[#0A0A0A] hover:bg-[#F3F1EC]'
                }`}
              >
                <span>{filter.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                  selectedCategory === filter.id ? 'bg-[#FF9D2E] text-[#0A0A0A]' : 'bg-[#ECE8E1]'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
            <input
              type="text"
              placeholder="Search stack or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#D8D6D0] rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-[#0A0A0A] placeholder-[#8A8A8A] focus:outline-hidden focus:border-[#FF9D2E]"
            />
          </div>
        </div>

        {/* 2-Column Responsive Layout: Grid of Cards + Active Skill Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Grid: Skills Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredSkills.map((skill, index) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#0A0A0A] shadow-md ring-2 ring-[#0A0A0A]'
                      : 'bg-white border-[#D8D6D0] hover:border-[#FF9D2E] shadow-2xs'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          skill.level === 'Core Mastery' 
                            ? 'bg-[#FF9D2E]' 
                            : skill.level === 'Proficient' 
                            ? 'bg-[#10B981]' 
                            : 'bg-[#3B82F6]'
                        }`} />
                        <h3 className="font-display font-bold text-base text-[#0A0A0A]">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#F3F1EC] text-[#4A4A4A] border border-[#D8D6D0]">
                        {skill.experienceYears}
                      </span>
                    </div>

                    <p className="text-xs text-[#4A4A4A] line-clamp-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#D8D6D0]/60 flex items-center justify-between text-[11px] font-mono text-[#8A8A8A]">
                    <span className="uppercase text-[#0A0A0A] font-bold text-[10px]">
                      {skill.level}
                    </span>
                    {skill.associatedProjects && (
                      <span className="flex items-center gap-1 text-[#FF9D2E] font-bold text-[11px]">
                        <FolderGit2 className="w-3 h-3" />
                        <span>{skill.associatedProjects.length} Projects</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Skill Detail Inspector */}
          <div className="lg:col-span-4">
            {selectedSkill ? (
              <div className="sticky top-24 p-6 sm:p-7 rounded-3xl bg-[#1A1A1A] text-white border border-white/10 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-white/10 text-[#FF9D2E]">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white">
                        {selectedSkill.name}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#A0A0A0]">
                        {selectedSkill.category} • {selectedSkill.experienceYears}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-[#FF9D2E] text-black font-black uppercase tracking-wider">
                    {selectedSkill.level}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0]">
                    Engineering Application
                  </span>
                  <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed font-sans">
                    {selectedSkill.description}
                  </p>
                </div>

                {selectedSkill.tags && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0]">
                      Underlying Concepts
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSkill.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-mono text-[#E5E5E5]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSkill.associatedProjects && selectedSkill.associatedProjects.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0]">
                      Applied In Projects
                    </span>
                    <div className="space-y-1.5">
                      {selectedSkill.associatedProjects.map((projId, i) => (
                        <a
                          key={i}
                          href="#projects"
                          className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#FF9D2E] transition-colors"
                        >
                          <span>{projId}</span>
                          <ExternalLink className="w-3 h-3 text-[#888]" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 text-[10px] font-bold uppercase tracking-wider text-[#737373] text-center border-t border-white/10">
                  Click any card to inspect stack depth
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-white border border-[#D8D6D0] text-center text-xs font-mono text-[#4A4A4A]">
                Select any skill card to view deep-dive technical notes.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

