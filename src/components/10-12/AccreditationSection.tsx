import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Modal } from "../Modal/Modal";
import acr1 from "../../assets/accrs/acr1.png";
import acr2 from "../../assets/accrs/acr2.jpg";
import acr3 from "../../assets/accrs/acr3.jpg";

export const AccreditationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const documents = [
    {
      image: acr1,
      title: "Свидетельство о государственной аккредитации",
      description: "Серия 77А01 №0003509",
    },
    {
      image: acr2,
      title: "Приложение к аккредитации",
      description: "Серия 77А01 №0002032",
    },
    {
      image: acr3,
      title: "Лицензия на осуществление образовательной деятельности",
      description: "Серия 77Л01 №0006831",
    },
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="accreditation" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Наши аккредитации
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Официальные документы, подтверждающие качество образования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors duration-300"
            >
              <div
                className="h-48 bg-gray-100 cursor-pointer relative overflow-hidden"
                onClick={() => openModal(doc.image)}
              >
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/80 text-blue-600 p-2 rounded-full">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {doc.title}
                </h3>
                <p className="text-gray-600">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://znaikaschool.mskobr.ru/info_edu/all_docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Все документы школы
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <div className="relative p-4">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                <img
                  src={selectedImage}
                  alt="Документ"
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
