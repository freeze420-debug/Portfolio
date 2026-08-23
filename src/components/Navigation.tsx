import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  ArrowUpRight, 
  Terminal, 
  Code2, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { profileConfig } from '../data/portfolioData';

interface NavigationProps {
  activeSection: string;
  onOpenResumeModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  onOpenResumeModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Writing', href: '#writing', id: 'writing' },
    { label: 'Talks', href: '#talks', id: 'talks' },
    { label: 'Now', href: '#now', id: 'now' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F3F1EC]/95 backdrop-blur-md border-b border-[#D8D6D0] py-3.5 shadow-2xs' 
          : 'bg-[#F3F1EC]/80 backdrop-blur-xs py-5 border-b border-[#D8D6D0]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram / Identity */}
        <a 
          id="nav-brand-logo"
          href="#hero" 
          className="group flex items-center gap-3 text-[#0A0A0A] no-underline focus:outline-hidden"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center font-mono font-bold text-xs tracking-tight group-hover:bg-[#FF9D2E] group-hover:text-[#0A0A0A] transition-colors duration-200">
            {profileConfig.monogram}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-50 leading-tight">
              Developer & CSE Student
            </span>
            <span className="font-display font-black text-sm tracking-tight leading-none text-[#0A0A0A]">
              {profileConfig.name.toUpperCase()}.
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          id="desktop-nav-menu"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-bold uppercase tracking-widest"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`py-1 transition-colors duration-150 relative ${
                  isActive
                    ? 'text-[#0A0A0A] border-b-2 border-[#FF9D2E]'
                    : 'text-[#4A4A4A] hover:text-[#FF9D2E]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Resume & Terminal / Contact) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="nav-resume-button"
            type="button"
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#0A0A0A] bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] hover:border-[#FF9D2E] text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </button>

          <a
            id="nav-get-in-touch-button"
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#D8D6D0] bg-white text-[#0A0A0A] hover:border-[#0A0A0A] hover:text-[#FF9D2E] text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Contact</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-button"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg bg-white border border-[#D8D6D0] text-[#0A0A0A] hover:bg-[#F3F1EC] transition-colors focus:outline-hidden"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#0A0A0A]" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen / Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden fixed inset-x-0 top-[65px] bg-[#F3F1EC] border-b border-[#D8D6D0] p-6 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 px-2 pb-1 border-b border-[#D8D6D0]">
              Navigation Index
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#0A0A0A] text-white'
                      : 'text-[#4A4A4A] hover:bg-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF9D2E]" />}
                    {link.label}
                  </span>
                  <span className="font-mono text-[10px] opacity-40">0{navLinks.indexOf(link) + 1}</span>
                </a>
              );
            })}

            <div className="pt-3 border-t border-[#D8D6D0] flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex-1 py-2.5 rounded-lg bg-[#0A0A0A] text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-[#FF9D2E]" />
                <span>View Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 rounded-lg border border-[#D8D6D0] bg-white text-[#0A0A0A] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center"
              >
                <span>Contact Direct</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

