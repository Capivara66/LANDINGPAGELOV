import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, ArrowUp } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-t from-darker-gray to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/40 mb-8">
            <Clock className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-red-400 font-semibold">ÚLTIMA CHANCE</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            As Vagas com Preço <span className="text-neon animate-glow">Promocional</span> são Limitadas
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            👉 Garanta agora sua vaga antes que acabe e transforme sua carreira no mundo digital
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-gray/50 border border-neon/20 rounded-xl p-6"
            >
              <div className="text-3xl font-black text-neon mb-2">67%</div>
              <div className="text-gray-300">De Desconto</div>
              <div className="text-gray-400 text-sm">Por tempo limitado</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-dark-gray/50 border border-neon/20 rounded-xl p-6"
            >
              <div className="text-3xl font-black text-neon mb-2">R$ 441</div>
              <div className="text-gray-300">Em Bônus</div>
              <div className="text-gray-400 text-sm">Totalmente grátis</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-dark-gray/50 border border-neon/20 rounded-xl p-6"
            >
              <div className="text-3xl font-black text-neon mb-2">7 Dias</div>
              <div className="text-gray-300">De Garantia</div>
              <div className="text-gray-400 text-sm">Risco zero para você</div>
            </motion.div>
          </div>

          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-neon text-black font-black text-2xl rounded-xl hover:bg-neon/90 transition-all duration-300 animate-pulse-neon inline-flex items-center mb-8"
          >
            <Zap className="mr-3 w-8 h-8" />
            QUERO ME INSCREVER AGORA
            <div className="absolute -inset-1 bg-gradient-to-r from-neon to-neon rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2 text-gray-400"
          >
            <div>🔒 Compra 100% segura e protegida</div>
            <div>⚡ Acesso imediato após confirmação do pagamento</div>
            <div>🎯 Aproveite enquanto ainda há vagas disponíveis</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-neon/20 border border-neon/40 rounded-full flex items-center justify-center hover:bg-neon/30 transition-colors duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6 text-neon" />
      </motion.button>
    </section>
  );
};

export default FinalCTA;
