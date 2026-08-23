import React from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  Tag, 
  CheckCircle2, 
  BookOpen, 
  ArrowLeft,
  Share2
} from 'lucide-react';
import { ArticleItem } from '../types/portfolio';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div 
      id="article-reader-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A0A]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#F3F1EC] border border-[#D8D6D0] rounded-3xl shadow-2xl overflow-hidden text-[#0A0A0A] max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Nav */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8D6D0] bg-white">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0A0A0A] hover:text-[#FF9D2E] transition-colors cursor-pointer uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Archive</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-lg bg-[#F3F1EC] border border-[#D8D6D0] text-[#4A4A4A] font-bold">
              {article.category}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#F3F1EC] hover:bg-[#ECE8E1] text-[#0A0A0A] border border-[#D8D6D0] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Reading Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans">
          
          {/* Article Header */}
          <div className="space-y-4 border-b border-[#D8D6D0] pb-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8A8A8A]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF9D2E]" />
                <span>{article.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8A8A8A]" />
                <span>{article.readingTime}</span>
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight uppercase leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#4A4A4A] font-medium leading-relaxed">
              {article.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {article.tags.map((t, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-0.5 rounded-md bg-white border border-[#D8D6D0] text-[11px] font-mono text-[#4A4A4A] font-medium"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && (
            <div className="p-6 rounded-2xl bg-white border border-[#D8D6D0] shadow-2xs space-y-3">
              <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Key Conceptual Takeaways
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#33312B]">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-[#FF9D2E] font-bold">●</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formatted Article Body */}
          <div className="prose prose-neutral max-w-none text-sm sm:text-base leading-relaxed text-[#2E2C27] space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#D8D6D0] shadow-2xs">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-display text-xl sm:text-2xl font-black text-[#0A0A0A] pt-4 border-t border-[#D8D6D0] mt-6 uppercase">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-display text-lg font-bold text-[#0A0A0A] pt-2 uppercase">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n');
                const code = lines.slice(1, -1).join('\n');
                return (
                  <div key={index} className="my-4 bg-[#0A0A0A] text-[#E5E5E5] p-5 rounded-2xl font-mono text-xs overflow-x-auto leading-relaxed border border-[#262626] shadow-md">
                    <pre><code>{code}</code></pre>
                  </div>
                );
              }
              return (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#D8D6D0] flex items-center justify-between text-xs font-mono text-[#8A8A8A]">
          <span>Archive Category: {article.category}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF9D2E] hover:text-[#0A0A0A] transition-colors text-xs font-bold uppercase tracking-wider"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
};
