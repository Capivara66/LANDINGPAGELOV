import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Lucas F.",
      role: "Empreendedor Digital",
      text: "Nunca imaginei que eu mesmo poderia fazer minha landing page! Curso maravilhoso, agora não dependo mais de ninguém.",
      rating: 5,
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/1a1a1a/00ffff?text=L"
    },
    {
      name: "Marina S.",
      role: "Designer Freelancer", 
      text: "O Lovable mudou completamente meu workflow. Consigo entregar projetos 3x mais rápido e com qualidade profissional.",
      rating: 5,
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/1a1a1a/00ffff?text=M"
    },
    {
      name: "Carlos R.",
      role: "Agência de Marketing",
      text: "Implementamos o Lovable na nossa agência e aumentamos nossa margem de lucro em 40%. Recomendo demais!",
      rating: 5,
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/1a1a1a/00ffff?text=C"
    },
    {
      name: "Ana P.",
      role: "Coach Online",
      text: "Em 2 semanas já estava criando minhas próprias páginas de captura. O curso é didático e muito prático!",
      rating: 5,
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/1a1a1a/00ffff?text=A"
    }
  ];

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
            O Que Nossos <span className="text-neon">Alunos Dizem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de transformação e sucesso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-dark-gray border border-neon/20 rounded-xl p-8 hover:border-neon/40 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-neon/30 group-hover:text-neon/60 transition-colors duration-300" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-neon/30 mr-4"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-300 leading-relaxed text-lg italic">
                "{testimonial.text}"
              </blockquote>
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
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-gray/50 rounded-xl p-6 border border-neon/10">
              <div className="text-3xl font-black text-neon mb-2">500+</div>
              <div className="text-gray-300">Alunos Satisfeitos</div>
            </div>
            <div className="bg-dark-gray/50 rounded-xl p-6 border border-neon/10">
              <div className="text-3xl font-black text-neon mb-2">98%</div>
              <div className="text-gray-300">Taxa de Aprovação</div>
            </div>
            <div className="bg-dark-gray/50 rounded-xl p-6 border border-neon/10">
              <div className="text-3xl font-black text-neon mb-2">4.9★</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
