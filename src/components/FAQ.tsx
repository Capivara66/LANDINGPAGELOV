import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso saber programar?",
      answer: "Nada! O Lovable é 100% visual e prático. Você vai criar páginas arrastando e soltando elementos, sem escrever uma linha de código."
    },
    {
      question: "As aulas são ao vivo?",
      answer: "Não, você assiste no seu tempo, onde e quando quiser. O curso fica disponível 24/7 para você acessar quando for conveniente."
    },
    {
      question: "Quanto tempo tenho para concluir o curso?",
      answer: "O acesso é vitalício! Você pode assistir as aulas quantas vezes quiser e no seu próprio ritmo, sem pressa."
    },
    {
      question: "O curso funciona para iniciantes?",
      answer: "Sim! O curso foi pensado para quem está começando do zero. Explicamos tudo passo a passo, desde o básico até estratégias avançadas."
    },
    {
      question: "Vou conseguir criar páginas profissionais?",
      answer: "Absolutamente! Ao final do curso você será capaz de criar páginas de vendas, landing pages e portfólios com qualidade profissional."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias corridos para testar o curso. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "Preciso pagar mensalidade do Lovable?",
      answer: "O Lovable tem um plano gratuito robusto. No curso ensinamos como aproveitar ao máximo a versão gratuita e quando vale a pena fazer upgrade."
    },
    {
      question: "Vou receber suporte durante o curso?",
      answer: "Sim! Você terá acesso ao nosso grupo exclusivo no WhatsApp onde pode tirar dúvidas e trocar experiências com outros alunos."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Perguntas <span className="text-neon">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tire suas principais dúvidas sobre o curso
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-dark-gray border border-neon/20 rounded-xl overflow-hidden hover:border-neon/40 transition-colors duration-300">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-neon/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem === index ? (
                      <ChevronUp className="w-6 h-6 text-neon" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-neon" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          <div className="bg-dark-gray border border-neon/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe está pronta para ajudar você!
            </p>
            <a
              href="mailto:suporte@lovablepro.com"
              className="inline-flex items-center px-6 py-3 bg-neon/10 border border-neon/30 rounded-lg text-neon hover:bg-neon/20 transition-colors duration-300"
            >
              Entre em contato conosco
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
