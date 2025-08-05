import { motion } from "framer-motion";
import { CheckCircle, Star, Zap } from "react-feather";

export const PricingPlans = () => {
  const plans = [
    {
      title: "Стандарт",
      price: "120 000 ₽",
      period: "за курс",
      features: [
        "Полный доступ к онлайн-платформе",
        "Интерактивные домашние задания",
        "Проверка работ преподавателями",
        "Доступ к материалам 24/7"
      ],
      icon: <CheckCircle size={32} className="text-blue-500" />,
      popular: false,
      color: "blue"
    },
    {
      title: "Премиум",
      price: "140 000 ₽",
      period: "за курс",
      features: [
        "Все возможности Стандарта",
        "Персональный куратор",
        "Консультации 2 раза в неделю",
        "Приоритетная проверка работ"
      ],
      icon: <Star size={32} className="text-purple-500" />,
      popular: true,
      color: "purple"
    },
    {
      title: "VIP",
      price: "170 000 ₽",
      period: "за курс",
      features: [
        "Все возможности Премиум",
        "Индивидуальная программа",
        "Ежедневные консультации",
        "Помощь с поступлением",
        "Подготовка документов",
        "Гарантированное улучшение оценок"
      ],
      icon: <Zap size={32} className="text-yellow-500" />,
      popular: false,
      color: "yellow"
    }
  ];

  const colorVariants = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700"
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700"
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      button: "bg-yellow-600 hover:bg-yellow-700"
    }
  };

  return (
    <section id="prices" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
            Наши тарифные планы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите оптимальный вариант для достижения ваших образовательных целей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                  Самый популярный
                </div>
              )}
              <div className={`h-full rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${colorVariants[plan.color as keyof typeof colorVariants].bg}`}>
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full ${colorVariants[plan.color as keyof typeof colorVariants].bg} bg-opacity-50`}>
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${colorVariants[plan.color as keyof typeof colorVariants].text}`}>
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500"> {plan.period}</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full text-white font-bold py-3 px-6 rounded-lg transition-all ${colorVariants[plan.color as keyof typeof colorVariants].button}`}
                  >
                    Выбрать тариф
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Нужна индивидуальная программа?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-lg transition-all hover:border-gray-400 hover:bg-gray-50"
          >
            Обсудить персональный вариант
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};