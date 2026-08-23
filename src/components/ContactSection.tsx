import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  FileText, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ArrowUpRight, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { profileConfig } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      aria-label="Contact and Collaboration"
      className="py-20 md:py-28 bg-[#F3F1EC] border-b border-[#D8D6D0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-[#D8D6D0]">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
            <span>Section // 09</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A0A0A] tracking-tight leading-[1.02] uppercase">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#4A4A4A] mt-3 max-w-2xl">
            Whether you are looking for an engineering intern, discussing systems research, or exploring open source projects—my inbox is always open.
          </p>
        </div>

        {/* 2-Column Contact Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Links & Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D8D6D0] shadow-2xs space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A8A] block">
                Direct Electronic Mail
              </span>

              <div className="font-display font-black text-lg sm:text-xl text-[#0A0A0A] break-all">
                {profileConfig.contact.email}
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={`mailto:${profileConfig.contact.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F3F1EC] hover:bg-[#ECE8E1] border border-[#D8D6D0] text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>

            {/* Social & Professional Repositories */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D8D6D0] shadow-2xs space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A8A] block">
                Network & Code Repositories
              </span>

              <div className="space-y-2">
                <a
                  href={profileConfig.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F3F1EC] hover:bg-[#ECE8E1] border border-[#D8D6D0] text-xs font-mono text-[#0A0A0A] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#0A0A0A]" />
                    <span className="font-bold">GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8A8A]" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#F3F1EC] hover:bg-[#ECE8E1] border border-[#D8D6D0] text-xs font-mono text-[#0A0A0A] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#FF9D2E]" />
                    <span className="font-bold">Curriculum Vitae (PDF View)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8A8A]" />
                </button>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="p-4 rounded-2xl bg-white border border-[#D8D6D0] text-xs font-mono text-[#4A4A4A] flex items-center gap-3 shadow-2xs">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span>
                Response time: Usually within 24 hours. Available for remote or on-site opportunities.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8D6D0] shadow-2xs space-y-6">
              <div className="flex items-center justify-between border-b border-[#D8D6D0] pb-4">
                <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#FF9D2E]" />
                  Direct Dispatch Terminal
                </span>
                <span className="font-mono text-[11px] text-[#8A8A8A]">Encrypted Transmission</span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#15803D]">
                    Message Transmitted Successfully
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#166534]">
                    Thank you for reaching out! I have received your dispatch and will respond promptly to {profileConfig.contact.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A]">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Dr. Jane Doe / Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F3F1EC] border border-[#D8D6D0] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-[#0A0A0A] placeholder-[#8A8A8A] focus:outline-hidden focus:ring-1 focus:ring-[#FF9D2E] focus:border-[#FF9D2E]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A]">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="jane.doe@company.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F3F1EC] border border-[#D8D6D0] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-[#0A0A0A] placeholder-[#8A8A8A] focus:outline-hidden focus:ring-1 focus:ring-[#FF9D2E] focus:border-[#FF9D2E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A]">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Software Engineering Internship / Research Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#F3F1EC] border border-[#D8D6D0] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-[#0A0A0A] placeholder-[#8A8A8A] focus:outline-hidden focus:ring-1 focus:ring-[#FF9D2E] focus:border-[#FF9D2E]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A]">
                      Message Content *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Hello Talha, I came across your hexagonal chess engine and systems projects..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F3F1EC] border border-[#D8D6D0] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-[#0A0A0A] placeholder-[#8A8A8A] focus:outline-hidden focus:ring-1 focus:ring-[#FF9D2E] focus:border-[#FF9D2E]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-2xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Packet...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Message Direct</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
