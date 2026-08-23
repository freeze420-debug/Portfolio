import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  FileText, 
  Copy, 
  Check, 
  ArrowUpRight
} from 'lucide-react';
import { profileConfig } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section 
      id="contact" 
      aria-label="Contact and Collaboration"
      className="py-20 md:py-28 bg-[#F3F1EC] border-b border-[#D8D6D0]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#D8D6D0]">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
            <span>Section // 08</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A0A0A] tracking-tight leading-[1.02] uppercase">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#4A4A4A] mt-3 max-w-2xl">
            Whether you are looking for an engineering intern, discussing systems research, or exploring open source projects—my inbox is always open.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Primary Email Card with Quick Copy */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8D6D0] shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A8A] block">
                Direct Electronic Mail
              </span>

              <div className="font-display font-black text-xl sm:text-2xl text-[#0A0A0A] break-all">
                {profileConfig.contact.email}
              </div>
              <p className="font-sans text-xs text-[#555]">
                Fastest way to get in touch. Click below to launch your email client or copy to clipboard.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${profileConfig.contact.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F3F1EC] hover:bg-[#ECE8E1] border border-[#D8D6D0] text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Address'}</span>
              </button>
            </div>
          </div>

          {/* Social & Professional Repositories */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8D6D0] shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A8A] block">
                Network & Code Repositories
              </span>

              <div className="space-y-3 pt-1">
                <a
                  href={profileConfig.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F3F1EC] hover:bg-[#ECE8E1] border border-[#D8D6D0] text-xs font-mono text-[#0A0A0A] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-[#0A0A0A]" />
                    <span className="font-bold">GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#0A0A0A] transition-colors" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#F3F1EC] hover:bg-[#ECE8E1] border border-[#D8D6D0] text-xs font-mono text-[#0A0A0A] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#FF9D2E]" />
                    <span className="font-bold">Curriculum Vitae (PDF View)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#0A0A0A] transition-colors" />
                </button>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="p-3.5 rounded-xl bg-[#F3F1EC] border border-[#D8D6D0] text-xs font-mono text-[#4A4A4A] flex items-center gap-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span>Available for internships & software engineering roles</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
