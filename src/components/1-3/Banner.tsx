import attestats from "../../assets/атик.jpg";
import { motion } from "framer-motion";

// Используем Google Fonts через CSS @import
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;600&display=swap');
`;

// Добавляем стили в документ
const styleElement = document.createElement("style");
styleElement.innerHTML = fontStyles;
document.head.appendChild(styleElement);

export const Banner = () => {
  return (
    <div className="relative h-screen overflow-hidden" id="home">
      {/* Затемненный фон с параллакс-эффектом */}
      <motion.div
        className="absolute inset-0 bg-black/30 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.img
        src={attestats}
        alt="Banner"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Контент баннера */}
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-12 px-8 z-20">
        {/* Текстовый блок */}
        <motion.div
          className="text-center lg:text-left max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white font-playfair"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="bg-gradient-to-r from-yellow-100 to-yellow-400 bg-clip-text text-transparent">
              Повторное получение аттестата
            </span>
          </motion.h1>

          <motion.h3
            className="text-xl md:text-2xl text-gray-200 mb-8 font-montserrat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Идеальное решение для исправления оценок в школьном аттестате
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          ></motion.div>
        </motion.div>

        {/* Форма */}
        <motion.form
          className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md font-montserrat"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <h2
            className="text-2xl font-bold mb-4 text-gray-800 font-playfair"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Получите бесплатную консультацию
          </h2>
          <p className="text-gray-600 mb-6">
            Наш специалист поможет подобрать оптимальное решение для вашей
            ситуации
          </p>

          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Ваше имя
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              id="name"
              type="text"
              placeholder="Иван"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Телефон
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              id="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <button
            className="relative w-full text-white font-bold py-3 px-4 rounded-lg overflow-hidden group"
            type="button"
          >
            {/* Анимированный градиентный фон */}
            <div className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-yellow-300 via-yellow-600 to-yellow-500 animate-gradient-flow "></div>

            {/* Текст кнопки */}
            <span className="relative z-10 flex items-center justify-center">
              Записаться на консультацию
            </span>

            {/* Эффект при наведении */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>

          <p className="text-xs text-gray-500 mt-4">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </motion.form>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
