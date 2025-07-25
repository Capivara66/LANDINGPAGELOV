import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Smartphone, TrendingUp, Sparkles, Globe, Settings } from 'lucide-react';

const WhatYouLearn: React.FC = () => {
  const topics = [
    {
      icon: TrendingUp,
      title: "Páginas de Vendas de Alto Impacto",
      description: "Crie landing pages que convertem visitantes em clientes"
    },
    {
      icon: Settings,
      title: "Formulários e Integrações Externas",
      description: "Conecte Supabase, Analytics, Zapier e outras ferramentas"
    },
    {
      icon: Smartphone,
      title: "Responsividade e Versão Mobile",
      description: "Garanta que suas páginas funcionem em todos os dispositivos"
    },
    {
      icon: Sparkles,
      title: "Design Estratégico para Conversão",
      description: "Aplique técnicas de UX/UI que aumentam vendas"
    },
    {
      icon: Zap,
      title: "Gatilhos Visuais e Animações",
      description: "Adicione movimento e interatividade às suas páginas"
    },
    {
      icon: Globe,
      title: "Publicação e Conexão de Domínio",
      description: "Coloque sua página no ar com domínio personalizado"
    },
    {
      icon: CheckCircle,
      title: "Automação e Funcionalidades Extras",
      description: "Recursos avançados para páginas mais inteligentes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-darker-gray relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            O Que Você Vai <span className="text-neon animate-glow">Aprender?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um currículo completo e prático para você dominar o Lovable do básico ao avançado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-start space-x-4 p-6 rounded-xl bg-dark-gray/50 border border-neon/10 hover:border-neon/30 hover:bg-dark-gray/80 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center group-hover:bg-neon/20 group-hover:scale-110 transition-all duration-300">
                <topic.icon className="w-6 h-6 text-neon" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors duration-300">
                  {topic.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-neon/10 border border-neon/20">
            <Sparkles className="w-5 h-5 text-neon mr-2" />
            <span className="text-neon font-semibold">E muito mais!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
