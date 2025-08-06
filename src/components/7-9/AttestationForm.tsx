import { motion } from "framer-motion";
import attest from "../../assets/attestat.jpg";
import { FileText, Mail, Phone, User, Check, ArrowRight } from "react-feather";

export const AttestationForm = () => {
  return (
    <section 
      id="attestation" 
      className="relative py-28 overflow-hidden min-h-screen flex items-center"
    >
      {/* Параллакс фон с эффектом затемнения */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${attest})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Анимированные частицы */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 5 + 1 + 'px',
                height: Math.random() * 5 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%'
              }}
              animate={{
                y: [0, (Math.random() * 100) - 50],
                x: [0, (Math.random() * 100) - 50],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Форма в стеклянном морфизме */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                Получить аттестат
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-lg text-white/80 mb-8"
              >
                Оставьте заявку и получите консультацию специалиста
              </motion.p>

              <form className="space-y-6">
                {[
                  { icon: <User className="w-5 h-5" />, type: "text", placeholder: "Ваше имя" },
                  { icon: <Mail className="w-5 h-5" />, type: "email", placeholder: "Ваш e-mail" },
                  { icon: <Phone className="w-5 h-5" />, type: "tel", placeholder: "Ваш телефон" }
                ].map((field, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/70">
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none text-white placeholder-white/50 transition-all"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="relative"
                >
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/70">
                    <FileText className="w-5 h-5" />
                  </div>
                  <select className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none text-white appearance-none transition-all">
                    <option className="bg-gray-800">Выберите тариф</option>
                    <option className="bg-gray-800">Стандарт</option>
                    <option className="bg-gray-800">Премиум</option>
                    <option className="bg-gray-800">VIP</option>
                  </select>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Отправить заявку</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="mt-6 text-sm text-white/60 text-center"
              >
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </motion.p>
            </div>
          </motion.div>

          {/* Блок преимуществ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Наши преимущества
              </span>
            </motion.h3>
            
            <ul className="space-y-8">
              {[
                "Официальные документы государственного образца",
                "Поддержка 24/7 на всех этапах",
                "Гибкие условия оплаты и рассрочка",
                "Персональный куратор для каждого",
                "Ускоренное обучение по индивидуальному плану",
                "Гарантированное получение аттестата"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg mr-4 flex-shrink-0 shadow-md">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>

          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};