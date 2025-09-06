import attestats from "../../assets/атик.jpg";
import { motion } from "framer-motion" ;
import { Form } from "./Form";

export const Banner = () => {
  return (
    <div className="relative h-screen overflow-hidden" id="home">
      {/* Фоновое изображение с затемнением */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={attestats}
          alt="Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/40"></div>
      </div>

      {/* Контент баннера */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Текстовый блок */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                Повторное получение аттестата
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Идеальное решение для исправления оценок в школьном аттестате
            </motion.p>
          </motion.div>

          {/* Форма */}

          <Form />
        </div>
      </div>

      {/* Индикатор прокрутки */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white flex flex-col items-center"
        >
          <span className="text-sm mb-1">Листайте вниз</span>
          <svg
            className="w-6 h-6"
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
