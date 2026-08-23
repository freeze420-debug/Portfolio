import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ArrowUpRight, 
  Github, 
  Layers, 
  Table, 
  Grid, 
  ExternalLink,
  Code2,
  Calendar,
  Sparkles,
  Archive
} from 'lucide-react';
import { allProjectsArchive } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface ProjectArchiveProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectArchive: React.FC<ProjectArchiveProps> = ({ onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filterTabs = [
    'All',
    'C / C++',
    'Java',
    'Systems',
    'Algorithms',
    'Networking',
    'Desktop',
    'Academic'
  ];

  const filteredProjects = useMemo(() => {
    return allProjectsArchive.filter((project) => {
      // Category / Tech match
      let matchesFilter = true;
      if (selectedCategory === 'C / C++') {
        matchesFilter = project.technologies.some(t => t.includes('C') || t.includes('C++'));
      } else if (selectedCategory === 'Java') {
        matchesFilter = project.technologies.some(t => t.includes('Java'));
      } else if (selectedCategory === 'Systems') {
        matchesFilter = project.category.includes('Systems') || project.technologies.some(t => t.includes('POSIX') || t.includes('Raylib') || t.includes('Memory') || t.includes('Valgrind'));
      } else if (selectedCategory === 'Algorithms') {
        matchesFilter = project.category.includes('Algorithms') || project.technologies.some(t => t.includes('Bitboards') || t.includes('Minimax') || t.includes('Trees') || t.includes('STL'));
      } else if (selectedCategory === 'Networking') {
        matchesFilter = project.technologies.some(t => t.includes('Socket') || t.includes('TCP') || t.includes('Pipes'));
      } else if (selectedCategory === 'Desktop') {
        matchesFilter = project.category.includes('Desktop') || project.technologies.some(t => t.includes('JavaFX') || t.includes('Raylib'));
      } else if (selectedCategory === 'Academic') {
        matchesFilter = project.status === 'Completed' || project.category.includes('Academic');
      }

      // Status filter
      const matchesStatus = statusFilter === 'All' || project.status === statusFilter;

      // Search query match
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(t => t.toLowerCase().includes(query)) ||
        project.year.includes(query);

      return matchesFilter && matchesStatus && matchesSearch;
    });
  }, [searchQuery, selectedCategory, statusFilter]);

  return (
    <section 
      id="archive" 
      aria-label="Comprehensive Project Archive"
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
              PROJECT ARCHIVE
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4A4A] max-w-sm">
            A comprehensive, data-driven catalog of systems experiments, coursework, algorithms, and applications.
          </p>
        </div>

        {/* Filter Controls & Search Toolbar */}
        <div className="space-y-4 mb-8">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-[#D8D6D0] shadow-2xs">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === tab
                      ? 'bg-[#0A0A0A] text-white shadow-2xs'
                      : 'text-[#4A4A4A] hover:text-[#0A0A0A] hover:bg-[#F3F1EC]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* View Mode & Search Controls */}
            <div className="flex items-center gap-2.5">
              {/* Live Search Input */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                <input
                  type="text"
                  placeholder="Filter by keyword, tech, year..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#D8D6D0] rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-[#0A0A0A] placeholder-[#8A8A8A] focus:outline-hidden focus:border-[#FF9D2E]"
                />
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center bg-white p-1 rounded-xl border border-[#D8D6D0] shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  aria-label="Table view"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'table' ? 'bg-[#0A0A0A] text-white' : 'text-[#4A4A4A] hover:text-[#0A0A0A]'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-[#0A0A0A] text-white' : 'text-[#4A4A4A] hover:text-[#0A0A0A]'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-[#4A4A4A] px-1">
            <span>Showing {filteredProjects.length} of {allProjectsArchive.length} technical projects</span>
            {searchQuery && (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-[#FF9D2E] font-bold hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Display: Table View OR Grid View */}
        {viewMode === 'table' ? (
          /* Table Matrix View */
          <div className="rounded-2xl border border-[#D8D6D0] bg-white overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#D8D6D0] bg-[#ECE8E1] text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A]">
                    <th className="py-3.5 px-4 sm:px-6 w-24">Year</th>
                    <th className="py-3.5 px-4 sm:px-6">Project & Scope</th>
                    <th className="py-3.5 px-4 sm:px-6 hidden md:table-cell">Technologies</th>
                    <th className="py-3.5 px-4 sm:px-6 w-32 hidden sm:table-cell">Status</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right w-28">Source / Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8D6D0]/60 font-sans text-xs sm:text-sm">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                      <tr 
                        key={project.id}
                        onClick={() => onSelectProject(project)}
                        className="group hover:bg-[#F3F1EC] transition-colors cursor-pointer"
                      >
                        {/* Year */}
                        <td className="py-4 px-4 sm:px-6 font-mono text-xs text-[#8A8A8A] whitespace-nowrap align-top">
                          {project.year}
                        </td>

                        {/* Project Name & Description */}
                        <td className="py-4 px-4 sm:px-6 align-top">
                          <div className="font-display font-bold text-[#0A0A0A] text-sm sm:text-base group-hover:text-[#FF9D2E] transition-colors flex items-center gap-2">
                            <span>{project.title}</span>
                            {project.featured && (
                              <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 rounded bg-[#FF9D2E] text-black">
                                FEATURED
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#4A4A4A] mt-1 max-w-xl leading-relaxed">
                            {project.description}
                          </p>
                          {/* Mobile Tech Pills */}
                          <div className="md:hidden flex flex-wrap gap-1 mt-2">
                            {project.technologies.slice(0, 3).map((t, i) => (
                              <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F3F1EC] border border-[#D8D6D0] text-[#0A0A0A]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Technologies (Desktop) */}
                        <td className="py-4 px-4 sm:px-6 hidden md:table-cell align-top">
                          <div className="flex flex-wrap gap-1.5 max-w-xs">
                            {project.technologies.map((t, i) => (
                              <span 
                                key={i}
                                className="px-2 py-0.5 rounded bg-[#F3F1EC] border border-[#D8D6D0] font-mono text-[11px] text-[#0A0A0A]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Status */}
                        <td className="py-4 px-4 sm:px-6 hidden sm:table-cell align-top whitespace-nowrap">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            project.status === 'Completed'
                              ? 'bg-[#10B981]/15 text-[#065F46] border border-[#10B981]/30'
                              : project.status === 'Research'
                              ? 'bg-[#8B5CF6]/15 text-[#5B21B6] border border-[#8B5CF6]/30'
                              : 'bg-[#FF9D2E]/20 text-[#9A3412] border border-[#FF9D2E]/40'
                          }`}>
                            {project.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-4 sm:px-6 text-right align-top whitespace-nowrap">
                          <div className="inline-flex items-center gap-2">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`GitHub repo for ${project.title}`}
                                className="p-1.5 rounded-lg bg-[#F3F1EC] border border-[#D8D6D0] hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] transition-colors"
                              >
                                <Github className="w-3.5 h-3.5" />
                              </a>
                            )}
                            <button
                              type="button"
                              onClick={() => onSelectProject(project)}
                              aria-label={`View details for ${project.title}`}
                              className="p-1.5 rounded-lg bg-[#F3F1EC] border border-[#D8D6D0] hover:bg-[#FF9D2E] hover:text-[#0A0A0A] text-[#0A0A0A] transition-colors cursor-pointer"
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-xs font-mono text-[#8A8A8A]">
                        No archived projects matched the selected filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Card Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group p-5 rounded-2xl bg-white border border-[#D8D6D0] hover:border-[#FF9D2E] transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8A]">
                    <span>{project.year}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      project.status === 'Completed' 
                        ? 'bg-[#10B981]/15 text-[#065F46]' 
                        : 'bg-[#FF9D2E]/20 text-[#9A3412]'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0A0A0A] group-hover:text-[#FF9D2E] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#4A4A4A] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#D8D6D0]/60 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#F3F1EC] border border-[#D8D6D0] font-mono text-[10px] text-[#0A0A0A]">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#8A8A8A]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#0A0A0A]">
                    <span className="group-hover:text-[#FF9D2E] transition-colors font-bold flex items-center gap-1">
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                    {project.githubUrl && (
                      <span className="text-[#8A8A8A] text-[11px]">GitHub ↗</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
