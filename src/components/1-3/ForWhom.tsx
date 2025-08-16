import { motion } from "framer-motion";
import abroad from "../../assets/Зв рцубежом.jpg";
import college from "../../assets/КООЛЕДЖ ФИН.png";
import letka from "../../assets/ЛЕТКА ФИН.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const ForWhom = () => {
  return (
    <section id="for-whom" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400"
          >
            Для кого наша школа?
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Мы помогаем достигать образовательных целей, независимо от вашей текущей ситуации
          </motion.p>
        </motion.div>

        {/* Блок 1 - Летные училища */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center mb-16 lg:mb-28 bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
            <motion.h3 
              variants={fadeIn}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-400">
                Летные училища
              </span>
            </motion.h3>
            <motion.ul 
              variants={staggerContainer}
              className="space-y-3 sm:space-y-4"
            >
              <motion.li 
                variants={fadeIn}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700">
                  Подготовка аттестата с высокими баллами для летных училищ
                </span>
              </motion.li>
              <motion.li 
                variants={fadeIn}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700">
                  Возможность получить аттестат с отличием и золотую медаль
                </span>
              </motion.li>
              <motion.li 
                variants={fadeIn}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700">
                  Путь к мечте управлять Boeing или Airbus начинается здесь
                </span>
              </motion.li>
            </motion.ul>
          </div>
          <motion.div 
            variants={fadeIn}
            className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative overflow-hidden"
          >
            <img 
              src={letka} 
              alt="Летное училище" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Блок 2 - За рубеж */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row-reverse items-center mb-16 lg:mb-28 bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
            <motion.h3 
              variants={fadeIn}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Поступление заграницу
              </span>
            </motion.h3>
            <motion.ul 
              variants={staggerContainer}
              className="space-y-3 sm:space-y-4"
            >
              <motion.li 
                variants={fadeIn}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700">
                  Повышение успеваемости для соответствия требованиям иностранных ВУЗов
                </span>
              </motion.li>
              <motion.li 
                variants={fadeIn}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700">
                  Завершение 10-11 класса за один год в ускоренном формате
                </span>
              </motion.li>
              <motion.li 
                variants={fadeIn}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700">
                  Онлайн-обучение из любой точки мира с гибким графиком
                </span>
              </motion.li>
            </motion.ul>
          </div>
          <motion.div 
            variants={fadeIn}
            className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative overflow-hidden"
          >
            <img 
              src={abroad} 
              alt="Обучение за рубежом" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Блок 3 - Колледж РФ */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
            <motion.h3 
              variants={fadeIn}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
                Поступление в колледж РФ
              </span>
            </motion.h3>
            <motion.ul 
              variants={staggerContainer}
              className="space-y-3 sm:space-y-4"
            >
              <motion.li 
                variants={fadeIn}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700">
                  Коррекция оценок для поступления в престижные колледжи России
                </span>
              </motion.li>
              <motion.li 
                variants={fadeIn}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700">
                  Альтернатива для тех, кто не может посещать обычную школу
                </span>
              </motion.li>
              <motion.li 
                variants={fadeIn}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700">
                  Гибкий график обучения, совместимый с работой или другими занятиями
                </span>
              </motion.li>
            </motion.ul>
          </div>
          <motion.div 
            variants={fadeIn}
            className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative overflow-hidden"
          >
            <img 
              src={college} 
              alt="Поступление в колледж" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};