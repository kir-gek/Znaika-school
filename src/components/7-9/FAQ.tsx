import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "react-feather";

export const FAQ = () => {
  const faqs = [
    {
      question: "Могу ли я оплатить обучение в рассрочку?",
      answer:
        "Да, поможем помочь оформить рассрочку в индивидуальном порядке.",
    },
    {
      question:
        "У меня нет гражданства РФ, могу ли я получить аттестат гос. образца в вашей школе?",
      answer:
        "Да, граждане Республики Беларусь и Казахстан, а также некоторых других стран могут получить аттестат государственного образца в нашей школе.",
    },
    {
      question: "В аттестате будет говориться, что он повторный?",
      answer:
        "Нет. При успешном прохождении переаттестации в нашей школе выдается стандартный аттестат государственного образца без каких-либо дополнительных пометок о повторном получении.",
    },
    {
      question: "Будет ли мой аттестат внесен в гос. реестр?",
      answer:
        "Да, все выданные нами аттестаты регистрируются в Федеральном реестре сведений о документах об образовании (ФРДО) и имеют полную юридическую силу.",
    },
    {
      question:
        "Я работаю, времени посещать занятия нет. Смогу ли я учиться в вашей школе?",
      answer:
        "Конечно! Наша платформа доступна 24/7, все занятия проходят онлайн в записи, а график обучения вы составляете самостоятельно.",
    },
    {
      question:
        "Я не могу никуда приезжать, можно ли получить аттестат удаленно?",
      answer:
        "Да мы отправим вам все документы удобным для вас способом.",
    },
    {
      question:
        "Влияет ли балл ЕГЭ на получение аттестата с отличием и/или золотой медали?",
      answer:
        "Если ЕГЭ сдан на проходные баллы, его результаты не повлияют на оценки в аттестате.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Все, что вам нужно знать о нашем обучении
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                className={`flex justify-between items-center w-full p-6 text-left focus:outline-none ${
                  openIndex === index ? "bg-gray-50" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <p className="text-gray-600 mb-6">Не нашли ответ на свой вопрос?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Задать вопрос
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
