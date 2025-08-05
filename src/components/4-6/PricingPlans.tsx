
export const PricingPlans = () => {
  const plans = [
    {
      title: "Стандарт",
      price: "₽120000",
      features: ["Онлайн-обучение", "Домашние задания"],
    },
    {
      title: "Премиум",
      price: "₽140000",
      features: ["Онлайн-обучение", "Домашние задания", "Консультирование и помощь"],
    },
    {
      title: "VIP",
      price: "₽170000",
      features: ["Онлайн-обучение", "Домашние задания", "Помощь с поступлением"],
    },
  ];

  return (
    <section className="py-12 bg-gray-100" id="prices">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Наши тарифные планы</h2>
        <p className="text-center mb-12">
          Выберите тарифный план, который наилучшим образом соответствует вашим потребностям и бюджету
        </p>
        <div className="flex flex-col md:flex-row justify-around">
          {plans.map((plan, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Связаться с нами
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

