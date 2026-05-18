import { Twitter, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-crypto-black pt-20 pb-10 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-crypto-blue/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-4">Crypto_IA.</h3>
            <p className="text-gray-500 text-sm max-w-sm mb-6">
              Finanzas avanzadas y automatización de procesos para la empresa del futuro.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }} href="https://www.instagram.com/yosinjefe/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }} href="https://www.facebook.com/profile.php?id=61569242247269" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-mono tracking-widest uppercase text-white mb-6">Plataforma</h4>
            <ul className="space-y-3">
              <li><motion.a whileHover={{ x: 5, color: "#00D1FF" }} href="#" className="inline-block text-gray-400 transition-colors text-sm">Automatización</motion.a></li>
              <li><motion.a whileHover={{ x: 5, color: "#00D1FF" }} href="#" className="inline-block text-gray-400 transition-colors text-sm">Inversiones</motion.a></li>
              <li><motion.a whileHover={{ x: 5, color: "#00D1FF" }} href="#" className="inline-block text-gray-400 transition-colors text-sm">Casos de Éxito</motion.a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-mono tracking-widest uppercase text-white mb-6">Contacto</h4>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Ingresa tu email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-crypto-blue focus:ring-1 focus:ring-crypto-blue transition-all"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                className="bg-crypto-blue/20 text-crypto-blue border border-crypto-blue/30 rounded-lg px-4 py-3 text-sm font-medium hover:bg-crypto-blue/30 hover:glow-border-blue transition-all"
              >
                Suscribirse
              </motion.button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Crypto_IA. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-xs text-gray-600">
            <motion.a whileHover={{ color: "#D1D5DB" }} href="#" className="transition-colors">Privacidad</motion.a>
            <motion.a whileHover={{ color: "#D1D5DB" }} href="#" className="transition-colors">Términos</motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
