import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Valeriy from "../../assets/successStories/Валерий.png";
import Oxana from "../../assets/successStories/Оксана.jpg";
import Kristina from "../../assets/successStories/Кристина.jpg";
import Damir from "../../assets/successStories/Дамир.jpg";
import Evgenia from "../../assets/successStories/Евгения.jpg";

const stories = [
  {
    id: 1,
    name: "Пилот Валерий",
    role: "Выпускник Сасовского летного училища",
    description:
      "Благодаря школе ZNAIKA я смог улучшить свои оценки и поступить в Сасовское летное училище. Сейчас работаю вторым пилотом в крупной авиакомпании. Спасибо, Школа ZNAIKA!",
    image: Valeriy,
  },
  {
    id: 2,
    name: "Оксана Смирнова",
    role: "Студентка Оксфордского университета",
    description:
      "Благодаря Школе ZNAIKA я смогла подтянуть оценки и поступить в Оксфорд. Качественная подготовка и индивидуальный подход помогли мне достичь этой цели!",
    image: Oxana,
  },
  {
    id: 3,
    name: "Кристина Иванова",
    role: "Студентка из Дубая",
    description:
      "Благодаря Школе ZNAIKA я смогла исправить свои оценки и поступить в университет своей мечты в Дубае. Я так счастлива, что нашла Школу ZNAIKA!",
    image: Kristina,
  },
  {
    id: 4,
    name: "Дамир",
    role: "Строит самолеты в Китае",
    description:
      "Благодаря Школе ZNAIKA я смог поступить в китайский авиационный ВУЗ!",
    image: Damir,
  },
  {
    id: 5,
    name: "Евгения",
    role: "Учится в Бугуруслане",
    description:
      "В школе я училась на одни тройки, не придавала значения учебе. Выросла и поняла, как важен аттестат для поступления. Znaika помогла мне сделать новый аттестат с отличием, и теперь я учусб в БЛУГА!",
    image: Evgenia,
  },
];

export const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: string) => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -1000 : 1000,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id="success-stories"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
            Истории успеха
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наши ученики достигают невероятных высот. Вот некоторые из их
            историй
          </p>
        </motion.div>

        <div className="relative h-[500px] overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12 px-8"
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src={stories[currentIndex].image}
                    alt={stories[currentIndex].name}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                    {stories[currentIndex].id}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
                  {stories[currentIndex].name}
                </h3>
                <p className="text-lg text-yellow-600 mb-4">
                  {stories[currentIndex].role}
                </p>
                <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto md:mx-0">
                  {stories[currentIndex].description}
                </p>

                <div className="flex justify-center md:justify-start space-x-4">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gray-100"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                  </button>

                  <div className="flex items-center space-x-2">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? "right" : "left");
                          setCurrentIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentIndex === index
                            ? "bg-yellow-500 w-6"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gray-100"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
