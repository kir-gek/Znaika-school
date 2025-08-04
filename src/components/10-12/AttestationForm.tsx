export const AttestationForm = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Получить аттестат</h2>
            <p className="mb-4">
              Заполните форму заявки и сделайте первый шаг к новому аттестату
            </p>
            <form>
              <input
                type="text"
                placeholder="Имя"
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full p-2 mb-4 border rounded"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Отправить
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Нажимая на кнопку, вы соглашаетесь с нашей политикой
              конфиденциальности
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/400"
              alt="Attestation"
              className="w-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
