import React, { useState } from 'react';
import { Database, Layers, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const FarmOSVisualizer: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [activeLayer, setActiveLayer] = useState<'service' | 'dao' | 'sqlite'>('service');

  const layers = [
    {
      id: 'service',
      name: 'Service Layer (C++20)',
      detail: 'YieldAnalyticsService<Repository>',
      desc: 'Business analytics, profit margins, harvest yield projections, concepts & constraints.'
    },
    {
      id: 'dao',
      name: 'DAO / Repository Pattern',
      detail: 'SQLiteHarvestRepository',
      desc: 'Abstracts database operations behind template interfaces and RAII smart pointers.'
    },
    {
      id: 'sqlite',
      name: 'Embedded SQLite Database',
      detail: 'ACID Indexed Storage',
      desc: 'Normalized schema tables, prepared statements, zero injection risk, automated backups.'
    }
  ];

  return (
    <div className="w-full rounded-2xl border border-[#D8D6D0] bg-white overflow-hidden p-4 shadow-2xs space-y-3">
      <div className="flex items-center justify-between border-b border-[#D8D6D0] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9D2E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9D2E]"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A0A0A] flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-[#FF9D2E]" />
            Layered C++ Architecture
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#8A8A8A] font-bold uppercase">
          Clean Architecture
        </span>
      </div>

      {/* Layer selector stack */}
      <div className="space-y-2">
        {layers.map((layer) => {
          const isSelected = activeLayer === layer.id;
          return (
            <div
              key={layer.id}
              onClick={() => setActiveLayer(layer.id as any)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-xs'
                  : 'bg-[#F3F1EC] text-[#0A0A0A] border-[#D8D6D0] hover:border-[#FF9D2E]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-xs">
                  {layer.name}
                </span>
                <span className={`font-mono text-[10px] ${isSelected ? 'text-[#FF9D2E]' : 'text-[#4A4A4A]'}`}>
                  {layer.detail}
                </span>
              </div>
              <p className={`text-[11px] mt-1 leading-relaxed ${isSelected ? 'text-[#D8D6D0]' : 'text-[#4A4A4A]'}`}>
                {layer.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-[#4A4A4A] bg-[#F3F1EC] p-2 rounded-lg border border-[#D8D6D0]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
          <span>RAII Smart Pointer Ownership</span>
        </div>
        <span className="text-[#8A8A8A] text-[10px]">GoogleTest 100% Pass</span>
      </div>
    </div>
  );
};
