import React from 'react';
import { motion } from 'framer-motion';
import { Infinity, Download, Users, HeadphonesIcon, Award, Gift } from 'lucide-react';

const WhatYouGet: React.FC = () => {
  const benefits = [
    {
      icon: Infinity,
      title: "Acesso Vitalício às Aulas",
      description: "Assista quantas vezes quiser, para sempre"
    },
    {
      icon: Download,
      title: "Atualizações Gratuitas",
      description: "Receba todas as novidades do curso sem pagar mais"
    },
    {
      icon: Gift,
      title: "Templates Prontos para Uso",
      description: "Modelos profissionais para acelerar seus projetos"
    },
    {
      icon: Users,
      title: "Grupo Fechado no WhatsApp",
      description: "Networking e suporte da comunidade"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Direto",
      description: "Tire suas dúvidas via e-mail ou grupo"
    },
    {
      icon: Award,
      title: "Certificado de Conclusão",
      description: "Comprove sua especialização em Lovable.dev"
    }
  ];

  return (
    <section className="py-20 bg-darker-gray relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-neon/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            O Que Você Vai <span className="text-neon">Receber</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um pacote completo para garantir seu sucesso com o Lovable.dev
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-neon/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-dark-gray border border-neon/20 rounded-xl p-8 hover:border-neon/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-neon/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-neon/20 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-neon" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-neon transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-neon/20 to-neon/10 rounded-xl p-6 border border-neon/30">
            <h3 className="text-2xl font-bold text-white mb-2">
              Valor Total dos Bônus: <span className="text-neon">R$ 497</span>
            </h3>
            <p className="text-gray-300">
              Mas você vai receber tudo isso sem pagar nada a mais!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGet;
