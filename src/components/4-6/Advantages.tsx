import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Award,
  BookOpen,
  Clock,
  Globe,
  Briefcase
} from "react-feather";

const advantages = [
  {
    icon: <Award size={48} className="text-blue-500" />,
    title: "Аттестат государственного образца",
    content: "В РФ можно учиться совершенно бесплатно только первый раз. Среднее образование — точно такое же образование, как и высшее, и среднее специальное. Поэтому получить его можно неограниченное количество раз на совершенно законных основаниях. При завершении обучения вы получаете такой же аттестат государственного образца, как и дети, которые учатся впервые."
  },
  {
    icon: <FileText size={48} className="text-purple-500" />,
    title: "Заключение официального договора",
    content: "При поступлении в школу заключается договор, в котором четко прописаны обязанности каждой стороны. Школа заинтересована довести каждого ученика до заветной цели."
  },
  {
    icon: <BookOpen size={48} className="text-green-500" />,
    title: "Зачет оценок из старого аттестата",
    content: "Вам не обязательно пересдавать все школьные предметы. Если оценки по предметам из старого аттестата вас устраивают, их можно перезачесть автоматически. К примеру по физике и химии у вас было 5, а по английскому 4. Значит физики и химии в вашей программе не будет, только английский."
  },
  {
    icon: <Clock size={48} className="text-yellow-500" />,
    title: "Гибкий график обучения",
    content: "Люди идущие за повторным аттестатом уже не дети и не готовы сидеть на уроках с 9 до 15. Вы можете учиться в удобное для вас время. Наша платформа доступна 24/7. На платформе вы усваиваете материал, проходите тестирования и контрольные и получаете за них оценки."
  },
  {
    icon: <Briefcase size={48} className="text-red-500" />,
    title: "Предоставление полного пакета документов",
    content: "При завершении обучения вы получаете помимо аттестата полный комплект документов, сформированный под требования каждого учебного заведения (вуз / колледж)."
  },
  {
    icon: <Globe size={48} className="text-indigo-500" />,
    title: "Доступ из любой точки мира",
    content: "Все обучение, за исключением финальных ЕГЭ, происходит в полностью дистанционном режиме. Можете проходить освоение школьной программы где угодно и когда угодно."
  }
];

export const Advantages = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы каждый день усердно работаем, чтобы сделать жизнь наших учеников лучше и счастливее
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full bg-white shadow-md mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
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
                      <div className="pt-4 text-gray-600">
                        {advantage.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-center mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-500 font-medium flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(expandedIndex === index ? null : index);
                    }}
                  >
                    {expandedIndex === index ? "Свернуть" : "Подробнее"}
                    <svg 
                      className={`ml-2 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`} 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
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