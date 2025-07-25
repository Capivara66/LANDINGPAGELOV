import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CreditCard, AlertCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-darker-gray relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-neon/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/40 mb-6">
            <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-red-400 font-semibold">Oferta Limitada</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Investimento <span className="text-neon">Especial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma oportunidade única para transformar sua carreira
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-neon/5 rounded-2xl blur-xl"></div>
            
            <div className="relative bg-dark-gray border-2 border-neon/40 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block bg-neon/20 rounded-full px-4 py-2 mb-4">
                  <span className="text-neon font-bold text-sm">PROMOÇÃO DE LANÇAMENTO</span>
                </div>
                
                <div className="mb-6">
                  <div className="text-gray-400 text-lg mb-2">De:</div>
                  <div className="text-3xl text-gray-500 line-through font-bold mb-2">R$ 297</div>
                  <div className="text-gray-400 text-sm mb-4">Valor normal do curso</div>
                  
                  <div className="text-gray-300 text-xl mb-2">Por apenas:</div>
                  <div className="text-6xl font-black text-neon mb-2">R$ 97</div>
                  <div className="text-gray-400">ou 12x de R$ 8,08 no cartão</div>
                </div>

                <div className="bg-green-500/20 border border-green-500/40 rounded-xl p-4 mb-8">
                  <div className="text-green-400 font-bold text-lg">
                    🎯 Economia de R$ 200 (67% OFF)
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-neon mr-3" />
                  <span>Acesso imediato após o pagamento</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CreditCard className="w-5 h-5 text-neon mr-3" />
                  <span>Parcelamento sem juros no cartão</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <AlertCircle className="w-5 h-5 text-neon mr-3" />
                  <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                </div>
              </div>

              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-neon text-black font-black text-xl py-4 rounded-xl hover:bg-neon/90 transition-all duration-300 animate-pulse-neon"
              >
                🚀 QUERO GARANTIR MINHA VAGA
              </motion.button>

              <div className="text-center mt-6">
                <div className="text-red-400 font-semibold text-sm">
                  ⏰ Oferta válida por tempo limitado
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  Restam poucas vagas com desconto
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-gray/50 rounded-xl p-6 border border-neon/10">
              <h3 className="text-xl font-bold text-white mb-3">Curso Completo</h3>
              <div className="text-3xl font-black text-neon mb-2">R$ 297</div>
              <p className="text-gray-400">Valor do curso principal</p>
            </div>
            <div className="bg-dark-gray/50 rounded-xl p-6 border border-neon/10">
              <h3 className="text-xl font-bold text-white mb-3">Bônus Inclusos</h3>
              <div className="text-3xl font-black text-neon mb-2">R$ 441</div>
              <p className="text-gray-400">Templates + Planilhas + Mini-curso</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="text-2xl text-gray-300 mb-2">Valor total:</div>
            <div className="text-4xl font-black text-white line-through mb-2">R$ 738</div>
            <div className="text-3xl text-green-400 font-bold">Você paga apenas R$ 97!</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
