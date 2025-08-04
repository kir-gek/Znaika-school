export const Statistics = () => {
  const stats = [
    {
      number: "16478",
      description: "Выпущено всех учеников (вместе с детьми)",
    },
    { number: "2400", description: "Получили красный аттестат" },
    { number: "1800", description: "Закончили школу с золотой" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around">
          {stats.map((stat, index) => (
            <div key={index} className="w-full md:w-1/3 p-4 text-center">
              <div className="bg-green-500 text-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {stat.number}
              </div>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
