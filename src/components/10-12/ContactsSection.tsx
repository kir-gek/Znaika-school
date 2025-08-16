import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "react-feather";

export const ContactSection = () => {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@znaika-school.ru"],
      action: "mailto:info@znaika-school.ru",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефоны",
      details: ["8 (499) 154-43-91", "+7 (905) 149 99 03"],
      action: "tel:+74991544391",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Адрес",
      details: ["Москва, проезд Черепановых, 40"],
      action: "https://yandex.ru/maps/-/CDbQYFSO",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Часы работы",
      details: ["Пн-Пт: 8:00 - 19:00", "Сб: 10:00 - 15:00"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Telegram",
      details: ["@school_znaika"],
      action: "https://t.me/school_znaika",
      color: "from-cyan-400 to-cyan-600",
    },
  ];

  return (
    <section id="contacts" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Заголовок с анимацией */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Свяжитесь с нами
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Мы всегда рады помочь и ответить на ваши вопросы
          </p>
        </motion.div>

        {/* Контактные карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {contact.action ? (
                <a
                  href={contact.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <ContactCard contact={contact} />
                </a>
              ) : (
                <ContactCard contact={contact} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Карта */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg mb-12 md:mb-16"
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2dc8fad300d7d62c0cec1022c73e23ee27783c02e5fb1ae50a4411851d88242a&amp;source=constructor"
            width="100%"
            height="400"
            className="border-0"
            loading="lazy"
            title="Карта расположения школы ZNAIKA"
          ></iframe>
        </motion.div>

        {/* CTA блок */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Нужна консультация?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="tel:+74991544391"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Позвонить</span>
            </motion.a>
            <motion.a
              href="https://t.me/school_znaika"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Написать в Telegram</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactCard = ({ contact }: { contact: any }) => (
  <div className="h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 group-hover:border-transparent">
    <div className={`bg-gradient-to-r ${contact.color} p-4 flex justify-center`}>
      <div className="p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
        {contact.icon}
      </div>
    </div>
    <div className="p-5 md:p-6">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
        {contact.title}
      </h3>
      <ul className="space-y-2">
        {contact.details.map((detail: string, i: number) => (
          <li key={i} className="text-gray-600 text-sm md:text-base">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  </div>
);