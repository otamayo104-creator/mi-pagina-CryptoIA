import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    // We let the form do its native submission to target="_blank"
    // Then we close the modal after a short delay
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      onClose();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-crypto-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[101] p-6"
          >
            <div className="relative glass-panel rounded-3xl border border-white/10 p-8 shadow-2xl bg-[#0a0a0a]/90 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-display font-medium text-white mb-2">Comencemos a hablar</h3>
                <p className="text-gray-400 font-light text-sm">Déjanos tus datos y un especialista en IA se pondrá en contacto contigo.</p>
              </div>

                <form 
                  action="https://formsubmit.co/yosinjefe@gmail.com" 
                  method="POST" 
                  target="_blank"
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value={`Nuevo mensaje de contacto de ${formData.name}`} />

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 font-medium ml-1">Nombre completo</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-crypto-blue/50 focus:ring-1 focus:ring-crypto-blue/50 transition-all text-sm"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 font-medium ml-1">Correo corporativo</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-crypto-blue/50 focus:ring-1 focus:ring-crypto-blue/50 transition-all text-sm"
                      placeholder="Ej. juan@empresa.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 font-medium ml-1">Empresa</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-crypto-blue/50 focus:ring-1 focus:ring-crypto-blue/50 transition-all text-sm"
                      placeholder="Opcional"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 font-medium ml-1">¿En qué podemos ayudarte?</label>
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-crypto-blue/50 focus:ring-1 focus:ring-crypto-blue/50 transition-all text-sm resize-none"
                      placeholder="Cuéntanos brevemente sobre tu proyecto..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-6 px-6 py-4 rounded-xl bg-crypto-blue text-black font-semibold text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,209,255,0.2)] hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Solicitar contacto
                  </button>
                </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
