import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "react-feather";

export const ContactSection = () => {
  const contacts = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Приемный совет",
      details: [
        "8 (499) 154-43-91",
        "info@znaika-school.ru"
      ],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Руководитель отдела приема",
      details: [
        "+7 (905) 149 99 03"
      ],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Наш адрес",
      details: [
        "Москва, проезд Черепановых, 40"
      ],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Часы работы",
      details: [
        "Пн-Пт: 8:00 - 19:00",
        "Сб: 10:00 - 15:00"
      ],
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
            Как с нами связаться
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша команда готова ответить на все ваши вопросы и помочь с поступлением
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className={`p-4 flex items-center justify-center ${contact.color}`}>
                <div className="p-3 rounded-full bg-white">
                  {contact.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{contact.title}</h3>
                <ul className="space-y-2">
                  {contact.details.map((detail, i) => (
                    <li key={i} className="text-gray-600">{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2dc8fad300d7d62c0cec1022c73e23ee27783c02e5fb1ae50a4411851d88242a&amp;source=constructor"
            width="100%"
            height="500"
            className="border-0"
            loading="lazy"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Остались вопросы?</h3>
          <motion.a
            href="tel:+74991544391"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Позвонить нам</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};