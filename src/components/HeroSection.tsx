import React from 'react';
import { 
  ArrowDown, 
  Github, 
  Mail, 
  FileText, 
  MapPin, 
  GraduationCap
} from 'lucide-react';
import { profileConfig } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section 
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[85vh] pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#D8D6D0] bg-[#F3F1EC] bg-grid-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline & Status Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8D6D0] text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
            <span>{profileConfig.role.split('|')[0].trim()}</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8D6D0] text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#FF9D2E]" />
            <span>{profileConfig.university} • {profileConfig.currentSemester}</span>
          </div>
          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8D6D0] text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#FF9D2E]" />
            <span>{profileConfig.location}</span>
          </div>
        </div>

        {/* Main Editorial Headline & Copy */}
        <div className="max-w-4xl space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#FF9D2E] block">
              Engineering Portfolio & Systems Lab
            </span>
            <h1 
              id="hero-main-title"
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0A0A0A] leading-[1.02] uppercase"
            >
              {profileConfig.heroHeadline}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#3A3731] font-normal leading-relaxed max-w-3xl">
            {profileConfig.heroIntro}
          </p>

          {/* Quick Access Action Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              id="hero-cta-explore-work"
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              id="hero-resume-button"
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#ECE8E1] hover:border-[#FF9D2E] text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#FF9D2E]" />
              <span>Curriculum Vitae</span>
            </button>

            <a
              id="hero-contact-button"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-[#D8D6D0] text-[#0A0A0A] hover:border-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Mail className="w-4 h-4 text-[#8A8A8A]" />
              <span>Contact</span>
            </a>
          </div>

          {/* Social Channels Quick Row */}
          <div className="flex items-center gap-3 pt-2 text-xs font-mono text-[#4A4A4A]">
            <span className="font-bold text-[#0A0A0A] uppercase tracking-widest text-[10px]">Direct Links:</span>
            <a 
              id="hero-social-github"
              href={profileConfig.contact.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white border border-[#D8D6D0] hover:text-[#0A0A0A] hover:border-[#FF9D2E] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              id="hero-social-email"
              href={`mailto:${profileConfig.contact.email}`}
              className="p-2 rounded-lg bg-white border border-[#D8D6D0] hover:text-[#0A0A0A] hover:border-[#FF9D2E] transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Key Metric Cards / Clean Minimalist Counters */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-[#D8D6D0]">
          {profileConfig.metrics.map((metric, index) => (
            <div 
              key={index} 
              id={`hero-metric-${index}`}
              className="bg-white border border-[#D8D6D0] rounded-2xl p-5 shadow-2xs hover:border-[#FF9D2E] transition-colors group"
            >
              <div className="text-[10px] font-bold text-[#8A8A8A] uppercase tracking-widest mb-1 group-hover:text-[#FF9D2E] transition-colors">
                {metric.label}
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black text-[#0A0A0A]">
                {metric.value}
              </div>
              <div className="text-xs text-[#4A4A4A] mt-1 font-sans">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

