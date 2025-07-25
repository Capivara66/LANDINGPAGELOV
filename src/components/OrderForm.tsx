import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, CreditCard, Lock, CheckCircle } from 'lucide-react';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    payment: 'card'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com o gateway de pagamento
    alert('Formulário enviado! Integrar com gateway de pagamento.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="formulario" className="py-20 bg-darker-gray relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Garanta Sua <span className="text-neon">Vaga Agora</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Preencha os dados abaixo e comece sua jornada no Lovable.dev hoje mesmo
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-gray border border-neon/30 rounded-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <User className="w-5 h-5 inline mr-2 text-neon" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-neon/20 rounded-lg text-white placeholder-gray-400 focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all duration-300"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <Mail className="w-5 h-5 inline mr-2 text-neon" />
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-neon/20 rounded-lg text-white placeholder-gray-400 focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Forma de Pagamento */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <CreditCard className="w-5 h-5 inline mr-2 text-neon" />
                  Forma de Pagamento
                </label>
                <select
                  name="payment"
                  value={formData.payment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-neon/20 rounded-lg text-white focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all duration-300"
                >
                  <option value="card">Cartão de Crédito (12x sem juros)</option>
                  <option value="pix">PIX (À vista com desconto)</option>
                  <option value="boleto">Boleto Bancário</option>
                </select>
              </div>

              {/* Resumo do Pedido */}
              <div className="bg-black/50 border border-neon/20 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Resumo do Pedido</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Curso Lovable Pro</span>
                    <span className="line-through text-gray-500">R$ 297</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bônus Inclusos</span>
                    <span className="line-through text-gray-500">R$ 441</span>
                  </div>
                  <div className="border-t border-neon/20 pt-2 mt-2">
                    <div className="flex justify-between text-lg font-bold text-white">
                      <span>Total</span>
                      <span className="text-neon">R$ 97</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garantias */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Acesso imediato após a confirmação do pagamento</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>7 dias de garantia incondicional</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Todos os bônus inclusos sem custo adicional</span>
                </div>
              </div>

              {/* Botão de Compra */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-neon text-black font-black text-xl py-4 rounded-xl hover:bg-neon/90 transition-all duration-300 animate-pulse-neon"
              >
                <Lock className="w-6 h-6 inline mr-2" />
                FINALIZAR COMPRA SEGURA
              </motion.button>

              <div className="text-center text-gray-400 text-sm">
                🔒 Compra 100% segura e protegida
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
