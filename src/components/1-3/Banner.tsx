import attestats from "../../assets/атик.jpg";

export const Banner = () => {
  return (
    <div className="relative">
      <img src={attestats} alt="Banner" className="w-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">
            Заполните форму, чтобы получить консультацию
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Имя
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Имя"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Телефон
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Телефон"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Записаться на консультацию
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
