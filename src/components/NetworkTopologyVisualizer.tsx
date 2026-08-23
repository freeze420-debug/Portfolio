import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Info, RefreshCw } from 'lucide-react';

interface NetworkTopologyVisualizerProps {
  compact?: boolean;
}

export const NetworkTopologyVisualizer: React.FC<NetworkTopologyVisualizerProps> = ({ compact = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [animationTick, setAnimationTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationTick((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.clearRect(0, 0, width, height);

    const nodes = [
      { id: 'Server', x: centerX, y: centerY, label: 'Host Server:3000', isMaster: true },
      { id: 'Client 1', x: centerX - 95, y: centerY - 55, label: 'Thread-1 (Active)', isMaster: false },
      { id: 'Client 2', x: centerX + 105, y: centerY - 45, label: 'Thread-2 (Active)', isMaster: false },
      { id: 'Client 3', x: centerX - 75, y: centerY + 65, label: 'Thread-3 (Broadcast)', isMaster: false },
      { id: 'Client 4', x: centerX + 90, y: centerY + 60, label: 'Thread-4 (SQL Sync)', isMaster: false }
    ];

    // Draw links
    nodes.forEach((node) => {
      if (!node.isMaster) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.12)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Flowing packet particle
        const t = ((animationTick * 2 + (node.x % 50) * 10) % 100) / 100;
        const px = centerX + (node.x - centerX) * t;
        const py = centerY + (node.y - centerY) * t;

        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FF9D2E';
        ctx.fill();
      }
    });

    // Draw node circles
    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.isMaster ? (compact ? 18 : 20) : (compact ? 12 : 14), 0, Math.PI * 2);
      ctx.fillStyle = node.isMaster ? '#0A0A0A' : '#FFFFFF';
      ctx.fill();
      ctx.lineWidth = node.isMaster ? 3 : 2;
      ctx.strokeStyle = node.isMaster ? '#FF9D2E' : '#0A0A0A';
      ctx.stroke();

      ctx.fillStyle = '#0A0A0A';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.x, node.y + (node.isMaster ? (compact ? 28 : 32) : (compact ? 18 : 20)));
    });
  }, [animationTick, compact]);

  return (
    <div className="w-full rounded-2xl border border-[#D8D6D0] bg-white overflow-hidden p-4 shadow-2xs space-y-3">
      {/* Visualizer Top Bar */}
      <div className="flex items-center justify-between border-b border-[#D8D6D0] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A0A0A] flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#FF9D2E]" />
            Socket Concurrency & Telemetry
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#10B981] font-bold uppercase">
          4 Sockets Live
        </span>
      </div>

      {/* Canvas Stage */}
      <div className={`relative w-full ${compact ? 'h-[220px]' : 'h-[250px]'} bg-[#F3F1EC] rounded-xl border border-[#D8D6D0] overflow-hidden flex items-center justify-center`}>
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Telemetry Overlay */}
        <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs border border-[#D8D6D0] rounded-lg px-2.5 py-1 font-mono text-[10px] text-[#0A0A0A] shadow-2xs pointer-events-none">
          <div className="space-y-0.5">
            <span className="text-[#8A8A8A]">TCP Broadcast: </span>
            <span className="font-bold text-[#0A0A0A]">Non-blocking Worker Pool</span>
            <div className="text-[9px] text-[#10B981] font-bold">Status: 4 Client Sockets Synced</div>
          </div>
        </div>

        <div className="absolute bottom-2 right-2 bg-white/90 border border-[#D8D6D0] rounded px-1.5 py-0.5 text-[9px] font-mono text-[#4A4A4A] pointer-events-none">
          Realtime socket packet streaming
        </div>
      </div>

      {/* Math / Protocol Footer */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#4A4A4A] bg-[#F3F1EC] p-2 rounded-lg border border-[#D8D6D0]">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#FF9D2E] shrink-0" />
          <span>Framing: 4B Header + Chunked Stream</span>
        </div>
        <span className="text-[#8A8A8A] text-[10px]">JavaFX Task API</span>
      </div>
    </div>
  );
};
