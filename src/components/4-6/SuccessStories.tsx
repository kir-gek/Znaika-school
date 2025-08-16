import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Valeriy from "../../assets/successStories/Валерий.png";
import Oxana from "../../assets/successStories/Оксана.jpg";
import Kristina from "../../assets/successStories/Кристина.jpg";
import Damir from "../../assets/successStories/Дамир.jpg";
import Evgenia from "../../assets/successStories/Евгения.jpg";
import { ChevronLeft, ChevronRight } from "react-feather";

const stories = [
  {
    id: 1,
    name: "Пилот Валерий",
    role: "Выпускник Сасовского летного училища",
    description:
      "Благодаря школе ZNAIKA я смог улучшить свои оценки и поступить в Сасовское летное училища. Сейчас работаю вторым пилотом в крупной авиакомпании. Спасибо, Школа ZNAIKA!",
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
      "В школе я училась на одни тройки, не придавала значения учебе. Выросла и поняла, как важен аттестат для поступления. Znaika помогла мне сделать новый аттестат с отличием, и теперь я учусь в БЛУГА!",
    image: Evgenia,
  },
];

export const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: string) => ({
      x: isMobile ? 0 : (direction === "right" ? 1000 : -1000),
      y: isMobile ? (direction === "right" ? 100 : -100) : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: string) => ({
      x: isMobile ? 0 : (direction === "right" ? -1000 : 1000),
      y: isMobile ? (direction === "right" ? -100 : 100) : 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="success-stories" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 px-2"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Истории успеха
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Наши ученики достигают невероятных высот. Вот некоторые из их историй
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 md:px-8"
            >
              <div className="w-full md:w-1/3 flex justify-center order-2 md:order-1 mt-6 md:mt-0">
                <div className="relative">
                  <img
                    src={stories[currentIndex].image}
                    alt={stories[currentIndex].name}
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-yellow-500 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded-full shadow-lg text-sm md:text-base">
                    {stories[currentIndex].id}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left order-1 md:order-2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-gray-800">
                  {stories[currentIndex].name}
                </h3>
                <p className="text-md md:text-lg text-yellow-600 mb-3 md:mb-4">
                  {stories[currentIndex].role}
                </p>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-2xl mx-auto md:mx-0">
                  {stories[currentIndex].description}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex space-x-2">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                          currentIndex === index
                            ? "bg-yellow-500 w-4 md:w-6"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handlePrev}
                      className="p-2 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gray-100"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gray-100"
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};