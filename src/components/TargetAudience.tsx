import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Palette, Megaphone, Code, Target } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audience = [
    {
      icon: Briefcase,
      title: "Empreendedores e Infoprodutores",
      description: "Crie suas próprias páginas de vendas sem depender de terceiros"
    },
    {
      icon: Palette,
      title: "Designers Iniciantes e Experientes", 
      description: "Acelere seu processo criativo com ferramentas visuais"
    },
    {
      icon: Users,
      title: "Agências e Freelancers",
      description: "Ofereça mais serviços e aumente sua margem de lucro"
    },
    {
      icon: Megaphone,
      title: "Criadores de Conteúdo",
      description: "Construa sua presença online com páginas profissionais"
    },
    {
      icon: Target,
      title: "Quem quer Independência",
      description: "Pare de depender de programadores para suas ideias"
    },
    {
      icon: Code,
      title: "Iniciantes em Tecnologia",
      description: "Comece no mundo digital sem conhecimento técnico"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-darker-gray/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Para Quem é Esse <span className="text-neon">Curso?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Se você se identifica com algum desses perfis, este curso foi feito especialmente para você
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-dark-gray border border-neon/20 rounded-xl p-6 hover:border-neon/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-neon/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-neon" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
