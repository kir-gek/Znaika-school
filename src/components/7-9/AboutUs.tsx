
export const AboutUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Информация о нас</h2>
            <p className="mb-4">
              Школа работает с 1993 года, за это время мы помогли получить аттестат вновь и воплотить свои мечты сотням людей.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/400"
              alt="About Us"
              className="w-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};