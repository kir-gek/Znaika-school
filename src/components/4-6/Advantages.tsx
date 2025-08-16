import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Award,
  BookOpen,
  Clock,
  Globe,
  Briefcase,
  ChevronDown
} from "react-feather";

const advantages = [
  {
    icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Аттестат государственного образца",
    content: "В РФ можно учиться совершенно бесплатно только первый раз. Среднее образование — точно такое же образование, как и высшее, и среднее специальное. Поэтому получить его можно неограниченное количество раз на совершенно законных основаниях. При завершении обучения вы получаете такой же аттестат государственного образца, как и дети, которые учатся впервые."
  },
  {
    icon: <FileText className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Заключение официального договора",
    content: "При поступлении в школу заключается договор, в котором четко прописаны обязанности каждой стороны. Школа заинтересована довести каждого ученика до заветной цели."
  },
  {
    icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Зачет оценок из старого аттестата",
    content: "Вам не обязательно пересдавать все школьные предметы. Если оценки по предметам из старого аттестата вас устраивают, их можно перезачесть автоматически. К примеру по физике и химии у вас было 5, а по английскому 4. Значит физики и химии в вашей программе не будет, только английский."
  },
  {
    icon: <Clock className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Гибкий график обучения",
    content: "Люди идущие за повторным аттестатом уже не дети и не готовы сидеть на уроках с 9 до 15. Вы можете учиться в удобное для вас время. Наша платформа доступна 24/7. На платформе вы усваиваете материал, проходите тестирования и контрольные и получаете за них оценки."
  },
  {
    icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Предоставление полного пакета документов",
    content: "При завершении обучения вы получаете помимо аттестата полный комплект документов, сформированный под требования каждого учебного заведения (вуз / колледж)."
  },
  {
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Доступ из любой точки мира",
    content: "Все обучение, за исключением финальных ЕГЭ, происходит в полностью дистанционном режиме. Можете проходить освоение школьной программы где угодно и когда угодно."
  }
];

export const Advantages = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="advantages" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 px-2"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Наши преимущества
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Мы каждый день усердно работаем, чтобы сделать жизнь наших учеников лучше и счастливее
          </p>
        </motion.div>

        {/* Карточки преимуществ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 sm:px-0">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div 
                className="p-4 md:p-6 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 md:p-4 rounded-full mb-3 md:mb-4 ${
                    index % 6 === 0 ? "bg-blue-50 text-blue-600" :
                    index % 6 === 1 ? "bg-purple-50 text-purple-600" :
                    index % 6 === 2 ? "bg-green-50 text-green-600" :
                    index % 6 === 3 ? "bg-yellow-50 text-yellow-600" :
                    index % 6 === 4 ? "bg-red-50 text-red-600" :
                    "bg-indigo-50 text-indigo-600"
                  }`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
                    {advantage.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 md:pt-4 text-gray-600 text-sm md:text-base">
                        {advantage.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-center mt-3 md:mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-sm md:text-base font-medium flex items-center ${
                      index % 6 === 0 ? "text-blue-500" :
                      index % 6 === 1 ? "text-purple-500" :
                      index % 6 === 2 ? "text-green-500" :
                      index % 6 === 3 ? "text-yellow-500" :
                      index % 6 === 4 ? "text-red-500" :
                      "text-indigo-500"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(expandedIndex === index ? null : index);
                    }}
                  >
                    {expandedIndex === index ? "Свернуть" : "Подробнее"}
                    <motion.span
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      className="ml-1"
                    >
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};