import abroad from "../../assets/Зв рцубежом.jpg";
import college from "../../assets/КООЛЕДЖ ФИН.png";
import letka from "../../assets/ЛЕТКА ФИН.jpg"
export const ForWhom = () => {
  return (
    <section id="for-whom" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Зачем вам наша школа?
        </h2>




        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">
              Желаете поступить в учебное заведение за рубежом
            </h3>
            <ul className="list-disc pl-5">
              <li>
                Мы поможем вам повысить успеваемость, чтобы соответствовать
                требованиям иностранных ВУЗов;
              </li>
              <li>Вы сможете закончить 10-11 класс за один год;</li>
              <li>Предлагаем вам обучение онлайн из любой точки мира.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img src={abroad} alt="Students" className="w-full rounded" />
          </div>
        </div>



        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <img src={college} alt="Students" className="w-full rounded" />
          </div>

          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">
              Недостаточно среднего балла для поступления в ВУЗ или колледж РФ
            </h3>
            <ul className="list-disc pl-5">
              <li>
                Вместе с нами вы сможете подтянуть оценки и поступить в желаемый
                колледж в России;
              </li>
              <li>
                если у вас нет возможности посещать учебное заведение - наша
                школа для вас
              </li>
            </ul>
          </div>
        </div>




        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">
              Хотите поступить в летное училище
            </h3>
            <ul className="list-disc pl-5">
              <li>
                Поможем повысить успеваемость в аттестате, чтобы соответствовать требованиям летных училищ;
              </li>
              <li>с нами вы сможете получить аттестат с отличием и золотую медаль;</li>
              <li>мечтаете управлять Boeing или Airbus - наша школа для вас!</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img src={letka} alt="Students" className="w-full rounded" />
          </div>
        </div>








      </div>
    </section>
  );
};
