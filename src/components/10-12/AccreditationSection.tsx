import { useState } from "react";
import { Modal } from "../Modal/Modal";
import acr1 from "../../assets/accrs/acr1.png";
import acr2 from "../../assets/accrs/acr2.jpg";
import acr3 from "../../assets/accrs/acr3.jpg";

export const AccreditationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = [acr1, acr2, acr3];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Наша школа аккредитована и соответствует всем требованиям Министерства
          образования РФ
        </h2>
        <div className="flex justify-around mb-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Accreditation ${index + 1}`}
              className="w-1/4 cursor-pointer"
              onClick={() => openModal(image)}
            />
          ))}
        </div>
        <a
          href="https://znaikaschool.mskobr.ru/info_edu/all_docs/"
          className="inline-block px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          Все документы школы здесь
        </a>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img src={selectedImage} alt="Full size" className="w-full" />
      </Modal>
    </section>
  );
};
