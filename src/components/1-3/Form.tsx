import { Phone, User } from "react-feather";
import { motion } from "framer-motion";
import { useState } from "react";
import { createZapis } from "../../api";
import { IMaskInput } from "react-imask";

export const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSucces, setisSucces] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (phoneNumber: string) => {
    // Проверяем, заполнены ли все цифровые позиции в маске
    return !phoneNumber.includes("_");
  };

  const handleClick = async () => {
    //сбросим ошибки
    setPhoneError("");

    //валидация телефона
    if (!validatePhone(phone)) {
      setPhoneError("введите корректный телефон");
      return;
    }

    setisSucces(false);
    setIsLoading(true);
    await createZapis(name, "", phone, "");
    setIsLoading(false);
    setisSucces(true);
  };

  return (
    <>
      {/* Форма */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-xl p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
            Получите бесплатную консультацию
          </h2>
          <p className="text-gray-600 mb-6">
            Наш специалист поможет подобрать оптимальное решение для вашей
            ситуации
          </p>

          <form className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Phone className="w-5 h-5" />
              </div>
              <IMaskInput
                mask="+7 (999) 999-99-99"
                placeholder="+7 (999) 123-45-67"
                value={phone}
                onAccept={(value) => setPhone(value)}
                definitions={{
                  "9": /[0-9]/,
                }}
                overwrite
                unmask={false}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>
            {!isLoading && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleClick}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Записаться на консультацию
              </motion.button>
            )}

            {isLoading && <p>Данные отправляются...</p>}
            {isSucces && (
              <p className="text-green-600 mt-2">
                Спасибо, наш специалист скоро с вами свяжется
              </p>
            )}
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </motion.div>
    </>
  );
};
