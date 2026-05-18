import { motion } from 'motion/react';

const images = [
  // Crypto 1
  "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500&q=80",
  // AI 1
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80",
  // Crypto 2
  "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=500&q=80",
  // AI 2
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&q=80",
  // Crypto 3
  "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=500&q=80",
  // AI 3
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80",
  // Crypto 4
  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&q=80",
  // AI 4
  "https://images.unsplash.com/photo-1687000539121-678a1fb63cb8?w=500&q=80",
  // Crypto 5
  "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=500&q=80",
  // AI 5
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80"
];

export default function Callout() {
  return (
    <section className="relative py-40 overflow-hidden bg-crypto-black">
      {/* Visual background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-crypto-black via-transparent to-crypto-black z-10" />
        <div className="absolute inset-0 bg-crypto-black/60 z-10" />
        
        <div className="absolute inset-0 transform scale-110 flex flex-col justify-center gap-6 opacity-60 z-0">
          <div className="flex w-[200%] animate-marquee">
             {[...images, ...images].map((src, idx) => (
                <div key={idx} className="w-56 h-40 md:w-72 md:h-48 flex-shrink-0 mx-3 rounded-2xl overflow-hidden shadow-2xl glass-panel">
                   <img src={src} className="w-full h-full object-cover mix-blend-luminosity" alt="" referrerPolicy="no-referrer" loading="lazy" />
                </div>
             ))}
          </div>
          <div className="flex w-[200%] animate-marquee" style={{ animationDirection: 'reverse' }}>
             {[...[...images].reverse(), ...[...images].reverse()].map((src, idx) => (
                <div key={idx} className="w-56 h-40 md:w-72 md:h-48 flex-shrink-0 mx-3 rounded-2xl overflow-hidden shadow-2xl glass-panel">
                   <img src={src} className="w-full h-full object-cover mix-blend-luminosity" alt="" referrerPolicy="no-referrer" loading="lazy" />
                </div>
             ))}
          </div>
        </div>
        
        <div className="absolute w-full h-full opacity-30 z-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-7xl font-display font-light leading-none tracking-tighter mb-8">
            No seguimos tendencias.<br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-crypto-orange to-crypto-blue">
              Construimos el siguiente sistema.
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Únete al pequeño porcentaje de empresas que no temen a la inteligencia artificial, sino que la utilizan como su ventaja injusta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
