import { motion } from 'motion/react';
import { Database, Server, BrainCircuit, Network, Cpu, Microchip } from 'lucide-react';

export default function EcosystemGraphic() {
  const nodes = [
    { id: 1, x: 50, y: 25, color: 'text-crypto-blue', border: 'border-crypto-blue/40', bg: 'bg-crypto-blue/10', shadow: 'shadow-[0_0_30px_rgba(0,209,255,0.5)]', icon: BrainCircuit, delay: 0, size: 'w-16 h-16' },
    { id: 2, x: 25, y: 65, color: 'text-crypto-orange', border: 'border-crypto-orange/40', bg: 'bg-crypto-orange/10', shadow: 'shadow-[0_0_30px_rgba(255,138,0,0.5)]', icon: Server, delay: 0.2, size: 'w-14 h-14' },
    { id: 3, x: 75, y: 65, color: 'text-crypto-purple', border: 'border-crypto-purple/40', bg: 'bg-crypto-purple/10', shadow: 'shadow-[0_0_30px_rgba(157,78,221,0.5)]', icon: Network, delay: 0.4, size: 'w-14 h-14' },
    { id: 4, x: 25, y: 35, color: 'text-emerald-400', border: 'border-emerald-400/30', bg: 'bg-emerald-400/10', shadow: 'shadow-[0_0_20px_rgba(52,211,153,0.3)]', icon: Cpu, delay: 0.6, size: 'w-10 h-10' },
    { id: 5, x: 75, y: 35, color: 'text-white', border: 'border-white/30', bg: 'bg-white/10', shadow: 'shadow-[0_0_20px_rgba(255,255,255,0.3)]', icon: Microchip, delay: 0.8, size: 'w-10 h-10' },
    { id: 6, x: 50, y: 80, color: 'text-crypto-blue', border: 'border-crypto-blue/30', bg: 'bg-crypto-blue/10', shadow: 'shadow-[0_0_20px_rgba(0,209,255,0.3)]', icon: Database, delay: 1.0, size: 'w-10 h-10' },
  ];

  // Using SVG coordinate system mapped roughly to percentage
  const lines = [
    { x1: "50%", y1: "25%", x2: "25%", y2: "65%", delay: 0.1 },
    { x1: "50%", y1: "25%", x2: "75%", y2: "65%", delay: 0.3 },
    { x1: "25%", y1: "65%", x2: "50%", y2: "80%", delay: 0.5 },
    { x1: "75%", y1: "65%", x2: "50%", y2: "80%", delay: 0.7 },
    { x1: "50%", y1: "25%", x2: "25%", y2: "35%", delay: 0.2 },
    { x1: "50%", y1: "25%", x2: "75%", y2: "35%", delay: 0.4 },
    { x1: "25%", y1: "65%", x2: "25%", y2: "35%", delay: 0.6 },
    { x1: "75%", y1: "65%", x2: "75%", y2: "35%", delay: 0.8 },
  ];

  return (
    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-[#050505]">
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(0,209,255,0.1),transparent_50%)] animate-pulse-slow" />
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay z-10" />

      {/* SVG Canvas for connecting lines */}
      <svg className="absolute inset-0 w-full h-full z-10" style={{ filter: 'drop-shadow(0 0 5px rgba(0,209,255,0.5))' }}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d1ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#9d4edd" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff8a00" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {lines.map((line, idx) => (
          <g key={idx}>
            {/* Base faint line */}
            <line 
              x1={line.x1} y1={line.y1} 
              x2={line.x2} y2={line.y2} 
              stroke="url(#lineGrad)" 
              strokeWidth="1"
              strokeOpacity="0.3"
            />
            {/* Animated dashed line for "data transfer" effect */}
            <motion.line 
              x1={line.x1} y1={line.y1} 
              x2={line.x2} y2={line.y2} 
              stroke="url(#lineGrad)" 
              strokeWidth="2"
              strokeDasharray="4 8"
              initial={{ strokeDashoffset: 100, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: line.delay }}
            />
          </g>
        ))}
      </svg>

      {/* Nodes (Cubes/Blocks) */}
      <div className="absolute inset-0 z-20">
        {nodes.map(node => (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: node.delay }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
              className={`${node.size} rounded-2xl flex items-center justify-center backdrop-blur-md border ${node.bg} ${node.border} ${node.shadow} group-hover:scale-110 transition-transform duration-500`}
            >
              <node.icon className={`w-1/2 h-1/2 ${node.color}`} />
              
              {/* Node internal pulse */}
              <motion.div 
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
                className="absolute inset-0 rounded-2xl border border-white/20"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Glow overlays */}
      <div className="absolute top-4 right-4 z-30 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-crypto-blue animate-pulse" style={{boxShadow: '0 0 10px #00d1ff'}} />
        <div className="w-2 h-2 rounded-full bg-crypto-purple animate-pulse delay-75" style={{boxShadow: '0 0 10px #9d4edd'}} />
        <div className="w-2 h-2 rounded-full bg-crypto-orange animate-pulse delay-150" style={{boxShadow: '0 0 10px #ff8a00'}} />
      </div>

    </div>
  );
}
