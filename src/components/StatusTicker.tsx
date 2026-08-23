import React, { useState, useEffect } from 'react';
import { Terminal, Clock, Radio, Activity } from 'lucide-react';
import { profileConfig } from '../data/portfolioData';

export const StatusTicker: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in 24h format with seconds
      const formatted = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      });
      setTimeString(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      id="live-status-ticker"
      className="w-full bg-[#ECE7DC] border-b border-[#D8D4CA] py-2 px-4 text-xs font-mono text-[#4A4740]"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left: Live status */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
          </span>
          <span className="font-medium text-[#0A0A0A]">{profileConfig.statusBadge}</span>
        </div>

        {/* Right: Telemetry metadata */}
        <div className="flex items-center gap-4 text-[#6B6862] text-[11px]">
          <span className="hidden sm:inline-flex items-center gap-1">
            <Terminal className="w-3 h-3 text-[#FF9D2E]" />
            <span>ARCHIVE.SYS: v2.6.0</span>
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[#0A0A0A]">
            <Clock className="w-3 h-3 text-[#807C74]" />
            <span>LOCAL: {timeString || '00:00:00 UTC'}</span>
          </span>
          <span className="hidden md:inline-block text-[#807C74]">
            LOC: {profileConfig.location}
          </span>
        </div>
      </div>
    </div>
  );
};
