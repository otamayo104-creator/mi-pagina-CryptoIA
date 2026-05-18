import { motion } from 'motion/react';

export default function Timeline() {
  const steps = [
    { year: "Fase 1", title: "Web2 Tradicional", status: "Pasado" },
    { year: "Fase 2", title: "Automatización", status: "Transición" },
    { year: "Fase 3", title: "Inteligencia Artificial", status: "Presente" },
    { year: "Fase 4", title: "Blockchain & DeFi", status: "Escalando" },
    { year: "Fase 5", title: "Empresas Autónomas", status: "El Futuro", highlight: true },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-crypto-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-5xl md:text-7xl font-light tracking-tighter">
            La evolución <br/>
            <span className="font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-crypto-white to-gray-500">ya comenzó.</span>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* Central Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center group cursor-pointer"
              >
                <motion.div 
                  className={`
                    mb-6 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase border transition-colors relative overflow-hidden group/badge
                    ${step.highlight 
                      ? 'border-crypto-orange text-crypto-orange glow-border-blue bg-crypto-orange/10' 
                      : 'border-white/20 text-gray-400 group-hover:border-white/50 group-hover:text-white'}
                  `}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,138,0,0.15)", borderColor: "rgba(255,138,0,0.8)" }}
                >
                  {step.year}
                </motion.div>
                
                {/* Node */}
                <div className={`
                  hidden md:flex w-4 h-4 rounded-full z-10 transition-transform duration-300 group-hover:scale-150
                  ${step.highlight ? 'bg-crypto-orange shadow-[0_0_15px_rgba(255,138,0,0.8)]' : 'bg-crypto-blue/50 group-hover:bg-crypto-blue'}
                `} />

                <div className="mt-6 text-center">
                  <h4 className="font-display font-medium text-lg text-white mb-2">{step.title}</h4>
                  <p className="text-sm font-mono text-gray-500 uppercase">{step.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
