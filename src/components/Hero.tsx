import { motion, useScroll, useTransform } from 'motion/react';
import { Network } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '30%']);
  const orbsY1 = useTransform(scrollY, [0, 1000], ['0%', '50%']);
  const orbsY2 = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const orbsY3 = useTransform(scrollY, [0, 1000], ['0%', '40%']);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden w-full pt-20">
      {/* Background Image / Abstract Overlay */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-crypto-black)_0%,_#000_100%)] z-0" />
        
        {/* User uploaded image placeholder */}
        {/* URL DE LA IMAGEN: Google Drive */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
          style={{ backgroundImage: 'url("https://drive.google.com/thumbnail?id=1IuB7dZ4nBjg7jwBkM-7UVfIRLr1ApT9l&sz=w2000")' }}
        />
        
        {/* Cinematic noise/overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 filter invert pointer-events-none" />
      </motion.div>

      {/* Animated Glow Orbs with Parallax */}
      <motion.div 
        className="absolute z-0 top-1/4 left-1/4 w-[400px] h-[400px] bg-crypto-blue/20 rounded-full blur-[100px] animate-float opacity-50 mix-blend-screen" 
        style={{ y: orbsY1 }} 
      />
      <motion.div 
        className="absolute z-0 bottom-1/4 right-1/4 w-[300px] h-[300px] bg-crypto-orange/20 rounded-full blur-[100px] animate-float opacity-40 mix-blend-screen" 
        style={{ animationDelay: '2s', y: orbsY2 }} 
      />
      <motion.div 
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crypto-purple/10 rounded-full blur-[120px] opacity-30 pointer-events-none" 
        style={{ y: orbsY3 }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 mb-8 mt-20 md:mt-0">
            <Network className="w-4 h-4 text-crypto-orange" />
            <span className="text-xs font-mono uppercase tracking-widest text-crypto-white/80">
              Próxima Generación
            </span>
          </div>

          <div className="h-32 md:h-48 lg:h-64 w-full"></div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Automatizamos procesos empresariales e impulsamos inversiones inteligentes con IA y activos digitales. La startup que redefine el alcance de tu empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 209, 255, 0.4)", backgroundColor: "rgba(255,255,255,1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold text-sm uppercase tracking-wide rounded-full transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Automatizar mi negocio
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 209, 255, 0.1)", borderColor: "rgba(0, 209, 255, 0.8)", boxShadow: "0 0 30px rgba(0, 209, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-medium text-sm rounded-full border border-white/10 transition-all relative overflow-hidden group"
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              <span className="relative z-10 group-hover:text-crypto-blue transition-colors duration-300">Explorar inversiones IA</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-crypto-black to-transparent z-10" />
    </section>
  );
}
