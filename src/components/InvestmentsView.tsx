import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Wallet, Bot, Send, BrainCircuit, TrendingUp, Activity, AlertTriangle, ShieldCheck, Server, Cpu, ExternalLink, ChevronRight, Check } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const liveSignals = [
  "🤖 IA Signal: Identificado patrón de acumulación en ETH. Confianza: 92%.",
  "🤖 IA Signal: Volatilidad anómala en SOL. Ajustando stop-loss dinámico.",
  "🤖 IA Signal: Flujo de capital hacia DePIN detectado. Rebalanceando Micro-Cap.",
  "🤖 IA Signal: Arbitraje Dólar-Euro completado en Delta Estable. +0.12%."
];

const confidenceData = Array.from({ length: 24 }).map((_, i) => ({
  time: `${i}:00`,
  accuracy: 85 + Math.random() * 10
}));

interface InvestmentsViewProps {
  onBack: () => void;
}

export default function InvestmentsView({ onBack }: InvestmentsViewProps) {
  const [walletConnected, setWalletConnected] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatState, setChatState] = useState<'idle' | 'typing' | 'result'>('idle');
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignalIndex((current) => (current + 1) % liveSignals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatState('typing');
    setTimeout(() => {
      setChatState('result');
    }, 2000);
  };

  const portfolios = [
    { name: "Alpha Neuronal", strategy: "Predicción de tendencias macro a mediano plazo.", assets: "BTC, ETH, SOL", risk: "Moderado", color: "text-crypto-blue", bg: "bg-crypto-blue/10" },
    { name: "Micro-Cap Momentum", strategy: "Detección temprana de liquidez en tokens nuevos.", assets: "Altcoins Baja Cap.", risk: "Alto", color: "text-crypto-orange", bg: "bg-crypto-orange/10" },
    { name: "Delta Estable", strategy: "Arbitraje automatizado y estrategias de yield.", assets: "USDT, USDC, DAI", risk: "Bajo", color: "text-emerald-400", bg: "bg-emerald-400/10" }
  ];

  return (
    <div className="min-h-screen bg-crypto-black text-crypto-white selection:bg-crypto-blue/30 overflow-x-hidden relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-crypto-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-crypto-purple/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-crypto-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Volver
          </button>
          
          <button 
            onClick={() => setWalletConnected(!walletConnected)}
            className={`flex items-center px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
              walletConnected 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            <Wallet className="w-4 h-4 mr-2" />
            {walletConnected ? '0x71C...3E80' : 'Conectar Wallet'}
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
        
        {/* Section 1 & 4 Combined: Copilot & Live Score */}
        <section className="grid lg:grid-cols-2 gap-12">
          {/* Copilot */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-crypto-blue/10 text-crypto-blue px-3 py-1 rounded-full text-xs font-mono mb-4 border border-crypto-blue/20">
                <Bot className="w-4 h-4" />
                <span>Copilot de Inversión IA</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 drop-shadow-md">
                Inversión Autónoma.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-blue to-crypto-purple">Sin emociones.</span>
              </h1>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Nuestra IA analiza el mercado en tiempo real. Dile cuánto deseas invertir y tu objetivo, nosotros generamos la estrategia óptima.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-crypto-orange via-crypto-purple to-crypto-blue" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-crypto-blue/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-crypto-blue" />
                </div>
                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-4 text-sm text-gray-300">
                  Hola, soy Alpha. ¿Cuánto deseas invertir y cuál es tu meta? (Ej. "1,000 USD para rendimiento moderado a largo plazo")
                </div>
              </div>

              <AnimatePresence mode="wait">
                {chatState === 'idle' && (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleChatSubmit} 
                    className="relative"
                  >
                    <input 
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Escribe tu objetivo aquí..."
                      className="w-full bg-black/50 border border-white/10 rounded-xl pl-4 pr-12 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-crypto-blue/50"
                    />
                    <button 
                      type="submit"
                      disabled={!chatInput.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-crypto-blue/20 text-crypto-blue hover:bg-crypto-blue/40 disabled:opacity-50 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}

                {chatState === 'typing' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-crypto-blue font-mono text-sm py-4"
                  >
                    <Activity className="w-5 h-5 animate-spin-slow" />
                    Analizando tensores de mercado y opciones de liquidez...
                  </motion.div>
                )}

                {chatState === 'result' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                      <h4 className="text-emerald-400 font-medium text-sm mb-3 flex items-center">
                        <Check className="w-4 h-4 mr-2" />
                        Estrategia Generada: "Alpha Neuronal Adaptativo"
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex justify-between"><span>60% Temporalidad Macro</span> <span className="text-white">BTC / ETH</span></li>
                        <li className="flex justify-between"><span>30% Capa 1 Alta Velocidad</span> <span className="text-white">SOL</span></li>
                        <li className="flex justify-between"><span>10% Cobertura Delta</span> <span className="text-white">USDC</span></li>
                      </ul>
                      <button className="w-full mt-4 py-3 rounded-lg bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                        Ejecutar en 1-Clic
                      </button>
                    </div>
                    <button 
                      onClick={() => { setChatState('idle'); setChatInput(''); }}
                      className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                      Empezar de nuevo
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Confidence Score Dashboard */}
          <div className="space-y-6 lg:mt-12">
            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0a0a0a]/60">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-medium mb-1">Score de Confianza de IA</h3>
                  <p className="text-gray-400 text-xs">Efectividad predictiva (Últimas 24h)</p>
                </div>
                <div className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-crypto-blue to-purple-400">
                  89.4%
                </div>
              </div>
              
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={confidenceData}>
                    <defs>
                      <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00d1ff" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00d1ff" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#00d1ff' }}
                    />
                    <Area type="monotone" dataKey="accuracy" stroke="#00d1ff" fill="url(#colorAcc)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Live Signals Marquee replacement */}
            <div className="glass-panel p-4 rounded-2xl border border-white/5 bg-crypto-blue/5 overflow-hidden relative">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-crypto-blue" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSignalIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-xs md:text-sm text-crypto-blue/80 pl-4 py-1"
                >
                  {liveSignals[activeSignalIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Section 2: Portfolios Table */}
        <section>
          <div className="mb-10 lg:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold mb-3">Portafolios Gestionados (Set & Forget)</h2>
              <p className="text-gray-400 text-sm">Productos cerrados donde nuestros algoritmos toman las decisiones en milisegundos.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-medium">Portafolio IA</th>
                  <th className="p-4 font-medium">Estrategia del Algoritmo</th>
                  <th className="p-4 font-medium">Activos</th>
                  <th className="p-4 font-medium">Nivel Riesgo</th>
                  <th className="p-4 font-medium">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {portfolios.map((portfolio, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${portfolio.bg}`}>
                          <BrainCircuit className={`w-4 h-4 ${portfolio.color}`} />
                        </div>
                        <span className="font-medium text-white">{portfolio.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-400">{portfolio.strategy}</td>
                    <td className="p-4 text-sm font-mono text-gray-300">{portfolio.assets}</td>
                    <td className="p-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border border-current ${portfolio.color}`}>
                        {portfolio.risk}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="flex items-center justify-center w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                        Invertir 1-Clic
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: DePIN Pool */}
        <section className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
               alt="Server Room GPUs"
               className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-crypto-black via-crypto-black/80 to-transparent" />
             <div className="absolute inset-0 bg-crypto-purple/10 mix-blend-overlay" />
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-crypto-purple/20 text-crypto-purple px-3 py-1 rounded-full text-xs font-mono border border-crypto-purple/30">
                <Server className="w-4 h-4" />
                <span>Infraestructura DePIN</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
                Pool de Co-Inversión de Cómputo
              </h2>
              <p className="text-gray-300 leading-relaxed font-light">
                No solo inviertas en tokens, invierte en la red física que los procesa. Cede liquidez al pool para adquirir nodos GPU. Nuestra IA optimizará el arrendamiento de tu potencia a startups globales, y tú recibes dividendos automáticos vía Smart Contracts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-6 py-3 bg-crypto-purple text-white font-semibold rounded-xl text-sm shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:bg-purple-600 transition-colors flex items-center justify-center">
                  Entrar al Pool (USDC)
                </button>
                <button className="px-6 py-3 bg-white/5 border border-white/20 text-white font-medium rounded-xl text-sm hover:bg-white/10 transition-colors flex items-center justify-center">
                  Ver métricas de la red <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/3 glass-panel p-6 rounded-2xl border border-white/10 bg-crypto-black/60 backdrop-blur-md">
               <div className="flex items-center gap-3 mb-6">
                 <Cpu className="w-6 h-6 text-crypto-purple" />
                 <h4 className="font-medium text-white">Estado del Pool</h4>
               </div>
               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between text-xs text-gray-400 mb-1">
                     <span>Capacidad Actual</span>
                     <span className="text-white">8.4 / 10 PetaFLOPS</span>
                   </div>
                   <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-crypto-purple w-[84%] shadow-[0_0_10px_rgba(157,78,221,0.8)]" />
                   </div>
                 </div>
                 <div className="flex justify-between items-center py-2 border-t border-white/5 pt-4">
                   <span className="text-sm text-gray-400">APY Estimado:</span>
                   <span className="font-mono text-emerald-400 font-bold">18.5% - 24%</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Disclaimer */}
      <footer className="border-t border-white/5 bg-[#050505] py-8 text-center relative z-10 mt-20">
        <div className="max-w-4xl mx-auto px-6 flex items-start justify-center gap-3 text-left md:text-center text-gray-500 text-xs">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 text-gray-400 mt-0.5" />
          <p className="font-light leading-relaxed">
            <span className="font-medium text-gray-400">Aviso Legal: </span>
            Las predicciones y simulaciones generadas por nuestros modelos de IA se basan en datos históricos probabilísticos y no garantizan rendimientos futuros. Los mercados de criptoactivos son altamente volátiles. Invierte de manera responsable y únicamente el capital que estés dispuesto a arriesgar.
          </p>
        </div>
      </footer>
    </div>
  );
}
