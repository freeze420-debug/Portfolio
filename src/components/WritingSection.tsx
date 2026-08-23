import React from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowUpRight, 
  Tag, 
  CheckCircle2, 
  FileText,
  Sparkles
} from 'lucide-react';
import { articlesData } from '../data/portfolioData';
import { ArticleItem } from '../types/portfolio';

interface WritingSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export const WritingSection: React.FC<WritingSectionProps> = ({ onSelectArticle }) => {
  return (
    <section 
      id="writing" 
      aria-label="Writing, Technical Notes, and Knowledge Archive"
      className="py-20 md:py-28 border-b border-[#D8D6D0] bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D8D6D0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
              <span>Section // 07</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">
              WRITING & NOTES
            </h2>
          </div>
          <p className="font-mono text-xs text-[#4A4A4A] max-w-sm">
            Archived technical breakdowns, coordinate geometry derivations, and practical systems reflections.
          </p>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group p-6 sm:p-7 rounded-3xl bg-white border border-[#D8D6D0] hover:border-[#0A0A0A] transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Meta Bar */}
                <div className="flex items-center justify-between font-mono text-xs text-[#4A4A4A]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F3F1EC] text-[#0A0A0A] border border-[#D8D6D0] font-bold text-[10px] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[#8A8A8A] text-[11px]">
                    <Clock className="w-3 h-3 text-[#FF9D2E]" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-xl text-[#0A0A0A] group-hover:text-[#FF9D2E] transition-colors leading-tight uppercase">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>

                {/* Key Takeaways Preview */}
                {article.keyTakeaways && (
                  <div className="p-3.5 rounded-2xl bg-[#F3F1EC] border border-[#D8D6D0] text-[11px] font-mono text-[#4A4A4A] space-y-1">
                    <span className="text-[#0A0A0A] font-bold block uppercase text-[10px] tracking-wider">
                      Core Insight:
                    </span>
                    <p className="line-clamp-2">
                      {article.keyTakeaways[0]}
                    </p>
                  </div>
                )}
              </div>

              {/* Card Bottom: Tags & Read Link */}
              <div className="pt-5 mt-4 border-t border-[#D8D6D0] flex items-center justify-between text-xs font-mono">
                <span className="text-[#8A8A8A] text-[11px]">{article.date}</span>
                <span className="font-bold text-[#0A0A0A] group-hover:text-[#FF9D2E] transition-colors flex items-center gap-1 uppercase tracking-wider text-[11px]">
                  <span>Read Notes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
