
export const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: 'Пилот Валерий',
      description: 'Благодаря школе ZNAIKA я смог улучшить свои оценки и поступить в Бугурусланское летное училище. Спасибо, Школа ZNAIKA!',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Оксана из Оксфорда',
      description: 'Благодаря Школе ZNAIKA я смог учиться за границей. Я очень признателен им за помощь!',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section id="success-stories" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Истории успеха</h2>
        <div className="flex overflow-x-auto space-x-4 p-4">
          {stories.map((story) => (
            <div key={story.id} className="flex-shrink-0 w-80 bg-gray-200 rounded-lg p-4 text-center">
              <img src={story.image} alt={story.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{story.name}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

