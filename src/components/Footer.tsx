import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Mail, 
  Terminal, 
  Heart,
  Code2
} from 'lucide-react';
import { profileConfig } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Archive', href: '#archive' },
    { label: 'Journey', href: '#journey' },
    { label: 'Research', href: '#research' },
    { label: 'Writing', href: '#writing' },
    { label: 'Now', href: '#now' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer 
      id="main-portfolio-footer"
      className="bg-[#0A0A0A] text-[#F3F1EC] py-16 border-t border-[#262626]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-[#262626] gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FF9D2E] text-[#0A0A0A] flex items-center justify-center font-mono font-black text-sm">
              {profileConfig.monogram}
            </div>
            <div>
              <div className="font-display font-black text-lg text-white uppercase tracking-tight">
                {profileConfig.name}
              </div>
              <div className="font-mono text-xs text-[#8A8A8A]">
                Computer Science & Engineering Student • Developer & Researcher
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#262626] border border-[#333] text-xs font-mono font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF9D2E]" />
          </button>
        </div>

        {/* Middle Row: Quick Navigation & Socials */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#262626]">
          
          <div className="md:col-span-6 space-y-3">
            <span className="font-mono text-xs text-[#8A8A8A] uppercase tracking-wider block font-bold">
              Digital Engineering Archive
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#A0A0A0] max-w-md leading-relaxed">
              Designed and engineered from scratch to archive projects, academic coursework, coordinate geometry investigations, and algorithmic breakthroughs throughout my undergraduate journey.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-x-6 gap-y-2 font-mono text-xs text-[#CCCCCC]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#FF9D2E] transition-colors py-1 uppercase tracking-wider font-semibold text-[11px]"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Row: Copyright & Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#737373]">
          <div>
            © {new Date().getFullYear()} {profileConfig.name}. Built, designed, and continuously improved by me.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Last updated: August 2026</span>
            <span>•</span>
            <span className="text-[#FF9D2E] font-bold">Class of 2027</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
