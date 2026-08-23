import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowDown, 
  Github, 
  Mail, 
  FileText, 
  MapPin, 
  GraduationCap,
  Camera,
  X
} from 'lucide-react';
import { profileConfig } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

const AVATAR_STORAGE_KEY = 'portfolio_user_avatar_image';

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load persisted avatar on mount
  useEffect(() => {
    try {
      const savedAvatar = localStorage.getItem(AVATAR_STORAGE_KEY);
      if (savedAvatar) {
        setAvatarUrl(savedAvatar);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setAvatarUrl(result);
        try {
          localStorage.setItem(AVATAR_STORAGE_KEY, result);
        } catch {
          // Ignore quota errors
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleRemoveAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAvatarUrl(null);
    try {
      localStorage.removeItem(AVATAR_STORAGE_KEY);
    } catch {
      // Ignore
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section 
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[85vh] pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#D8D6D0] bg-[#F3F1EC] bg-grid-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Karpathy-Style Profile Identity Header: Circular Photo on Left + (Name, Info Pills, Italic Tagline, Circle Icons) on Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 md:gap-10 mb-12">
          
          {/* Hidden native file input */}
          <input 
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* 1. Round Circle Avatar with Upload Capability */}
          <div className="relative group shrink-0">
            <div 
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-300 relative flex items-center justify-center shadow-md ${
                isDragging 
                  ? 'border-[#FF9D2E] scale-105 ring-4 ring-[#FF9D2E]/30 bg-[#FFF8EE]' 
                  : avatarUrl 
                    ? 'border-[#0A0A0A] bg-white ring-4 ring-white shadow-lg' 
                    : 'border-dashed border-[#B4B1A8] hover:border-[#0A0A0A] bg-[#FAF9F6]'
              }`}
              title="Click or drag an image here to upload your profile picture"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
            >
              {avatarUrl ? (
                <img 
                  src={avatarUrl} 
                  alt={profileConfig.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-center space-y-2 text-[#8A8A8A] group-hover:text-[#0A0A0A] transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ECE8E1] flex items-center justify-center group-hover:bg-[#FF9D2E] group-hover:text-black transition-colors">
                    <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A0A0A]">
                    Upload Photo
                  </div>
                </div>
              )}

              {/* Hover overlay on uploaded image */}
              {avatarUrl && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white space-y-1">
                  <Camera className="w-5 h-5 text-[#FF9D2E]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                    Change Photo
                  </span>
                </div>
              )}
            </div>

            {/* Remove Photo Action button if avatar is set */}
            {avatarUrl && (
              <button
                type="button"
                onClick={handleRemoveAvatar}
                className="absolute top-1 right-1 p-1.5 rounded-full bg-[#0A0A0A] text-white hover:bg-rose-600 transition-colors shadow-xs border border-white"
                title="Remove picture"
                aria-label="Remove picture"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
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


