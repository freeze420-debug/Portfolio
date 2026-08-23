import React from 'react';
import { 
  ArrowUpRight, 
  ArrowRight
} from 'lucide-react';
import { featuredProjectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section 
      id="projects" 
      aria-label="Featured Software & Systems Projects"
      className="py-20 md:py-28 border-b border-[#D8D6D0] bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#D8D6D0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
              <span>Section // 03</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">
              FEATURED PROJECTS
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#archive"
              className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF9D2E] transition-colors border-b border-[#0A0A0A] pb-0.5"
            >
              <span>View Full Archive ({featuredProjectsData.length}+)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3-Column Dark Card Grid (compact size) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {featuredProjectsData.map((project) => {
            return (
              <article 
                key={project.id}
                id={`featured-project-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl border border-[#1E293B] bg-[#081226] overflow-hidden shadow-lg hover:shadow-xl hover:border-[#38BDF8]/60 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Upper Thumbnail Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#030712]">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {/* Subtle category tag over image */}
                  <div className="absolute top-2.5 right-2.5 bg-[#081226]/85 backdrop-blur-xs border border-white/10 px-2 py-0.5 rounded-md text-[9px] font-mono text-[#E2E8F0] font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Lower Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 space-y-3 text-left">
                  
                  {/* Title */}
                  <div className="space-y-0.5">
                    <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    
                    {/* Subtitle / tag link */}
                    <div className="text-[11px] font-semibold text-[#FF9D2E] inline-flex items-center gap-1">
                      <span>{project.status === 'Completed' ? 'Verified build ↗' : 'Active development ↗'}</span>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal flex-1 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Full Project Log / Case Study Action */}
                  <div className="pt-0.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] group-hover:text-white transition-colors">
                      <span>Full project log</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Bottom Hardware / Tech Specs List */}
                  <div className="pt-3 border-t border-[#1E293B] text-[10px] font-mono text-[#64748B] leading-relaxed truncate">
                    {project.technologies.join(', ')}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};


