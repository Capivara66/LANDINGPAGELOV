import React from 'react';
import { motion } from 'framer-motion';
import { Gift, FileText, Zap } from 'lucide-react';

const Bonus: React.FC = () => {
  const bonuses = [
    {
      icon: Gift,
      title: "Template Exclusivo de Página de Vendas",
      description: "Uma landing page completa e pronta para você personalizar",
      value: "R$ 197"
    },
    {
      icon: FileText,
      title: "Planilha de Planejamento",
      description: "Ferramenta para estruturar suas páginas antes de criar",
      value: "R$ 97"
    },
    {
      icon: Zap,
      title: "Mini-aula: Automatizando com Zapier",
      description: "Como conectar suas páginas com outras ferramentas",
      value: "R$ 147"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-darker-gray to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-neon/20 border border-neon/40 mb-6">
            <Gift className="w-5 h-5 text-neon mr-2" />
            <span className="text-neon font-semibold">Bônus Exclusivos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Mas Espera, <span className="text-neon animate-glow">Tem Mais!</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Além do curso completo, você também vai receber estes bônus exclusivos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-neon/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-dark-gray border-2 border-neon/30 rounded-xl p-8 hover:border-neon/60 transition-all duration-300 transform-gpu">
                <div className="absolute top-4 right-4 bg-neon text-black text-xs font-bold px-2 py-1 rounded-full">
                  BÔNUS
                </div>
                
                <div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-neon/20 group-hover:scale-110 transition-all duration-300">
                  <bonus.icon className="w-10 h-10 text-neon" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-neon transition-colors duration-300">
                  {bonus.title}
                </h3>
                
                <p className="text-gray-400 text-center leading-relaxed mb-6">
                  {bonus.description}
                </p>
                
                <div className="text-center">
                  <div className="text-2xl font-black text-neon mb-1">
                    {bonus.value}
                  </div>
                  <div className="text-gray-500 text-sm line-through">
                    Valor: {bonus.value}
                  </div>
                  <div className="text-green-400 font-semibold">
                    GRÁTIS para você!
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-neon/30 to-neon/10 rounded-2xl p-8 border-2 border-neon/50">
            <h3 className="text-3xl font-black text-white mb-4">
              Valor Total dos Bônus
            </h3>
            <div className="text-5xl font-black text-neon mb-2">
              R$ 441
            </div>
            <p className="text-xl text-gray-300">
              Mas você recebe <span className="text-green-400 font-bold">GRÁTIS</span> com o curso!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonus;
