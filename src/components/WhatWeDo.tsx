import { motion } from 'motion/react';
import { Network, Shield, Zap, ArrowRight, BrainCircuit, BarChart3 } from 'lucide-react';

export default function WhatWeDo() {
  const cards = [
    {
      title: "Automatización Inteligente",
      desc: "IA aplicada a empresas. Automatización de tareas operativas y flujos inteligentes que multiplican la productividad.",
      icon: Zap,
      color: "from-crypto-blue/30 via-crypto-purple/10 to-transparent",
      iconColor: "text-crypto-blue",
    },
    {
      title: "Inversiones Digitales",
      desc: "Diversificación de activos, gestión con criptoactivos y estrategias modernas adaptadas al mercado global.",
      icon: BarChart3,
      color: "from-crypto-orange/30 via-[rgba(255,138,0,0.1)] to-transparent",
      iconColor: "text-crypto-orange",
    },
    {
      title: "IA Empresarial",
      desc: "Optimización de recursos, análisis predictivo inteligente y automatización avanzada de marketing.",
      icon: BrainCircuit,
      color: "from-crypto-purple/30 via-crypto-blue/10 to-transparent",
      iconColor: "text-crypto-purple",
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden w-full border-t border-white/5" id="servicios">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40 mix-blend-screen">
        <iframe
          src="https://www.youtube.com/embed/EgcqD9RJSTc?autoplay=1&mute=1&loop=1&playlist=EgcqD9RJSTc&controls=0&showinfo=0&modestbranding=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] min-w-[177.77vh] h-[100vh] min-h-[56.25vw]"
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-crypto-black via-crypto-black/70 to-crypto-black" />
      </div>

      <div className="relative px-6 lg:px-8 z-10 max-w-7xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-crypto-blue/50" />
        
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <span className="text-crypto-orange font-mono text-sm tracking-widest uppercase mb-4 block">Nuestra Experiencia</span>
        <h2 className="font-display font-semibold text-5xl md:text-6xl text-crypto-white mb-6">
          Optimizamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-blue to-crypto-purple">sistemas.</span><br />
          Multiplicamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-orange to-crypto-blue">resultados.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
               animate={{ 
                 y: [0, -10, 0],
                 boxShadow: [
                   "0 0 0px rgba(0,0,0,0)",
                   "0 20px 40px rgba(0, 209, 255, 0.15)",
                   "0 0 0px rgba(0,0,0,0)"
                 ]
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
               className="glass-panel p-8 rounded-3xl relative group overflow-hidden h-full border border-white/10 hover:border-crypto-blue/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-30 group-hover:opacity-100 transition-opacity duration-700 animate-move-bg`} />
              
              {/* Animated Orbs for hover */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-crypto-blue/20 transition-colors duration-700" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-8 border border-white/5 shadow-2xl relative overflow-hidden`}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(0,209,255,0.4)_360deg)]"
                  />
                  <card.icon className={`${card.iconColor} w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                <h3 className="font-display text-2xl font-medium mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-crypto-blue transition-all duration-300">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">{card.desc}</p>
                
                <button className="flex items-center text-sm font-medium text-crypto-white group-hover:text-crypto-blue transition-colors">
                  Conocer más 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
