import { motion } from "framer-motion";
import aboutImg from "../../assets/aboutUs.jpg";
import { Award, Users, Clock, BookOpen } from "react-feather";

const stats = [
  { value: "30+", label: "Лет опыта", icon: <Clock className="w-8 h-8" /> },
  { value: "2785", label: "Выпускников (вместе с детьми)", icon: <Users className="w-8 h-8" /> },
  { value: "628", label: "Медалистов", icon: <Award className="w-8 h-8" /> },
  { value: "24/7", label: "Поддержка", icon: <BookOpen className="w-8 h-8" /> }
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16"
        >
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <img 
                src={aboutImg} 
                alt="О нашей школе" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-2xl shadow-lg hidden lg:block">
                <Award className="w-12 h-12" />
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400"
            >
              О нашей школе
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 mb-6"
            >
              Основанная в 1993 году, наша школа помогла сотням учеников получить качественное образование и воплотить свои мечты в реальность. Мы гордимся каждым успехом наших выпускников.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8"
            >
              Наша миссия - сделать образование доступным и эффективным для каждого, кто стремится к знаниям и профессиональному росту.
            </motion.p>

           
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all"
            >
              <div className="flex justify-center text-blue-500 mb-3">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};