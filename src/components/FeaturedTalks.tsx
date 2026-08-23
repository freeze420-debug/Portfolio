import React, { useState } from 'react';
import { 
  Play, 
  Youtube, 
  X, 
  ExternalLink 
} from 'lucide-react';
import { featuredTalksData } from '../data/portfolioData';
import { FeaturedTalkItem } from '../types/portfolio';

// Utility to parse YouTube video ID from various URL formats
export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const cleanUrl = url.trim();
  
  if (/^[a-zA-Z0-9_-]{11}$/.test(cleanUrl)) {
    return cleanUrl;
  }
  
  const watchMatch = cleanUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (watchMatch && watchMatch[1]) {
    return watchMatch[1];
  }
  
  return null;
}

export const FeaturedTalks: React.FC = () => {
  const [talks] = useState<FeaturedTalkItem[]>(featuredTalksData);
  const [activeVideoModal, setActiveVideoModal] = useState<FeaturedTalkItem | null>(null);

  return (
    <section 
      id="talks" 
      aria-label="Featured Talks and Video Presentations"
      className="py-20 md:py-28 border-b border-[#D8D6D0] bg-[#F3F1EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D8D6D0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF9D2E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
              <span>Section // 07</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">
              FEATURED TALKS
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs text-[#4A4A4A] max-w-sm hidden sm:block">
              Curated technical lectures, recorded podcasts, system demos, and architectural walk-throughs.
            </p>
          </div>
        </div>

        {/* Talks & Videos Grid */}
        {talks.length === 0 ? (
          <div className="py-12 px-6 rounded-2xl border border-dashed border-[#D8D6D0] bg-white/40 text-center flex flex-col items-center justify-center">
            <p className="font-sans font-medium text-sm text-[#4A4A4A]">No featured talks added yet.</p>
            <p className="font-mono text-xs text-[#7A7A7A] mt-1">Add your YouTube video link in <span className="font-bold text-[#0A0A0A]">portfolioData.ts</span> to display here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {talks.map((talk) => {
              const videoId = talk.videoId || extractYouTubeId(talk.youtubeUrl) || 'Mbrb5lV3MSE';
              const thumbnailUrl = talk.thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

              return (
                <div 
                  key={talk.id}
                  className="group flex flex-col cursor-pointer max-w-md"
                  onClick={() => setActiveVideoModal(talk)}
                >
                  {/* 1. Video Poster / Thumbnail Container */}
                  <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#222] shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:border-[#0A0A0A]">
                    <img 
                      src={thumbnailUrl}
                      alt={talk.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault is missing
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />

                    {/* Dark gradient & Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/80 border border-white/25 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#FF9D2E] group-hover:text-[#0A0A0A] text-white transition-all duration-200">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge if specified */}
                    {talk.duration && (
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/90 text-white font-mono text-[10px] sm:text-[11px] font-bold tracking-tight">
                        {talk.duration}
                      </div>
                    )}
                  </div>

                  {/* 2. Below Thumbnail: Blue Link Title */}
                  <div className="pt-2.5 px-0.5">
                    <a
                      href={talk.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveVideoModal(talk);
                      }}
                      className="text-[#1a56db] hover:text-[#0A0A0A] font-sans text-base font-normal leading-snug tracking-tight hover:underline transition-colors block text-left"
                    >
                      {talk.title}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Embedded YouTube Player Modal */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#0A0A0A] rounded-3xl overflow-hidden border border-[#333] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#141414] border-b border-[#2A2A2A]">
              <div className="flex items-center gap-2 text-white">
                <Youtube className="w-4 h-4 text-red-500" />
                <span className="font-display font-bold text-sm truncate max-w-md">
                  {activeVideoModal.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeVideoModal.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-[#222] text-xs font-mono text-[#AAA] hover:text-white hover:bg-[#333] flex items-center gap-1 transition-colors"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="w-8 h-8 rounded-full bg-[#222] text-white hover:bg-[#333] flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-16/9 w-full bg-black">
              {(() => {
                const vidId = activeVideoModal.videoId || extractYouTubeId(activeVideoModal.youtubeUrl) || 'lXUZvy_5t30';
                return (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${vidId}?autoplay=1&rel=0`}
                    title={activeVideoModal.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                );
              })()}
            </div>

            {/* Modal Bottom Details */}
            {activeVideoModal.description && (
              <div className="p-5 bg-[#141414] border-t border-[#2A2A2A] text-xs text-[#CCC] font-sans">
                <p>{activeVideoModal.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

