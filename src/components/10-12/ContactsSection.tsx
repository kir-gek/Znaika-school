export const ContactSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Как с нами связаться
        </h2>
        <p className="text-center mb-8">
          Не стесняйтесь обращаться к нашему приемному совету, используя
          контакты для связи ниже. Мы предоставим вам всю необходимую информацию
          о процессе приема и поможем с заполнением заявления.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Приемный совет</h3>
            <p>8 (499) 154-43-91</p>
            <p>info@znaika-school.ru</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-bold mb-2">
              Руководитель отдела приема
            </h3>
            <p>+7 (905) 149 99 03</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Наш адрес</h3>
            <p>Москва, проезд Черепановых, 40</p>
          </div>
        </div>
        <div className="mb-6">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2dc8fad300d7d62c0cec1022c73e23ee27783c02e5fb1ae50a4411851d88242a&amp;source=constructor"
            width="1111"
            height="474"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
