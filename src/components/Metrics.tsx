import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react';

const chartData = [
  { name: 'Mes 1', eficiencia: 20, costo: 100 },
  { name: 'Mes 2', eficiencia: 35, costo: 85 },
  { name: 'Mes 3', eficiencia: 55, costo: 60 },
  { name: 'Mes 4', eficiencia: 80, costo: 45 },
  { name: 'Mes 5', eficiencia: 150, costo: 30 },
  { name: 'Mes 6', eficiencia: 250, costo: 25 },
];

const AnimatedCounter = ({ from = 0, to, duration = 2.5, suffix = "", prefix = "", decimals = 0 }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) => {
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
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(easeProgress * (to - from) + from);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{prefix}{(count).toFixed(decimals)}{suffix}</span>;
};

// ... custom tooltip ...
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl">
        <p className="text-gray-400 text-sm mb-2 font-mono">{label}</p>
        <p className="text-crypto-blue text-lg font-bold flex items-center">
          <TrendingUp className="w-4 h-4 mr-2" />
          Eficiencia: +{payload[0].value}%
        </p>
        <p className="text-crypto-orange text-sm font-medium flex items-center mt-1">
          Costo Opt: {payload[1].value}%
        </p>
      </div>
    );
  }
  return null;
};

export default function Metrics() {
  const metrics = [
    { value: 350, suffix: '%', label: 'Retorno de Inversión (ROI)', desc: 'Promedio en los primeros 6 meses tras implementación de IA.', icon: Zap, color: 'text-crypto-blue' },
    { value: 40, suffix: '%', prefix: '-', label: 'Reducción de Costos', desc: 'En procesos operativos y tareas repetitivas.', icon: ShieldCheck, color: 'text-crypto-purple' },
    { value: 85, suffix: '%', prefix: '+', label: 'Eficiencia de Procesos', desc: 'Tareas automatizadas y flujos de trabajo optimizados.', icon: TrendingUp, color: 'text-crypto-orange' },
    { value: 24, suffix: '/7', label: 'Disponibilidad Continua', desc: 'Sistemas inteligentes operando sin interrupción.', icon: Clock, color: 'text-emerald-400' },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-crypto-black selection:bg-crypto-blue/30" id="casos">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-crypto-blue/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-crypto-purple/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <span className="text-crypto-blue font-mono text-sm tracking-widest uppercase mb-4 block">Impacto Demostrado</span>
          <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6">
            Resultados que <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-blue to-purple-500 font-semibold glow-text-blue">transforman</span> industrias.
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Pasamos de la teoría a la práctica. Nuestras integraciones entregan resultados tangibles, medibles y escalables desde el primer trimestre.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.2 }}
              className="relative group rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,209,255,0.1)] hover:-translate-y-2"
            >
              <metric.icon className={`w-8 h-8 mb-6 ${metric.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`} />
              
              <div className="font-display text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight drop-shadow-lg">
                <AnimatedCounter to={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              
              <h3 className="text-lg font-medium text-gray-200 mb-2">{metric.label}</h3>
              <p className="text-sm text-gray-500 font-light group-hover:text-gray-400 transition-colors">{metric.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Chart Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#050505] rounded-[2.5rem] border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-crypto-blue/10 blur-[100px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-display font-semibold text-white mb-4">Crecimiento Exponencial</h3>
              <p className="text-gray-400 font-light text-lg mb-8">
                Visualización promedio de cómo la eficiencia operativa se dispara mientras los costos de procesamiento caen drásticamente tras la integración de nuestros agentes autónomos.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-crypto-blue shadow-[0_0_10px_rgba(0,209,255,0.8)]" />
                  <span className="text-gray-300 font-medium tracking-wide">Productividad y Eficiencia</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-crypto-purple shadow-[0_0_10px_rgba(157,78,221,0.8)]" />
                  <span className="text-gray-300 font-medium tracking-wide">Costo Operativo Base</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorEficiencia" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00d1ff" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#00d1ff" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorCosto" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9d4edd" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#9d4edd" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  
                  <XAxis 
                    dataKey="name" 
                    stroke="#ffffff40" 
                    tick={{fill: '#ffffff80', fontSize: 12, fontFamily: 'monospace'}} 
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="#ffffff40" 
                    tick={{fill: '#ffffff80', fontSize: 12, fontFamily: 'monospace'}} 
                    tickLine={false}
                    axisLine={false}
                  />
                  
                  <Tooltip content={<CustomTooltip />} />
                  
                  <Area 
                    type="monotone" 
                    dataKey="eficiencia" 
                    stroke="#00d1ff" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorEficiencia)" 
                    animationDuration={2000}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="costo" 
                    stroke="#9d4edd" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorCosto)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
