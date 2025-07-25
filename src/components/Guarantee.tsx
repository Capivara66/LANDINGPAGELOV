import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, CheckCircle } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-16 h-16 border-2 border-neon/30 rounded-full"
            ></motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-32 h-32 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-neon/30"
            >
              <Shield className="w-16 h-16 text-neon" />
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            <span className="text-neon">Garantia</span> Incondicional
          </h2>
          
          <div className="bg-dark-gray border border-neon/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-neon mr-3" />
              <span className="text-3xl font-bold text-neon">7 DIAS</span>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Você tem <span className="text-neon font-bold">7 dias de garantia incondicional</span>. 
              Se não gostar do curso por qualquer motivo, é só pedir e 
              <span className="text-green-400 font-bold"> devolvemos 100% do valor</span>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-gray-300">Sem perguntas</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-gray-300">Sem burocracia</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-gray-300">100% do dinheiro de volta</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-neon/10 border border-neon/20 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Por que oferecemos essa garantia?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Porque temos total confiança na qualidade do nosso curso. 
              Sabemos que você vai amar o conteúdo e ver resultados reais!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
