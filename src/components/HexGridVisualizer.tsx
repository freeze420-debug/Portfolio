import React, { useState, useEffect, useRef } from 'react';
import { Compass, Info, Sparkles } from 'lucide-react';

interface HexCell {
  q: number;
  r: number;
  s: number;
  x: number;
  y: number;
  colorType: 'white' | 'gray' | 'black';
  active: boolean;
  isOrigin?: boolean;
}

interface HexGridVisualizerProps {
  compact?: boolean;
}

export const HexGridVisualizer: React.FC<HexGridVisualizerProps> = ({ compact = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredCoord, setHoveredCoord] = useState<{ q: number; r: number; s: number; dist: number } | null>({
    q: 1,
    r: -1,
    s: 0,
    dist: 1
  });
  const [selectedCoord, setSelectedCoord] = useState<{ q: number; r: number; s: number } | null>({
    q: 0,
    r: 0,
    s: 0
  });

  const GRID_RADIUS = 3;
  const HEX_SIZE = compact ? 20 : 23;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High DPI crisp rendering
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

    // Draw Hexagonal Grid (Gliński Chess / Axial Geometry)
    const cells: HexCell[] = [];

    for (let q = -GRID_RADIUS; q <= GRID_RADIUS; q++) {
      const r1 = Math.max(-GRID_RADIUS, -q - GRID_RADIUS);
      const r2 = Math.min(GRID_RADIUS, -q + GRID_RADIUS);
      for (let r = r1; r <= r2; r++) {
        const s = -q - r;
        // Flat-topped hex orientation formula
        const x = centerX + HEX_SIZE * (Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r);
        const y = centerY + HEX_SIZE * ((3 / 2) * r);

        // 3-color coloring pattern typical in Gliński chess
        const colorMod = ((q - r) % 3 + 3) % 3;
        const colorType: 'white' | 'gray' | 'black' = 
          colorMod === 0 ? 'white' : colorMod === 1 ? 'gray' : 'black';

        const isHovered = hoveredCoord && hoveredCoord.q === q && hoveredCoord.r === r;
        const isSelected = selectedCoord && selectedCoord.q === q && selectedCoord.r === r;

        cells.push({
          q,
          r,
          s,
          x,
          y,
          colorType,
          active: Boolean(isHovered || isSelected),
          isOrigin: q === 0 && r === 0
        });
      }
    }

    // Draw Connection lines / coordinate rays if origin selected
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(255, 157, 46, 0.35)';
    ctx.setLineDash([4, 4]);
    cells.forEach((cell) => {
      if (cell.q === 0 || cell.r === 0 || cell.s === 0) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(cell.x, cell.y);
        ctx.stroke();
      }
    });
    ctx.setLineDash([]);

    // Draw Hexagon Polygons
    cells.forEach((cell) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angleDeg = 60 * i - 30;
        const angleRad = (Math.PI / 180) * angleDeg;
        const px = cell.x + HEX_SIZE * Math.cos(angleRad);
        const py = cell.y + HEX_SIZE * Math.sin(angleRad);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();

      const isHovered = hoveredCoord && hoveredCoord.q === cell.q && hoveredCoord.r === cell.r;
      const isSelected = selectedCoord && selectedCoord.q === cell.q && selectedCoord.r === cell.r;

      if (isSelected) {
        ctx.fillStyle = '#FF9D2E';
        ctx.fill();
        ctx.strokeStyle = '#0A0A0A';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (isHovered) {
        ctx.fillStyle = 'rgba(255, 157, 46, 0.45)';
        ctx.fill();
        ctx.strokeStyle = '#FF9D2E';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else {
        if (cell.colorType === 'white') ctx.fillStyle = '#FFFFFF';
        else if (cell.colorType === 'gray') ctx.fillStyle = '#ECE8E1';
        else ctx.fillStyle = '#DCD8CF';
        ctx.fill();

        ctx.strokeStyle = '#D8D6D0';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw coordinate label for active or origin cells
      if (isHovered || isSelected || cell.isOrigin) {
        ctx.fillStyle = isSelected ? '#0A0A0A' : '#1A1A1A';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${cell.q},${cell.r}`, cell.x, cell.y);
      }
    });
  }, [hoveredCoord, selectedCoord, compact, HEX_SIZE]);

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Axial coordinates conversion from pixel
    const q = ((Math.sqrt(3) / 3) * x - (1 / 3) * y) / HEX_SIZE;
    const r = ((2 / 3) * y) / HEX_SIZE;
    const s = -q - r;

    let rq = Math.round(q);
    let rr = Math.round(r);
    let rs = Math.round(s);

    const qDiff = Math.abs(rq - q);
    const rDiff = Math.abs(rr - r);
    const sDiff = Math.abs(rs - s);

    if (qDiff > rDiff && qDiff > sDiff) {
      rq = -rr - rs;
    } else if (rDiff > sDiff) {
      rr = -rq - rs;
    } else {
      rs = -rq - rr;
    }

    if (Math.abs(rq) <= GRID_RADIUS && Math.abs(rr) <= GRID_RADIUS && Math.abs(rs) <= GRID_RADIUS) {
      const dist = Math.max(Math.abs(rq), Math.abs(rr), Math.abs(rs));
      setHoveredCoord({ q: rq, r: rr, s: rs, dist });
    }
  };

  const handleCanvasClick = () => {
    if (hoveredCoord) {
      setSelectedCoord({ q: hoveredCoord.q, r: hoveredCoord.r, s: hoveredCoord.s });
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[#D8D6D0] bg-white overflow-hidden p-4 shadow-2xs space-y-3">
      {/* Visualizer Top Bar */}
      <div className="flex items-center justify-between border-b border-[#D8D6D0] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9D2E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9D2E]"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A0A0A] flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#FF9D2E]" />
            Axial Raycasting Simulator
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#8A8A8A] font-bold uppercase">
          Gliński 91-Cell
        </span>
      </div>

      {/* Canvas Stage */}
      <div className={`relative w-full ${compact ? 'h-[220px]' : 'h-[250px]'} bg-[#F3F1EC] rounded-xl border border-[#D8D6D0] overflow-hidden flex items-center justify-center`}>
        <canvas
          ref={canvasRef}
          onMouseMove={handleCanvasMouseMove}
          onClick={handleCanvasClick}
          className="w-full h-full cursor-crosshair"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Telemetry Overlay */}
        <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs border border-[#D8D6D0] rounded-lg px-2.5 py-1 font-mono text-[10px] text-[#0A0A0A] shadow-2xs pointer-events-none">
          {hoveredCoord ? (
            <div className="space-y-0.5">
              <span className="text-[#8A8A8A]">Vector: </span>
              <span className="font-bold text-[#0A0A0A]">
                (q: {hoveredCoord.q}, r: {hoveredCoord.r}, s: {hoveredCoord.s})
              </span>
              <div>
                Distance: <span className="font-bold text-[#FF9D2E]">{hoveredCoord.dist} cells</span>
              </div>
            </div>
          ) : (
            <span>Hover cells to inspect</span>
          )}
        </div>

        <div className="absolute bottom-2 right-2 bg-white/90 border border-[#D8D6D0] rounded px-1.5 py-0.5 text-[9px] font-mono text-[#4A4A4A] pointer-events-none">
          Interactive: Move cursor to cast rays
        </div>
      </div>

      {/* Math Invariant Footer */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#4A4A4A] bg-[#F3F1EC] p-2 rounded-lg border border-[#D8D6D0]">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#FF9D2E] shrink-0" />
          <span>Invariant: q + r + s ≡ 0</span>
        </div>
        <span className="text-[#8A8A8A] text-[10px]">Lookup: O(1)</span>
      </div>
    </div>
  );
};
