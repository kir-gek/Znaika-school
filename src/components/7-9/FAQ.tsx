import { useState } from "react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Могу ли я оплатить обучение в рассрочку?",
      answer: "Да, вы можете оплатить обучение в рассрочку."
    },
    {
      question: "У меня нет гражданства РФ, могу ли я получить аттестат гос. образца в вашей школе?",
      answer: "Да, вы можете получить аттестат государственного образца в нашей школе."
    },
    {
      question: "В аттестате будет говориться, что он повторный?",
      answer: "Нет. При успешном прохождении переаттестации в нашей школе выдается аттестат государственного образца без каких-либо дополнительных пометок."
    },
    {
      question: "Будет ли мой аттестат внесен в гос. реестр?",
      answer: "Да, ваш аттестат будет внесен в государственный реестр."
    },
    {
      question: "Я работаю, времени посещать занятия нет. Смогу ли я учиться в вашей школе?",
      answer: "Да, вы сможете учиться в нашей школе, даже если у вас нет времени на посещение занятий."
    },
    {
      question: "Я не могу никуда приезжать, можно ли получить аттестат удаленно?",
      answer: "Да, вы можете получить аттестат удаленно."
    },
    {
      question: "Влияет ли бал ЕГЭ на получение аттестата с отличием и/или золотой медали?",
      answer: "Нет, балл ЕГЭ не влияет на получение аттестата с отличием и/или золотой медали."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className={`transform ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === index && <p className="mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

