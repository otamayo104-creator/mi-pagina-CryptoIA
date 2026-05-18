import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Network, Server, BrainCircuit, Rocket, Zap, Shield, Microchip, Cpu } from 'lucide-react';
import EcosystemGraphic from './EcosystemGraphic';

export default function CompanyHistory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineItems = [
    {
      year: "2024",
      title: "El Origen: El cuello de botella invisible",
      desc: "Crypto_IA no nació en una sala de juntas, sino de una frustración compartida por un equipo de científicos de datos y traders cuantitativos. Intentábamos entrenar modelos de Deep Learning para predecir la volatilidad cripto, pero los algoritmos requerían una potencia de GPUs descomunal. A punto de quebrar por los costos de los gigantes de la nube y la escasez de chips, nos dimos cuenta: depender de infraestructura centralizada para predecir un mercado descentralizado no tenía sentido.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      align: "left"
    },
    {
      year: "2025",
      title: "El Giro Estratégico: La red híbrida",
      desc: "La epifanía llegó al mirar el problema a la inversa: si el mercado cripto está distribuido, la infraestructura para predecirlo también debería estarlo. Pausamos el desarrollo del algoritmo y construimos un protocolo de infraestructura física descentralizada (DePIN). Conectamos centros de datos independientes, mineros con hardware inactivo y servidores privados. ¿El resultado? Redujimos los costos de entrenamiento en un 70%.",
      icon: Network,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      align: "right"
    },
    {
      year: "2026",
      title: "Hoy: El ecosistema de doble impacto",
      desc: "Operamos como una plataforma dual que resuelve dos grandes retos: por un lado, nuestro Pilar Fintech procesa millones de datos on-chain para predicciones de alta precisión; por otro, nuestro Pilar de Infraestructura ofrece un marketplace donde cualquier empresa puede rentar poder de cómputo descentralizado para IA a una fracción del costo tradicional.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2064&auto=format&fit=crop",
      align: "left",
      isCustomGraphic: true
    }
  ];

  return (
    <section id="compañia" className="relative py-32 bg-crypto-black overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-crypto-blue/20 to-transparent hidden lg:block" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-crypto-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-crypto-orange/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <span className="text-crypto-purple font-mono text-sm tracking-widest uppercase mb-4 block">Nuestra Historia</span>
          <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6">
            Del Caos Financiero a la <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-crypto-blue font-semibold glow-text-blue">Democratización</span> del Cómputo.
          </h2>
        </motion.div>

        <div className="relative space-y-24 lg:space-y-32">
          {timelineItems.map((item, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className="flex-1 space-y-6 relative"
              >
                {/* Year Badge */}
                <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                   <item.icon className="w-5 h-5 text-crypto-blue" />
                   <span className="text-crypto-blue font-mono font-bold tracking-wider">{item.year}</span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-semibold text-white">
                  {item.title.split(':').map((part, i) => (
                    i === 0 ? <span key={i} className="block text-gray-400 text-lg mb-2">{part}</span> : <span key={i}>{part}</span>
                  ))}
                </h3>
                
                <p className="text-gray-400 font-light text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateY: item.align === 'left' ? -15 : 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className="flex-1 w-full relative perspective-1000"
              >
                {item.isCustomGraphic ? (
                  <EcosystemGraphic />
                ) : (
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-crypto-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.align === 'left' ? 'from-crypto-blue/40' : 'from-crypto-purple/40'} via-transparent to-transparent z-10 opacity-60 mix-blend-overlay`} />
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse delay-75" />
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse delay-150" />
                    </div>
                  </div>
                )}

                {/* Cyberpunk accent lines */}
                <div className={`absolute -bottom-4 ${item.align === 'left' ? '-right-4' : '-left-4'} w-24 h-24 border-b-2 border-${item.align === 'left' ? 'r' : 'l'}-2 border-crypto-blue/30 rounded-br-3xl -z-10`} />
              </motion.div>

            </div>
          ))}
        </div>

        {/* Ecosistema Dual summary cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 grid md:grid-cols-2 gap-8 relative z-20"
        >
          <div className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10 hover:border-crypto-orange/30 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-crypto-orange/10 rounded-full blur-[80px] -z-10 group-hover:bg-crypto-orange/20 transition-colors" />
            <div className="w-16 h-16 rounded-2xl bg-crypto-orange/10 flex items-center justify-center mb-8 border border-crypto-orange/20">
              <Zap className="w-8 h-8 text-crypto-orange" />
            </div>
            <h4 className="font-display text-2xl font-semibold text-white mb-4">Pilar Fintech</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Suite de algoritmos predictivos que procesa millones de datos on-chain y de sentimiento de mercado por segundo, ofreciendo predicciones de alta precisión a fondos e instituciones.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10 hover:border-crypto-blue/30 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-crypto-blue/10 rounded-full blur-[80px] -z-10 group-hover:bg-crypto-blue/20 transition-colors" />
            <div className="w-16 h-16 rounded-2xl bg-crypto-blue/10 flex items-center justify-center mb-8 border border-crypto-blue/20">
              <Server className="w-8 h-8 text-crypto-blue" />
            </div>
            <h4 className="font-display text-2xl font-semibold text-white mb-4">Pilar de Infraestructura</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              El excedente de nuestra red se convirtió en un marketplace abierto. Cualquier startup de IA puede rentar poder de cómputo para entrenar sus modelos de lenguaje por una fracción del costo.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
