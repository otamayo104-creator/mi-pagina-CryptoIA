import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenContact }: { onOpenContact?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-crypto-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="font-display font-bold text-xl tracking-tighter text-white">
          Crypto<span className="text-crypto-blue">_</span>IA.
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-base font-medium text-crypto-blue hover:text-white transition-colors">Soluciones</a>
          <a href="#casos" className="text-base font-medium text-crypto-blue hover:text-white transition-colors">Resultados</a>
          <a href="#compañia" className="text-base font-medium text-crypto-blue hover:text-white transition-colors">Compañía</a>
        </nav>

        <div className="hidden md:block">
           <button onClick={onOpenContact} className="text-base font-medium text-black px-6 py-2.5 rounded-full bg-crypto-blue hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,209,255,0.3)]">
             Contactar
           </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.header>

    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-[60] bg-crypto-black flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-16">
            <div className="font-display font-bold text-xl tracking-tighter text-white">
              Crypto<span className="text-crypto-blue">_</span>IA.
            </div>
            <button className="text-white" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-8 text-2xl font-display">
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-crypto-blue">Soluciones</a>
            <a href="#casos" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-crypto-blue">Resultados</a>
            <a href="#compañia" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-crypto-blue">Compañía</a>
            <button onClick={() => { setMobileMenuOpen(false); onOpenContact?.(); }} className="mt-8 text-lg font-medium text-black bg-white px-6 py-4 rounded-full">
               Contactar
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
