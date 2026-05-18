import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "La integración de sus flujos de IA redujo nuestros tiempos operativos en un 80%. Es como si hubieran programado el futuro de nuestra empresa.",
    author: "Elena R.",
    role: "CEO, FinTech Global",
  },
  {
    quote: "Diversificamos nuestros activos digitales con una precisión matemática que no creíamos posible. El control y la automatización son absolutos.",
    author: "Marcos T.",
    role: "Director de Operaciones",
  },
  {
    quote: "Crypto_IA no nos vendió una herramienta, nos ayudó a rediseñar todo nuestro núcleo de operaciones. Son verdaderamente excepcionales.",
    author: "Santiago O.",
    role: "Fundador, E-commerce Tech",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-8 z-10 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-20">
         <span className="text-crypto-purple font-mono text-sm tracking-widest uppercase mb-4 block">Impacto Real</span>
         <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
           Startups que lideran con <span className="italic font-light">ventaja.</span>
         </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
               animate={{ 
                 y: [0, -10, 0],
                 boxShadow: [
                   "0 0 0px rgba(0,0,0,0)",
                   "0 20px 40px rgba(168, 85, 247, 0.15)", // crypto-purple glow
                   "0 0 0px rgba(0,0,0,0)"
                 ]
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
               className="h-full p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-crypto-purple/40 transition-colors relative overflow-hidden group"
            >
              {/* Animated Orbs for hover */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-crypto-purple/20 transition-colors duration-700" />
              
              <div className="relative z-10">
                <p className="text-gray-300 font-light leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white border border-crypto-purple/30 group-hover:border-crypto-purple transition-colors duration-300 overflow-hidden bg-crypto-purple/20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,0.6)_360deg)]"
                    />
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{t.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-white group-hover:text-crypto-purple transition-colors duration-300">{t.author}</p>
                    <p className="text-xs text-gray-500 font-mono group-hover:text-crypto-purple/70 transition-colors duration-300">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
