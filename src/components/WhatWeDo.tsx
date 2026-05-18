import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, ArrowRight, BrainCircuit, BarChart3, Bot, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function WhatWeDo() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      title: "Automatización Inteligente",
      shortDesc: "IA aplicada a empresas.",
      desc: "Implementamos flujos de trabajo inteligentes y agentes autónomos que se encargan de las tareas operativas, multiplicando la productividad de tu equipo y reduciendo errores humanos.",
      features: ["Flujos sin código (No-code)", "Integración API", "Agentes Autónomos"],
      icon: Zap,
      gradient: "from-crypto-blue to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Inversiones Digitales",
      shortDesc: "Criptoactivos y estrategias modernas.",
      desc: "Diversificación de activos digitales, gestión de portafolios con criptomonedas y estrategias algorítmicas adaptadas al mercado financiero global actual.",
      features: ["Estrategias Algorítmicas", "Gestión de Portafolio", "Análisis de Mercado"],
      icon: BarChart3,
      gradient: "from-crypto-orange to-red-600",
      bgImage: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "IA Empresarial",
      shortDesc: "Modelos predictivos y optimización.",
      desc: "Desarrollo de asistentes internos, optimización de recursos mediante análisis predictivo y automatización avanzada de marketing con IA generativa.",
      features: ["Asistentes Virtuales (LLMs)", "IA Generativa", "Análisis Predictivo"],
      icon: BrainCircuit,
      gradient: "from-crypto-purple to-indigo-600",
      bgImage: "https://images.unsplash.com/photo-1620712948343-008423671ea2?q=80&w=2070&auto=format&fit=crop",
    },
    {
       title: "Agentes de Atención",
       shortDesc: "Soporte 24/7 con IA.",
       desc: "Chatbots avanzados con comprensión del lenguaje natural (NLP) que resuelven dudas, gestionan citas y mejoran la satisfacción del cliente sin intervención humana.",
       features: ["Soporte Omnicanal", "Resolución 24/7", "Aprendizaje Continuo"],
       icon: Bot,
       gradient: "from-emerald-400 to-teal-600",
       bgImage: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop",
     }
  ];

  return (
    <section className="relative py-32 overflow-hidden w-full border-t border-white/5" id="servicios">
      <div className="absolute inset-0 bg-crypto-black z-0" />
      
      <div className="relative px-6 lg:px-8 z-10 max-w-7xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-crypto-blue/50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-crypto-blue font-mono text-sm tracking-widest uppercase mb-4 block">Nuestras Soluciones</span>
          <h2 className="font-display font-semibold text-5xl md:text-6xl text-crypto-white mb-6">
            Ecosistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-blue to-crypto-purple">Innovación.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Soluciones modulares diseñadas para escalar. Selecciona un área para descubrir cómo transformamos la complejidad en ventaja competitiva.
          </p>
        </motion.div>

        {/* Expansive Cards Container */}
        <div className="flex flex-col lg:flex-row gap-4 h-[850px] lg:h-[600px] w-full">
          {cards.map((card, idx) => {
            const isActive = activeCard === idx;
            return (
               <motion.div
                 key={idx}
                 onClick={() => setActiveCard(idx)}
                 initial={false}
                 animate={{
                   flex: isActive ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? 3 : 5) : 1,
                 }}
                 transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                 className={`relative overflow-hidden rounded-3xl cursor-pointer group flex-shrink-0 lg:flex-shrink transition-all duration-500 min-h-[100px] lg:min-h-0
                   ${isActive ? 'ring-2 ring-crypto-blue/50 shadow-[0_0_30px_rgba(0,209,255,0.2)]' : 'hover:bg-white/5 border border-white/10'}
                 `}
               >
                 {/* Background Image / Overlay */}
                 <div className="absolute inset-0 bg-crypto-black/80 z-10" />
                 <img 
                   src={card.bgImage} 
                   alt={card.title}
                   className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${isActive ? 'opacity-40 grayscale-0' : 'opacity-20 grayscale'}`}
                 />
                 <div className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-t ${card.gradient} mix-blend-overlay opacity-50 z-10`} />

                 {/* Content */}
                 <div className="relative z-20 w-full h-full flex flex-col justify-between p-6 lg:p-8">
                   
                   {/* Header (Top) */}
                   <div className={`flex lg:flex-col items-center lg:items-start gap-4 transition-all duration-500 lg:w-[200px] ${isActive ? 'lg:-translate-x-0' : 'lg:translate-y-4'}`}>
                     <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border transition-all duration-500 flex-shrink-0
                         ${isActive ? 'bg-white/20 border-white/40 shadow-lg' : 'bg-black/50 border-white/10 group-hover:border-crypto-blue/50'}
                     `}>
                       <card.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-crypto-blue'}`} />
                     </div>
                     <div>
                       <h3 className={`font-display font-medium whitespace-nowrap transition-all duration-500 ${isActive ? 'text-2xl text-white' : 'text-lg text-gray-300 lg:origin-bottom-left lg:-rotate-90 lg:-translate-x-8 lg:translate-y-24 tracking-widest uppercase text-sm'}`}>
                         {card.title}
                       </h3>
                       {isActive && (
                          <motion.p 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ delay: 0.3 }}
                            className="hidden lg:block text-crypto-blue font-medium mt-1 text-sm"
                          >
                            {card.shortDesc}
                          </motion.p>
                       )}
                     </div>
                   </div>

                   {/* Expanded Content (Bottom) */}
                   <AnimatePresence>
                     {isActive && (
                       <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: 20 }}
                         transition={{ duration: 0.4, delay: 0.2 }}
                         className="mt-auto pt-6 lg:pt-0"
                       >
                         <p className="text-gray-200 lg:text-lg lg:w-[80%] mb-6 line-clamp-3 lg:line-clamp-none font-light leading-relaxed">
                           {card.desc}
                         </p>
                         
                         <div className="flex flex-wrap gap-3 mb-8">
                           {card.features.map((feat, i) => (
                             <span key={i} className="flex items-center text-sm font-medium bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-gray-300">
                               <CheckCircle2 className="w-4 h-4 mr-2 text-crypto-blue" />
                               {feat}
                             </span>
                           ))}
                         </div>

                         <button className="flex items-center bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform">
                           Explorar solución
                           <ChevronRight className="w-4 h-4 ml-2" />
                         </button>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
