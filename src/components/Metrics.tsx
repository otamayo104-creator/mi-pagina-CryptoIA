import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "", prefix = "" }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export default function Metrics() {
  return (
    <section className="relative py-32 overflow-hidden border-y border-white/5 bg-crypto-black/50">
      <div className="absolute inset-0 w-full h-full">
        {/* Abstract data lines background */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-crypto-orange/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-crypto-blue/20 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-crypto-purple/20 to-transparent transform -skew-y-3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight">
            El futuro pertenece a quienes <span className="italic font-light text-crypto-blue glow-text-blue">automatizan.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { value: 120, label: "Empresas Automatizadas", prefix: "+", suffix: "" },
            { value: 5, label: "Optimizados (USD)", prefix: "+$", suffix: "M" },
            { value: 85, label: "Eficiencia Operativa", prefix: "+", suffix: "%" }
          ].map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 200, damping: 10 }}
              className="px-8 text-center pt-8 md:pt-0 cursor-pointer"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="font-display text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-4 transition-transform duration-300"
              >
                <AnimatedCounter to={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </motion.div>
              <p className="text-crypto-blue font-mono text-sm tracking-widest uppercase transition-colors duration-300 hover:text-white">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
