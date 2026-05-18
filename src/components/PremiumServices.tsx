import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const services = [
  "Automatización empresarial",
  "Consultoría IA",
  "Integración de workflows",
  "Optimización de procesos",
  "Estrategias digitales",
  "Inversiones diversificadas"
];

export default function PremiumServices() {
  return (
    <section className="py-32 px-6 lg:px-8 relative max-w-7xl mx-auto">
      {/* Decorative glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-crypto-orange/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Ecosistema de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-orange to-crypto-blue">servicios premium.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Diseñamos arquitecturas y operamos sistemas que liberan el talento humano para enfocarse en la estrategia, no en la fricción.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((svc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ x: 5, color: "#fff", transition: { duration: 0.2 } }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center">
                     <span className="absolute inset-0 rounded-full bg-crypto-blue/30 scale-0 group-hover:scale-150 transition-transform duration-300 pointer-events-none blur-sm" />
                     <CheckCircle2 className="w-5 h-5 text-crypto-blue group-hover:text-crypto-orange transition-colors duration-300 relative z-10" />
                  </div>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">{svc}</span>
                </motion.div>
              ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative"
          style={{ perspective: 1000 }}
        >
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              boxShadow: [
                "0 0 0px rgba(0, 209, 255, 0)",
                "0 20px 50px rgba(0, 209, 255, 0.3)",
                "0 0 0px rgba(0, 209, 255, 0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel p-10 rounded-3xl relative z-10 overflow-hidden group border border-crypto-blue/30 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-crypto-black via-crypto-blue/5 to-crypto-black/50 pointer-events-none" />
            
            {/* Animated Orbs */}
            <motion.div
               animate={{ rotate: 360, scale: [1, 1.3, 1] }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="absolute -top-32 -right-32 w-64 h-64 bg-crypto-orange/30 rounded-full blur-[60px] pointer-events-none"
            />
            <motion.div
               animate={{ rotate: -360, scale: [1, 1.4, 1] }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute -bottom-32 -left-32 w-80 h-80 bg-crypto-blue/30 rounded-full blur-[80px] pointer-events-none"
            />

            <div className="relative z-20 space-y-8">
               <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl backdrop-blur-md border border-white/5">
                 <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-crypto-orange/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-crypto-orange rounded-full animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Estado del Sistema</p>
                      <p className="text-sm font-semibold text-white">IA Operativa</p>
                    </div>
                 </div>
                 <motion.span 
                   animate={{ boxShadow: ["0 0 0px rgba(0, 209, 255, 0)", "0 0 15px rgba(0, 209, 255, 0.4)", "0 0 0px rgba(0, 209, 255, 0)"] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="text-crypto-blue font-mono text-xs px-3 py-1 bg-crypto-blue/10 rounded-full border border-crypto-blue/20"
                 >
                   OPTIMIZADO
                 </motion.span>
               </div>

               <div className="space-y-3">
                 {[1, 2, 3].map((bar) => (
                   <div key={bar} className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: bar === 1 ? '92%' : bar === 2 ? '78%' : '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className={`h-full relative ${bar % 2 === 0 ? 'bg-crypto-orange' : 'bg-crypto-blue'}`}
                     >
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: bar * 0.2 }}
                          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />
                     </motion.div>
                   </div>
                 ))}
               </div>

            </div>
          </motion.div>
          
          {/* Abstract background behind card */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-crypto-blue/20 to-crypto-purple/20 blur-2xl z-0 rounded-[40px] opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
