import React, { useState } from 'react';
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
  const [imageError, setImageError] = useState(false);
  const avatarSrc = profileConfig.avatarUrl || `https://github.com/${profileConfig.contact.github.split('/').pop() || 'freeze420-debug'}.png`;

  return (
    <section 
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[85vh] pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#D8D6D0] bg-[#F3F1EC] bg-grid-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Karpathy-Style Profile Identity Header: Circular Photo on Left + (Name, Info Pills, Italic Tagline, Circle Icons) on Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 md:gap-10 mb-12">
          
          {/* 1. Permanent Circular Avatar Photo */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[#0A0A0A] bg-white ring-4 ring-white shadow-xl flex items-center justify-center">
              {!imageError ? (
                <img 
                  src={avatarSrc} 
                  alt={profileConfig.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-[#0A0A0A] text-white flex flex-col items-center justify-center font-display font-black text-3xl sm:text-4xl">
                  {profileConfig.monogram || profileConfig.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* 2. Identity Block (Name + Status Pills + Italic Bio with Emojis + Row of Circular Icon Badges) */}
          <div className="space-y-3.5">
            {/* Name */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
              {profileConfig.name}
            </h1>

            {/* Info Pills Row */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8D6D0] text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
                <span>{profileConfig.role.split('|')[0].trim()}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8D6D0] text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#FF9D2E]" />
                <span>{profileConfig.university} • {profileConfig.currentSemester}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8D6D0] text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#FF9D2E]" />
                <span>{profileConfig.location}</span>
              </div>
            </div>

            {/* Italic Bio */}
            <p className="text-base sm:text-lg md:text-xl text-[#555] font-serif italic tracking-normal">
              I like to build software with a focus on scalability, reliability & clean architecture.
            </p>

            {/* Circular Social Buttons Row (GitHub & Email) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {/* GitHub */}
              <a 
                id="hero-social-github"
                href={profileConfig.contact.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#222] hover:bg-[#000] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs border border-black/10"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4 fill-current" />
              </a>

              {/* Email */}
              <a 
                id="hero-social-email"
                href={`mailto:${profileConfig.contact.email}`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#222] hover:bg-[#000] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs border border-black/10"
                aria-label="Send Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Main Headline, Description & Call to Actions */}
        <div className="max-w-4xl space-y-6 pt-4 border-t border-[#D8D6D0]">
          <div className="space-y-2">
            <h2 
              id="hero-main-title"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0A0A0A] uppercase"
            >
              {profileConfig.heroHeadline}
            </h2>
            <p className="text-base sm:text-lg text-[#3A3731] font-normal leading-relaxed max-w-3xl">
              {profileConfig.heroIntro}
            </p>
          </div>

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


