
export const Advantages = () => {
  return (
    <section id="advantages" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Наши преимущества</h2>
        <p className="text-center mb-12">
          Мы каждый день усердно работаем, чтобы сделать жизнь наших учеников лучше и счастливее
        </p>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="w-full md:w-1/3 p-4 text-center">
            <div className="bg-red-500 text-white p-4 rounded-full w-20 h-20 mx-auto mb-4">
              <i className="fas fa-book"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Аттестат государственного образца</h3>
            <p>
              В РФ можно учиться совершенно бесплатно только первый раз. Среднее образование —
              точно такое же образование, как и высшее, и среднее специальное. Поэтому получить его
              можно неограниченное количество раз на совершенно законных основаниях. При
              завершении обучения вы получаете такой же аттестат государственного образца, как и дети,
              которые учатся впервые.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <div className="bg-purple-500 text-white p-4 rounded-full w-20 h-20 mx-auto mb-4">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Заключение официального договора на обучение</h3>
            <p>
              При поступлении в школу заключается договор, в котором четко прописаны обязанности
              каждой стороны. Школа заинтересована довести каждого ученика до заветной цели.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-20 h-20 mx-auto mb-4">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Зачет оценок из старого аттестата</h3>
            <p>
              Вам не обязательно пересдавать все школьные предметы. Если оценки по предметам из
              старого аттестата вас устраивают, их можно перезачесть автоматически. К примеру по
              физике и химии у вас было 5, а по английскому 4. Значит физику и химию в вашей программе
              не будет, только английский.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

